/**
 * Experience validation schemas.
 *
 * Compatible with:
 * - Zod v4
 * - TypeScript 5+
 * - Node.js 24+
 * - Express 5
 *
 * Structure
 * 1. Imports
 * 2. Helper Schemas
 * 3. Primitive Validators
 * 4. Array Validators
 * 5. Base Schema
 * 6. Shared Business Validation
 * 7. Create Validation
 * 8. Update Validation
 * 9. Export
 * 10. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

import {
  EMPLOYMENT_TYPES,
  WORK_MODES,
  EXPERIENCE_DEFAULT,
  EXPERIENCE_VALIDATION,
} from './experience.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string()
      .trim()
      .url('Company logo URL must be a valid URL')
      .max(
        EXPERIENCE_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Company logo URL cannot exceed ${EXPERIENCE_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string()
      .trim()
      .min(1, 'Company logo public ID is required')
      .max(
        EXPERIENCE_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Company logo public ID cannot exceed ${EXPERIENCE_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                            Primitive Validators                            */
/* -------------------------------------------------------------------------- */

const companySchema = z
  .string()
  .trim()
  .min(
    EXPERIENCE_VALIDATION.COMPANY.MIN_LENGTH,
    `Company must be at least ${EXPERIENCE_VALIDATION.COMPANY.MIN_LENGTH} characters`,
  )
  .max(
    EXPERIENCE_VALIDATION.COMPANY.MAX_LENGTH,
    `Company cannot exceed ${EXPERIENCE_VALIDATION.COMPANY.MAX_LENGTH} characters`,
  );

const positionSchema = z
  .string()
  .trim()
  .min(
    EXPERIENCE_VALIDATION.POSITION.MIN_LENGTH,
    `Position must be at least ${EXPERIENCE_VALIDATION.POSITION.MIN_LENGTH} characters`,
  )
  .max(
    EXPERIENCE_VALIDATION.POSITION.MAX_LENGTH,
    `Position cannot exceed ${EXPERIENCE_VALIDATION.POSITION.MAX_LENGTH} characters`,
  );

const employmentTypeSchema = z.enum(EMPLOYMENT_TYPES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid employment type',
  }),
});

const workModeSchema = z.enum(WORK_MODES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid work mode',
  }),
});

const locationSchema = z
  .string()
  .trim()
  .min(
    EXPERIENCE_VALIDATION.LOCATION.MIN_LENGTH,
    `Location must be at least ${EXPERIENCE_VALIDATION.LOCATION.MIN_LENGTH} characters`,
  )
  .max(
    EXPERIENCE_VALIDATION.LOCATION.MAX_LENGTH,
    `Location cannot exceed ${EXPERIENCE_VALIDATION.LOCATION.MAX_LENGTH} characters`,
  );

const startDateSchema = z.coerce.date({
  error: () => ({
    message: 'Invalid start date',
  }),
});

const endDateSchema = z.coerce
  .date({
    error: () => ({
      message: 'Invalid end date',
    }),
  })
  .nullable();

const summarySchema = z
  .string()
  .trim()
  .min(
    EXPERIENCE_VALIDATION.SUMMARY.MIN_LENGTH,
    `Summary must be at least ${EXPERIENCE_VALIDATION.SUMMARY.MIN_LENGTH} characters`,
  )
  .max(
    EXPERIENCE_VALIDATION.SUMMARY.MAX_LENGTH,
    `Summary cannot exceed ${EXPERIENCE_VALIDATION.SUMMARY.MAX_LENGTH} characters`,
  );

const companyWebsiteSchema = z
  .string()
  .trim()
  .url('Company website must be a valid URL')
  .max(
    EXPERIENCE_VALIDATION.COMPANY_WEBSITE.MAX_LENGTH,
    `Company website cannot exceed ${EXPERIENCE_VALIDATION.COMPANY_WEBSITE.MAX_LENGTH} characters`,
  );

