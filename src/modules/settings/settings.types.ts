// src/modules/settings/settings.type.ts

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
 * Social media links.
 */
export interface ISocialLinks {
  github?: string;

  linkedin?: string;

  twitter?: string;

  facebook?: string;

  instagram?: string;

  youtube?: string;

  leetcode?: string;

  hackerrank?: string;

  stackoverflow?: string;
}

/**
 * SEO configuration.
 */
export interface ISeoSettings {
  /**
   * SEO meta title.
   */
  metaTitle: string;

  /**
   * SEO meta description.
   */
  metaDescription: string;

  /**
   * SEO keywords.
   */
  metaKeywords: string[];

  /**
   * Canonical website URL.
   */
  siteUrl: string;
}

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio application settings.
 */
export interface ISettings {
  /**
   * Website title.
   */
  siteTitle: string;

  /**
   * Website description.
   */
  siteDescription: string;

  /**
   * Public contact email.
   */
  email: string;

  /**
   * Public contact phone number.
   */
  phone: string;

  /**
   * Public business address.
   */
  address: string;

  /**
   * Website logo.
   */
  logo?: IImage;

  /**
   * Website favicon.
   */
  favicon?: IImage;

  /**
   * Social media profiles.
   */
  socialLinks: ISocialLinks;

  /**
   * Search Engine Optimization settings.
   */
  seo: ISeoSettings;

  /**
   * Creation timestamp.
   */
  createdAt?: Date;

  /**
   * Last update timestamp.
   */
  updatedAt?: Date;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Settings document.
 */
export type TSettingsDocument = HydratedDocument<ISettings>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create settings payload.
 */
export type TCreateSettingsPayload = Omit<ISettings, 'createdAt' | 'updatedAt'>;

/**
 * Update settings payload.
 */
export type TUpdateSettingsPayload = Partial<Omit<ISettings, 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Settings model.
 */
// export interface ISettingsModel extends Model<ISettings> {}
export type ISettingsModel = Model<ISettings>;
