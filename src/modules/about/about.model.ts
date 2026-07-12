// src/modules/about/about.model.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { ABOUT_DEFAULT, ABOUT_VALIDATION } from './about.constant.js';

import { imageSchema } from '../../shared/schemas/index.js';
import type { IImage } from '../../shared/types/image.type.js';

import type { IAbout, IAboutModel } from './about.types.js';

/* -------------------------------------------------------------------------- */
/*                              About Stats Schema                            */
/* -------------------------------------------------------------------------- */

const aboutStatsSchema = new Schema(
  {
    label: {
      type: String,
      required: [true, 'Stat label is required'],
      trim: true,
      maxlength: [
        ABOUT_VALIDATION.STAT.LABEL_MAX_LENGTH,
        `Stat label cannot exceed ${ABOUT_VALIDATION.STAT.LABEL_MAX_LENGTH} characters`,
      ],
    },

    value: {
      type: String,
      required: [true, 'Stat value is required'],
      trim: true,
      maxlength: [
        ABOUT_VALIDATION.STAT.VALUE_MAX_LENGTH,
        `Stat value cannot exceed ${ABOUT_VALIDATION.STAT.VALUE_MAX_LENGTH} characters`,
      ],
    },
  },
  {
    _id: false,
  },
);

/* -------------------------------------------------------------------------- */
/*                                Main Schema                                 */
/* -------------------------------------------------------------------------- */

