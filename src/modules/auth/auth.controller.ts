// src/modules/auth/auth.controller.ts

import httpStatus from "http-status";
import { OAuth2Client } from "google-auth-library";

import { env } from "../../config/env.js";

import AppError from "../../utils/AppError.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import {
  AUTH_COOKIE,
  AUTH_MESSAGE,
} from "./auth.constant.js";

import { AuthService } from "./auth.service.js";

import type { IGooglePayload } from "./auth.interface.js";

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 30 * 24 * 60 * 60 * 1000,
};

const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  res.cookie(
    AUTH_COOKIE.REFRESH_TOKEN,
    result.refreshToken,
    cookieOptions,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.LOGIN_SUCCESS,
    data: {
      accessToken: result.accessToken,
    },
  });
});

const googleLogin = catchAsync(async (req, res) => {
  const { token } = req.body as {
    token?: string;
  };

  if (!token) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.INVALID_GOOGLE_TOKEN,
    );
  }

  let payload;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: env.GOOGLE_CLIENT_ID,
    });

    payload = ticket.getPayload();
  } catch {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      AUTH_MESSAGE.INVALID_GOOGLE_TOKEN,
    );
  }

  if (!payload?.email) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      AUTH_MESSAGE.GOOGLE_AUTH_FAILED,
    );
  }

  if (!payload.email_verified) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      AUTH_MESSAGE.EMAIL_NOT_VERIFIED,
    );
  }

  const googlePayload: IGooglePayload = {
    sub: payload.sub,
    email: payload.email,
    email_verified: payload.email_verified,
    name: payload.name,
    given_name: payload.given_name,
    family_name: payload.family_name,
    picture: payload.picture,
    locale: payload.locale,
    hd: payload.hd,
  };

  const result = await AuthService.googleLogin(
    googlePayload,
  );

  res.cookie(
    AUTH_COOKIE.REFRESH_TOKEN,
    result.refreshToken,
    cookieOptions,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.GOOGLE_LOGIN_SUCCESS,
    data: {
      accessToken: result.accessToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const token =
    req.cookies?.[AUTH_COOKIE.REFRESH_TOKEN];

  const result =
    await AuthService.refreshToken(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.TOKEN_REFRESHED,
    data: result,
  });
});

const getProfile = catchAsync(async (req, res) => {
  const result =
    await AuthService.getProfile(
      req.user.userId.toString(),
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.PROFILE_RETRIEVED,
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  await AuthService.changePassword(
    req.user.userId.toString(),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.PASSWORD_CHANGED,
    data: null,
  });
});

const logout = catchAsync(async (_req, res) => {
  res.clearCookie(
    AUTH_COOKIE.REFRESH_TOKEN,
    cookieOptions,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.LOGOUT_SUCCESS,
    data: null,
  });
});

export const AuthController = {
  login,
  googleLogin,
  refreshToken,
  getProfile,
  changePassword,
  logout,
};