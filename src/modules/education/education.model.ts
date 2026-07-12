// src/modules/education/education.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import {
  EDUCATION_DEFAULT,
  EDUCATION_LEVELS,
  EDUCATION_TYPES,
  EDUCATION_VALIDATION,
  GRADE_TYPES,
} from './education.constant.js';

import type { IEducation, IEducationModel, TEducationDocument } from './education.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const educationSchema = new Schema<IEducation, IEducationModel>(
  {
    institution: {
      type: String,
      required: true,
      trim: true,
      minlength: EDUCATION_VALIDATION.INSTITUTION.MIN_LENGTH,
      maxlength: EDUCATION_VALIDATION.INSTITUTION.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: EDUCATION_VALIDATION.INSTITUTION.MAX_LENGTH,
    },

    institutionLogo: {
      type: imageSchema,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
      minlength: EDUCATION_VALIDATION.DEGREE.MIN_LENGTH,
      maxlength: EDUCATION_VALIDATION.DEGREE.MAX_LENGTH,
    },

    fieldOfStudy: {
      type: String,
      required: true,
      trim: true,
      minlength: EDUCATION_VALIDATION.FIELD_OF_STUDY.MIN_LENGTH,
      maxlength: EDUCATION_VALIDATION.FIELD_OF_STUDY.MAX_LENGTH,
    },

    educationLevel: {
      type: String,
      required: true,
      enum: EDUCATION_LEVELS,
    },

    educationType: {
      type: String,
      required: true,
      enum: EDUCATION_TYPES,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      minlength: EDUCATION_VALIDATION.LOCATION.MIN_LENGTH,
      maxlength: EDUCATION_VALIDATION.LOCATION.MAX_LENGTH,
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
      default: EDUCATION_DEFAULT.IS_CURRENT,
    },

    gradeType: {
      type: String,
      required: true,
      enum: GRADE_TYPES,
    },

    grade: {
      type: String,
      trim: true,
      maxlength: EDUCATION_VALIDATION.GRADE.MAX_LENGTH,
    },

    description: {
      type: String,
      trim: true,
      maxlength: EDUCATION_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    achievements: {
      type: [String],
      default: [],

      validate: [
        {
          validator(achievements: string[]) {
            return achievements.length <= EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_COUNT;
          },
          message: `Maximum ${EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_COUNT} achievements are allowed.`,
        },

        {
          validator(achievements: string[]) {
            return achievements.every(
              (achievement) =>
                achievement.trim().length > 0 &&
                achievement.length <= EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_LENGTH,
            );
          },
          message: 'Each achievement must be non-empty and within the maximum length.',
        },

        {
          validator(achievements: string[]) {
            return new Set(achievements).size === achievements.length;
          },
          message: 'Duplicate achievements are not allowed.',
        },
      ],
    },

    skills: {
      type: [String],
      default: [],

      validate: [
        {
          validator(skills: string[]) {
            return skills.length <= EDUCATION_VALIDATION.SKILLS.MAX_COUNT;
          },
          message: `Maximum ${EDUCATION_VALIDATION.SKILLS.MAX_COUNT} skills are allowed.`,
        },

        {
          validator(skills: string[]) {
            return skills.every(
              (skill) =>
                skill.trim().length > 0 && skill.length <= EDUCATION_VALIDATION.SKILLS.MAX_LENGTH,
            );
          },
          message: 'Each skill must be non-empty and within the maximum length.',
        },

        {
          validator(skills: string[]) {
            return new Set(skills).size === skills.length;
          },
          message: 'Duplicate skills are not allowed.',
        },
      ],
    },
    institutionWebsite: {
      type: String,
      trim: true,
      maxlength: EDUCATION_VALIDATION.INSTITUTION_WEBSITE.MAX_LENGTH,
    },

    sortOrder: {
      type: Number,
      default: EDUCATION_DEFAULT.SORT_ORDER,
      min: EDUCATION_VALIDATION.SORT_ORDER.MIN,
      max: EDUCATION_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: EDUCATION_DEFAULT.IS_ACTIVE,
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
 * Institution lookup.
 */
educationSchema.index({
  institution: 1,
});

/**
 * Degree lookup.
 */
educationSchema.index({
  degree: 1,
});

/**
 * Education level filtering.
 */
educationSchema.index({
  educationLevel: 1,
});

/**
 * Education type filtering.
 */
educationSchema.index({
  educationType: 1,
});

/**
 * Current education filtering.
 */
educationSchema.index({
  isCurrent: 1,
});

/**
 * Active education filtering.
 */
educationSchema.index({
  isActive: 1,
});

/**
 * Portfolio ordering.
 */
educationSchema.index({
  sortOrder: 1,
});

/**
 * Start date sorting.
 */
educationSchema.index({
  startDate: -1,
});

/**
 * End date sorting.
 */
educationSchema.index({
  endDate: -1,
});

/**
 * Skills filtering.
 */
educationSchema.index({
  skills: 1,
});

/**
 * Recently created.
 */
educationSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
educationSchema.index({
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Institution listing.
 */
educationSchema.index({
  institution: 1,
  degree: 1,
});

/**
 * Education level listing.
 */
educationSchema.index({
  educationLevel: 1,
  isActive: 1,
});

/**
 * Active education ordered for display.
 */
educationSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Current education.
 */
educationSchema.index({
  isCurrent: 1,
  startDate: -1,
});

/**
 * Date-based ordering.
 */
educationSchema.index({
  startDate: -1,
  endDate: -1,
});

/**
 * Education type listing.
 */
educationSchema.index({
  educationType: 1,
  isActive: 1,
});

/**
 * Institution timeline.
 */
educationSchema.index({
  institution: 1,
  startDate: -1,
});

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

educationSchema.index({
  institution: 'text',
  degree: 'text',
  fieldOfStudy: 'text',
  location: 'text',
  description: 'text',
  achievements: 'text',
  skills: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize education data before saving.
 */
educationSchema.pre('save', function (this: TEducationDocument) {
  /**
   * Current education should not have an end date.
   */
  if (this.isCurrent) {
    this.endDate = null;
  }

  /**
   * Normalize achievements.
   */
  if (this.isModified('achievements')) {
    this.achievements = [
      ...new Set(this.achievements.map((achievement: string) => achievement.trim())),
    ];
  }

  /**
   * Normalize skills.
   */
  if (this.isModified('skills')) {
    this.skills = [...new Set(this.skills.map((skill: string) => skill.trim()))];
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the education record is currently ongoing.
 */
educationSchema.virtual('isOngoing').get(function (this: TEducationDocument) {
  return this.isCurrent;
});

/**
 * Number of achievements.
 */
educationSchema.virtual('achievementCount').get(function (this: TEducationDocument) {
  return this.achievements.length;
});

/**
 * Number of skills.
 */
educationSchema.virtual('skillCount').get(function (this: TEducationDocument) {
  return this.skills.length;
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Education = model<IEducation, IEducationModel>('Education', educationSchema);
