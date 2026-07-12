/**
 * Project validation schemas.
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
  PROJECT_CATEGORIES,
  PROJECT_DEFAULT,
  PROJECT_STATUSES,
  PROJECT_VALIDATION,
} from './projects.constant.js';

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
        PROJECT_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Image URL cannot exceed ${PROJECT_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Image public ID is required',
      })
      .trim()
      .min(1, 'Image public ID is required')
      .max(
        PROJECT_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Image public ID cannot exceed ${PROJECT_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const titleSchema = z
  .string({
    error: 'Project title is required',
  })
  .trim()
  .min(
    PROJECT_VALIDATION.TITLE.MIN_LENGTH,
    `Project title must be at least ${PROJECT_VALIDATION.TITLE.MIN_LENGTH} characters`,
  )
  .max(
    PROJECT_VALIDATION.TITLE.MAX_LENGTH,
    `Project title cannot exceed ${PROJECT_VALIDATION.TITLE.MAX_LENGTH} characters`,
  );

const shortDescriptionSchema = z
  .string({
    error: 'Short description is required',
  })
  .trim()
  .min(
    PROJECT_VALIDATION.SHORT_DESCRIPTION.MIN_LENGTH,
    `Short description must be at least ${PROJECT_VALIDATION.SHORT_DESCRIPTION.MIN_LENGTH} characters`,
  )
  .max(
    PROJECT_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH,
    `Short description cannot exceed ${PROJECT_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH} characters`,
  );

const descriptionSchema = z
  .string({
    error: 'Description is required',
  })
  .trim()
  .min(
    PROJECT_VALIDATION.DESCRIPTION.MIN_LENGTH,
    `Description must be at least ${PROJECT_VALIDATION.DESCRIPTION.MIN_LENGTH} characters`,
  )
  .max(
    PROJECT_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${PROJECT_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const gallerySchema = z
  .array(imageSchema)
  .max(
    PROJECT_VALIDATION.GALLERY.MAX_COUNT,
    `Gallery cannot exceed ${PROJECT_VALIDATION.GALLERY.MAX_COUNT} images`,
  )
  .default([])
  .superRefine((gallery, ctx) => {
    const publicIds = new Set<string>();

    gallery.forEach((image, index) => {
      const normalized = image.publicId.trim().toLowerCase();

      if (publicIds.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index, 'publicId'],
          message: 'Duplicate gallery image is not allowed',
        });

        return;
      }

      publicIds.add(normalized);
    });
  });

const technologySchema = z
  .string()
  .trim()
  .min(1, 'Technology name cannot be empty')
  .max(
    PROJECT_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
    `Technology cannot exceed ${PROJECT_VALIDATION.TECHNOLOGIES.MAX_LENGTH} characters`,
  );

const technologiesSchema = z
  .array(technologySchema)
  .min(1, 'At least one technology is required')
  .max(
    PROJECT_VALIDATION.TECHNOLOGIES.MAX_COUNT,
    `Technologies cannot exceed ${PROJECT_VALIDATION.TECHNOLOGIES.MAX_COUNT} items`,
  )
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

const categorySchema = z.enum(PROJECT_CATEGORIES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid project category',
  }),
});

const statusSchema = z.enum(PROJECT_STATUSES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid project status',
  }),
});

const githubUrlSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'GitHub URL must be a valid URL or relative path',
  });

const liveUrlSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'Live URL must be a valid URL or relative path',
  });

const startDateSchema = z.coerce.date({
  error: 'Invalid start date',
});

const endDateSchema = z.union([z.coerce.date(), z.null()]).optional();

const sortOrderSchema = z
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    PROJECT_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${PROJECT_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    PROJECT_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${PROJECT_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(PROJECT_DEFAULT.SORT_ORDER);

const featuredSchema = z.boolean().default(PROJECT_DEFAULT.FEATURED);

const isActiveSchema = z.boolean().default(PROJECT_DEFAULT.IS_ACTIVE);

/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createProjectBodySchema = z
  .object({
    title: titleSchema,

    shortDescription: shortDescriptionSchema,

    description: descriptionSchema,

    thumbnail: imageSchema.optional(),

    gallery: gallerySchema,

    technologies: technologiesSchema,

    category: categorySchema,

    githubUrl: githubUrlSchema.optional(),

    liveUrl: liveUrlSchema.optional(),

    featured: featuredSchema,

    status: statusSchema,

    startDate: startDateSchema.optional(),

    endDate: endDateSchema,

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.startDate && data.startDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['startDate'],
        message: 'Start date cannot be in the future',
      });
    }

    if (data.startDate && data.endDate && data.endDate.getTime() < data.startDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date cannot be earlier than start date',
      });
    }

    if (!data.githubUrl && !data.liveUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['githubUrl'],
        message: 'At least one project URL (GitHub or Live URL) is required',
      });
    }

    if (data.githubUrl && data.liveUrl && data.githubUrl === data.liveUrl) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['liveUrl'],
        message: 'GitHub URL and Live URL cannot be the same',
      });
    }

    if (
      data.thumbnail &&
      data.gallery.some(
        (image) =>
          image.publicId.trim().toLowerCase() === data.thumbnail?.publicId.trim().toLowerCase(),
      )
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['gallery'],
        message: 'Thumbnail image cannot also exist in the gallery',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateProjectBodySchema = z
  .object({
    title: titleSchema.optional(),

    shortDescription: shortDescriptionSchema.optional(),

    description: descriptionSchema.optional(),

    thumbnail: imageSchema.optional(),

    gallery: gallerySchema.optional(),

    technologies: technologiesSchema.optional(),

    category: categorySchema.optional(),

    githubUrl: githubUrlSchema.optional(),

    liveUrl: liveUrlSchema.optional(),

    featured: featuredSchema.optional(),

    status: statusSchema.optional(),

    startDate: startDateSchema.optional(),

    endDate: endDateSchema,

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.startDate && data.startDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['startDate'],
        message: 'Start date cannot be in the future',
      });
    }

    if (data.startDate && data.endDate && data.endDate.getTime() < data.startDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date cannot be earlier than start date',
      });
    }

    if (
      data.githubUrl !== undefined &&
      data.liveUrl !== undefined &&
      data.githubUrl &&
      data.liveUrl &&
      data.githubUrl === data.liveUrl
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['liveUrl'],
        message: 'GitHub URL and Live URL cannot be the same',
      });
    }

    if (
      data.thumbnail &&
      data.gallery &&
      data.gallery.some(
        (image) =>
          image.publicId.trim().toLowerCase() === data.thumbnail?.publicId.trim().toLowerCase(),
      )
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['gallery'],
        message: 'Thumbnail image cannot also exist in the gallery',
      });
    }

    if (data.gallery && data.gallery.length === 0 && data.thumbnail) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['gallery'],
        message: 'Gallery cannot be empty when a thumbnail is provided',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createProjectValidationSchema = z
  .object({
    body: createProjectBodySchema,
  })
  .strict();

const updateProjectValidationSchema = z
  .object({
    body: updateProjectBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ProjectValidation = Object.freeze({
  createProjectValidationSchema,

  updateProjectValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateProjectInput = z.infer<typeof createProjectBodySchema>;

export type TUpdateProjectInput = z.infer<typeof updateProjectBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  titleSchema,
  shortDescriptionSchema,
  descriptionSchema,
  gallerySchema,
  technologySchema,
  technologiesSchema,
  categorySchema,
  statusSchema,
  githubUrlSchema,
  liveUrlSchema,
  startDateSchema,
  endDateSchema,
  sortOrderSchema,
  featuredSchema,
  isActiveSchema,
  createProjectBodySchema,
  updateProjectBodySchema,
};
