// src/modules/experience/experience.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { EMPLOYMENT_TYPE, WORK_MODE } from './experience.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

export type TEmploymentType = (typeof EMPLOYMENT_TYPE)[keyof typeof EMPLOYMENT_TYPE];

export type TWorkMode = (typeof WORK_MODE)[keyof typeof WORK_MODE];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Professional experience entity.
 */
export interface IExperience {
  /**
   * Company name.
   */
  company: string;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Company logo.
   */
  companyLogo?: IImage;

  /**
   * Job title or position.
   */
  position: string;

  /**
   * Employment type.
   */
  employmentType: TEmploymentType;

  /**
   * Work mode.
   */
  workMode: TWorkMode;

  /**
   * Job location.
   */
  location: string;

  /**
   * Employment start date.
   */
  startDate: Date;

  /**
   * Employment end date.
   *
   * Undefined or null when the position is current.
   */
  endDate?: Date | null;

  /**
   * Indicates whether this is the current position.
   */
  isCurrent: boolean;

  /**
   * Professional summary.
   */
  summary: string;

  /**
   * Roles and responsibilities.
   */
  responsibilities: string[];

  /**
   * Technologies used.
   */
  technologies: string[];

  /**
   * Company website.
   */
  companyWebsite?: string;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Determines whether this experience is publicly visible.
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
 * Experience document.
 */
export type TExperienceDocument = HydratedDocument<IExperience>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create experience payload.
 */
export type TCreateExperiencePayload = Omit<IExperience, 'slug' | 'createdAt' | 'updatedAt'>;

/**
 * Update experience payload.
 */
export type TUpdateExperiencePayload = Partial<
  Omit<IExperience, 'slug' | 'createdAt' | 'updatedAt'>
>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Experience model.
 */
// export interface IExperienceModel extends Model<IExperience> {}
export type IExperienceModel = Model<IExperience>;
