// src/modules/experience/experience.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/image.schema.js";

import {
  EMPLOYMENT_TYPES,
  EXPERIENCE_DEFAULT,
  WORK_MODES,
} from "./experience.constant.js";

import type { IExperience, IExperienceModel } from "./experience.interface.js";

const experienceSchema = new Schema<IExperience, IExperienceModel>(
  {
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    companyLogo: {
      type: imageSchema,
    },

    position: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
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
      maxlength: 150,
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
      required: true,
      default: EXPERIENCE_DEFAULT.IS_CURRENT,
    },

    summary: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },

    responsibilities: {
      type: [String],

      required: true,

      validate: {
        validator(value: string[]): boolean {
          return Array.isArray(value) && value.length > 0;
        },

        message: "At least one responsibility is required",
      },
    },

    technologies: {
      type: [String],

      required: true,

      validate: {
        validator(value: string[]): boolean {
          return Array.isArray(value) && value.length > 0;
        },

        message: "At least one technology is required",
      },
    },

    companyWebsite: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    sortOrder: {
      type: Number,
      required: true,
      min: 0,
      default: EXPERIENCE_DEFAULT.SORT_ORDER,
    },

    isActive: {
      type: Boolean,
      required: true,
      default: EXPERIENCE_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/**
 * ============================================================================
 * Indexes
 * ============================================================================
 */

/**
 * Active experiences ordered for portfolio display
 */
experienceSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Company filtering
 */
experienceSchema.index({
  company: 1,
  isActive: 1,
});

/**
 * Position filtering
 */
experienceSchema.index({
  position: 1,
  isActive: 1,
});

/**
 * Employment type filtering
 */
experienceSchema.index({
  employmentType: 1,
  isActive: 1,
});

/**
 * Work mode filtering
 */
experienceSchema.index({
  workMode: 1,
  isActive: 1,
});

/**
 * Location filtering
 */
experienceSchema.index({
  location: 1,
  isActive: 1,
});

/**
 * Technology filtering
 */
experienceSchema.index({
  technologies: 1,
});

/**
 * Date sorting
 */
experienceSchema.index({
  startDate: -1,
  endDate: -1,
});

/**
 * Current experiences first
 */
experienceSchema.index({
  isCurrent: 1,
  startDate: -1,
});

/**
 * Full-text search
 */
experienceSchema.index({
  company: "text",
  position: "text",
  summary: "text",
  technologies: "text",
  location: "text",
});

/**
 * ============================================================================
 * Model
 * ============================================================================
 */

export const Experience = model<IExperience, IExperienceModel>(
  "Experience",
  experienceSchema,
);
