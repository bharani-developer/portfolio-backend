// src/modules/hero/hero.validation.ts

import { z } from "zod";

const TITLE_MAX_LENGTH = 150;
const SUBTITLE_MAX_LENGTH = 200;
const DESCRIPTION_MAX_LENGTH = 1000;
const CTA_TEXT_MAX_LENGTH = 100;
const CTA_LINK_MAX_LENGTH = 255;
const TECHNOLOGY_MAX_LENGTH = 50;
const MAX_TECHNOLOGIES = 20;

const imageValidationSchema = z
  .object({
    url: z.url("Image URL must be a valid URL").trim(),

    publicId: z.string().trim().min(1, "Image public ID is required"),
  })
  .strict();

const technologyValidationSchema = z
  .string()
  .trim()
  .min(1, "Technology name is required")
  .max(
    TECHNOLOGY_MAX_LENGTH,
    `Technology name cannot exceed ${TECHNOLOGY_MAX_LENGTH} characters`,
  );

const technologiesValidationSchema = z
  .array(technologyValidationSchema)
  .max(
    MAX_TECHNOLOGIES,
    `You can add a maximum of ${MAX_TECHNOLOGIES} technologies`,
  )
  .refine(
    (technologies) =>
      new Set(technologies.map((technology) => technology.toLowerCase()))
        .size === technologies.length,
    {
      message: "Duplicate technologies are not allowed",
    },
  );

const createHeroBodySchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title is required")
      .max(
        TITLE_MAX_LENGTH,
        `Title cannot exceed ${TITLE_MAX_LENGTH} characters`,
      ),

    subtitle: z
      .string()
      .trim()
      .min(1, "Subtitle is required")
      .max(
        SUBTITLE_MAX_LENGTH,
        `Subtitle cannot exceed ${SUBTITLE_MAX_LENGTH} characters`,
      ),

    description: z
      .string()
      .trim()
      .min(1, "Description is required")
      .max(
        DESCRIPTION_MAX_LENGTH,
        `Description cannot exceed ${DESCRIPTION_MAX_LENGTH} characters`,
      ),

    profileImage: imageValidationSchema.optional(),

    resumeUrl: z.url("Resume URL must be a valid URL").trim().optional(),

    ctaButtonText: z
      .string()
      .trim()
      .max(
        CTA_TEXT_MAX_LENGTH,
        `CTA button text cannot exceed ${CTA_TEXT_MAX_LENGTH} characters`,
      )
      .optional(),

    ctaButtonLink: z
      .url("CTA button link must be a valid URL")
      .trim()
      .max(
        CTA_LINK_MAX_LENGTH,
        `CTA button link cannot exceed ${CTA_LINK_MAX_LENGTH} characters`,
      )
      .optional(),

    technologies: technologiesValidationSchema.default([]),

    isActive: z.boolean().default(true),
  })
  .strict();

const updateHeroBodySchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title cannot be empty")
      .max(
        TITLE_MAX_LENGTH,
        `Title cannot exceed ${TITLE_MAX_LENGTH} characters`,
      )
      .optional(),

    subtitle: z
      .string()
      .trim()
      .min(1, "Subtitle cannot be empty")
      .max(
        SUBTITLE_MAX_LENGTH,
        `Subtitle cannot exceed ${SUBTITLE_MAX_LENGTH} characters`,
      )
      .optional(),

    description: z
      .string()
      .trim()
      .min(1, "Description cannot be empty")
      .max(
        DESCRIPTION_MAX_LENGTH,
        `Description cannot exceed ${DESCRIPTION_MAX_LENGTH} characters`,
      )
      .optional(),

    profileImage: imageValidationSchema.optional(),

    resumeUrl: z.url("Resume URL must be a valid URL").trim().optional(),

    ctaButtonText: z
      .string()
      .trim()
      .max(
        CTA_TEXT_MAX_LENGTH,
        `CTA button text cannot exceed ${CTA_TEXT_MAX_LENGTH} characters`,
      )
      .optional(),

    ctaButtonLink: z
      .url("CTA button link must be a valid URL")
      .trim()
      .max(
        CTA_LINK_MAX_LENGTH,
        `CTA button link cannot exceed ${CTA_LINK_MAX_LENGTH} characters`,
      )
      .optional(),

    technologies: technologiesValidationSchema.optional(),

    isActive: z.boolean().optional(),
  })
  .strict();

const createHeroValidationSchema = z.object({
  body: createHeroBodySchema,
});

const updateHeroValidationSchema = z.object({
  body: updateHeroBodySchema,
});

export const HeroValidation = {
  createHeroValidationSchema,

  updateHeroValidationSchema,
};

export type TCreateHeroInput = z.infer<typeof createHeroBodySchema>;

export type TUpdateHeroInput = z.infer<typeof updateHeroBodySchema>;
