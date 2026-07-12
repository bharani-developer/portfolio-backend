// src/modules/education/education.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { EDUCATION_LEVEL, EDUCATION_TYPE, GRADE_TYPE } from './education.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

export type TEducationLevel = (typeof EDUCATION_LEVEL)[keyof typeof EDUCATION_LEVEL];

export type TEducationType = (typeof EDUCATION_TYPE)[keyof typeof EDUCATION_TYPE];

export type TGradeType = (typeof GRADE_TYPE)[keyof typeof GRADE_TYPE];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Education entity.
 */
export interface IEducation {
  /**
   * Educational institution name.
   */
  institution: string;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Institution logo.
   */
  institutionLogo?: IImage;

  /**
   * Degree or qualification.
   */
  degree: string;

  /**
   * Field of study.
   */
  fieldOfStudy: string;

  /**
   * Education level.
   */
  educationLevel: TEducationLevel;

  /**
   * Education mode.
   */
  educationType: TEducationType;

  /**
   * Institution location.
   */
  location: string;

  /**
   * Start date.
   */
  startDate: Date;

  /**
   * End date.
   *
   * Null if currently studying.
   */
  endDate: Date | null;

  /**
   * Indicates whether this education is ongoing.
   */
  isCurrent: boolean;

  /**
   * Grade representation type.
   */
  gradeType: TGradeType;

  /**
   * Grade or score.
   */
  grade?: string;

  /**
   * Education summary.
   */
  description?: string;

  /**
   * Academic achievements.
   */
  achievements: string[];

  /**
   * Related skills.
   */
  skills: string[];

  /**
   * Institution website.
   */
  institutionWebsite?: string;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Determines whether this education record is publicly visible.
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
 * Education document.
 */
export type TEducationDocument = HydratedDocument<IEducation>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create education payload.
 */
export type TCreateEducationPayload = Omit<IEducation, 'slug' | 'createdAt' | 'updatedAt'>;

/**
 * Update education payload.
 */
export type TUpdateEducationPayload = Partial<Omit<IEducation, 'slug' | 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Education model.
 */
// export interface IEducationModel extends Model<IEducation> {}
export type IEducationModel = Model<IEducation>;
