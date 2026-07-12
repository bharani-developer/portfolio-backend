// src/modules/projects/projects.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { PROJECT_CATEGORY, PROJECT_STATUS } from './projects.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

export type TProjectCategory = (typeof PROJECT_CATEGORY)[keyof typeof PROJECT_CATEGORY];

export type TProjectStatus = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];

/**
 * Technology used in a project.
 */
export type TProjectTechnology = string;

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Project entity.
 */
export interface IProject {
  /**
   * Project title.
   */
  title: string;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Short project summary.
   */
  shortDescription: string;

  /**
   * Detailed project description.
   */
  description: string;

  /**
   * Project thumbnail.
   */
  thumbnail?: IImage;

  /**
   * Project gallery.
   */
  gallery: IImage[];

  /**
   * Technologies used in the project.
   */
  technologies: TProjectTechnology[];

  /**
   * Project category.
   */
  category: TProjectCategory;

  /**
   * GitHub repository URL.
   */
  githubUrl?: string;

  /**
   * Live demo URL.
   */
  liveUrl?: string;

  /**
   * Indicates whether this is a featured project.
   */
  featured: boolean;

  /**
   * Current project status.
   */
  status: TProjectStatus;

  /**
   * Project start date.
   */
  startDate?: Date;

  /**
   * Project completion date.
   */
  endDate?: Date | null;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Determines whether the project is publicly visible.
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
 * Project document.
 */
export type TProjectDocument = HydratedDocument<IProject>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create project payload.
 */
export type TCreateProjectPayload = Omit<IProject, 'slug' | 'createdAt' | 'updatedAt'>;

/**
 * Update project payload.
 */
export type TUpdateProjectPayload = Partial<Omit<IProject, 'slug' | 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Project model.
 */
// export interface IProjectModel extends Model<IProject> {}
export type IProjectModel = Model<IProject>;
