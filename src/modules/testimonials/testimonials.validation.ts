// src\modules\testimonials\testimonials.validation.ts

import { z } from "zod";

import {
  TESTIMONIAL_CLIENT_TYPES,
  TESTIMONIAL_DEFAULT,
} from "./testimonials.constant.js";

const imageSchema = z.object({
  url: z.string().trim().url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const createTestimonialValidationSchema = z.object({
  body: z.object({
    clientName: z
      .string()
      .trim()
      .min(1, "Client name is required")
      .max(100, "Client name cannot exceed 100 characters"),

    clientPosition: z
      .string()
      .trim()
      .max(100, "Client position cannot exceed 100 characters")
      .optional(),

    clientCompany: z
      .string()
      .trim()
      .max(150, "Client company cannot exceed 150 characters")
      .optional(),

    clientImage: imageSchema.optional(),

    clientWebsite: z
      .string()
      .trim()
      .url("Invalid client website URL")
      .optional(),

    projectName: z
      .string()
      .trim()
      .max(200, "Project name cannot exceed 200 characters")
      .optional(),

    review: z
      .string()
      .trim()
      .min(10, "Review must be at least 10 characters")
      .max(3000, "Review cannot exceed 3000 characters"),

    rating: z
      .number()
      .int()
      .min(1, "Rating must be between 1 and 5")
      .max(5, "Rating must be between 1 and 5")
      .default(TESTIMONIAL_DEFAULT.RATING),

    clientType: z.enum(TESTIMONIAL_CLIENT_TYPES as [string, ...string[]], {
      error: () => ({
        message: "Invalid client type",
      }),
    }),

    isFeatured: z.boolean().default(TESTIMONIAL_DEFAULT.IS_FEATURED),

    sortOrder: z
      .number()
      .int()
      .min(0, "Sort order cannot be negative")
      .default(TESTIMONIAL_DEFAULT.SORT_ORDER),

    isActive: z.boolean().default(TESTIMONIAL_DEFAULT.IS_ACTIVE),
  }),
});

const updateTestimonialValidationSchema = z.object({
  body: z.object({
    clientName: z.string().trim().min(1).max(100).optional(),

    clientPosition: z.string().trim().max(100).optional(),

    clientCompany: z.string().trim().max(150).optional(),

    clientImage: imageSchema.optional(),

    clientWebsite: z
      .string()
      .trim()
      .url("Invalid client website URL")
      .optional(),

    projectName: z.string().trim().max(200).optional(),

    review: z.string().trim().min(10).max(3000).optional(),

    rating: z.number().int().min(1).max(5).optional(),

    clientType: z
      .enum(TESTIMONIAL_CLIENT_TYPES as [string, ...string[]], {
        error: () => ({
          message: "Invalid client type",
        }),
      })
      .optional(),

    isFeatured: z.boolean().optional(),

    sortOrder: z.number().int().min(0).optional(),

    isActive: z.boolean().optional(),
  }),
});

export const TestimonialValidation = {
  createTestimonialValidationSchema,

  updateTestimonialValidationSchema,
};