const sortOrderSchema = z.coerce
  .number({
    error: () => ({
      message: 'Sort order must be a valid number',
    }),
  })
  .int('Sort order must be an integer')
  .min(
    EXPERIENCE_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${EXPERIENCE_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    EXPERIENCE_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${EXPERIENCE_VALIDATION.SORT_ORDER.MAX}`,
  );
/* -------------------------------------------------------------------------- */
/*                              Array Validators                              */
/* -------------------------------------------------------------------------- */

const responsibilitySchema = z
  .string()
  .trim()
  .min(1, 'Responsibility cannot be empty')
  .max(
    EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_LENGTH,
    `Responsibility cannot exceed ${EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_LENGTH} characters`,
  );

const responsibilitiesSchema = z
  .array(responsibilitySchema)
  .min(1, 'At least one responsibility is required')
  .max(
    EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_COUNT,
    `Responsibilities cannot exceed ${EXPERIENCE_VALIDATION.RESPONSIBILITIES.MAX_COUNT} items`,
  )
  .superRefine((responsibilities, ctx) => {
    const uniqueResponsibilities = new Set<string>();

    responsibilities.forEach((responsibility, index) => {
      const normalized = responsibility.trim().toLowerCase();

      if (uniqueResponsibilities.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate responsibilities are not allowed',
        });
        return;
      }

      uniqueResponsibilities.add(normalized);
    });
  });

const technologySchema = z
  .string()
  .trim()
  .min(1, 'Technology cannot be empty')
  .max(
    EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
    `Technology cannot exceed ${EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_LENGTH} characters`,
  );

const technologiesSchema = z
  .array(technologySchema)
  .min(1, 'At least one technology is required')
  .max(
    EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_COUNT,
    `Technologies cannot exceed ${EXPERIENCE_VALIDATION.TECHNOLOGIES.MAX_COUNT} items`,
  )
  .superRefine((technologies, ctx) => {
    const uniqueTechnologies = new Set<string>();

    technologies.forEach((technology, index) => {
      const normalized = technology.trim().toLowerCase();

      if (uniqueTechnologies.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate technologies are not allowed',
        });
        return;
      }

      uniqueTechnologies.add(normalized);
    });
  });
/* -------------------------------------------------------------------------- */
/*                                Base Schema                                 */
/* -------------------------------------------------------------------------- */

const experienceBaseSchema = z
  .object({
    company: companySchema,

    position: positionSchema,

    companyLogo: imageSchema.optional(),

    employmentType: employmentTypeSchema,

    workMode: workModeSchema,

    location: locationSchema,

    startDate: startDateSchema,

    endDate: endDateSchema.optional(),

    isCurrent: z.boolean().default(EXPERIENCE_DEFAULT.IS_CURRENT),

    summary: summarySchema,

    responsibilities: responsibilitiesSchema,

    technologies: technologiesSchema,

    companyWebsite: companyWebsiteSchema.optional(),

    sortOrder: sortOrderSchema.default(EXPERIENCE_DEFAULT.SORT_ORDER),

    isActive: z.boolean().default(EXPERIENCE_DEFAULT.IS_ACTIVE),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                         Shared Business Validation                          */
/* -------------------------------------------------------------------------- */

const validateExperience = (
  data: z.infer<typeof experienceBaseSchema>,
  ctx: z.RefinementCtx,
): void => {
  /*
   * Current experience cannot have an end date.
   */
  if (data.isCurrent && data.endDate !== undefined && data.endDate !== null) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['endDate'],
      message: 'Current experience cannot have an end date',
    });
  }

  /*
   * Previous experience must have a valid date range.
   */
  if (!data.isCurrent && data.endDate && data.endDate < data.startDate) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['endDate'],
      message: 'End date cannot be earlier than start date',
    });
  }
};
/* -------------------------------------------------------------------------- */
/*                              Create Validation                             */
/* -------------------------------------------------------------------------- */

const createExperienceValidationSchema = z
  .object({
    body: experienceBaseSchema.superRefine(validateExperience),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                              Update Validation                             */
/* -------------------------------------------------------------------------- */

const updateExperienceValidationSchema = z
  .object({
    body: experienceBaseSchema.partial().superRefine((data, ctx) => {
      /*
       * Current experience cannot have an end date.
       */
      if (data.isCurrent === true && data.endDate !== undefined && data.endDate !== null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['endDate'],
          message: 'Current experience cannot have an end date',
        });
      }

      /*
       * Validate date range only when both dates are supplied.
       */
      if (data.startDate && data.endDate && data.endDate < data.startDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['endDate'],
          message: 'End date cannot be earlier than start date',
        });
      }
    }),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ExperienceValidation = {
  createExperienceValidationSchema,

  updateExperienceValidationSchema,
} as const;
/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateExperienceInput = z.infer<typeof createExperienceValidationSchema.shape.body>;

export type TUpdateExperienceInput = z.infer<typeof updateExperienceValidationSchema.shape.body>;
