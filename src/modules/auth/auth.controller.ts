// src/modules/auth/auth.controller.ts

import httpStatus from 'http-status';
import type { CookieOptions } from 'express';
import { OAuth2Client, type TokenPayload } from 'google-auth-library';

import { env } from '../../configs/env.js';
import AppError from '../../shared/utils/app-error.js';
import catchAsync from '../../shared/utils/catch-async.js';
import sendResponse from '../../shared/utils/send-response.js';

import { AUTH_COOKIE, AUTH_MESSAGE } from './auth.constant.js';
import { AuthService } from './auth.service.js';
import type { IGooglePayload } from './auth.types.js';
import type { TChangePasswordInput, TGoogleLoginInput, TLoginInput } from './auth.validation.js';

const googleClient = new OAuth2Client(env.GOOGLE_CLIENT_ID);

const cookieOptions: CookieOptions = {
  httpOnly: true,

  secure: env.NODE_ENV === 'production',

  sameSite: AUTH_COOKIE.SAME_SITE,

  path: AUTH_COOKIE.PATH,

  maxAge: AUTH_COOKIE.MAX_AGE,

  priority: AUTH_COOKIE.PRIORITY,
};

const login = catchAsync(async (req, res) => {
  const payload = req.body as TLoginInput;

  const result = await AuthService.login(payload);

  res.cookie(AUTH_COOKIE.REFRESH_TOKEN, result.refreshToken, cookieOptions);

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
  const { token } = req.body as TGoogleLoginInput;

  if (!token) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.INVALID_GOOGLE_TOKEN);
  }

  let payload: TokenPayload | undefined;

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: env.GOOGLE_CLIENT_ID,
    });

    payload = ticket.getPayload();
  } catch {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.INVALID_GOOGLE_TOKEN);
  }

  if (!payload?.email) {
    throw new AppError(httpStatus.BAD_REQUEST, AUTH_MESSAGE.GOOGLE_AUTH_FAILED);
  }

  if (!payload.email_verified) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.EMAIL_NOT_VERIFIED);
  }

  const googlePayload: IGooglePayload = {
    sub: payload.sub,
    email: payload.email,
    email_verified: payload.email_verified,

    ...(payload.name && {
      name: payload.name,
    }),

    ...(payload.given_name && {
      given_name: payload.given_name,
    }),

    ...(payload.family_name && {
      family_name: payload.family_name,
    }),

    ...(payload.picture && {
      picture: payload.picture,
    }),

    ...(payload.locale && {
      locale: payload.locale,
    }),

    ...(payload.hd && {
      hd: payload.hd,
    }),
  };

  const result = await AuthService.googleLogin(googlePayload);

  res.cookie(AUTH_COOKIE.REFRESH_TOKEN, result.refreshToken, cookieOptions);

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
  const token = req.cookies?.[AUTH_COOKIE.REFRESH_TOKEN];

  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, AUTH_MESSAGE.REFRESH_TOKEN_REQUIRED);
  }
  const result = await AuthService.refreshToken(token);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.TOKEN_REFRESHED,
    data: result,
  });
});

const getProfile = catchAsync(async (req, res) => {
  const result = await AuthService.getProfile(req.user.userId.toString());

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.PROFILE_RETRIEVED,
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const payload = req.body as TChangePasswordInput;

  await AuthService.changePassword(req.user.userId.toString(), payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: AUTH_MESSAGE.PASSWORD_CHANGED,
    data: null,
  });
});

const logout = catchAsync(async (_req, res) => {
  res.clearCookie(AUTH_COOKIE.REFRESH_TOKEN, cookieOptions);

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
