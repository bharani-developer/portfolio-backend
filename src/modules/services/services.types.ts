// src/modules/services/services.type.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/index.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

// No enum-derived types for this module.

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Service entity.
 */
export interface IService {
  /**
   * Service title.
   *
   * Examples:
   * - Full Stack Development
   * - Mobile App Development
   * - UI /UX Design
   */
  title: string;

  /**
   * URL-friendly unique slug.
   */
  slug: string;

  /**
   * Short service summary.
   */
  shortDescription: string;

  /**
   * Detailed service description.
   */
  description: string;

  /**
   * Service image.
   */
  image?: IImage;

  /**
   * Starting price of the service.
   *
   * Examples:
   * - 4999
   * - 15000
   * - 35000
   */
  price?: number;

  /**
   * ISO 4217 currency code.
   *
   * Examples:
   * - INR
   * - USD
   * - EUR
   */
  currency: string;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Visibility status.
   */
  isActive: boolean;

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
/*                               Document Type                                */
/* -------------------------------------------------------------------------- */

/**
 * Service document.
 */
export type TServiceDocument = HydratedDocument<IService>;

/* -------------------------------------------------------------------------- */
/*                               Create Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Create service payload.
 */
export type TCreateServicePayload = Omit<IService, 'slug' | 'createdAt' | 'updatedAt'>;

/* -------------------------------------------------------------------------- */
/*                               Update Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Update service payload.
 */
export type TUpdateServicePayload = Partial<Omit<IService, 'slug' | 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                               Model Interface                              */
/* -------------------------------------------------------------------------- */

/**
 * Service model.
 */
// export interface IServiceModel extends Model<IService> {}
export type IServiceModel = Model<IService>;
