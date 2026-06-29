// src\modules\blogs\blogs.validation.ts

import { z } from "zod";

import {
  BLOG_CATEGORIES,
  BLOG_DEFAULT,
  BLOG_STATUSES,
  BLOG_STATUS,
} from "./blogs.constant.js";

const imageSchema = z.object({
  url: z.string().trim().url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const createBlogValidationSchema = z.object({
  body: z
    .object({
      title: z
        .string()
        .trim()
        .min(5, "Title must be at least 5 characters")
        .max(200, "Title cannot exceed 200 characters"),

      excerpt: z
        .string()
        .trim()
        .min(20, "Excerpt must be at least 20 characters")
        .max(500, "Excerpt cannot exceed 500 characters"),

      content: z
        .string()
        .trim()
        .min(50, "Content must be at least 50 characters"),

      featuredImage: imageSchema.optional(),

      category: z.enum(BLOG_CATEGORIES as [string, ...string[]], {
        error: () => ({
          message: "Invalid blog category",
        }),
      }),

      tags: z
        .array(z.string().trim().min(1))
        .max(50, "Tags cannot exceed 50 items")
        .default([]),

      author: z
        .string()
        .trim()
        .min(2, "Author name is required")
        .max(100, "Author name cannot exceed 100 characters"),

      status: z
        .enum(BLOG_STATUSES as [string, ...string[]], {
          error: () => ({
            message: "Invalid blog status",
          }),
        })
        .default(BLOG_STATUS.DRAFT),

      readTime: z
        .number()
        .int()
        .positive("Read time must be greater than zero")
        .default(BLOG_DEFAULT.READ_TIME),

      isFeatured: z.boolean().default(BLOG_DEFAULT.IS_FEATURED),

      isPublished: z.boolean().default(BLOG_DEFAULT.IS_PUBLISHED),

      publishedAt: z.union([z.coerce.date(), z.null()]).optional(),

      seoTitle: z
        .string()
        .trim()
        .max(70, "SEO title cannot exceed 70 characters")
        .optional(),

      seoDescription: z
        .string()
        .trim()
        .max(160, "SEO description cannot exceed 160 characters")
        .optional(),

      seoKeywords: z
        .array(z.string().trim().min(1))
        .max(30, "SEO keywords cannot exceed 30 items")
        .default([]),

      canonicalUrl: z.string().trim().url("Invalid canonical URL").optional(),

      sortOrder: z
        .number()
        .int()
        .min(0, "Sort order cannot be negative")
        .default(BLOG_DEFAULT.SORT_ORDER),

      isActive: z.boolean().default(BLOG_DEFAULT.IS_ACTIVE),
    })
    .superRefine((data, ctx) => {
      const isPublished =
        data.status === BLOG_STATUS.PUBLISHED || data.isPublished;

      if (isPublished && !data.publishedAt) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,

          path: ["publishedAt"],

          message: "Published blog must have a publication date",
        });
      }

      if (data.publishedAt && data.publishedAt > new Date()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,

          path: ["publishedAt"],

          message: "Published date cannot be in the future",
        });
      }
    }),
});

const updateBlogValidationSchema = z.object({
  body: z
    .object({
      title: z.string().trim().min(5).max(200).optional(),

      excerpt: z.string().trim().min(20).max(500).optional(),

      content: z.string().trim().min(50).optional(),

      featuredImage: imageSchema.optional(),

      category: z
        .enum(BLOG_CATEGORIES as [string, ...string[]], {
          error: () => ({
            message: "Invalid blog category",
          }),
        })
        .optional(),

      tags: z.array(z.string().trim().min(1)).max(50).optional(),

      author: z.string().trim().min(2).max(100).optional(),

      status: z
        .enum(BLOG_STATUSES as [string, ...string[]], {
          error: () => ({
            message: "Invalid blog status",
          }),
        })
        .optional(),

      readTime: z.number().int().positive().optional(),

      isFeatured: z.boolean().optional(),

      isPublished: z.boolean().optional(),

      publishedAt: z.union([z.coerce.date(), z.null()]).optional(),

      seoTitle: z.string().trim().max(70).optional(),

      seoDescription: z.string().trim().max(160).optional(),

      seoKeywords: z.array(z.string().trim().min(1)).max(30).optional(),

      canonicalUrl: z.string().trim().url("Invalid canonical URL").optional(),

      sortOrder: z.number().int().min(0).optional(),

      isActive: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.publishedAt && data.publishedAt > new Date()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,

          path: ["publishedAt"],

          message: "Published date cannot be in the future",
        });
      }
    }),
});

export const BlogValidation = {
  createBlogValidationSchema,

  updateBlogValidationSchema,
};
