// src/modules/about/about.validation.ts

/**
 * About validation schemas.
 *
 * Structure:
 * 1. Imports
 * 2. Helper Schemas
 * 3. Reusable Validators
 * 4. Create Schema
 * 5. Update Schema
 * 6. Request Schemas
 * 7. Export
 * 8. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

import { ABOUT_DEFAULT, ABOUT_VALIDATION } from './about.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

/**
 * Image schema.
 */
const imageSchema = z
  .object({
    url: z.string().trim().url('Image URL must be a valid URL'),

    publicId: z.string().trim().min(1, 'Image public ID is required'),
  })
  .strict();

/**
 * About statistic schema.
 */
const statSchema = z
  .object({
    label: z
      .string()
      .trim()
      .min(1, 'Stat label is required')
      .max(
        ABOUT_VALIDATION.STAT.LABEL_MAX_LENGTH,
        `Stat label cannot exceed ${ABOUT_VALIDATION.STAT.LABEL_MAX_LENGTH} characters`,
      ),

    value: z
      .string()
      .trim()
      .min(1, 'Stat value is required')
      .max(
        ABOUT_VALIDATION.STAT.VALUE_MAX_LENGTH,
        `Stat value cannot exceed ${ABOUT_VALIDATION.STAT.VALUE_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                            Reusable Validators                             */
/* -------------------------------------------------------------------------- */

/**
 * Gallery images.
 */
const imagesSchema = z
  .array(imageSchema)
  .min(1, 'At least one image is required')
  .max(
    ABOUT_VALIDATION.IMAGE.MAX_COUNT,
    `Maximum ${ABOUT_VALIDATION.IMAGE.MAX_COUNT} images are allowed`,
  )
  .superRefine((images, ctx) => {
    const publicIds = new Set<string>();
    const urls = new Set<string>();

    images.forEach((image, index) => {
      if (publicIds.has(image.publicId)) {
        ctx.addIssue({
          code: 'custom',
          path: [index, 'publicId'],
          message: 'Duplicate image public ID is not allowed',
        });
      }

      publicIds.add(image.publicId);

      if (urls.has(image.url)) {
        ctx.addIssue({
          code: 'custom',
          path: [index, 'url'],
          message: 'Duplicate image URL is not allowed',
        });
      }

      urls.add(image.url);
    });
  });

/**
 * Portfolio statistics.
 */
const statsSchema = z
  .array(statSchema)
  .max(
    ABOUT_VALIDATION.STAT.MAX_COUNT,
    `Maximum ${ABOUT_VALIDATION.STAT.MAX_COUNT} statistics are allowed`,
  )
  .superRefine((stats, ctx) => {
    const labels = new Set<string>();

    stats.forEach((stat, index) => {
      const normalizedLabel = stat.label.trim().toLowerCase();

      if (labels.has(normalizedLabel)) {
        ctx.addIssue({
          code: 'custom',
          path: [index, 'label'],
          message: 'Duplicate stat labels are not allowed',
        });
      }

      labels.add(normalizedLabel);
    });
  });

/**
 * Email validator.
 */
const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .max(
    ABOUT_VALIDATION.EMAIL.MAX_LENGTH,
    `Email cannot exceed ${ABOUT_VALIDATION.EMAIL.MAX_LENGTH} characters`,
  )
  .email('Email must be a valid email address');

/**
 * Phone validator.
 */
const phoneSchema = z
  .string()
  .trim()
  .regex(/^[+()0-9\s-]{7,20}$/, 'Phone number must be a valid phone number')
  .max(
    ABOUT_VALIDATION.PHONE.MAX_LENGTH,
    `Phone number cannot exceed ${ABOUT_VALIDATION.PHONE.MAX_LENGTH} characters`,
  );

/**
 * Resume URL validator.
 *
 * Supports:
 * - Relative paths
 * - HTTP URLs
 * - HTTPS URLs
 */
const resumeUrlSchema = z
  .string()
  .trim()
  .max(
    ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH,
    `Resume URL cannot exceed ${ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH} characters`,
  )
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'Resume URL must be a valid URL or relative path',
  });
/* -------------------------------------------------------------------------- */
/*                               Create Schema                                */
/* -------------------------------------------------------------------------- */

const createAboutBodySchema = z
  .object({
    /**
     * Primary profile image.
     */
    profileImage: imageSchema.optional(),

    /**
     * Gallery images.
     */
    images: imagesSchema,

    /**
     * Full name.
     */
    fullName: z
      .string()
      .trim()
      .min(
        ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,
        `Full name must be at least ${ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH} characters`,
      )
      .max(
        ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,
        `Full name cannot exceed ${ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH} characters`,
      ),

    /**
     * Professional designation.
     */
    designation: z
      .string()
      .trim()
      .min(
        ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,
        `Designation must be at least ${ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH} characters`,
      )
      .max(
        ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,
        `Designation cannot exceed ${ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH} characters`,
      ),

    /**
     * Biography.
     */
    bio: z
      .string()
      .trim()
      .min(ABOUT_VALIDATION.BIO.MIN_LENGTH, 'Bio is required')
      .max(
        ABOUT_VALIDATION.BIO.MAX_LENGTH,
        `Bio cannot exceed ${ABOUT_VALIDATION.BIO.MAX_LENGTH} characters`,
      ),

    /**
     * Email.
     */
    email: emailSchema.optional(),

    /**
     * Phone.
     */
    phone: phoneSchema.optional(),

    /**
     * Address.
     */
    address: z
      .string()
      .trim()
      .max(
        ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,
        `Address cannot exceed ${ABOUT_VALIDATION.ADDRESS.MAX_LENGTH} characters`,
      )
      .optional(),

    /**
     * Resume URL.
     */
    resumeUrl: resumeUrlSchema.optional(),

    /**
     * Years of experience.
     *
     * z.coerce.number() allows:
     * "5" -> 5
     */
    yearsOfExperience: z.coerce
      .number({
        error: 'Years of experience must be a number',
      })
      .int('Years of experience must be an integer')
      .min(
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,
        `Years of experience must be at least ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN}`,
      )
      .max(
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,
        `Years of experience cannot exceed ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX}`,
      )
      .optional(),

    /**
     * Portfolio statistics.
     */
    stats: statsSchema.optional(),

    /**
     * Active status.
     */
    isActive: z.boolean().default(ABOUT_DEFAULT.IS_ACTIVE),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                               Update Schema                                */
/* -------------------------------------------------------------------------- */

const updateAboutBodySchema = z
  .object({
    /**
     * Primary profile image.
     */
    profileImage: imageSchema.optional(),

    /**
     * Gallery images.
     */
    images: imagesSchema.optional(),

    /**
     * Full name.
     */
    fullName: z
      .string()
      .trim()
      .min(
        ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,
        `Full name must be at least ${ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH} characters`,
      )
      .max(
        ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,
        `Full name cannot exceed ${ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH} characters`,
      )
      .optional(),

    /**
     * Designation.
     */
    designation: z
      .string()
      .trim()
      .min(
        ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,
        `Designation must be at least ${ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH} characters`,
      )
      .max(
        ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,
        `Designation cannot exceed ${ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH} characters`,
      )
      .optional(),

    /**
     * Biography.
     */
    bio: z
      .string()
      .trim()
      .min(ABOUT_VALIDATION.BIO.MIN_LENGTH, 'Bio is required')
      .max(
        ABOUT_VALIDATION.BIO.MAX_LENGTH,
        `Bio cannot exceed ${ABOUT_VALIDATION.BIO.MAX_LENGTH} characters`,
      )
      .optional(),

    /**
     * Email.
     */
    email: emailSchema.optional(),

    /**
     * Phone.
     */
    phone: phoneSchema.optional(),

    /**
     * Address.
     */
    address: z
      .string()
      .trim()
      .max(
        ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,
        `Address cannot exceed ${ABOUT_VALIDATION.ADDRESS.MAX_LENGTH} characters`,
      )
      .optional(),

    /**
     * Resume URL.
     */
    resumeUrl: resumeUrlSchema.optional(),

    /**
     * Years of experience.
     */
    yearsOfExperience: z.coerce
      .number({
        error: 'Years of experience must be a number',
      })
      .int('Years of experience must be an integer')
      .min(
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,
        `Years of experience must be at least ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN}`,
      )
      .max(
        ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,
        `Years of experience cannot exceed ${ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX}`,
      )
      .optional(),

    /**
     * Portfolio statistics.
     */
    stats: statsSchema.optional(),

    /**
     * Active status.
     */
    isActive: z.boolean().optional(),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                              Request Schemas                               */
/* -------------------------------------------------------------------------- */

const createAboutValidationSchema = z
  .object({
    body: createAboutBodySchema,
  })
  .strict();

const updateAboutValidationSchema = z
  .object({
    body: updateAboutBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

/**
 * About validation schemas.
 */
export const AboutValidation = Object.freeze({
  createAboutValidationSchema,

  updateAboutValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

/**
 * Create About request body.
 */
export type TCreateAboutInput = z.infer<typeof createAboutBodySchema>;

/**
 * Update About request body.
 */
export type TUpdateAboutInput = z.infer<typeof updateAboutBodySchema>;
