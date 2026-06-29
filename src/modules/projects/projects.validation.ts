// src\modules\projects\projects.validation.ts

import { z } from "zod";

import {
  PROJECT_CATEGORIES,
  PROJECT_DEFAULT,
  PROJECT_STATUSES,
} from "./projects.constant.js";

const imageSchema = z.object({
  url: z.string().trim().url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const createProjectValidationSchema = z.object({
  body: z
    .object({
      title: z
        .string()
        .trim()
        .min(1, "Project title is required")
        .max(200, "Project title cannot exceed 200 characters"),

      shortDescription: z
        .string()
        .trim()
        .min(1, "Short description is required")
        .max(500, "Short description cannot exceed 500 characters"),

      description: z
        .string()
        .trim()
        .min(1, "Description is required")
        .max(10000, "Description cannot exceed 10000 characters"),

      thumbnail: imageSchema.optional(),

      gallery: z
        .array(imageSchema)
        .max(
          PROJECT_DEFAULT.GALLERY_LIMIT,
          `Gallery cannot exceed ${PROJECT_DEFAULT.GALLERY_LIMIT} images`,
        )
        .default([]),

      technologies: z
        .array(z.string().trim().min(1, "Technology name cannot be empty"))
        .min(1, "At least one technology is required")
        .max(100, "Technologies cannot exceed 100 items"),

      category: z.enum(PROJECT_CATEGORIES as [string, ...string[]], {
        error: () => ({
          message: "Invalid project category",
        }),
      }),

      githubUrl: z.string().trim().url("Invalid GitHub URL").optional(),

      liveUrl: z.string().trim().url("Invalid live URL").optional(),

      featured: z.boolean().default(PROJECT_DEFAULT.FEATURED),

      status: z.enum(PROJECT_STATUSES as [string, ...string[]], {
        error: () => ({
          message: "Invalid project status",
        }),
      }),

      startDate: z.coerce.date().optional(),

      endDate: z.union([z.coerce.date(), z.null()]).optional(),

      sortOrder: z
        .number()
        .int()
        .min(0, "Sort order cannot be negative")
        .default(PROJECT_DEFAULT.SORT_ORDER),

      isActive: z.boolean().default(PROJECT_DEFAULT.IS_ACTIVE),
    })
    .superRefine((data, ctx) => {
      if (data.startDate && data.endDate && data.endDate < data.startDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endDate"],
          message: "End date cannot be earlier than start date",
        });
      }
    }),
});

const updateProjectValidationSchema = z.object({
  body: z
    .object({
      title: z.string().trim().min(1).max(200).optional(),

      shortDescription: z.string().trim().min(1).max(500).optional(),

      description: z.string().trim().min(1).max(10000).optional(),

      thumbnail: imageSchema.optional(),

      gallery: z
        .array(imageSchema)
        .max(PROJECT_DEFAULT.GALLERY_LIMIT)
        .optional(),

      technologies: z
        .array(z.string().trim().min(1))
        .min(1)
        .max(100)
        .optional(),

      category: z
        .enum(PROJECT_CATEGORIES as [string, ...string[]], {
          error: () => ({
            message: "Invalid project category",
          }),
        })
        .optional(),

      githubUrl: z.string().trim().url("Invalid GitHub URL").optional(),

      liveUrl: z.string().trim().url("Invalid live URL").optional(),

      featured: z.boolean().optional(),

      status: z
        .enum(PROJECT_STATUSES as [string, ...string[]], {
          error: () => ({
            message: "Invalid project status",
          }),
        })
        .optional(),

      startDate: z.coerce.date().optional(),

      endDate: z.union([z.coerce.date(), z.null()]).optional(),

      sortOrder: z.number().int().min(0).optional(),

      isActive: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.startDate && data.endDate && data.endDate < data.startDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endDate"],
          message: "End date cannot be earlier than start date",
        });
      }
    }),
});

export const ProjectValidation = {
  createProjectValidationSchema,

  updateProjectValidationSchema,
};
