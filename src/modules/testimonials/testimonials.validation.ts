/**
 * Testimonial validation schemas.
 *
 * Structure:
 * 1. Imports
 * 2. Helper Schemas
 * 3. Reusable Validators
 * 4. Base Schema
 * 5. Create Validation
 * 6. Update Validation
 * 7. Export
 * 8. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

import {
  TESTIMONIAL_DEFAULT,
  TESTIMONIAL_TYPES,
  TESTIMONIAL_VALIDATION,
} from './testimonials.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Image URL is required',
      })
      .trim()
      .url('Image URL must be a valid URL')
      .max(
        TESTIMONIAL_VALIDATION.CLIENT_IMAGE.URL_MAX_LENGTH,
        `Image URL cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Image public ID is required',
      })
      .trim()
      .min(1, 'Image public ID is required')
      .max(
        TESTIMONIAL_VALIDATION.CLIENT_IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Image public ID cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const clientNameSchema = z
  .string({
    error: 'Client name is required',
  })
  .trim()
  .min(
    TESTIMONIAL_VALIDATION.CLIENT_NAME.MIN_LENGTH,
    `Client name must be at least ${TESTIMONIAL_VALIDATION.CLIENT_NAME.MIN_LENGTH} characters`,
  )
  .max(
    TESTIMONIAL_VALIDATION.CLIENT_NAME.MAX_LENGTH,
    `Client name cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_NAME.MAX_LENGTH} characters`,
  );

const clientPositionSchema = z
  .string()
  .trim()
  .max(
    TESTIMONIAL_VALIDATION.CLIENT_POSITION.MAX_LENGTH,
    `Client position cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_POSITION.MAX_LENGTH} characters`,
  );

const clientCompanySchema = z
  .string()
  .trim()
  .max(
    TESTIMONIAL_VALIDATION.CLIENT_COMPANY.MAX_LENGTH,
    `Client company cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_COMPANY.MAX_LENGTH} characters`,
  );

const clientWebsiteSchema = z
  .string()
  .trim()
  .url('Client website must be a valid URL')
  .max(
    TESTIMONIAL_VALIDATION.CLIENT_WEBSITE.MAX_LENGTH,
    `Client website cannot exceed ${TESTIMONIAL_VALIDATION.CLIENT_WEBSITE.MAX_LENGTH} characters`,
  );

const projectNameSchema = z
  .string()
  .trim()
  .max(
    TESTIMONIAL_VALIDATION.PROJECT_NAME.MAX_LENGTH,
    `Project name cannot exceed ${TESTIMONIAL_VALIDATION.PROJECT_NAME.MAX_LENGTH} characters`,
  );

const reviewSchema = z
  .string({
    error: 'Review is required',
  })
  .trim()
  .min(
    TESTIMONIAL_VALIDATION.REVIEW.MIN_LENGTH,
    `Review must be at least ${TESTIMONIAL_VALIDATION.REVIEW.MIN_LENGTH} characters`,
  )
  .max(
    TESTIMONIAL_VALIDATION.REVIEW.MAX_LENGTH,
    `Review cannot exceed ${TESTIMONIAL_VALIDATION.REVIEW.MAX_LENGTH} characters`,
  );

const ratingSchema = z.coerce
  .number({
    error: 'Rating must be a valid number',
  })
  .int('Rating must be an integer')
  .min(
    TESTIMONIAL_VALIDATION.RATING.MIN,
    `Rating must be at least ${TESTIMONIAL_VALIDATION.RATING.MIN}`,
  )
  .max(
    TESTIMONIAL_VALIDATION.RATING.MAX,
    `Rating cannot exceed ${TESTIMONIAL_VALIDATION.RATING.MAX}`,
  )
  .default(TESTIMONIAL_DEFAULT.RATING);

const clientTypeSchema = z.enum(TESTIMONIAL_TYPES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid client type',
  }),
});

const sortOrderSchema = z.coerce
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    TESTIMONIAL_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${TESTIMONIAL_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    TESTIMONIAL_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${TESTIMONIAL_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(TESTIMONIAL_DEFAULT.SORT_ORDER);

const isFeaturedSchema = z.boolean().default(TESTIMONIAL_DEFAULT.IS_FEATURED);

const isActiveSchema = z.boolean().default(TESTIMONIAL_DEFAULT.IS_ACTIVE);
/* -------------------------------------------------------------------------- */
/*                     Create Testimonial Body Schema                         */
/* -------------------------------------------------------------------------- */

const createTestimonialBodySchema = z
  .object({
    clientName: clientNameSchema,

    clientPosition: clientPositionSchema.optional(),

    clientCompany: clientCompanySchema.optional(),

    clientImage: imageSchema.optional(),

    clientWebsite: clientWebsiteSchema.optional(),

    projectName: projectNameSchema.optional(),

    review: reviewSchema,

    rating: ratingSchema,

    clientType: clientTypeSchema,

    isFeatured: isFeaturedSchema,

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.clientWebsite && !data.clientCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientCompany'],
        message: 'Client company is required when client website is provided',
      });
    }

    if (data.clientPosition && !data.clientCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientCompany'],
        message: 'Client company is required when client position is provided',
      });
    }

    if (data.clientImage && data.clientImage.publicId.trim().length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientImage', 'publicId'],
        message: 'Image public ID cannot be empty',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                     Update Testimonial Body Schema                         */
/* -------------------------------------------------------------------------- */

const updateTestimonialBodySchema = z
  .object({
    clientName: clientNameSchema.optional(),

    clientPosition: clientPositionSchema.optional(),

    clientCompany: clientCompanySchema.optional(),

    clientImage: imageSchema.optional(),

    clientWebsite: clientWebsiteSchema.optional(),

    projectName: projectNameSchema.optional(),

    review: reviewSchema.optional(),

    rating: ratingSchema.optional(),

    clientType: clientTypeSchema.optional(),

    isFeatured: isFeaturedSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.clientWebsite !== undefined && !data.clientCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientCompany'],
        message: 'Client company must also be provided when updating client website',
      });
    }

    if (data.clientPosition !== undefined && !data.clientCompany) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientCompany'],
        message: 'Client company must also be provided when updating client position',
      });
    }

    if (data.clientImage && data.clientImage.publicId.trim().length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['clientImage', 'publicId'],
        message: 'Image public ID cannot be empty',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createTestimonialValidationSchema = z
  .object({
    body: createTestimonialBodySchema,
  })
  .strict();

const updateTestimonialValidationSchema = z
  .object({
    body: updateTestimonialBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const TestimonialsValidation = Object.freeze({
  createTestimonialValidationSchema,

  updateTestimonialValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateTestimonialInput = z.infer<typeof createTestimonialBodySchema>;

export type TUpdateTestimonialInput = z.infer<typeof updateTestimonialBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  clientNameSchema,
  clientPositionSchema,
  clientCompanySchema,
  clientWebsiteSchema,
  projectNameSchema,
  reviewSchema,
  ratingSchema,
  clientTypeSchema,
  sortOrderSchema,
  isFeaturedSchema,
  isActiveSchema,
  createTestimonialBodySchema,
  updateTestimonialBodySchema,
};
