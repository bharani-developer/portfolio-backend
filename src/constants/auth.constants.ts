/**
 * =============================================================================
 * File: auth.constants.ts
 * Description: Authentication and Authorization constants.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*                               Authentication                               */
/* -------------------------------------------------------------------------- */

export const AUTH = Object.freeze({
  /**
   * Authentication Schemes
   */
  SCHEME: Object.freeze({
    BEARER: 'Bearer',
    BASIC: 'Basic',
  }),

  /**
   * Authorization Header
   */
  HEADER: 'Authorization',

  /**
   * Bearer Prefix
   */
  BEARER_PREFIX: 'Bearer ',

  /**
   * Password
   */
  PASSWORD: Object.freeze({
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,

    BCRYPT_SALT_ROUNDS: 12,
  }),

  /**
   * JWT
   */
  JWT: Object.freeze({
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
  }),

  /**
   * Cookie Names
   */
  COOKIE: Object.freeze({
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
  }),

  /**
   * OAuth Providers
   */
  PROVIDERS: Object.freeze({
    GOOGLE: 'google',
    GITHUB: 'github',
  }),

  /**
   * Token Types
   */
  TOKEN_TYPES: Object.freeze({
    ACCESS: 'ACCESS',
    REFRESH: 'REFRESH',
    RESET_PASSWORD: 'RESET_PASSWORD',
    VERIFY_EMAIL: 'VERIFY_EMAIL',
  }),

  /**
   * Authentication Strategies
   */
  STRATEGIES: Object.freeze({
    JWT: 'jwt',
    GOOGLE: 'google',
    LOCAL: 'local',
  }),

  /**
   * Request User
   */
  REQUEST_USER_KEY: 'user',

  /**
   * Account Status
   */
  ACCOUNT_STATUS: Object.freeze({
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    BLOCKED: 'blocked',
    PENDING: 'pending',
  }),

  /**
   * Login Provider
   */
  LOGIN_PROVIDER: Object.freeze({
    LOCAL: 'local',
    GOOGLE: 'google',
  }),

  /**
   * Permissions
   */
  PERMISSIONS: Object.freeze({
    READ: 'read',
    CREATE: 'create',
    UPDATE: 'update',
    DELETE: 'delete',
    MANAGE: 'manage',
  }),

  /**
   * Authentication Events
   */
  EVENTS: Object.freeze({
    LOGIN: 'login',
    LOGOUT: 'logout',
    REGISTER: 'register',
    PASSWORD_CHANGED: 'password_changed',
    PASSWORD_RESET: 'password_reset',
    EMAIL_VERIFIED: 'email_verified',
    TOKEN_REFRESHED: 'token_refreshed',
  }),
} as const);

/* -------------------------------------------------------------------------- */
/*                             Authentication Header                          */
/* -------------------------------------------------------------------------- */

export const AUTH_HEADER = AUTH.HEADER;

export const AUTH_SCHEME = AUTH.SCHEME;

export const BEARER_PREFIX = AUTH.BEARER_PREFIX;

/* -------------------------------------------------------------------------- */
/*                                  Password                                  */
/* -------------------------------------------------------------------------- */

export const PASSWORD = AUTH.PASSWORD;

export const PASSWORD_MIN_LENGTH = PASSWORD.MIN_LENGTH;

export const PASSWORD_MAX_LENGTH = PASSWORD.MAX_LENGTH;

export const BCRYPT_SALT_ROUNDS = PASSWORD.BCRYPT_SALT_ROUNDS;

/* -------------------------------------------------------------------------- */
/*                                    JWT                                     */
/* -------------------------------------------------------------------------- */

export const JWT = AUTH.JWT;

export const ACCESS_TOKEN = JWT.ACCESS_TOKEN;

export const REFRESH_TOKEN = JWT.REFRESH_TOKEN;

/* -------------------------------------------------------------------------- */
/*                                   Cookies                                  */
/* -------------------------------------------------------------------------- */

export const AUTH_COOKIES = AUTH.COOKIE;

export const ACCESS_TOKEN_COOKIE = AUTH_COOKIES.ACCESS_TOKEN;

export const REFRESH_TOKEN_COOKIE = AUTH_COOKIES.REFRESH_TOKEN;

/* -------------------------------------------------------------------------- */
/*                               OAuth Providers                              */
/* -------------------------------------------------------------------------- */

export const AUTH_PROVIDERS = AUTH.PROVIDERS;

/* -------------------------------------------------------------------------- */
/*                                Token Types                                 */
/* -------------------------------------------------------------------------- */

export const TOKEN_TYPES = AUTH.TOKEN_TYPES;

/* -------------------------------------------------------------------------- */
/*                               Auth Strategies                              */
/* -------------------------------------------------------------------------- */

export const AUTH_STRATEGIES = AUTH.STRATEGIES;

/* -------------------------------------------------------------------------- */
/*                                 Request Key                                */
/* -------------------------------------------------------------------------- */

export const REQUEST_USER_KEY = AUTH.REQUEST_USER_KEY;

/* -------------------------------------------------------------------------- */
/*                               Account Status                               */
/* -------------------------------------------------------------------------- */

export const ACCOUNT_STATUS = AUTH.ACCOUNT_STATUS;

/* -------------------------------------------------------------------------- */
/*                               Login Provider                               */
/* -------------------------------------------------------------------------- */

export const LOGIN_PROVIDER = AUTH.LOGIN_PROVIDER;

/* -------------------------------------------------------------------------- */
/*                                 Permissions                                */
/* -------------------------------------------------------------------------- */

export const PERMISSIONS = AUTH.PERMISSIONS;

/* -------------------------------------------------------------------------- */
/*                                   Events                                   */
/* -------------------------------------------------------------------------- */

export const AUTH_EVENTS = AUTH.EVENTS;
