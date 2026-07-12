// src/modules/services/services.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { SERVICES_DEFAULT, SERVICES_VALIDATION } from './services.constant.js';

import type { IService, IServiceModel, TServiceDocument } from './services.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

/**
 * Reusable image schema.
 */
const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
      maxlength: SERVICES_VALIDATION.IMAGE.URL_MAX_LENGTH,
    },

    publicId: {
      type: String,
      required: true,
      trim: true,
      maxlength: SERVICES_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const servicesSchema = new Schema<IService, IServiceModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: SERVICES_VALIDATION.TITLE.MIN_LENGTH,
      maxlength: SERVICES_VALIDATION.TITLE.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: SERVICES_VALIDATION.TITLE.MAX_LENGTH,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: SERVICES_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: SERVICES_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    image: {
      type: imageSchema,
      required: false,
    },

    price: {
      type: Number,
      min: SERVICES_VALIDATION.PRICE.MIN,
      max: SERVICES_VALIDATION.PRICE.MAX,
      default: null,
    },

    currency: {
      type: String,
      trim: true,
      uppercase: true,
      minlength: SERVICES_VALIDATION.CURRENCY.MIN_LENGTH,
      maxlength: SERVICES_VALIDATION.CURRENCY.MAX_LENGTH,
      default: SERVICES_DEFAULT.CURRENCY,
    },

    sortOrder: {
      type: Number,
      default: SERVICES_DEFAULT.SORT_ORDER,
      min: SERVICES_VALIDATION.SORT_ORDER.MIN,
      max: SERVICES_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: SERVICES_DEFAULT.IS_ACTIVE,
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
 * Slug lookup.
 *
 * Note:
 * `unique: true` already creates a unique index.
 */
servicesSchema.index({
  slug: 1,
});

/**
 * Title lookup.
 */
servicesSchema.index({
  title: 1,
});

/**
 * Active services.
 */
servicesSchema.index({
  isActive: 1,
});

/**
 * Portfolio ordering.
 */
servicesSchema.index({
  sortOrder: 1,
});

/**
 * Price filtering/sorting.
 */
servicesSchema.index({
  price: 1,
});

/**
 * Currency filtering.
 */
servicesSchema.index({
  currency: 1,
});

/**
 * Recently created services.
 */
servicesSchema.index({
  createdAt: -1,
});

/**
 * Recently updated services.
 */
servicesSchema.index({
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio listing.
 */
servicesSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Active title lookup.
 */
servicesSchema.index({
  isActive: 1,
  title: 1,
});

/**
 * Active services by price.
 */
servicesSchema.index({
  isActive: 1,
  price: 1,
});

/**
 * Active services by currency.
 */
servicesSchema.index({
  isActive: 1,
  currency: 1,
});

/**
 * Recently created active services.
 */
servicesSchema.index({
  isActive: 1,
  createdAt: -1,
});

/**
 * Recently updated active services.
 */
servicesSchema.index({
  isActive: 1,
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

servicesSchema.index({
  title: 'text',
  shortDescription: 'text',
  description: 'text',
});

/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize title before validation.
 */
servicesSchema.pre('validate', function (this: TServiceDocument) {
  if (this.isModified('title')) {
    this.title = this.title.trim();
  }
});

/**
 * Normalize image.
 */
servicesSchema.pre('save', function (this: TServiceDocument) {
  if (this.image) {
    this.image.url = this.image.url.trim();
    this.image.publicId = this.image.publicId.trim();
  }
});

/**
 * Normalize title.
 */
servicesSchema.pre('save', function (this: TServiceDocument) {
  if (this.isModified('title')) {
    this.title = this.title.trim();
  }
});

/**
 * Normalize short description.
 */
servicesSchema.pre('save', function (this: TServiceDocument) {
  if (this.isModified('shortDescription')) {
    this.shortDescription = this.shortDescription.trim();
  }
});

/**
 * Normalize description.
 */
servicesSchema.pre('save', function (this: TServiceDocument) {
  if (this.isModified('description')) {
    this.description = this.description.trim();
  }
});

/**
 * Normalize currency.
 */
servicesSchema.pre('save', function (this: TServiceDocument) {
  if (this.isModified('currency') && this.currency) {
    this.currency = this.currency.trim().toUpperCase();
  }
});
/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Indicates whether the service is publicly visible.
 */
servicesSchema.virtual('isVisible').get(function (this: TServiceDocument) {
  return this.isActive;
});

/**
 * Indicates whether the service has an image.
 */
servicesSchema.virtual('hasImage').get(function (this: TServiceDocument) {
  return Boolean(this.image?.url);
});

/**
 * Indicates whether the service has pricing.
 */
servicesSchema.virtual('hasPrice').get(function (this: TServiceDocument) {
  return typeof this.price === 'number';
});

/**
 * Formatted price.
 *
 * Examples:
 * - INR 4,999
 * - USD 199
 */
servicesSchema.virtual('formattedPrice').get(function (this: TServiceDocument) {
  if (typeof this.price !== 'number') {
    return null;
  }

  return `${this.currency} ${this.price.toLocaleString('en-IN')}`;
});

/**
 * Service title length.
 */
servicesSchema.virtual('titleLength').get(function (this: TServiceDocument) {
  return this.title.length;
});

/**
 * Short description length.
 */
servicesSchema.virtual('shortDescriptionLength').get(function (this: TServiceDocument) {
  return this.shortDescription.length;
});

/**
 * Description length.
 */
servicesSchema.virtual('descriptionLength').get(function (this: TServiceDocument) {
  return this.description.length;
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Service = model<IService, IServiceModel>('Service', servicesSchema);
