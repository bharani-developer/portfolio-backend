// src\modules\auth\auth.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { env } from '../../configs/env.js';

import { ROLE, type TRole } from '../../constants/role.constants.js';

import { User } from '../../modules/users/users.model.js';

import type { TCreateUserPayload, TUserDocument } from '../users/users.types.js';

import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from '../../shared/auth/index.js';

import { BaseCrudService } from '../../shared/base/index.js';

import { AppError } from '../../shared/utils/index.js';

import { AUTH_MESSAGE, AUTH_PROVIDER } from './auth.constant.js';

import type {
  IChangePassword,
  IGooglePayload,
  ILoginResponse,
  ILoginUser,
  IRefreshTokenResponse,
} from './auth.types.js';

import type { IJwtPayload } from '../../shared/types/jwt-payload.type.js';

/* -------------------------------------------------------------------------- */
/*                               Base Service                                 */
/* -------------------------------------------------------------------------- */

const authBaseService = new BaseCrudService(User);

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Generate access and refresh JWT tokens.
 */
const createTokens = (userId: string, email: string, role: TRole): ILoginResponse => {
  const payload: IJwtPayload = {
    userId,
    email,
    role,
  };

  return {
    accessToken: generateAccessToken(payload),

    refreshToken: generateRefreshToken(payload),
  };
};

/**
 * Create a Google account.
 */
const createGoogleUser = async (payload: IGooglePayload): Promise<TUserDocument> => {
  const createUserPayload: TCreateUserPayload = {
    name:
      payload.name?.trim() ||
      [payload.given_name, payload.family_name].filter(Boolean).join(' ').trim() ||
      payload.email,

    email: payload.email.trim().toLowerCase(),

    role: ROLE.VIEWER,

    authProvider: AUTH_PROVIDER.GOOGLE,

    googleId: payload.sub,

    emailVerified: payload.email_verified ?? true,

    isActive: true,

    isDeleted: false,

    lastLoginAt: new Date(),
  };

  if (payload.picture) {
    createUserPayload.avatar = {
      url: payload.picture,
      publicId: '',
    };
  }

  if (payload.given_name) {
    createUserPayload.givenName = payload.given_name.trim();
  }

  if (payload.family_name) {
    createUserPayload.familyName = payload.family_name.trim();
  }

  if (payload.locale) {
    createUserPayload.locale = payload.locale.trim();
  }

  if (payload.hd) {
    createUserPayload.hostedDomain = payload.hd.trim();
  }

  return authBaseService.create(createUserPayload);
};
/* -------------------------------------------------------------------------- */
/*                                    Login                                   */
/* -------------------------------------------------------------------------- */

/**
 * Authenticate a LOCAL user using email and password.
 */
const login = async (payload: ILoginUser): Promise<ILoginResponse> => {
  const email = payload.email.trim().toLowerCase();

  const user = await User.findOne({
    email,
  }).select('+password');

  if (!user || user.isDeleted) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.INVALID_CREDENTIALS);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.GOOGLE) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.GOOGLE_ACCOUNT_REQUIRED);
  }

  if (!user.password) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.INVALID_CREDENTIALS);
  }

  const isPasswordMatched = await comparePassword(payload.password, user.password);

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.INVALID_CREDENTIALS);
  }

  user.lastLoginAt = new Date();

  await user.save();

  return createTokens(user._id.toString(), user.email, user.role);
};
/* -------------------------------------------------------------------------- */
/*                               Google Login                                 */
/* -------------------------------------------------------------------------- */

/**
 * Authenticate or register a Google user.
 */
const googleLogin = async (payload: IGooglePayload): Promise<ILoginResponse> => {
  const email = payload.email.trim().toLowerCase();

  let user = await User.findOne({
    email,
  });

  /**
   * Create Google account on first login.
   */
  if (!user) {
    user = await createGoogleUser(payload);
  }

  /* ---------------------------------------------------------------------- */
  /*                           Account Validation                           */
  /* ---------------------------------------------------------------------- */

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_DELETED);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.LOCAL) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.LOCAL_ACCOUNT_REQUIRED);
  }

  /* ---------------------------------------------------------------------- */
  /*                     Synchronize Google Profile Data                     */
  /* ---------------------------------------------------------------------- */

  if (payload.name && payload.name.trim() !== user.name) {
    user.name = payload.name.trim();
  }

  if (payload.sub && payload.sub !== user.googleId) {
    user.googleId = payload.sub;
  }

  if (payload.email_verified !== undefined && payload.email_verified !== user.emailVerified) {
    user.emailVerified = payload.email_verified;
  }

  if (payload.picture && payload.picture !== user.avatar?.url) {
    user.avatar = {
      url: payload.picture,
      publicId: '',
    };
  }

  if (payload.given_name && payload.given_name.trim() !== user.givenName) {
    user.givenName = payload.given_name.trim();
  }

  if (payload.family_name && payload.family_name.trim() !== user.familyName) {
    user.familyName = payload.family_name.trim();
  }

  if (payload.locale && payload.locale.trim() !== user.locale) {
    user.locale = payload.locale.trim();
  }

  if (payload.hd && payload.hd.trim() !== user.hostedDomain) {
    user.hostedDomain = payload.hd.trim();
  }

  user.lastLoginAt = new Date();

  await user.save();

  return createTokens(user._id.toString(), user.email, user.role);
};
/* -------------------------------------------------------------------------- */
/*                               Refresh Token                                */
/* -------------------------------------------------------------------------- */

/**
 * Generate a new access token using a valid refresh token.
 */
const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  const decoded = verifyToken(token, env.JWT_REFRESH_SECRET) as IJwtPayload;

  const user = await authBaseService.getById(decoded.userId.toString());

  if (user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  return {
    accessToken: generateAccessToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    }),
  };
};

/* -------------------------------------------------------------------------- */
/*                                 Get Profile                                */
/* -------------------------------------------------------------------------- */

/**
 * Get the authenticated user's profile.
 */
const getProfile = async (userId: string): Promise<TUserDocument> => {
  const user = await authBaseService.getById(userId);

  if (user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  return user;
};

/* -------------------------------------------------------------------------- */
/*                              Change Password                               */
/* -------------------------------------------------------------------------- */

/**
 * Change the authenticated user's password.
 */
const changePassword = async (userId: string, payload: IChangePassword): Promise<void> => {
  const user = await User.findById(userId).select('+password');

  if (!user || user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, AUTH_MESSAGE.ACCOUNT_NOT_FOUND);
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, AUTH_MESSAGE.ACCOUNT_INACTIVE);
  }

  if (user.authProvider === AUTH_PROVIDER.GOOGLE) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.GOOGLE_ACCOUNT_REQUIRED);
  }

  if (!user.password) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.INVALID_CREDENTIALS);
  }

  const isPasswordMatched = await comparePassword(payload.oldPassword, user.password);

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.INCORRECT_OLD_PASSWORD);
  }

  user.password = payload.newPassword.trim();

  await user.save();
};

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AuthService = {
  /**
   * Authentication
   */
  login,

  googleLogin,

  refreshToken,

  /**
   * Profile
   */
  getProfile,

  /**
   * User Management
   */

  /**
   * Password
   */
  changePassword,
} as const;
