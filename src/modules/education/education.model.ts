// src/modules/education/education.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/index.js";

import { EDUCATION_DEFAULT } from "./education.constant.js";

import type { IEducation, IEducationModel } from "./education.interface.js";

const educationSchema = new Schema<IEducation, IEducationModel>(
  {
    institution: {
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

    institutionLogo: {
      type: imageSchema,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    fieldOfStudy: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    educationLevel: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    educationType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
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
      default: EDUCATION_DEFAULT.IS_CURRENT,
    },

    gradeType: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    grade: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 3000,
    },

    achievements: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    institutionWebsite: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    sortOrder: {
      type: Number,
      min: 0,
      default: EDUCATION_DEFAULT.SORT_ORDER,
    },

    isActive: {
      type: Boolean,
      default: EDUCATION_DEFAULT.IS_ACTIVE,
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
 * Institution listing
 */
educationSchema.index({
  institution: 1,
  degree: 1,
});

/**
 * Education level filtering
 */
educationSchema.index({
  educationLevel: 1,
  isActive: 1,
});

/**
 * Active education ordering
 */
educationSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Current education
 */
educationSchema.index({
  isCurrent: 1,
  startDate: -1,
});

/**
 * Date sorting
 */
educationSchema.index({
  startDate: -1,
  endDate: -1,
});

/**
 * Skills filtering
 */
educationSchema.index({
  skills: 1,
});

/**
 * Full-text search
 */
educationSchema.index({
  institution: "text",
  degree: "text",
  fieldOfStudy: "text",
  description: "text",
  skills: "text",
});

/**
 * ============================================================================
 * Model
 * ============================================================================
 */

export const Education = model<IEducation, IEducationModel>(
  "Education",
  educationSchema,
);
