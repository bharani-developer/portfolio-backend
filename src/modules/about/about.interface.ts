// src/modules/about/about.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

/**
 * About statistics displayed in the portfolio.
 */
export interface IAboutStat {
  readonly label: string;

  readonly value: string;
}

/**
 * About section document.
 */
export interface IAbout {
  /**
   * Primary profile image.
   */
  profileImage?: IImage;

  /**
   * Gallery images displayed in the About section.
   * Must contain at least one image.
   */
  images: IImage[];

  /**
   * Full name.
   */
  fullName: string;

  /**
   * Professional designation.
   */
  designation: string;

  /**
   * About description.
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
   * Current location or address.
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
  stats?: IAboutStat[];

  /**
   * Whether this About section is publicly visible.
   */
  isActive: boolean;
}

/**
 * About document.
 */
export type TAboutDocument = HydratedDocument<IAbout>;

/**
 * Create About payload.
 */
export type TCreateAboutPayload = Omit<IAbout, "isActive"> &
  Partial<Pick<IAbout, "isActive">>;

/**
 * Update About payload.
 */
export type TUpdateAboutPayload = Partial<IAbout>;

/**
 * About model.
 */
export interface IAboutModel extends Model<IAbout> {}
