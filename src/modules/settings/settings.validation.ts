// src\modules\settings\settings.validation.ts

import { z } from "zod";

const imageSchema = z.object({
  url: z.url("Invalid image URL"),

  publicId: z.string().trim().min(1, "Public ID is required"),
});

const socialLinksSchema = z.object({
  github: z.url().optional(),

  linkedin: z.url().optional(),

  twitter: z.url().optional(),

  facebook: z.url().optional(),

  instagram: z.url().optional(),

  youtube: z.url().optional(),

  leetcode: z.url().optional(),

  hackerrank: z.url().optional(),

  stackoverflow: z.url().optional(),
});

const seoSchema = z.object({
  metaTitle: z
    .string()
    .trim()
    .min(1, "Meta title is required")
    .max(100, "Meta title cannot exceed 100 characters"),

  metaDescription: z
    .string()
    .trim()
    .min(1, "Meta description is required")
    .max(300, "Meta description cannot exceed 300 characters"),

  metaKeywords: z.array(z.string().trim()).default([]),

  siteUrl: z.url("Invalid site URL"),
});

const createSettingsValidationSchema = z.object({
  body: z.object({
    siteTitle: z
      .string()
      .trim()
      .min(1, "Site title is required")
      .max(100, "Site title cannot exceed 100 characters"),

    siteDescription: z
      .string()
      .trim()
      .min(1, "Site description is required")
      .max(500, "Site description cannot exceed 500 characters"),

    email: z.email("Invalid email address"),

    phone: z.string().trim().min(1, "Phone number is required"),

    address: z.string().trim().min(1, "Address is required"),

    logo: imageSchema.optional(),

    favicon: imageSchema.optional(),

    socialLinks: socialLinksSchema.default({}),

    seo: seoSchema,
  }),
});

const updateSettingsValidationSchema = z.object({
  body: z.object({
    siteTitle: z.string().trim().min(1).max(100).optional(),

    siteDescription: z.string().trim().min(1).max(500).optional(),

    email: z.email().optional(),

    phone: z.string().trim().optional(),

    address: z.string().trim().optional(),

    logo: imageSchema.optional(),

    favicon: imageSchema.optional(),

    socialLinks: socialLinksSchema.optional(),

    seo: seoSchema.partial().optional(),
  }),
});

export const SettingsValidation = {
  createSettingsValidationSchema,

  updateSettingsValidationSchema,
};
