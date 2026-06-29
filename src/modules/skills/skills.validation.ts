// src/modules/skills/skills.validation.ts

import { z } from "zod";

import {
  SKILLS_CATEGORIES,
  SKILLS_DEFAULT,
} from "./skills.constant.js";

const imageSchema = z.object({
  url: z
    .string()
    .trim()
    .min(1, "Image URL is required"),

  publicId: z
    .string()
    .trim()
    .min(1, "Image public ID is required"),
});

const createSkillValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, "Skill name is required")
      .max(100, "Skill name cannot exceed 100 characters"),

    category: z.enum(
      SKILLS_CATEGORIES as [string, ...string[]],
      {
        error: () => ({
          message: "Invalid skill category",
        }),
      },
    ),

    proficiency: z
      .number()
      .int()
      .min(0, "Proficiency must be at least 0")
      .max(100, "Proficiency cannot exceed 100")
      .default(SKILLS_DEFAULT.PROFICIENCY),

    image: imageSchema.optional(),

    description: z
      .string()
      .trim()
      .max(1000, "Description cannot exceed 1000 characters")
      .optional(),

    sortOrder: z
      .number()
      .int()
      .min(0, "Sort order cannot be negative")
      .default(SKILLS_DEFAULT.SORT_ORDER),

    isActive: z
      .boolean()
      .default(SKILLS_DEFAULT.IS_ACTIVE),
  }),
});

const updateSkillValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, "Skill name cannot be empty")
      .max(100, "Skill name cannot exceed 100 characters")
      .optional(),

    category: z
      .enum(
        SKILLS_CATEGORIES as [string, ...string[]],
        {
          error: () => ({
            message: "Invalid skill category",
          }),
        },
      )
      .optional(),

    proficiency: z
      .number()
      .int()
      .min(0, "Proficiency must be at least 0")
      .max(100, "Proficiency cannot exceed 100")
      .optional(),

    image: imageSchema.optional(),

    description: z
      .string()
      .trim()
      .max(1000, "Description cannot exceed 1000 characters")
      .optional(),

    sortOrder: z
      .number()
      .int()
      .min(0, "Sort order cannot be negative")
      .optional(),

    isActive: z
      .boolean()
      .optional(),
  }),
});

export const SkillsValidation = {
  createSkillValidationSchema,

  updateSkillValidationSchema,
};