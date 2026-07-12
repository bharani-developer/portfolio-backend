// src/modules/testimonials/testimonials.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import {
  TESTIMONIAL_DEFAULT,
  TESTIMONIAL_RATINGS,
  TESTIMONIAL_TYPES,
  TESTIMONIAL_VALIDATION,
} from './testimonials.constant.js';

import type { ITestimonial, ITestimonialModel, TTestimonialDocument } from './testimonials.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const testimonialSchema = new Schema<ITestimonial, ITestimonialModel>(
  {
    clientName: {
      type: String,
      required: true,
      trim: true,
      minlength: TESTIMONIAL_VALIDATION.CLIENT_NAME.MIN_LENGTH,
      maxlength: TESTIMONIAL_VALIDATION.CLIENT_NAME.MAX_LENGTH,
    },

    clientPosition: {
      type: String,
      trim: true,
      default: '',
      maxlength: TESTIMONIAL_VALIDATION.CLIENT_POSITION.MAX_LENGTH,
    },

    clientCompany: {
      type: String,
      trim: true,
      default: '',
      maxlength: TESTIMONIAL_VALIDATION.CLIENT_COMPANY.MAX_LENGTH,
    },

    clientImage: {
      type: imageSchema,
      default: null,
    },

    clientWebsite: {
      type: String,
      trim: true,
      default: '',
      maxlength: TESTIMONIAL_VALIDATION.CLIENT_WEBSITE.MAX_LENGTH,
    },

    projectName: {
      type: String,
      trim: true,
      default: '',
      maxlength: TESTIMONIAL_VALIDATION.PROJECT_NAME.MAX_LENGTH,
    },

    review: {
      type: String,
      required: true,
      trim: true,
      minlength: TESTIMONIAL_VALIDATION.REVIEW.MIN_LENGTH,
      maxlength: TESTIMONIAL_VALIDATION.REVIEW.MAX_LENGTH,
    },

    rating: {
      type: Number,
      required: true,
      enum: TESTIMONIAL_RATINGS,
      default: TESTIMONIAL_DEFAULT.RATING,
      min: TESTIMONIAL_VALIDATION.RATING.MIN,
      max: TESTIMONIAL_VALIDATION.RATING.MAX,
    },

    clientType: {
      type: String,
      required: true,
      enum: TESTIMONIAL_TYPES,
      default: TESTIMONIAL_DEFAULT.CLIENT_TYPE,
    },

    isFeatured: {
      type: Boolean,
      default: TESTIMONIAL_DEFAULT.IS_FEATURED,
    },

    sortOrder: {
      type: Number,
      default: TESTIMONIAL_DEFAULT.SORT_ORDER,
      min: TESTIMONIAL_VALIDATION.SORT_ORDER.MIN,
      max: TESTIMONIAL_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: TESTIMONIAL_DEFAULT.IS_ACTIVE,
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
 * Client name lookup.
 */
testimonialSchema.index({
  clientName: 1,
});

/**
 * Client company lookup.
 */
testimonialSchema.index({
  clientCompany: 1,
});

/**
 * Project lookup.
 */
testimonialSchema.index({
  projectName: 1,
});

/**
 * Client type filtering.
 */
testimonialSchema.index({
  clientType: 1,
});

/**
 * Rating filtering.
 */
testimonialSchema.index({
  rating: 1,
});

/**
 * Featured testimonials.
 */
testimonialSchema.index({
  isFeatured: 1,
});

/**
 * Active testimonials.
 */
testimonialSchema.index({
  isActive: 1,
});

/**
 * Portfolio ordering.
 */
testimonialSchema.index({
  sortOrder: 1,
});

/**
 * Recently created.
 */
testimonialSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
testimonialSchema.index({
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Featured active testimonials.
 */
testimonialSchema.index({
  isActive: 1,
  isFeatured: 1,
});

/**
 * Highest-rated active testimonials.
 */
testimonialSchema.index({
  isActive: 1,
  rating: -1,
});

/**
 * Portfolio display ordering.
 */
testimonialSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Client type listing.
 */
testimonialSchema.index({
  clientType: 1,
  isActive: 1,
});

/**
 * Company testimonials.
 */
testimonialSchema.index({
  clientCompany: 1,
  isActive: 1,
});

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

testimonialSchema.index({
  clientName: 'text',
  clientPosition: 'text',
  clientCompany: 'text',
  projectName: 'text',
  review: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize string fields before saving.
 */
testimonialSchema.pre('save', function (this: TTestimonialDocument) {
  if (this.isModified('clientWebsite') && this.clientWebsite) {
    this.clientWebsite = this.clientWebsite.trim();
  }

  if (this.isModified('clientName')) {
    this.clientName = this.clientName.trim();
  }

  if (this.isModified('clientCompany') && this.clientCompany) {
    this.clientCompany = this.clientCompany.trim();
  }

  if (this.isModified('clientPosition') && this.clientPosition) {
    this.clientPosition = this.clientPosition.trim();
  }

  if (this.isModified('projectName') && this.projectName) {
    this.projectName = this.projectName.trim();
  }

  if (this.isModified('review')) {
    this.review = this.review.trim();
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the testimonial should be visible publicly.
 */
testimonialSchema.virtual('isVisible').get(function (this: TTestimonialDocument) {
  return this.isActive;
});

/**
 * Client display name.
 *
 * Example:
 * John Doe • Microsoft
 */
testimonialSchema.virtual('displayName').get(function (this: TTestimonialDocument) {
  if (this.clientCompany) {
    return `${this.clientName} • ${this.clientCompany}`;
  }

  return this.clientName;
});

/**
 * Whether the testimonial has a client image.
 */
testimonialSchema.virtual('hasClientImage').get(function (this: TTestimonialDocument) {
  return Boolean(this.clientImage?.url);
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Testimonial = model<ITestimonial, ITestimonialModel>('Testimonial', testimonialSchema);
