// src/modules/auth/auth.constant.ts

/**
 * Authentication module constants.
 *
 * Structure:
 * 1. Messages
 * 2. Cookies
 * 3. Authentication Providers
 * 4. Token Configuration
 * 5. Validation Rules
 */

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */

export const AUTH_MESSAGE = {
  /* ---------------- Authentication Success ---------------- */

  LOGIN_SUCCESS: 'Login successful',

  GOOGLE_LOGIN_SUCCESS: 'Google login successful',

  LOGOUT_SUCCESS: 'Logout successful',

  TOKEN_REFRESHED: 'Access token refreshed successfully',

  PROFILE_RETRIEVED: 'Profile retrieved successfully',

  PASSWORD_CHANGED: 'Password changed successfully',

  PASSWORD_RESET_SUCCESS: 'Password reset successfully',

  /* ---------------- Authentication Errors ---------------- */

  INVALID_CREDENTIALS: 'Invalid email or password',

  INVALID_GOOGLE_TOKEN: 'Invalid Google token',

  GOOGLE_AUTH_FAILED: 'Google authentication failed',

  INVALID_TOKEN: 'Invalid token',

  INVALID_REFRESH_TOKEN: 'Invalid refresh token',

  TOKEN_EXPIRED: 'Token has expired',

  ACCESS_TOKEN_REQUIRED: 'Access token is required',

  REFRESH_TOKEN_REQUIRED: 'Refresh token is required',

  /* ---------------- Authorization ---------------- */

  UNAUTHORIZED: 'Unauthorized access',

  FORBIDDEN: 'Forbidden access',

  ACCESS_DENIED: 'Access denied',

  /* ---------------- Account Provider ---------------- */

  GOOGLE_ACCOUNT_REQUIRED: 'Please continue with Google Sign-In',

  LOCAL_ACCOUNT_REQUIRED: 'Please sign in using email and password',

  /* ---------------- Password ---------------- */

  INCORRECT_OLD_PASSWORD: 'Current password is incorrect',

  /* ---------------- Account ---------------- */

  ACCOUNT_INACTIVE: 'User account is inactive',

  ACCOUNT_DELETED: 'User account has been deleted',

  ACCOUNT_NOT_FOUND: 'Account not found',

  EMAIL_NOT_VERIFIED: 'Google account email is not verified',

  EMAIL_ALREADY_EXISTS: 'Email already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Cookies                                  */
/* -------------------------------------------------------------------------- */

/**
 * Authentication cookie configuration.
 *
 * These values are shared across the authentication module and should be
 * referenced from controllers instead of hardcoding cookie options.
 */
export const AUTH_COOKIE = {
  /**
   * Refresh token cookie name.
   */
  REFRESH_TOKEN: 'refreshToken',

  /**
   * Cookie path.
   */
  PATH: '/',

  /**
   * Cookie lifetime.
   *
   * 30 days.
   */
  MAX_AGE: 30 * 24 * 60 * 60 * 1000,

  /**
   * SameSite policy.
   *
   * Use "strict" unless your frontend is hosted on another domain.
   */
  SAME_SITE: 'strict',

  /**
   * Cookie priority.
   *
   * Supported by Chromium browsers.
   */
  PRIORITY: 'high',
} as const;

/* -------------------------------------------------------------------------- */
/*                           Authentication Provider                          */
/* -------------------------------------------------------------------------- */

export const AUTH_PROVIDER = {
  LOCAL: 'LOCAL',

  GOOGLE: 'GOOGLE',
} as const;

export const AUTH_PROVIDERS = Object.freeze(Object.values(AUTH_PROVIDER));

export type TAuthProvider = (typeof AUTH_PROVIDER)[keyof typeof AUTH_PROVIDER];

/* -------------------------------------------------------------------------- */
/*                             Token Configuration                            */
/* -------------------------------------------------------------------------- */

export const AUTH_TOKEN = {
  /**
   * HTTP Authorization header prefix.
   */
  BEARER_PREFIX: 'Bearer',
} as const;

/* -------------------------------------------------------------------------- */
/*                             Validation Rules                               */
/* -------------------------------------------------------------------------- */

export const AUTH_VALIDATION = {
  EMAIL: {
    MAX_LENGTH: 255,
  },

  PASSWORD: {
    MIN_LENGTH: 8,

    MAX_LENGTH: 100,
  },

  TOKEN: {
    MIN_LENGTH: 1,
  },
} as const;
