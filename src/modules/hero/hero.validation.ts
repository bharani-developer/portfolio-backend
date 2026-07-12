/**
 * Hero validation schemas.
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

import { HERO_DEFAULT, HERO_VALIDATION } from './hero.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Profile image URL is required',
      })
      .trim()
      .url('Profile image URL must be a valid URL')
      .max(
        HERO_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Profile image URL cannot exceed ${HERO_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Profile image public ID is required',
      })
      .trim()
      .min(1, 'Profile image public ID is required')
      .max(
        HERO_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Profile image public ID cannot exceed ${HERO_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
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
    HERO_VALIDATION.TITLE.MIN_LENGTH,
    `Title must be at least ${HERO_VALIDATION.TITLE.MIN_LENGTH} characters`,
  )
  .max(
    HERO_VALIDATION.TITLE.MAX_LENGTH,
    `Title cannot exceed ${HERO_VALIDATION.TITLE.MAX_LENGTH} characters`,
  );

const subtitleSchema = z
  .string({
    error: 'Subtitle is required',
  })
  .trim()
  .min(
    HERO_VALIDATION.SUBTITLE.MIN_LENGTH,
    `Subtitle must be at least ${HERO_VALIDATION.SUBTITLE.MIN_LENGTH} characters`,
  )
  .max(
    HERO_VALIDATION.SUBTITLE.MAX_LENGTH,
    `Subtitle cannot exceed ${HERO_VALIDATION.SUBTITLE.MAX_LENGTH} characters`,
  );

const descriptionSchema = z
  .string({
    error: 'Description is required',
  })
  .trim()
  .min(
    HERO_VALIDATION.DESCRIPTION.MIN_LENGTH,
    `Description must be at least ${HERO_VALIDATION.DESCRIPTION.MIN_LENGTH} characters`,
  )
  .max(
    HERO_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${HERO_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const resumeUrlSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'Resume URL must be a valid URL or relative path',
  });

const ctaButtonTextSchema = z
  .string()
  .trim()
  .max(
    HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH,
    `CTA button text cannot exceed ${HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH} characters`,
  );

const ctaButtonLinkSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'CTA button link must be a valid URL or relative path',
  });

const technologySchema = z
  .string()
  .trim()
  .min(1, 'Technology name is required')
  .max(
    HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
    `Technology name cannot exceed ${HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH} characters`,
  );

const technologiesSchema = z
  .array(technologySchema)
  .max(
    HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT,
    `You can add a maximum of ${HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT} technologies`,
  )
  .default([])
  .superRefine((technologies, ctx) => {
    const seen = new Set<string>();

    technologies.forEach((technology, index) => {
      const normalized = technology.trim().toLowerCase();

      if (seen.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate technologies are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const isActiveSchema = z.boolean().default(HERO_DEFAULT.IS_ACTIVE);

/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createHeroBodySchema = z
  .object({
    title: titleSchema,

    subtitle: subtitleSchema,

    description: descriptionSchema,

    profileImage: imageSchema.optional(),

    resumeUrl: resumeUrlSchema.optional(),

    ctaButtonText: ctaButtonTextSchema.optional(),

    ctaButtonLink: ctaButtonLinkSchema.optional(),

    technologies: technologiesSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.ctaButtonLink && !data.ctaButtonText) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonText'],
        message: 'CTA button text is required when CTA button link is provided',
      });
    }

    if (data.ctaButtonText && !data.ctaButtonLink) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonLink'],
        message: 'CTA button link is required when CTA button text is provided',
      });
    }

    if (data.resumeUrl && data.ctaButtonLink && data.resumeUrl === data.ctaButtonLink) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonLink'],
        message: 'CTA button link should not be the same as the resume URL',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateHeroBodySchema = z
  .object({
    title: titleSchema.optional(),

    subtitle: subtitleSchema.optional(),

    description: descriptionSchema.optional(),

    profileImage: imageSchema.optional(),

    resumeUrl: resumeUrlSchema.optional(),

    ctaButtonText: ctaButtonTextSchema.optional(),

    ctaButtonLink: ctaButtonLinkSchema.optional(),

    technologies: technologiesSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    const hasButtonText = data.ctaButtonText !== undefined;
    const hasButtonLink = data.ctaButtonLink !== undefined;

    if (hasButtonLink && !hasButtonText) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonText'],
        message: 'CTA button text is required when CTA button link is updated',
      });
    }

    if (hasButtonText && !hasButtonLink) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonLink'],
        message: 'CTA button link is required when CTA button text is updated',
      });
    }

    if (
      data.resumeUrl !== undefined &&
      data.ctaButtonLink !== undefined &&
      data.resumeUrl === data.ctaButtonLink
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['ctaButtonLink'],
        message: 'CTA button link should not be the same as the resume URL',
      });
    }

    if (data.technologies && data.technologies.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['technologies'],
        message: 'At least one technology is recommended',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createHeroValidationSchema = z
  .object({
    body: createHeroBodySchema,
  })
  .strict();

const updateHeroValidationSchema = z
  .object({
    body: updateHeroBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const HeroValidation = Object.freeze({
  createHeroValidationSchema,

  updateHeroValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateHeroInput = z.infer<typeof createHeroBodySchema>;

export type TUpdateHeroInput = z.infer<typeof updateHeroBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  titleSchema,
  subtitleSchema,
  descriptionSchema,
  resumeUrlSchema,
  ctaButtonTextSchema,
  ctaButtonLinkSchema,
  technologySchema,
  technologiesSchema,
  isActiveSchema,
  createHeroBodySchema,
  updateHeroBodySchema,
};
