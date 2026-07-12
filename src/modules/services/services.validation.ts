/**
 * Service validation schemas.
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

import { SERVICES_DEFAULT, SERVICES_VALIDATION } from './services.constant.js';

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
        SERVICES_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Image URL cannot exceed ${SERVICES_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Image public ID is required',
      })
      .trim()
      .min(1, 'Image public ID is required')
      .max(
        SERVICES_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Image public ID cannot exceed ${SERVICES_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const titleSchema = z
  .string({
    error: 'Title is required',
  })
  .trim()
  .min(
    SERVICES_VALIDATION.TITLE.MIN_LENGTH,
    `Title must be at least ${SERVICES_VALIDATION.TITLE.MIN_LENGTH} characters`,
  )
  .max(
    SERVICES_VALIDATION.TITLE.MAX_LENGTH,
    `Title cannot exceed ${SERVICES_VALIDATION.TITLE.MAX_LENGTH} characters`,
  );

const shortDescriptionSchema = z
  .string({
    error: 'Short description is required',
  })
  .trim()
  .min(1, 'Short description is required')
  .max(
    SERVICES_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH,
    `Short description cannot exceed ${SERVICES_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH} characters`,
  );

const descriptionSchema = z
  .string({
    error: 'Description is required',
  })
  .trim()
  .min(1, 'Description is required')
  .max(
    SERVICES_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${SERVICES_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const priceSchema = z.coerce
  .number({
    error: 'Price must be a valid number',
  })
  .min(SERVICES_VALIDATION.PRICE.MIN, 'Price cannot be negative')
  .max(SERVICES_VALIDATION.PRICE.MAX, `Price cannot exceed ${SERVICES_VALIDATION.PRICE.MAX}`);

const currencySchema = z
  .string()
  .trim()
  .length(SERVICES_VALIDATION.CURRENCY.MAX_LENGTH, 'Currency must be a valid ISO 4217 code')
  .transform((value) => value.toUpperCase())
  .default(SERVICES_DEFAULT.CURRENCY);

const sortOrderSchema = z.coerce
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(SERVICES_VALIDATION.SORT_ORDER.MIN, 'Sort order cannot be negative')
  .max(
    SERVICES_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${SERVICES_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(SERVICES_DEFAULT.SORT_ORDER);

const isActiveSchema = z.boolean().default(SERVICES_DEFAULT.IS_ACTIVE);
/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createServiceBodySchema = z
  .object({
    title: titleSchema,

    shortDescription: shortDescriptionSchema,

    description: descriptionSchema,

    image: imageSchema.optional(),

    price: priceSchema.optional(),

    currency: currencySchema,

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.price !== undefined && data.price > 0 && !data.currency) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'Currency is required when price is specified',
      });
    }

    if (data.price === 0 && data.currency !== SERVICES_DEFAULT.CURRENCY) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'Free services should use the default currency',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateServiceBodySchema = z
  .object({
    title: titleSchema.optional(),

    shortDescription: shortDescriptionSchema.optional(),

    description: descriptionSchema.optional(),

    image: imageSchema.optional(),

    price: priceSchema.optional(),

    currency: currencySchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.price !== undefined && data.price > 0 && data.currency === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'Currency must also be updated when changing the price',
      });
    }

    if (
      data.price !== undefined &&
      data.price === 0 &&
      data.currency !== undefined &&
      data.currency !== SERVICES_DEFAULT.CURRENCY
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'Free services should use the default currency',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createServiceValidationSchema = z
  .object({
    body: createServiceBodySchema,
  })
  .strict();

const updateServiceValidationSchema = z
  .object({
    body: updateServiceBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ServicesValidation = Object.freeze({
  createServiceValidationSchema,

  updateServiceValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateServiceInput = z.infer<typeof createServiceBodySchema>;

export type TUpdateServiceInput = z.infer<typeof updateServiceBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  titleSchema,
  shortDescriptionSchema,
  descriptionSchema,
  priceSchema,
  currencySchema,
  sortOrderSchema,
  isActiveSchema,
  createServiceBodySchema,
  updateServiceBodySchema,
};
