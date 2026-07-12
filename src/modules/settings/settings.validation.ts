/**
 * Settings validation schemas.
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

import { SETTINGS_DEFAULT, SETTINGS_VALIDATION } from './settings.constant.js';

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
        SETTINGS_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Image URL cannot exceed ${SETTINGS_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Image public ID is required',
      })
      .trim()
      .min(1, 'Image public ID is required')
      .max(
        SETTINGS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Image public ID cannot exceed ${SETTINGS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const urlSchema = z.string().trim().url('Must be a valid URL');

const siteTitleSchema = z
  .string({
    error: 'Site title is required',
  })
  .trim()
  .min(
    SETTINGS_VALIDATION.SITE_TITLE.MIN_LENGTH,
    `Site title must be at least ${SETTINGS_VALIDATION.SITE_TITLE.MIN_LENGTH} characters`,
  )
  .max(
    SETTINGS_VALIDATION.SITE_TITLE.MAX_LENGTH,
    `Site title cannot exceed ${SETTINGS_VALIDATION.SITE_TITLE.MAX_LENGTH} characters`,
  );

const siteDescriptionSchema = z
  .string({
    error: 'Site description is required',
  })
  .trim()
  .min(
    SETTINGS_VALIDATION.SITE_DESCRIPTION.MIN_LENGTH,
    `Site description must be at least ${SETTINGS_VALIDATION.SITE_DESCRIPTION.MIN_LENGTH} characters`,
  )
  .max(
    SETTINGS_VALIDATION.SITE_DESCRIPTION.MAX_LENGTH,
    `Site description cannot exceed ${SETTINGS_VALIDATION.SITE_DESCRIPTION.MAX_LENGTH} characters`,
  );

const emailSchema = z
  .string({
    error: 'Email is required',
  })
  .trim()
  .toLowerCase()
  .email('Email must be a valid email address')
  .max(
    SETTINGS_VALIDATION.EMAIL.MAX_LENGTH,
    `Email cannot exceed ${SETTINGS_VALIDATION.EMAIL.MAX_LENGTH} characters`,
  );

const phoneSchema = z
  .string({
    error: 'Phone number is required',
  })
  .trim()
  .min(
    SETTINGS_VALIDATION.PHONE.MIN_LENGTH,
    `Phone number must be at least ${SETTINGS_VALIDATION.PHONE.MIN_LENGTH} characters`,
  )
  .max(
    SETTINGS_VALIDATION.PHONE.MAX_LENGTH,
    `Phone number cannot exceed ${SETTINGS_VALIDATION.PHONE.MAX_LENGTH} characters`,
  );

const addressSchema = z
  .string({
    error: 'Address is required',
  })
  .trim()
  .min(
    SETTINGS_VALIDATION.ADDRESS.MIN_LENGTH,
    `Address must be at least ${SETTINGS_VALIDATION.ADDRESS.MIN_LENGTH} characters`,
  )
  .max(
    SETTINGS_VALIDATION.ADDRESS.MAX_LENGTH,
    `Address cannot exceed ${SETTINGS_VALIDATION.ADDRESS.MAX_LENGTH} characters`,
  );

/* -------------------------------------------------------------------------- */
/*                              Social Links                                  */
/* -------------------------------------------------------------------------- */

const socialLinksCreateSchema = z
  .object({
    github: urlSchema.optional(),

    linkedin: urlSchema.optional(),

    twitter: urlSchema.optional(),

    facebook: urlSchema.optional(),

    instagram: urlSchema.optional(),

    youtube: urlSchema.optional(),

    leetcode: urlSchema.optional(),

    hackerrank: urlSchema.optional(),

    stackoverflow: urlSchema.optional(),
  })
  .strict();

