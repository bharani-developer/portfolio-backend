// src\modules\certifications\certifications.validation.ts

import { z } from "zod";

import { CERTIFICATION_DEFAULT } from "./certifications.constant.js";

const imageSchema = z.object({
  url: z.string().trim().url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const createCertificationValidationSchema = z.object({
  body: z
    .object({
      title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .max(200, "Title cannot exceed 200 characters"),

      issuer: z
        .string()
        .trim()
        .min(1, "Issuer is required")
        .max(200, "Issuer cannot exceed 200 characters"),

      certificateImage: imageSchema.optional(),

      credentialId: z
        .string()
        .trim()
        .max(200, "Credential ID cannot exceed 200 characters")
        .optional(),

      credentialUrl: z.string().trim().url("Invalid credential URL").optional(),

      issueDate: z.coerce.date({
        error: () => ({
          message: "Invalid issue date",
        }),
      }),

      expiryDate: z.union([z.coerce.date(), z.null()]).optional(),

      neverExpires: z.boolean().default(CERTIFICATION_DEFAULT.NEVER_EXPIRES),

      description: z
        .string()
        .trim()
        .max(5000, "Description cannot exceed 5000 characters")
        .optional(),

      skills: z
        .array(z.string().trim().min(1))
        .max(100, "Skills cannot exceed 100 items")
        .default([]),

      sortOrder: z
        .number()
        .int()
        .min(0, "Sort order cannot be negative")
        .default(CERTIFICATION_DEFAULT.SORT_ORDER),

      isActive: z.boolean().default(CERTIFICATION_DEFAULT.IS_ACTIVE),
    })
    .superRefine((data, ctx) => {
      if (data.neverExpires && data.expiryDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date must be null when certification never expires",
        });
      }

      if (!data.neverExpires && !data.expiryDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date is required when certification expires",
        });
      }

      if (data.expiryDate && data.expiryDate < data.issueDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date cannot be earlier than issue date",
        });
      }
    }),
});

const updateCertificationValidationSchema = z.object({
  body: z
    .object({
      title: z.string().trim().min(1).max(200).optional(),

      issuer: z.string().trim().min(1).max(200).optional(),

      certificateImage: imageSchema.optional(),

      credentialId: z.string().trim().max(200).optional(),

      credentialUrl: z.string().trim().url("Invalid credential URL").optional(),

      issueDate: z.coerce.date().optional(),

      expiryDate: z.union([z.coerce.date(), z.null()]).optional(),

      neverExpires: z.boolean().optional(),

      description: z.string().trim().max(5000).optional(),

      skills: z.array(z.string().trim().min(1)).max(100).optional(),

      sortOrder: z.number().int().min(0).optional(),

      isActive: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.neverExpires === true && data.expiryDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date must be null when certification never expires",
        });
      }

      if (
        data.issueDate &&
        data.expiryDate &&
        data.expiryDate < data.issueDate
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["expiryDate"],
          message: "Expiry date cannot be earlier than issue date",
        });
      }
    }),
});

export const CertificationValidation = {
  createCertificationValidationSchema,

  updateCertificationValidationSchema,
};
