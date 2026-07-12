// src/modules/testimonials/testimonials.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { TESTIMONIAL_TYPE, TESTIMONIAL_RATING } from './testimonials.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

/**
 * Available testimonial client types.
 */
export type TTestimonialClientType = (typeof TESTIMONIAL_TYPE)[keyof typeof TESTIMONIAL_TYPE];

/**
 * Available testimonial ratings.
 */
export type TTestimonialRating = (typeof TESTIMONIAL_RATING)[keyof typeof TESTIMONIAL_RATING];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Testimonial entity.
 */
export interface ITestimonial {
  /**
   * Client name.
   */
  clientName: string;

  /**
   * Client designation or role.
   */
  clientPosition?: string;

  /**
   * Client company or organization.
   */
  clientCompany?: string;

  /**
   * Client profile image.
   */
  clientImage?: IImage;

  /**
   * Client website.
   */
  clientWebsite?: string;

  /**
   * Associated project name.
   */
  projectName?: string;

  /**
   * Client review.
   */
  review: string;

  /**
   * Rating given by the client.
   */
  rating: TTestimonialRating;

  /**
   * Client type.
   */
  clientType: TTestimonialClientType;

  /**
   * Featured testimonial.
   */
  isFeatured: boolean;

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
 * Testimonial document.
 */
export type TTestimonialDocument = HydratedDocument<ITestimonial>;

/* -------------------------------------------------------------------------- */
/*                               Create Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Create testimonial payload.
 */
export type TCreateTestimonialPayload = Omit<ITestimonial, 'createdAt' | 'updatedAt'>;

/* -------------------------------------------------------------------------- */
/*                               Update Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Update testimonial payload.
 */
export type TUpdateTestimonialPayload = Partial<Omit<ITestimonial, 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                               Model Interface                              */
/* -------------------------------------------------------------------------- */

/**
 * Testimonial model.
 */
// export interface ITestimonialModel extends Model<ITestimonial> {}
export type ITestimonialModel = Model<ITestimonial>;
