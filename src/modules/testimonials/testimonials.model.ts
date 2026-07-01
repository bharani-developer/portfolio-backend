// src/modules/testimonials/testimonials.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/index.js";

import {
  TESTIMONIAL_CLIENT_TYPES,
  TESTIMONIAL_DEFAULT,
} from "./testimonials.constant.js";

import type {
  ITestimonial,
  ITestimonialModel,
} from "./testimonials.interface.js";

const testimonialSchema = new Schema<ITestimonial, ITestimonialModel>(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    clientPosition: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },

    clientCompany: {
      type: String,
      trim: true,
      maxlength: 150,
      default: "",
    },

    clientImage: {
      type: imageSchema,
      default: null,
    },

    clientWebsite: {
      type: String,
      trim: true,
      default: "",
    },

    projectName: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },

    review: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 3000,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: TESTIMONIAL_DEFAULT.RATING,
    },

    clientType: {
      type: String,
      required: true,
      enum: TESTIMONIAL_CLIENT_TYPES,
    },

    isFeatured: {
      type: Boolean,
      default: TESTIMONIAL_DEFAULT.IS_FEATURED,
    },

    sortOrder: {
      type: Number,
      min: 0,
      default: TESTIMONIAL_DEFAULT.SORT_ORDER,
    },

    isActive: {
      type: Boolean,
      default: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/**
 * Single Field Indexes
 */

testimonialSchema.index({
  clientName: 1,
});

testimonialSchema.index({
  clientCompany: 1,
});

testimonialSchema.index({
  projectName: 1,
});

testimonialSchema.index({
  clientType: 1,
});

testimonialSchema.index({
  rating: 1,
});

testimonialSchema.index({
  isFeatured: 1,
});

testimonialSchema.index({
  isActive: 1,
});

testimonialSchema.index({
  sortOrder: 1,
});

testimonialSchema.index({
  createdAt: -1,
});

/**
 * Compound Indexes
 */

testimonialSchema.index({
  isActive: 1,
  isFeatured: 1,
});

testimonialSchema.index({
  isActive: 1,
  rating: -1,
});

testimonialSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Full Text Search
 */

testimonialSchema.index({
  clientName: "text",
  clientPosition: "text",
  clientCompany: "text",
  projectName: "text",
  review: "text",
});

export const Testimonial = model<ITestimonial, ITestimonialModel>(
  "Testimonial",
  testimonialSchema,
);
