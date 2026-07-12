/**
 * Blog validation schemas.
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
  BLOG_CATEGORIES,
  BLOG_DEFAULT,
  BLOG_STATUSES,
  BLOG_STATUS,
  BLOG_VALIDATION,
} from './blogs.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Featured image URL is required',
      })
      .trim()
      .url('Featured image URL must be a valid URL')
      .max(
        BLOG_VALIDATION.FEATURED_IMAGE.URL_MAX_LENGTH,
        `Featured image URL cannot exceed ${BLOG_VALIDATION.FEATURED_IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Featured image public ID is required',
      })
      .trim()
      .min(1, 'Featured image public ID is required')
      .max(
        BLOG_VALIDATION.FEATURED_IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Featured image public ID cannot exceed ${BLOG_VALIDATION.FEATURED_IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
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
    BLOG_VALIDATION.TITLE.MIN_LENGTH,
    `Title must be at least ${BLOG_VALIDATION.TITLE.MIN_LENGTH} characters`,
  )
  .max(
    BLOG_VALIDATION.TITLE.MAX_LENGTH,
    `Title cannot exceed ${BLOG_VALIDATION.TITLE.MAX_LENGTH} characters`,
  );

const excerptSchema = z
  .string({
    error: 'Excerpt is required',
  })
  .trim()
  .min(1, 'Excerpt is required')
  .max(
    BLOG_VALIDATION.EXCERPT.MAX_LENGTH,
    `Excerpt cannot exceed ${BLOG_VALIDATION.EXCERPT.MAX_LENGTH} characters`,
  );

const contentSchema = z
  .string({
    error: 'Content is required',
  })
  .trim()
  .min(
    BLOG_VALIDATION.CONTENT.MIN_LENGTH,
    `Content must be at least ${BLOG_VALIDATION.CONTENT.MIN_LENGTH} characters`,
  );

const categorySchema = z.enum(BLOG_CATEGORIES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid blog category',
  }),
});

const authorSchema = z
  .string({
    error: 'Author name is required',
  })
  .trim()
  .min(2, 'Author name is required')
  .max(
    BLOG_VALIDATION.AUTHOR.MAX_LENGTH,
    `Author name cannot exceed ${BLOG_VALIDATION.AUTHOR.MAX_LENGTH} characters`,
  );

const tagsSchema = z
  .array(
    z
      .string()
      .trim()
      .min(1, 'Tag cannot be empty')
      .max(
        BLOG_VALIDATION.TAGS.MAX_LENGTH,
        `Each tag cannot exceed ${BLOG_VALIDATION.TAGS.MAX_LENGTH} characters`,
      ),
  )
  .max(BLOG_VALIDATION.TAGS.MAX_COUNT, `Tags cannot exceed ${BLOG_VALIDATION.TAGS.MAX_COUNT} items`)
  .default([])
  .superRefine((tags, ctx) => {
    const seen = new Set<string>();

    tags.forEach((tag, index) => {
      const normalized = tag.trim().toLowerCase();

      if (seen.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate tags are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const statusSchema = z
  .enum(BLOG_STATUSES as [string, ...string[]], {
    error: () => ({
      message: 'Invalid blog status',
    }),
  })
  .default(BLOG_STATUS.DRAFT);

const readTimeSchema = z
  .number({
    error: 'Read time must be a valid number',
  })
  .int('Read time must be an integer')
  .min(
    BLOG_VALIDATION.READ_TIME.MIN,
    `Read time must be at least ${BLOG_VALIDATION.READ_TIME.MIN} minute`,
  )
  .max(
    BLOG_VALIDATION.READ_TIME.MAX,
    `Read time cannot exceed ${BLOG_VALIDATION.READ_TIME.MAX} minutes`,
  )
  .default(BLOG_DEFAULT.READ_TIME);

const viewCountSchema = z
  .number({
    error: 'View count must be a valid number',
  })
  .int('View count must be an integer')
  .min(BLOG_VALIDATION.VIEW_COUNT.MIN, 'View count cannot be negative')
  .default(BLOG_DEFAULT.VIEW_COUNT);

const isFeaturedSchema = z.boolean().default(BLOG_DEFAULT.IS_FEATURED);

const isPublishedSchema = z.boolean().default(BLOG_DEFAULT.IS_PUBLISHED);

const publishedAtSchema = z.union([z.coerce.date(), z.null()]).optional();

const seoTitleSchema = z
  .string()
  .trim()
  .max(
    BLOG_VALIDATION.SEO_TITLE.MAX_LENGTH,
    `SEO title cannot exceed ${BLOG_VALIDATION.SEO_TITLE.MAX_LENGTH} characters`,
  )
  .optional();

const seoDescriptionSchema = z
  .string()
  .trim()
  .max(
    BLOG_VALIDATION.SEO_DESCRIPTION.MAX_LENGTH,
    `SEO description cannot exceed ${BLOG_VALIDATION.SEO_DESCRIPTION.MAX_LENGTH} characters`,
  )
  .optional();

const seoKeywordsSchema = z
  .array(
    z
      .string()
      .trim()
      .min(1, 'SEO keyword cannot be empty')
      .max(
        BLOG_VALIDATION.SEO_KEYWORDS.MAX_LENGTH,
        `SEO keyword cannot exceed ${BLOG_VALIDATION.SEO_KEYWORDS.MAX_LENGTH} characters`,
      ),
  )
  .max(
    BLOG_VALIDATION.SEO_KEYWORDS.MAX_COUNT,
    `SEO keywords cannot exceed ${BLOG_VALIDATION.SEO_KEYWORDS.MAX_COUNT} items`,
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
          message: 'Duplicate SEO keywords are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const canonicalUrlSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'Canonical URL must be a valid URL or relative path',
  })
  .optional();

const sortOrderSchema = z
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    BLOG_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${BLOG_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(BLOG_VALIDATION.SORT_ORDER.MAX, `Sort order cannot exceed ${BLOG_VALIDATION.SORT_ORDER.MAX}`)
  .default(BLOG_DEFAULT.SORT_ORDER);

const isActiveSchema = z.boolean().default(BLOG_DEFAULT.IS_ACTIVE);

/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createBlogBodySchema = z
  .object({
    title: titleSchema,

    excerpt: excerptSchema,

    content: contentSchema,

    featuredImage: imageSchema.optional(),

    category: categorySchema,

    tags: tagsSchema,

    author: authorSchema,

    status: statusSchema,

    readTime: readTimeSchema,

    viewCount: viewCountSchema,

    isFeatured: isFeaturedSchema,

    isPublished: isPublishedSchema,

    publishedAt: publishedAtSchema,

    seoTitle: seoTitleSchema,

    seoDescription: seoDescriptionSchema,

    seoKeywords: seoKeywordsSchema,

    canonicalUrl: canonicalUrlSchema,

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    const shouldBePublished = data.status === BLOG_STATUS.PUBLISHED || data.isPublished === true;

    if (shouldBePublished && !data.publishedAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['publishedAt'],
        message: 'Published blog must have a publication date',
      });
    }

    if (data.publishedAt && data.publishedAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['publishedAt'],
        message: 'Publication date cannot be in the future',
      });
    }

    if (data.status === BLOG_STATUS.DRAFT && data.isPublished) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['isPublished'],
        message: 'Draft blog cannot be marked as published',
      });
    }

    if (data.status === BLOG_STATUS.ARCHIVED && data.isPublished) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['status'],
        message: 'Archived blog cannot remain published',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateBlogBodySchema = z
  .object({
    title: titleSchema.optional(),

    excerpt: excerptSchema.optional(),

    content: contentSchema.optional(),

    featuredImage: imageSchema.optional(),

    category: categorySchema.optional(),

    tags: tagsSchema.optional(),

    author: authorSchema.optional(),

    status: statusSchema.optional(),

    readTime: readTimeSchema.optional(),

    viewCount: viewCountSchema.optional(),

    isFeatured: isFeaturedSchema.optional(),

    isPublished: isPublishedSchema.optional(),

    publishedAt: publishedAtSchema,

    seoTitle: seoTitleSchema,

    seoDescription: seoDescriptionSchema,

    seoKeywords: seoKeywordsSchema.optional(),

    canonicalUrl: canonicalUrlSchema,

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.publishedAt && data.publishedAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['publishedAt'],
        message: 'Publication date cannot be in the future',
      });
    }

    if (data.status === BLOG_STATUS.DRAFT && data.isPublished === true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['isPublished'],
        message: 'Draft blog cannot be marked as published',
      });
    }

    if (data.status === BLOG_STATUS.ARCHIVED && data.isPublished === true) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['status'],
        message: 'Archived blog cannot remain published',
      });
    }

    if (data.status === BLOG_STATUS.PUBLISHED && data.publishedAt === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['publishedAt'],
        message: 'Publication date is required when publishing a blog',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                             Request Validation                             */
/* -------------------------------------------------------------------------- */

const createBlogValidationSchema = z.object({
  body: createBlogBodySchema,
});

const updateBlogValidationSchema = z.object({
  body: updateBlogBodySchema,
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const BlogValidation = Object.freeze({
  createBlogValidationSchema,

  updateBlogValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateBlogInput = z.infer<typeof createBlogBodySchema>;

export type TUpdateBlogInput = z.infer<typeof updateBlogBodySchema>;

/* -------------------------------------------------------------------------- */
/*                             Reusable Exports                               */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  titleSchema,
  excerptSchema,
  contentSchema,
  categorySchema,
  authorSchema,
  tagsSchema,
  statusSchema,
  readTimeSchema,
  viewCountSchema,
  isFeaturedSchema,
  isPublishedSchema,
  publishedAtSchema,
  seoTitleSchema,
  seoDescriptionSchema,
  seoKeywordsSchema,
  canonicalUrlSchema,
  sortOrderSchema,
  isActiveSchema,
  createBlogBodySchema,
  updateBlogBodySchema,
};