const aboutSchema = new Schema<IAbout, IAboutModel>(
  {
    /* ---------------------------------------------------------------------- */
    /*                              Profile Image                             */
    /* ---------------------------------------------------------------------- */

    profileImage: {
      type: imageSchema,
      required: false,
    },

    /* ---------------------------------------------------------------------- */
    /*                              Gallery Images                            */
    /* ---------------------------------------------------------------------- */

    images: {
      type: [imageSchema],

      required: [true, 'At least one image is required'],

      validate: [
        {
          validator(images: readonly IImage[]) {
            return Array.isArray(images) && images.length > 0;
          },

          message: 'At least one image is required',
        },

        {
          validator(images: readonly IImage[]) {
            return images.length <= ABOUT_VALIDATION.IMAGE.MAX_COUNT;
          },

          message: `Maximum ${ABOUT_VALIDATION.IMAGE.MAX_COUNT} images are allowed`,
        },

        {
          validator(images: readonly IImage[]) {
            const publicIds = images.map((image) => image.publicId);

            return new Set(publicIds).size === publicIds.length;
          },

          message: 'Duplicate image public IDs are not allowed',
        },

        {
          validator(images: readonly IImage[]) {
            const urls = images.map((image) => image.url);

            return new Set(urls).size === urls.length;
          },

          message: 'Duplicate image URLs are not allowed',
        },
      ],
    },

    /* ---------------------------------------------------------------------- */
    /*                             Basic Details                              */
    /* ---------------------------------------------------------------------- */

    fullName: {
      type: String,

      required: [true, 'Full name is required'],

      trim: true,

      minlength: [
        ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,
        `Full name must be at least ${ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH} characters`,
      ],

      maxlength: [
        ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,
        `Full name cannot exceed ${ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH} characters`,
      ],
    },

    designation: {
      type: String,

      required: [true, 'Designation is required'],

      trim: true,

      minlength: [
        ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,
        `Designation must be at least ${ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH} characters`,
      ],

      maxlength: [
        ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,
        `Designation cannot exceed ${ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH} characters`,
      ],
    },

    bio: {
      type: String,

      required: [true, 'Bio is required'],

      trim: true,

      minlength: [ABOUT_VALIDATION.BIO.MIN_LENGTH, 'Bio is required'],

      maxlength: [
        ABOUT_VALIDATION.BIO.MAX_LENGTH,
        `Bio cannot exceed ${ABOUT_VALIDATION.BIO.MAX_LENGTH} characters`,
      ],
    },
    /* ---------------------------------------------------------------------- */
    /*                              Contact Info                              */
    /* ---------------------------------------------------------------------- */

    email: {
      type: String,

      trim: true,

      lowercase: true,

      maxlength: [
        ABOUT_VALIDATION.EMAIL.MAX_LENGTH,
        `Email cannot exceed ${ABOUT_VALIDATION.EMAIL.MAX_LENGTH} characters`,
      ],

      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email must be a valid email address'],

      // Enable these only if email must be unique.
      // unique: true,
      // sparse: true,
    },

    phone: {
      type: String,

      trim: true,

      maxlength: [
        ABOUT_VALIDATION.PHONE.MAX_LENGTH,
        `Phone number cannot exceed ${ABOUT_VALIDATION.PHONE.MAX_LENGTH} characters`,
      ],

      validate: {
        validator(value: string | undefined) {
          if (!value) {
            return true;
          }

          return /^[+()0-9\s-]{7,20}$/.test(value);
        },

        message: 'Phone number must be a valid phone number',
      },
    },

    address: {
      type: String,

      trim: true,

      maxlength: [
        ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,
        `Address cannot exceed ${ABOUT_VALIDATION.ADDRESS.MAX_LENGTH} characters`,
      ],
    },

    resumeUrl: {
      type: String,

      trim: true,

      maxlength: [
        ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH,
        `Resume URL cannot exceed ${ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH} characters`,
      ],

      validate: {
        validator(value: string | undefined) {
          if (!value) {
            return true;
          }

          return value.startsWith('/') || /^https?:\/\/.+$/i.test(value);
        },

        message: 'Resume URL must be a valid URL or relative path',
      },
    },

    /* ---------------------------------------------------------------------- */
    /*                        Professional Experience                         */
    /* ---------------------------------------------------------------------- */

    yearsOfExperience: {
      type: Number,

      min: [
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,
        `Years of experience cannot be less than ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN}`,
      ],

      max: [
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,
        `Years of experience cannot exceed ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX}`,
      ],
    },

    /* ---------------------------------------------------------------------- */
    /*                              Statistics                                */
    /* ---------------------------------------------------------------------- */

    stats: {
      type: [aboutStatsSchema],

      default: [],

      validate: [
        {
          validator(stats: IAbout['stats']) {
            return !stats || stats.length <= ABOUT_VALIDATION.STAT.MAX_COUNT;
          },

          message: `Maximum ${ABOUT_VALIDATION.STAT.MAX_COUNT} statistics are allowed`,
        },

        {
          validator(stats: IAbout['stats']) {
            if (!stats) {
              return true;
            }

            const labels = stats.map((stat) => stat.label.trim().toLowerCase());

            return new Set(labels).size === labels.length;
          },

          message: 'Duplicate stat labels are not allowed',
        },
      ],
    },

    /* ---------------------------------------------------------------------- */
    /*                             Active Status                              */
    /* ---------------------------------------------------------------------- */

    isActive: {
      type: Boolean,

      required: true,

      default: ABOUT_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,

    versionKey: false,
  },
);
/* -------------------------------------------------------------------------- */
/*                               Schema Options                               */
/* -------------------------------------------------------------------------- */

aboutSchema.set('toObject', {
  virtuals: true,

  versionKey: false,

  transform: (_doc, ret) => {
    Reflect.deleteProperty(ret as object, '__v');

    return ret;
  },
});

aboutSchema.set('toObject', {
  virtuals: true,

  versionKey: false,

  transform: (_doc, ret) => {
    Reflect.deleteProperty(ret as object, '__v');

    return ret;
  },
});

/* -------------------------------------------------------------------------- */
/*                               Query Indexes                                */
/* -------------------------------------------------------------------------- */

/**
 * Active About section.
 */
aboutSchema.index({
  isActive: 1,
});

/**
 * Sorting.
 */
aboutSchema.index({
  createdAt: -1,
});

aboutSchema.index({
  updatedAt: -1,
});

/**
 * Optional email lookup.
 *
 * If you enable `unique: true` on email,
 * this index will automatically become unique.
 */
aboutSchema.index(
  {
    email: 1,
  },
  {
    sparse: true,
  },
);

/* -------------------------------------------------------------------------- */
/*                             Compound Indexes                               */
/* -------------------------------------------------------------------------- */

/**
 * Active About sorted by latest update.
 */
aboutSchema.index({
  isActive: 1,
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                              Text Search                                   */
/* -------------------------------------------------------------------------- */

aboutSchema.index({
  fullName: 'text',
  designation: 'text',
  bio: 'text',
  address: 'text',
});

/* -------------------------------------------------------------------------- */
/*                             Performance Indexes                            */
/* -------------------------------------------------------------------------- */

/**
 * Useful for admin dashboard filtering.
 */
aboutSchema.index({
  fullName: 1,
});

aboutSchema.index({
  designation: 1,
});
/* -------------------------------------------------------------------------- */
/*                                 Middleware                                 */
/* -------------------------------------------------------------------------- */

/**
 * Normalize email before saving.
 */
aboutSchema.pre('save', function () {
  if (this.isModified('email') && this.email) {
    this.email = this.email.trim().toLowerCase();
  }
});

/**
 * Normalize email before update operations.
 */
aboutSchema.pre('findOneAndUpdate', function () {
  const update = this.getUpdate();

  if (!update || Array.isArray(update)) {
    return;
  }

  const normalizeEmail = (target: Record<string, unknown>) => {
    if (typeof target.email === 'string') {
      target.email = target.email.trim().toLowerCase();
    }
  };

  normalizeEmail(update as Record<string, unknown>);

  const $set = (update as Record<string, unknown>).$set;

  if ($set && typeof $set === 'object' && !Array.isArray($set)) {
    normalizeEmail($set as Record<string, unknown>);
  }
});

/* -------------------------------------------------------------------------- */
/*                                  Virtuals                                  */
/* -------------------------------------------------------------------------- */

/**
 * Total gallery images.
 */
aboutSchema.virtual('totalImages').get(function () {
  return this.images?.length ?? 0;
});

/**
 * Total statistics.
 */
aboutSchema.virtual('totalStats').get(function () {
  return this.stats?.length ?? 0;
});

/* -------------------------------------------------------------------------- */
/*                               Model Export                                 */
/* -------------------------------------------------------------------------- */

export const About = model<IAbout, IAboutModel>('About', aboutSchema);
