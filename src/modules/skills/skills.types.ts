// src/modules/skills/skills.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { SKILLS_CATEGORY } from './skills.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

/**
 * Available skill categories.
 */
export type TSkillCategory = (typeof SKILLS_CATEGORY)[keyof typeof SKILLS_CATEGORY];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Skill entity.
 */
export interface ISkill {
  /**
   * Skill name.
   *
   * Examples:
   * - React
   * - TypeScript
   * - Laravel
   * - Flutter
   */
  name: string;

  /**
   * URL-friendly unique slug.
   */
  slug: string;

  /**
   * Skill category.
   */
  category: TSkillCategory;

  /**
   * Skill proficiency percentage.
   */
  proficiency: number;

  /**
   * Skill icon or logo.
   */
  image?: IImage;

  /**
   * Optional description.
   */
  description?: string;

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
 * Skill document.
 */
export type TSkillDocument = HydratedDocument<ISkill>;

/* -------------------------------------------------------------------------- */
/*                               Create Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Create skill payload.
 */
export type TCreateSkillPayload = Omit<ISkill, 'slug' | 'createdAt' | 'updatedAt'>;

/* -------------------------------------------------------------------------- */
/*                               Update Payload                               */
/* -------------------------------------------------------------------------- */

/**
 * Update skill payload.
 */
export type TUpdateSkillPayload = Partial<Omit<ISkill, 'slug' | 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                               Model Interface                              */
/* -------------------------------------------------------------------------- */

/**
 * Skill model.
 */
// export interface ISkillModel extends Model<ISkill> {}
export type ISkillModel = Model<ISkill>;
