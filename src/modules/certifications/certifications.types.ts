// src/modules/certifications/certifications.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

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
 * Certification entity.
 */
export interface ICertification {
  /**
   * Certification title.
   */
  title: string;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Certification issuer.
   */
  issuer: string;

  /**
   * Certificate image.
   */
  certificateImage?: IImage;

  /**
   * Credential identifier.
   */
  credentialId?: string;

  /**
   * Credential verification URL.
   */
  credentialUrl?: string;

  /**
   * Certification issue date.
   */
  issueDate: Date;

  /**
   * Certification expiry date.
   *
   * Null when the certification never expires.
   */
  expiryDate: Date | null;

  /**
   * Indicates whether the certification never expires.
   */
  neverExpires: boolean;

  /**
   * Certification description.
   */
  description?: string;

  /**
   * Skills covered by the certification.
   */
  skills: string[];

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Determines whether the certification is publicly visible.
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
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Certification document.
 */
export type TCertificationDocument = HydratedDocument<ICertification>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create certification payload.
 */
export type TCreateCertificationPayload = Omit<ICertification, 'slug' | 'createdAt' | 'updatedAt'>;

/**
 * Update certification payload.
 */
export type TUpdateCertificationPayload = Partial<
  Omit<ICertification, 'slug' | 'createdAt' | 'updatedAt'>
>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Certification model.
 */
// export interface ICertificationModel extends Model<ICertification> {}
export type ICertificationModel = Model<ICertification>;
