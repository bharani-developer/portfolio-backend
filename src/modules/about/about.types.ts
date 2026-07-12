// src/modules/about/about.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

// No enum-derived types for this module.

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio statistic displayed in the About section.
 */
export interface IAboutStat {
  /**
   * Statistic label.
   *
   * Example:
   * - Years Experience
   * - Projects
   * - Clients
   */
  readonly label: string;

  /**
   * Statistic value.
   *
   * Example:
   * - 5+
   * - 50+
   * - 100+
   */
  readonly value: string;
}

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * About section.
 */
export interface IAbout {
  /**
   * Primary profile image.
   */
  profileImage?: IImage;

  /**
   * Gallery images.
   */
  images: readonly IImage[];

  /**
   * Full name.
   */
  fullName: string;

  /**
   * Professional designation.
   */
  designation: string;

  /**
   * Professional biography.
   */
  bio: string;

  /**
   * Contact email.
   */
  email?: string;

  /**
   * Contact phone number.
   */
  phone?: string;

  /**
   * Current address or location.
   */
  address?: string;

  /**
   * Resume download URL.
   */
  resumeUrl?: string;

  /**
   * Total years of professional experience.
   */
  yearsOfExperience?: number;

  /**
   * Portfolio statistics.
   */
  stats?: readonly IAboutStat[];

  /**
   * Determines whether the About section is publicly visible.
   */
  isActive: boolean;

  /**
   * Document creation timestamp.
   *
   * Added automatically by Mongoose.
   */
  createdAt?: Date;

  /**
   * Last document update timestamp.
   *
   * Added automatically by Mongoose.
   */
  updatedAt?: Date;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * About document.
 */
export type TAboutDocument = HydratedDocument<IAbout>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create About payload.
 */
export type TCreateAboutPayload = Omit<IAbout, 'isActive'> & Partial<Pick<IAbout, 'isActive'>>;

/**
 * Update About payload.
 */
export type TUpdateAboutPayload = Partial<IAbout>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * About mongoose model.
 */
export type IAboutModel = Model<IAbout>;
