// src/modules/auth/auth.interface.ts

import type { HydratedDocument } from "mongoose";

import type { TRole } from "../../constants/role.constant.js";

export type TAuthProvider = "LOCAL" | "GOOGLE";

export interface IUserAvatar {
  url: string;

  publicId: string;
}

export interface IUser {
  /**
   * Full Name
   */
  name: string;

  /**
   * Email Address
   */
  email: string;

  /**
   * Only for LOCAL authentication.
   * Google users will not have a password.
   */
  password?: string;

  /**
   * Application Role
   */
  role: TRole;

  /**
   * Authentication Provider
   */
  authProvider: TAuthProvider;

  /**
   * Google Unique User ID
   */
  googleId?: string;

  /**
   * Google Profile Picture
   */
  avatar?: IUserAvatar;

  /**
   * Google Email Verification Status
   */
  emailVerified: boolean;

  /**
   * First Name
   */
  givenName?: string;

  /**
   * Last Name
   */
  familyName?: string;

  /**
   * User Locale
   * Example: en, en-US, ta-IN
   */
  locale?: string;

  /**
   * Google Workspace Domain
   * Example: company.com
   */
  hostedDomain?: string;

  /**
   * Soft Delete
   */
  isDeleted: boolean;

  /**
   * Account Status
   */
  isActive: boolean;

  /**
   * Last Login Timestamp
   */
  lastLoginAt?: Date;
}

export interface ILoginUser {
  email: string;

  password: string;
}

export interface IGoogleLogin {
  token: string;
}

/**
 * Complete Google ID Token Payload
 */
export interface IGooglePayload {
  /**
   * Google User ID
   */
  sub: string;

  /**
   * User Email
   */
  email: string;

  /**
   * Email Verification Status
   */
  email_verified?: boolean;

  /**
   * Full Name
   */
  name?: string;

  /**
   * First Name
   */
  given_name?: string;

  /**
   * Last Name
   */
  family_name?: string;

  /**
   * Profile Picture
   */
  picture?: string;

  /**
   * User Locale
   */
  locale?: string;

  /**
   * Google Workspace Domain
   */
  hd?: string;

  /**
   * JWT Issuer
   */
  iss?: string;

  /**
   * Authorized Party
   */
  azp?: string;

  /**
   * Audience
   */
  aud?: string;

  /**
   * Issued At
   */
  iat?: number;

  /**
   * Expiration Time
   */
  exp?: number;

  /**
   * JWT ID
   */
  jti?: string;

  /**
   * Nonce
   */
  nonce?: string;
}

export interface IChangePassword {
  oldPassword: string;

  newPassword: string;
}

export interface ILoginResponse {
  accessToken: string;

  refreshToken: string;
}

export interface IRefreshTokenResponse {
  accessToken: string;
}

export interface IJwtPayload {
  userId: string;

  email: string;

  role: TRole;
}

export type UserDocument = HydratedDocument<IUser>;
