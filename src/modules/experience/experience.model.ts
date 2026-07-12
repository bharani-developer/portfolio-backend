// src/modules/experience/experience.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import {
  EMPLOYMENT_TYPES,
  EXPERIENCE_DEFAULT,
  EXPERIENCE_VALIDATION,
  WORK_MODES,
} from './experience.constant.js';

import type { IExperience, IExperienceModel, TExperienceDocument } from './experience.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const experienceSchema = new Schema<IExperience, IExperienceModel>(
  {
    company: {
      type: String,
      required: true,
      trim: true,
      minlength: EXPERIENCE_VALIDATION.COMPANY.MIN_LENGTH,
      maxlength: EXPERIENCE_VALIDATION.COMPANY.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: EXPERIENCE_VALIDATION.COMPANY.MAX_LENGTH,
    },

    companyLogo: {
      type: imageSchema,
    },

    position: {
      type: String,
      required: true,
      trim: true,
      minlength: EXPERIENCE_VALIDATION.POSITION.MIN_LENGTH,
      maxlength: EXPERIENCE_VALIDATION.POSITION.MAX_LENGTH,
    },

    employmentType: {
      type: String,
      required: true,
      enum: EMPLOYMENT_TYPES,
    },

    workMode: {
      type: String,
      required: true,
      enum: WORK_MODES,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      minlength: EXPERIENCE_VALIDATION.LOCATION.MIN_LENGTH,
      maxlength: EXPERIENCE_VALIDATION.LOCATION.MAX_LENGTH,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      default: null,
    },

    isCurrent: {
      type: Boolean,
      default: EXPERIENCE_DEFAULT.IS_CURRENT,
    },

    summary: {
      type: String,
      required: true,
      trim: true,
      minlength: EXPERIENCE_VALIDATION.SUMMARY.MIN_LENGTH,
      maxlength: EXPERIENCE_VALIDATION.SUMMARY.MAX_LENGTH,
    },

    responsibilities: {
      type: [String],
      default: [],

      validate: [
        {
          validator(responsibilities: string[]) {
            return (
              responsibilities.length > 0 &&
              responsibilities.length <= EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_COUNT
            );
          },

          message: 'Responsibilities must contain between 1 and 50 items.',
        },

        {
          validator(responsibilities: string[]) {
            return responsibilities.every(
              (responsibility) =>
                responsibility.trim().length > 0 &&
                responsibility.length <= EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_LENGTH,
            );
          },

          message: 'Invalid responsibility.',
        },

        {
          validator(responsibilities: string[]) {
            return new Set(responsibilities).size === responsibilities.length;
          },

          message: 'Duplicate responsibilities are not allowed.',
        },
      ],
    },

    technologies: {
      type: [String],
      default: [],

      validate: [
        {
          validator(technologies: string[]) {
            return (
              technologies.length > 0 &&
              technologies.length <= EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_COUNT
            );
          },

          message: 'Technologies must contain between 1 and 50 items.',
        },

        {
          validator(technologies: string[]) {
            return technologies.every(
              (technology) =>
                technology.trim().length > 0 &&
                technology.length <= EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
            );
          },

          message: 'Invalid technology.',
        },

        {
          validator(technologies: string[]) {
            return new Set(technologies).size === technologies.length;
          },

          message: 'Duplicate technologies are not allowed.',
        },
      ],
    },
    companyWebsite: {
      type: String,
      trim: true,
      maxlength: EXPERIENCE_VALIDATION.COMPANY_WEBSITE.MAX_LENGTH,
    },

    sortOrder: {
      type: Number,
      default: EXPERIENCE_DEFAULT.SORT_ORDER,
      min: EXPERIENCE_VALIDATION.SORT_ORDER.MIN,
      max: EXPERIENCE_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: EXPERIENCE_DEFAULT.IS_ACTIVE,
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
 * Company lookup.
 */
experienceSchema.index({
  company: 1,
});

/**
 * Position lookup.
 */
experienceSchema.index({
  position: 1,
});

/**
 * Employment type filtering.
 */
experienceSchema.index({
  employmentType: 1,
});

/**
 * Work mode filtering.
 */
experienceSchema.index({
  workMode: 1,
});

/**
 * Location filtering.
 */
experienceSchema.index({
  location: 1,
});

/**
 * Current employment filtering.
 */
experienceSchema.index({
  isCurrent: 1,
});

/**
 * Active experiences.
 */
experienceSchema.index({
  isActive: 1,
});

/**
 * Technologies filtering.
 */
experienceSchema.index({
  technologies: 1,
});

/**
 * Portfolio ordering.
 */
experienceSchema.index({
  sortOrder: 1,
});

/**
 * Recent experiences.
 */
experienceSchema.index({
  startDate: -1,
});

/**
 * End date sorting.
 */
experienceSchema.index({
  endDate: -1,
});

/**
 * Recently created.
 */
experienceSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
experienceSchema.index({
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio display ordering.
 */
experienceSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Company listing.
 */
experienceSchema.index({
  company: 1,
  isActive: 1,
});

/**
 * Position listing.
 */
experienceSchema.index({
  position: 1,
  isActive: 1,
});

/**
 * Employment type listing.
 */
experienceSchema.index({
  employmentType: 1,
  isActive: 1,
});

/**
 * Work mode listing.
 */
experienceSchema.index({
  workMode: 1,
  isActive: 1,
});

/**
 * Current employment.
 */
experienceSchema.index({
  isCurrent: 1,
  startDate: -1,
});

/**
 * Employment timeline.
 */
experienceSchema.index({
  startDate: -1,
  endDate: -1,
});

/**
 * Company timeline.
 */
experienceSchema.index({
  company: 1,
  startDate: -1,
});

/**
 * Technology search.
 */
experienceSchema.index({
  technologies: 1,
  isActive: 1,
});

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

experienceSchema.index({
  company: 'text',
  position: 'text',
  summary: 'text',
  responsibilities: 'text',
  technologies: 'text',
  location: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */
experienceSchema.pre('validate', function (this: TExperienceDocument) {
  if (this.isCurrent) {
    this.endDate = null;
    return;
  }

  if (!this.endDate) {
    this.invalidate('endDate', 'End date is required when the experience is not current.');

    return;
  }

  if (this.endDate < this.startDate) {
    this.invalidate('endDate', 'End date must be greater than or equal to the start date.');
  }
});
/**
 * Normalize experience data before saving.
 */
experienceSchema.pre('save', function (this: TExperienceDocument) {
  if (this.isModified('responsibilities')) {
    this.responsibilities = [
      ...new Set(this.responsibilities.map((responsibility: string) => responsibility.trim())),
    ];
  }

  if (this.isModified('technologies')) {
    this.technologies = [
      ...new Set(this.technologies.map((technology: string) => technology.trim())),
    ];
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether this experience is currently active.
 */
experienceSchema.virtual('isOngoing').get(function (this: TExperienceDocument) {
  return this.isCurrent;
});

/**
 * Total responsibilities.
 */
experienceSchema.virtual('responsibilityCount').get(function (this: TExperienceDocument) {
  return this.responsibilities.length;
});

/**
 * Total technologies.
 */
experienceSchema.virtual('technologyCount').get(function (this: TExperienceDocument) {
  return this.technologies.length;
});

/**
 * Total experience duration in months.
 */
experienceSchema.virtual('durationInMonths').get(function (this: TExperienceDocument) {
  const endDate = this.endDate ?? new Date();

  const months =
    (endDate.getFullYear() - this.startDate.getFullYear()) * 12 +
    (endDate.getMonth() - this.startDate.getMonth());

  return Math.max(months, 0);
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Experience = model<IExperience, IExperienceModel>('Experience', experienceSchema);
