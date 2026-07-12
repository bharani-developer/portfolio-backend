// src/modules/users/users.type.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import type { HydratedDocument, Model } from 'mongoose';

import type { TRole } from '../../constants/role.constants.js';
import type { TAuthProvider } from '../auth/auth.constant.js';
import type { IImage } from '../../shared/types/image.type.js';

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Application user.
 */
export interface IUser {
  /**
   * Full name.
   */
  name: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Password.
   *
   * Present only for LOCAL accounts.
   */
  password?: string;

  /**
   * User role.
   */
  role: TRole;

  /**
   * Authentication provider.
   */
  authProvider: TAuthProvider;

  /**
   * Google account identifier.
   */
  googleId?: string;

  /**
   * User avatar.
   */
  avatar?: IImage;

  /**
   * Whether the email has been verified.
   */
  emailVerified: boolean;

  /**
   * Google given name.
   */
  givenName?: string;

  /**
   * Google family name.
   */
  familyName?: string;

  /**
   * Locale.
   *
   * Examples:
   * - en
   * - en-US
   * - ta-IN
   */
  locale?: string;

  /**
   * Google Workspace hosted domain.
   */
  hostedDomain?: string;

  /**
   * Soft delete flag.
   */
  isDeleted: boolean;

  /**
   * Active account flag.
   */
  isActive: boolean;

  /**
   * Last successful login.
   */
  lastLoginAt?: Date;

  /**
   * Created timestamp.
   */
  createdAt?: Date;

  /**
   * Updated timestamp.
   */
  updatedAt?: Date;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Hydrated user document.
 */
export type TUserDocument = HydratedDocument<IUser>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Payload used when creating a user.
 *
 * The service determines which fields are required.
 */
export type TCreateUserPayload = Partial<Omit<IUser, 'createdAt' | 'updatedAt'>>;

/**
 * Payload used when updating a user.
 */
export type TUpdateUserPayload = Partial<Omit<IUser, 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Mongoose user model.
 */
export type IUserModel = Model<IUser>;
