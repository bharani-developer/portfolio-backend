// src/modules/hero/hero.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import { HERO_DEFAULT, HERO_VALIDATION } from './hero.constant.js';

import type { IHero, IHeroModel, THeroDocument } from './hero.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const heroSchema = new Schema<IHero, IHeroModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: HERO_VALIDATION.TITLE.MIN_LENGTH,
      maxlength: HERO_VALIDATION.TITLE.MAX_LENGTH,
    },

    subtitle: {
      type: String,
      required: true,
      trim: true,
      minlength: HERO_VALIDATION.SUBTITLE.MIN_LENGTH,
      maxlength: HERO_VALIDATION.SUBTITLE.MAX_LENGTH,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: HERO_VALIDATION.DESCRIPTION.MIN_LENGTH,
      maxlength: HERO_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    profileImage: {
      type: imageSchema,
    },

    resumeUrl: {
      type: String,
      trim: true,
      maxlength: HERO_VALIDATION.RESUME_URL.MAX_LENGTH,
    },

    ctaButtonText: {
      type: String,
      trim: true,
      maxlength: HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH,
    },

    ctaButtonLink: {
      type: String,
      trim: true,
      maxlength: HERO_VALIDATION.CTA_BUTTON_LINK.MAX_LENGTH,
    },

    technologies: {
      type: [String],
      default: [],

      validate: [
        {
          validator(technologies: string[]) {
            return technologies.length <= HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT;
          },

          message: `Maximum ${HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT} technologies are allowed.`,
        },

        {
          validator(technologies: string[]) {
            return technologies.every(
              (technology) =>
                technology.trim().length > 0 &&
                technology.length <= HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
            );
          },

          message: 'Invalid technology.',
        },

        {
          validator(technologies: string[]) {
            const normalized = technologies.map((technology) => technology.trim().toLowerCase());

            return new Set(normalized).size === normalized.length;
          },

          message: 'Duplicate technologies are not allowed.',
        },
      ],
    },

    isActive: {
      type: Boolean,
      default: HERO_DEFAULT.IS_ACTIVE,
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
 * Active hero section.
 */
heroSchema.index({
  isActive: 1,
});

/**
 * Recently created.
 */
heroSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
heroSchema.index({
  updatedAt: -1,
});

/**
 * Technology filtering.
 */
heroSchema.index({
  technologies: 1,
});

/**
 * Resume URL lookup.
 */
heroSchema.index({
  resumeUrl: 1,
});
/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Active hero section.
 */
heroSchema.index({
  isActive: 1,
  updatedAt: -1,
});

/**
 * Active technologies.
 */
heroSchema.index({
  isActive: 1,
  technologies: 1,
});
/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio hero search.
 */
heroSchema.index({
  title: 'text',
  subtitle: 'text',
  description: 'text',
  technologies: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize technologies before validation.
 */
heroSchema.pre('validate', function (this: THeroDocument) {
  if (!this.isModified('technologies')) {
    return;
  }

  this.technologies = [
    ...new Set(this.technologies.map((technology: string) => technology.trim()).filter(Boolean)),
  ];
});

/**
 * Normalize string fields before saving.
 */
heroSchema.pre('save', function (this: THeroDocument) {
  if (this.isModified('title')) {
    this.title = this.title.trim();
  }

  if (this.isModified('subtitle')) {
    this.subtitle = this.subtitle.trim();
  }

  if (this.isModified('description')) {
    this.description = this.description.trim();
  }

  if (this.isModified('resumeUrl') && this.resumeUrl) {
    this.resumeUrl = this.resumeUrl.trim();
  }

  if (this.isModified('ctaButtonText') && this.ctaButtonText) {
    this.ctaButtonText = this.ctaButtonText.trim();
  }

  if (this.isModified('ctaButtonLink') && this.ctaButtonLink) {
    this.ctaButtonLink = this.ctaButtonLink.trim();
  }
});
/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Total technologies.
 */
heroSchema.virtual('technologyCount').get(function (this: THeroDocument) {
  return this.technologies.length;
});

/**
 * Whether the Hero section has a resume.
 */
heroSchema.virtual('hasResume').get(function (this: THeroDocument) {
  return Boolean(this.resumeUrl);
});

/**
 * Whether the Hero section has a profile image.
 */
heroSchema.virtual('hasProfileImage').get(function (this: THeroDocument) {
  return Boolean(this.profileImage);
});

/**
 * Whether the Hero section has CTA configured.
 */
heroSchema.virtual('hasCallToAction').get(function (this: THeroDocument) {
  return Boolean(this.ctaButtonText && this.ctaButtonLink);
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Hero = model<IHero, IHeroModel>('Hero', heroSchema);
