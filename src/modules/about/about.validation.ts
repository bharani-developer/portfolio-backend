// src/modules/about/about.validation.ts

import { z } from "zod";

import { ABOUT_DEFAULT, ABOUT_LIMIT } from "./about.constant.js";

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageValidationSchema = z
  .object({
    url: z.string().trim().url("Image URL must be a valid URL"),

    publicId: z.string().trim().min(1, "Image public ID is required"),
  })
  .strict();

const statValidationSchema = z
  .object({
    label: z
      .string()
      .trim()
      .min(1, "Stat label is required")
      .max(
        ABOUT_LIMIT.STAT_LABEL,
        `Stat label cannot exceed ${ABOUT_LIMIT.STAT_LABEL} characters`,
      ),

    value: z
      .string()
      .trim()
      .min(1, "Stat value is required")
      .max(
        ABOUT_LIMIT.STAT_VALUE,
        `Stat value cannot exceed ${ABOUT_LIMIT.STAT_VALUE} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const imagesValidationSchema = z
  .array(imageValidationSchema)
  .min(1, "At least one image is required")
  .max(
    ABOUT_DEFAULT.MAX_IMAGES,
    `Maximum ${ABOUT_DEFAULT.MAX_IMAGES} images are allowed`,
  )
  .superRefine((images, ctx) => {
    const publicIds = new Set<string>();
    const urls = new Set<string>();

    images.forEach((image, index) => {
      if (publicIds.has(image.publicId)) {
        ctx.addIssue({
          code: "custom",
          path: [index, "publicId"],
          message: "Duplicate image public ID is not allowed",
        });
      }

      publicIds.add(image.publicId);

      if (urls.has(image.url)) {
        ctx.addIssue({
          code: "custom",
          path: [index, "url"],
          message: "Duplicate image URL is not allowed",
        });
      }

      urls.add(image.url);
    });
  });

const statsValidationSchema = z
  .array(statValidationSchema)
  .max(
    ABOUT_DEFAULT.MAX_STATS,
    `Maximum ${ABOUT_DEFAULT.MAX_STATS} stats are allowed`,
  )
  .superRefine((stats, ctx) => {
    const labels = new Set<string>();

    stats.forEach((stat, index) => {
      const normalizedLabel = stat.label.toLowerCase();

      if (labels.has(normalizedLabel)) {
        ctx.addIssue({
          code: "custom",
          path: [index, "label"],
          message: "Duplicate stat labels are not allowed",
        });
      }

      labels.add(normalizedLabel);
    });
  });

const emailValidationSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Email must be a valid email address");

const resumeUrlValidationSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith("/") || /^https?:\/\/.+/i.test(value), {
    message: "Resume URL must be a valid URL or relative path",
  });

/* -------------------------------------------------------------------------- */
/*                             Base About Schema                              */
/* -------------------------------------------------------------------------- */

const aboutSchema = z
  .object({
    profileImage: imageValidationSchema.optional(),

    images: imagesValidationSchema,

    fullName: z
      .string()
      .trim()
      .min(1, "Full name is required")
      .max(
        ABOUT_LIMIT.FULL_NAME,
        `Full name cannot exceed ${ABOUT_LIMIT.FULL_NAME} characters`,
      ),

    designation: z
      .string()
      .trim()
      .min(1, "Designation is required")
      .max(
        ABOUT_LIMIT.DESIGNATION,
        `Designation cannot exceed ${ABOUT_LIMIT.DESIGNATION} characters`,
      ),

    bio: z
      .string()
      .trim()
      .min(1, "Bio is required")
      .max(ABOUT_LIMIT.BIO, `Bio cannot exceed ${ABOUT_LIMIT.BIO} characters`),

    email: emailValidationSchema.optional(),

    phone: z
      .string()
      .trim()
      .max(
        ABOUT_LIMIT.PHONE,
        `Phone number cannot exceed ${ABOUT_LIMIT.PHONE} characters`,
      )
      .optional(),

    address: z
      .string()
      .trim()
      .max(
        ABOUT_LIMIT.ADDRESS,
        `Address cannot exceed ${ABOUT_LIMIT.ADDRESS} characters`,
      )
      .optional(),

    resumeUrl: resumeUrlValidationSchema.optional(),

    yearsOfExperience: z
      .number({
        error: "Years of experience must be a number",
      })
      .int("Years of experience must be an integer")
      .min(0, "Years of experience cannot be negative")
      .max(
        ABOUT_DEFAULT.MAX_YEARS_OF_EXPERIENCE,
        `Years of experience cannot exceed ${ABOUT_DEFAULT.MAX_YEARS_OF_EXPERIENCE}`,
      )
      .optional(),

    stats: statsValidationSchema.optional(),

    isActive: z.boolean().default(ABOUT_DEFAULT.IS_ACTIVE),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                              Create Validation                             */
/* -------------------------------------------------------------------------- */

const createAboutValidationSchema = z.object({
  body: aboutSchema,
});

/* -------------------------------------------------------------------------- */
/*                              Update Validation                             */
/* -------------------------------------------------------------------------- */

const updateAboutValidationSchema = z.object({
  body: aboutSchema.partial().extend({
    images: imagesValidationSchema.optional(),
  }),
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutValidation = {
  createAboutValidationSchema,

  updateAboutValidationSchema,
};