const socialLinksUpdateSchema = z
  .object({
    github: urlSchema.optional(),

    linkedin: urlSchema.optional(),

    twitter: urlSchema.optional(),

    facebook: urlSchema.optional(),

    instagram: urlSchema.optional(),

    youtube: urlSchema.optional(),

    leetcode: urlSchema.optional(),

    hackerrank: urlSchema.optional(),

    stackoverflow: urlSchema.optional(),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                  SEO                                       */
/* -------------------------------------------------------------------------- */

const metaKeywordSchema = z
  .string()
  .trim()
  .min(1, 'Keyword cannot be empty')
  .max(
    SETTINGS_VALIDATION.SEO.KEYWORDS.MAX_LENGTH,
    `Keyword cannot exceed ${SETTINGS_VALIDATION.SEO.KEYWORDS.MAX_LENGTH} characters`,
  );

const metaKeywordsSchema = z
  .array(metaKeywordSchema)
  .max(
    SETTINGS_VALIDATION.SEO.KEYWORDS.MAX_COUNT,
    `Meta keywords cannot exceed ${SETTINGS_VALIDATION.SEO.KEYWORDS.MAX_COUNT} items`,
  )
  .default([])
  .superRefine((keywords, ctx) => {
    const seen = new Set<string>();

    keywords.forEach((keyword, index) => {
      const normalized = keyword.trim().toLowerCase();

      if (seen.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate keywords are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const seoCreateSchema = z
  .object({
    metaTitle: z
      .string()
      .trim()
      .min(
        SETTINGS_VALIDATION.SEO.META_TITLE.MIN_LENGTH,
        `Meta title must be at least ${SETTINGS_VALIDATION.SEO.META_TITLE.MIN_LENGTH} characters`,
      )
      .max(
        SETTINGS_VALIDATION.SEO.META_TITLE.MAX_LENGTH,
        `Meta title cannot exceed ${SETTINGS_VALIDATION.SEO.META_TITLE.MAX_LENGTH} characters`,
      ),

    metaDescription: z
      .string()
      .trim()
      .min(
        SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MIN_LENGTH,
        `Meta description must be at least ${SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MIN_LENGTH} characters`,
      )
      .max(
        SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MAX_LENGTH,
        `Meta description cannot exceed ${SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MAX_LENGTH} characters`,
      ),

    metaKeywords: metaKeywordsSchema,

    siteUrl: urlSchema.max(
      SETTINGS_VALIDATION.SEO.SITE_URL.MAX_LENGTH,
      `Site URL cannot exceed ${SETTINGS_VALIDATION.SEO.SITE_URL.MAX_LENGTH} characters`,
    ),
  })
  .strict();

const seoUpdateSchema = z
  .object({
    metaTitle: z
      .string()
      .trim()
      .min(
        SETTINGS_VALIDATION.SEO.META_TITLE.MIN_LENGTH,
        `Meta title must be at least ${SETTINGS_VALIDATION.SEO.META_TITLE.MIN_LENGTH} characters`,
      )
      .max(
        SETTINGS_VALIDATION.SEO.META_TITLE.MAX_LENGTH,
        `Meta title cannot exceed ${SETTINGS_VALIDATION.SEO.META_TITLE.MAX_LENGTH} characters`,
      )
      .optional(),

    metaDescription: z
      .string()
      .trim()
      .min(
        SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MIN_LENGTH,
        `Meta description must be at least ${SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MIN_LENGTH} characters`,
      )
      .max(
        SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MAX_LENGTH,
        `Meta description cannot exceed ${SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MAX_LENGTH} characters`,
      )
      .optional(),

    metaKeywords: metaKeywordsSchema.optional(),

    siteUrl: urlSchema
      .max(
        SETTINGS_VALIDATION.SEO.SITE_URL.MAX_LENGTH,
        `Site URL cannot exceed ${SETTINGS_VALIDATION.SEO.SITE_URL.MAX_LENGTH} characters`,
      )
      .optional(),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                         Create Settings Body Schema                        */
/* -------------------------------------------------------------------------- */

const createSettingsBodySchema = z
  .object({
    siteTitle: siteTitleSchema,

    siteDescription: siteDescriptionSchema,

    email: emailSchema,

    phone: phoneSchema,

    address: addressSchema,

    logo: imageSchema.optional(),

    favicon: imageSchema.optional(),

    socialLinks: socialLinksCreateSchema.default(SETTINGS_DEFAULT.SOCIAL_LINKS),

    seo: seoCreateSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    const uniqueUrls = new Set<string>();

    Object.entries(data.socialLinks).forEach(([key, value]) => {
      if (!value) {
        return;
      }

      const normalized = value.trim().toLowerCase();

      if (uniqueUrls.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['socialLinks', key],
          message: 'Duplicate social media URL is not allowed',
        });

        return;
      }

      uniqueUrls.add(normalized);
    });

    if (
      data.logo &&
      data.favicon &&
      data.logo.publicId.trim().toLowerCase() === data.favicon.publicId.trim().toLowerCase()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['favicon'],
        message: 'Logo and favicon cannot use the same image',
      });
    }

    if (data.seo.siteUrl.replace(/\/$/, '').toLowerCase() === 'http://localhost') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['seo', 'siteUrl'],
        message: 'Site URL cannot be localhost in production',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                         Update Settings Body Schema                        */
/* -------------------------------------------------------------------------- */

const updateSettingsBodySchema = z
  .object({
    siteTitle: siteTitleSchema.optional(),

    siteDescription: siteDescriptionSchema.optional(),

    email: emailSchema.optional(),

    phone: phoneSchema.optional(),

    address: addressSchema.optional(),

    logo: imageSchema.optional(),

    favicon: imageSchema.optional(),

    socialLinks: socialLinksUpdateSchema.optional(),

    seo: seoUpdateSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.socialLinks) {
      const uniqueUrls = new Set<string>();

      Object.entries(data.socialLinks).forEach(([key, value]) => {
        if (!value) {
          return;
        }

        const normalized = value.trim().toLowerCase();

        if (uniqueUrls.has(normalized)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['socialLinks', key],
            message: 'Duplicate social media URL is not allowed',
          });

          return;
        }

        uniqueUrls.add(normalized);
      });
    }

    if (
      data.logo &&
      data.favicon &&
      data.logo.publicId.trim().toLowerCase() === data.favicon.publicId.trim().toLowerCase()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['favicon'],
        message: 'Logo and favicon cannot use the same image',
      });
    }

    if (
      data.seo?.siteUrl &&
      data.seo.siteUrl.replace(/\/$/, '').toLowerCase() === 'http://localhost'
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['seo', 'siteUrl'],
        message: 'Site URL cannot be localhost in production',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createSettingsValidationSchema = z
  .object({
    body: createSettingsBodySchema,
  })
  .strict();

const updateSettingsValidationSchema = z
  .object({
    body: updateSettingsBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SettingsValidation = Object.freeze({
  createSettingsValidationSchema,

  updateSettingsValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateSettingsInput = z.infer<typeof createSettingsBodySchema>;

export type TUpdateSettingsInput = z.infer<typeof updateSettingsBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  urlSchema,
  siteTitleSchema,
  siteDescriptionSchema,
  emailSchema,
  phoneSchema,
  addressSchema,
  socialLinksCreateSchema,
  socialLinksUpdateSchema,
  metaKeywordSchema,
  metaKeywordsSchema,
  seoCreateSchema,
  seoUpdateSchema,
  createSettingsBodySchema,
  updateSettingsBodySchema,
};
