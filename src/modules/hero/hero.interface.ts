// src/modules/hero/hero.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

/**
 * Technology name displayed in the hero section.
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
   * Hero description or introduction.
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
   * Primary call-to-action button link.
   */
  ctaButtonLink?: string;

  /**
   * Technologies displayed in the hero section.
   */
  technologies: readonly THeroTechnology[];

  /**
   * Determines whether the hero section is visible.
   */
  isActive: boolean;
}

export type THeroDocument = HydratedDocument<IHero>;

export interface IHeroModel extends Model<IHero> {}
