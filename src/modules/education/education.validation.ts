// src\modules\education\education.validation.ts

import { z } from "zod";

import {
  EDUCATION_DEFAULT,
  EDUCATION_LEVELS,
  EDUCATION_TYPES,
  GRADE_TYPES,
} from "./education.constant.js";

const imageSchema = z.object({
  url: z.string().trim().url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const createEducationValidationSchema = z.object({
  body: z
    .object({
      institution: z
        .string()
        .trim()
        .min(1, "Institution is required")
        .max(200, "Institution cannot exceed 200 characters"),

      degree: z
        .string()
        .trim()
        .min(1, "Degree is required")
        .max(200, "Degree cannot exceed 200 characters"),

      fieldOfStudy: z
        .string()
        .trim()
        .min(1, "Field of study is required")
        .max(200, "Field of study cannot exceed 200 characters"),

      institutionLogo: imageSchema.optional(),

      educationLevel: z.enum(EDUCATION_LEVELS as [string, ...string[]], {
        error: () => ({
          message: "Invalid education level",
        }),
      }),

      educationType: z.enum(EDUCATION_TYPES as [string, ...string[]], {
        error: () => ({
          message: "Invalid education type",
        }),
      }),

      location: z
        .string()
        .trim()
        .min(1, "Location is required")
        .max(150, "Location cannot exceed 150 characters"),

      startDate: z.coerce.date({
        error: () => ({
          message: "Invalid start date",
        }),
      }),

      endDate: z.union([z.coerce.date(), z.null()]).optional(),

      isCurrent: z.boolean().default(EDUCATION_DEFAULT.IS_CURRENT),

      gradeType: z.enum(GRADE_TYPES as [string, ...string[]], {
        error: () => ({
          message: "Invalid grade type",
        }),
      }),

      grade: z
        .string()
        .trim()
        .max(50, "Grade cannot exceed 50 characters")
        .optional(),

      description: z
        .string()
        .trim()
        .max(3000, "Description cannot exceed 3000 characters")
        .optional(),

      achievements: z
        .array(z.string().trim().min(1))
        .max(100, "Achievements cannot exceed 100 items")
        .default([]),

      skills: z
        .array(z.string().trim().min(1))
        .max(100, "Skills cannot exceed 100 items")
        .default([]),

      institutionWebsite: z
        .string()
        .trim()
        .url("Invalid institution website URL")
        .optional(),

      sortOrder: z
        .number()
        .int()
        .min(0, "Sort order cannot be negative")
        .default(EDUCATION_DEFAULT.SORT_ORDER),

      isActive: z.boolean().default(EDUCATION_DEFAULT.IS_ACTIVE),
    })
    .superRefine((data, ctx) => {
      if (data.isCurrent && data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endDate"],
          message: "Current education cannot have an end date",
        });
      }

      if (!data.isCurrent && data.endDate && data.endDate < data.startDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endDate"],
          message: "End date cannot be earlier than start date",
        });
      }
    }),
});

const updateEducationValidationSchema = z.object({
  body: z
    .object({
      institution: z.string().trim().min(1).max(200).optional(),

      degree: z.string().trim().min(1).max(200).optional(),

      fieldOfStudy: z.string().trim().min(1).max(200).optional(),

      institutionLogo: imageSchema.optional(),

      educationLevel: z
        .enum(EDUCATION_LEVELS as [string, ...string[]], {
          error: () => ({
            message: "Invalid education level",
          }),
        })
        .optional(),

      educationType: z
        .enum(EDUCATION_TYPES as [string, ...string[]], {
          error: () => ({
            message: "Invalid education type",
          }),
        })
        .optional(),

      location: z.string().trim().min(1).max(150).optional(),

      startDate: z.coerce.date().optional(),

      endDate: z.union([z.coerce.date(), z.null()]).optional(),

      isCurrent: z.boolean().optional(),

      gradeType: z
        .enum(GRADE_TYPES as [string, ...string[]], {
          error: () => ({
            message: "Invalid grade type",
          }),
        })
        .optional(),

      grade: z.string().trim().max(50).optional(),

      description: z.string().trim().max(3000).optional(),

      achievements: z.array(z.string().trim().min(1)).max(100).optional(),

      skills: z.array(z.string().trim().min(1)).max(100).optional(),

      institutionWebsite: z
        .string()
        .trim()
        .url("Invalid institution website URL")
        .optional(),

      sortOrder: z.number().int().min(0).optional(),

      isActive: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.isCurrent === true && data.endDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["endDate"],
          message: "Current education cannot have an end date",
        });
      }
    }),
});

export const EducationValidation = {
  createEducationValidationSchema,

  updateEducationValidationSchema,
};
