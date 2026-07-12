// src/modules/hero/hero.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

/**
 * Technology displayed in the Hero section.
 *
 * Examples:
 * - React
 * - Next.js
 * - TypeScript
 * - Node.js
 * - Express.js
 * - Laravel
 * - Flutter
 */
export type THeroTechnology = string;

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Hero section entity.
 */
export interface IHero {
  /**
   * Main heading.
   */
  title: string;

  /**
   * Secondary heading.
   */
  subtitle: string;

  /**
   * Hero description.
   */
  description: string;

  /**
   * Profile image.
   */
  profileImage?: IImage;

  /**
   * Resume or CV URL.
   */
  resumeUrl?: string;

  /**
   * Primary call-to-action button text.
   */
  ctaButtonText?: string;

  /**
   * Primary call-to-action button URL.
   */
  ctaButtonLink?: string;

  /**
   * Technologies displayed in the Hero section.
   */
  technologies: readonly THeroTechnology[];

  /**
   * Determines whether the Hero section is publicly visible.
   */
  isActive: boolean;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Hero document.
 */
export type THeroDocument = HydratedDocument<IHero>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create Hero payload.
 */
export type TCreateHeroPayload = Omit<IHero, 'isActive'> & Partial<Pick<IHero, 'isActive'>>;

/**
 * Update Hero payload.
 */
export type TUpdateHeroPayload = Partial<IHero>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Hero model.
 */
// export interface IHeroModel extends Model<IHero> {}
export type IHeroModel = Model<IHero>;
