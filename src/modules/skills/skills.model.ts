// src/modules/skills/skills.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import { SKILLS_CATEGORIES, SKILLS_DEFAULT, SKILLS_VALIDATION } from './skills.constant.js';

import type { ISkill, ISkillModel, TSkillCategory, TSkillDocument } from './skills.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const skillsSchema = new Schema<ISkill, ISkillModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
      maxlength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
    },

    category: {
      type: String,
      required: true,
      enum: SKILLS_CATEGORIES,
      trim: true,
      maxlength: SKILLS_VALIDATION.CATEGORY.MAX_LENGTH,
    },

    proficiency: {
      type: Number,
      required: true,
      default: SKILLS_DEFAULT.PROFICIENCY,
      min: SKILLS_VALIDATION.PROFICIENCY.MIN,
      max: SKILLS_VALIDATION.PROFICIENCY.MAX,
    },

    image: {
      type: imageSchema,
    },

    description: {
      type: String,
      trim: true,
      maxlength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    sortOrder: {
      type: Number,
      default: SKILLS_DEFAULT.SORT_ORDER,
      min: SKILLS_VALIDATION.SORT_ORDER.MIN,
      max: SKILLS_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: SKILLS_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,

    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  },
);
/* -------------------------------------------------------------------------- */
/*                              4. Query Indexes                              */
/* -------------------------------------------------------------------------- */

/**
 * Unique slug lookup.
 *
 * NOTE:
 * `unique: true` already creates a unique index,
 * but this explicit index improves readability.
 */
skillsSchema.index({
  slug: 1,
});

/**
 * Skill name lookup.
 */
skillsSchema.index({
  name: 1,
});

/**
 * Category filtering.
 */
skillsSchema.index({
  category: 1,
});

/**
 * Active skills.
 */
skillsSchema.index({
  isActive: 1,
});

/**
 * Display ordering.
 */
skillsSchema.index({
  sortOrder: 1,
});

/**
 * Proficiency filtering.
 */
skillsSchema.index({
  proficiency: -1,
});

/**
 * Recently created skills.
 */
skillsSchema.index({
  createdAt: -1,
});

/**
 * Recently updated skills.
 */
skillsSchema.index({
  updatedAt: -1,
});
/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Active skills ordered by display order.
 *
 * Used by:
 * - Portfolio frontend
 * - Public API
 */
skillsSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Category listing.
 *
 * Used by:
 * - Category pages
 * - Skills grouping
 */
skillsSchema.index({
  category: 1,
  isActive: 1,
});

/**
 * Category ordering.
 */
skillsSchema.index({
  category: 1,
  sortOrder: 1,
});

/**
 * Category proficiency ranking.
 */
skillsSchema.index({
  category: 1,
  proficiency: -1,
});

/**
 * Portfolio ordering by category.
 */
skillsSchema.index({
  isActive: 1,
  category: 1,
  sortOrder: 1,
});

/**
 * Recently added active skills.
 */
skillsSchema.index({
  isActive: 1,
  createdAt: -1,
});

/**
 * Recently updated active skills.
 */
skillsSchema.index({
  isActive: 1,
  updatedAt: -1,
});

/**
 * Category + skill lookup.
 */
skillsSchema.index({
  category: 1,
  name: 1,
});
/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

/**
 * Full-text search index.
 *
 * Used by:
 * - Admin global search
 * - Skill search API
 * - Portfolio search
 *
 * Weighted search:
 * Name > Category > Description
 */
skillsSchema.index(
  {
    name: 'text',
    category: 'text',
    description: 'text',
  },
  {
    weights: {
      name: 10,
      category: 5,
      description: 2,
    },

    name: 'skills_text_search',
  },
);
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize skill data before saving.
 */
skillsSchema.pre('save', function (this: TSkillDocument) {
  this.name = this.name.trim();

  this.slug = this.slug.trim().toLowerCase();

  this.category = this.category.trim() as TSkillCategory;

  if (this.description) {
    this.description = this.description.trim();
  }
});

/**
 * Normalize image values.
 */
skillsSchema.pre('save', function (this: TSkillDocument) {
  if (!this.image) {
    return;
  }

  this.image.url = this.image.url.trim();

  this.image.publicId = this.image.publicId.trim();
});

/**
 * Ensure proficiency stays within the configured range.
 */
skillsSchema.pre('validate', function (this: TSkillDocument) {
  if (this.proficiency < SKILLS_VALIDATION.PROFICIENCY.MIN) {
    this.proficiency = SKILLS_VALIDATION.PROFICIENCY.MIN;
  }

  if (this.proficiency > SKILLS_VALIDATION.PROFICIENCY.MAX) {
    this.proficiency = SKILLS_VALIDATION.PROFICIENCY.MAX;
  }
});
/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the skill is considered advanced.
 */
skillsSchema.virtual('isAdvanced').get(function (this: TSkillDocument) {
  return this.proficiency >= 80;
});

/**
 * Whether the skill is considered intermediate.
 */
skillsSchema.virtual('isIntermediate').get(function (this: TSkillDocument) {
  return this.proficiency >= 50 && this.proficiency < 80;
});

/**
 * Whether the skill is considered beginner.
 */
skillsSchema.virtual('isBeginner').get(function (this: TSkillDocument) {
  return this.proficiency < 50;
});

/**
 * Human-readable proficiency level.
 */
skillsSchema.virtual('proficiencyLevel').get(function (this: TSkillDocument) {
  if (this.proficiency >= 90) {
    return 'Expert';
  }

  if (this.proficiency >= 80) {
    return 'Advanced';
  }

  if (this.proficiency >= 60) {
    return 'Intermediate';
  }

  if (this.proficiency >= 40) {
    return 'Basic';
  }

  return 'Beginner';
});

/**
 * Skill visibility.
 */
skillsSchema.virtual('isVisible').get(function (this: TSkillDocument) {
  return this.isActive;
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Skill = model<ISkill, ISkillModel>('Skill', skillsSchema);
