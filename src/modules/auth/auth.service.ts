// src/modules/auth/auth.service.ts

import httpStatus from "http-status";

import { env } from "../../config/env.js";
import { ROLE, type TRole } from "../../constants/role.constant.js";

import AppError from "../../utils/AppError.js";

import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../../helpers/index.js";

import { AUTH_MESSAGE, AUTH_PROVIDER } from "./auth.constant.js";

import { User } from "./auth.model.js";

import type {
  IChangePassword,
  IGooglePayload,
  IJwtPayload,
  ILoginResponse,
  ILoginUser,
  IRefreshTokenResponse,
  IUser,
} from "./auth.interface.js";

const createTokens = (
  userId: string,
  email: string,
  role: TRole,
): ILoginResponse => {
  const jwtPayload: IJwtPayload = {
    userId,
    email,
    role,
  };

  const accessToken = generateAccessToken(jwtPayload);

  const refreshToken = generateRefreshToken(jwtPayload);

  return {
    accessToken,
    refreshToken,
  };
};

const login = async (payload: ILoginUser): Promise<ILoginResponse> => {
  const user = await User.findOne({
    email: payload.email,
  }).select("+password");

  if (!user || user.isDeleted) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      AUTH_MESSAGE.INVALID_CREDENTIALS,
    );
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.GOOGLE) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.GOOGLE_ACCOUNT_REQUIRED,
    );
  }

  if (!user.password) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      AUTH_MESSAGE.INVALID_CREDENTIALS,
    );
  }

  const isPasswordMatched = await comparePassword(
    payload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      AUTH_MESSAGE.INVALID_CREDENTIALS,
    );
  }

  user.lastLoginAt = new Date();

  await user.save();

  return createTokens(user._id.toString(), user.email, user.role);
};

const googleLogin = async (
  payload: IGooglePayload,
): Promise<ILoginResponse> => {
  const email = payload.email.trim().toLowerCase();

  let user = await User.findOne({
    email,
  });

  if (!user) {
    const displayName =
      payload.name?.trim() ||
      [payload.given_name, payload.family_name]
        .filter(Boolean)
        .join(" ")
        .trim() ||
      email;

    const createUserPayload: Partial<IUser> = {
      name: displayName,

      email,

      role: ROLE.VIEWER,

      authProvider: AUTH_PROVIDER.GOOGLE,

      googleId: payload.sub,

      emailVerified: payload.email_verified ?? true,

      isActive: true,

      isDeleted: false,

      lastLoginAt: new Date(),
    };

    if (payload.given_name) {
      createUserPayload.givenName = payload.given_name;
    }

    if (payload.family_name) {
      createUserPayload.familyName = payload.family_name;
    }

    if (payload.locale) {
      createUserPayload.locale = payload.locale;
    }

    if (payload.hd) {
      createUserPayload.hostedDomain = payload.hd;
    }

    if (payload.picture) {
      createUserPayload.avatar = {
        url: payload.picture,
        publicId: "",
      };
    }

    user = await User.create(createUserPayload);
  }

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.LOCAL) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.LOCAL_ACCOUNT_REQUIRED,
    );
  }

  let hasChanges = false;

  if (payload.sub && user.googleId !== payload.sub) {
    user.googleId = payload.sub;

    hasChanges = true;
  }

  if (
    payload.email_verified !== undefined &&
    user.emailVerified !== payload.email_verified
  ) {
    user.emailVerified = payload.email_verified;

    hasChanges = true;
  }

  if (payload.picture && payload.picture !== user.avatar?.url) {
    user.avatar = {
      url: payload.picture,
      publicId: "",
    };

    hasChanges = true;
  }

  if (payload.given_name && payload.given_name !== user.givenName) {
    user.givenName = payload.given_name;

    hasChanges = true;
  }

  if (payload.family_name && payload.family_name !== user.familyName) {
    user.familyName = payload.family_name;

    hasChanges = true;
  }

  if (payload.locale && payload.locale !== user.locale) {
    user.locale = payload.locale;

    hasChanges = true;
  }

  if (payload.hd && payload.hd !== user.hostedDomain) {
    user.hostedDomain = payload.hd;

    hasChanges = true;
  }

  user.lastLoginAt = new Date();

  hasChanges = true;

  if (hasChanges) {
    await user.save();
  }

  return createTokens(user._id.toString(), user.email, user.role);
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  const decoded = verifyToken(token, env.JWT_REFRESH_SECRET) as IJwtPayload;

  const user = await User.findById(decoded.userId);

  if (!user || user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  const accessToken = generateAccessToken({
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return {
    accessToken,
  };
};

const getProfile = async (userId: string) => {
  const user = await User.findById(userId);

  if (!user || user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  return user;
};

const changePassword = async (
  userId: string,
  payload: IChangePassword,
): Promise<void> => {
  const user = await User.findById(userId).select("+password");

  if (!user || user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.GOOGLE) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.GOOGLE_ACCOUNT_REQUIRED,
    );
  }

  if (!user.password) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.INVALID_CREDENTIALS,
    );
  }

  const isPasswordMatched = await comparePassword(
    payload.oldPassword,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.INCORRECT_OLD_PASSWORD,
    );
  }

  user.password = payload.newPassword;

  await user.save();
};

export const AuthService = {
  login,
  googleLogin,
  refreshToken,
  getProfile,
  changePassword,
};
