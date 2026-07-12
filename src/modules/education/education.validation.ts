/**
 * Education validation schemas.
 *
 * Structure:
 * 1. Imports
 * 2. Helper Schemas
 * 3. Reusable Validators
 * 4. Base Schema
 * 5. Create Validation
 * 6. Update Validation
 * 7. Export
 * 8. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

import {
  EDUCATION_DEFAULT,
  EDUCATION_LEVELS,
  EDUCATION_TYPES,
  EDUCATION_VALIDATION,
  GRADE_TYPES,
  GRADE_TYPE,
} from './education.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Institution logo URL is required',
      })
      .trim()
      .url('Institution logo URL must be a valid URL')
      .max(
        EDUCATION_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Institution logo URL cannot exceed ${EDUCATION_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Institution logo public ID is required',
      })
      .trim()
      .min(1, 'Institution logo public ID is required')
      .max(
        EDUCATION_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Institution logo public ID cannot exceed ${EDUCATION_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const institutionSchema = z
  .string({
    error: 'Institution is required',
  })
  .trim()
  .min(
    EDUCATION_VALIDATION.INSTITUTION.MIN_LENGTH,
    `Institution must be at least ${EDUCATION_VALIDATION.INSTITUTION.MIN_LENGTH} characters`,
  )
  .max(
    EDUCATION_VALIDATION.INSTITUTION.MAX_LENGTH,
    `Institution cannot exceed ${EDUCATION_VALIDATION.INSTITUTION.MAX_LENGTH} characters`,
  );

const degreeSchema = z
  .string({
    error: 'Degree is required',
  })
  .trim()
  .min(
    EDUCATION_VALIDATION.DEGREE.MIN_LENGTH,
    `Degree must be at least ${EDUCATION_VALIDATION.DEGREE.MIN_LENGTH} characters`,
  )
  .max(
    EDUCATION_VALIDATION.DEGREE.MAX_LENGTH,
    `Degree cannot exceed ${EDUCATION_VALIDATION.DEGREE.MAX_LENGTH} characters`,
  );

const fieldOfStudySchema = z
  .string({
    error: 'Field of study is required',
  })
  .trim()
  .min(
    EDUCATION_VALIDATION.FIELD_OF_STUDY.MIN_LENGTH,
    `Field of study must be at least ${EDUCATION_VALIDATION.FIELD_OF_STUDY.MIN_LENGTH} characters`,
  )
  .max(
    EDUCATION_VALIDATION.FIELD_OF_STUDY.MAX_LENGTH,
    `Field of study cannot exceed ${EDUCATION_VALIDATION.FIELD_OF_STUDY.MAX_LENGTH} characters`,
  );

const educationLevelSchema = z.enum(EDUCATION_LEVELS as [string, ...string[]], {
  error: () => ({
    message: 'Invalid education level',
  }),
});

const educationTypeSchema = z.enum(EDUCATION_TYPES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid education type',
  }),
});

const gradeTypeSchema = z
  .enum(GRADE_TYPES as [string, ...string[]], {
    error: () => ({
      message: 'Invalid grade type',
    }),
  })
  .default(GRADE_TYPE.NONE);

const locationSchema = z
  .string({
    error: 'Location is required',
  })
  .trim()
  .min(
    EDUCATION_VALIDATION.LOCATION.MIN_LENGTH,
    `Location must be at least ${EDUCATION_VALIDATION.LOCATION.MIN_LENGTH} characters`,
  )
  .max(
    EDUCATION_VALIDATION.LOCATION.MAX_LENGTH,
    `Location cannot exceed ${EDUCATION_VALIDATION.LOCATION.MAX_LENGTH} characters`,
  );

const startDateSchema = z.coerce.date({
  error: 'Invalid start date',
});

const endDateSchema = z.union([z.coerce.date(), z.null()]).optional();

const gradeSchema = z
  .string()
  .trim()
  .max(
    EDUCATION_VALIDATION.GRADE.MAX_LENGTH,
    `Grade cannot exceed ${EDUCATION_VALIDATION.GRADE.MAX_LENGTH} characters`,
  );

const descriptionSchema = z
  .string()
  .trim()
  .max(
    EDUCATION_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${EDUCATION_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const achievementSchema = z
  .string()
  .trim()
  .min(1, 'Achievement cannot be empty')
  .max(
    EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_LENGTH,
    `Achievement cannot exceed ${EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_LENGTH} characters`,
  );

const achievementsSchema = z
  .array(achievementSchema)
  .max(
    EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_COUNT,
    `Achievements cannot exceed ${EDUCATION_VALIDATION.ACHIEVEMENTS.MAX_COUNT} items`,
  )
  .default([])
  .superRefine((achievements, ctx) => {
    const seen = new Set<string>();

    achievements.forEach((achievement, index) => {
      const normalized = achievement.trim().toLowerCase();

      if (seen.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate achievements are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const skillSchema = z
  .string()
  .trim()
  .min(1, 'Skill cannot be empty')
  .max(
    EDUCATION_VALIDATION.SKILLS.MAX_LENGTH,
    `Skill cannot exceed ${EDUCATION_VALIDATION.SKILLS.MAX_LENGTH} characters`,
  );

const skillsSchema = z
  .array(skillSchema)
  .max(
    EDUCATION_VALIDATION.SKILLS.MAX_COUNT,
    `Skills cannot exceed ${EDUCATION_VALIDATION.SKILLS.MAX_COUNT} items`,
  )
  .default([])
  .superRefine((skills, ctx) => {
    const seen = new Set<string>();

    skills.forEach((skill, index) => {
      const normalized = skill.trim().toLowerCase();

      if (seen.has(normalized)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: [index],
          message: 'Duplicate skills are not allowed',
        });

        return;
      }

      seen.add(normalized);
    });
  });

const institutionWebsiteSchema = z
  .string()
  .trim()
  .refine((value) => value.startsWith('/') || /^https?:\/\/.+$/i.test(value), {
    message: 'Institution website must be a valid URL or relative path',
  });

const sortOrderSchema = z
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    EDUCATION_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${EDUCATION_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    EDUCATION_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${EDUCATION_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(EDUCATION_DEFAULT.SORT_ORDER);

const isCurrentSchema = z.boolean().default(EDUCATION_DEFAULT.IS_CURRENT);

const isActiveSchema = z.boolean().default(EDUCATION_DEFAULT.IS_ACTIVE);

/* -------------------------------------------------------------------------- */
/*                          Create Education Schema                           */
/* -------------------------------------------------------------------------- */

const createEducationBodySchema = z
  .object({
    institution: institutionSchema,

    degree: degreeSchema,

    fieldOfStudy: fieldOfStudySchema,

    institutionLogo: imageSchema.optional(),

    educationLevel: educationLevelSchema,

    educationType: educationTypeSchema,

    location: locationSchema,

    startDate: startDateSchema,

    endDate: endDateSchema,

    isCurrent: isCurrentSchema,

    gradeType: gradeTypeSchema,

    grade: gradeSchema.optional(),

    description: descriptionSchema.optional(),

    achievements: achievementsSchema,

    skills: skillsSchema,

    institutionWebsite: institutionWebsiteSchema.optional(),

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.startDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['startDate'],
        message: 'Start date cannot be in the future',
      });
    }

    if (data.isCurrent && data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'Current education cannot have an end date',
      });
    }

    if (!data.isCurrent && data.endDate === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date is required when education is not current',
      });
    }

    if (data.endDate && data.endDate.getTime() < data.startDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date cannot be earlier than start date',
      });
    }

    if (data.gradeType === GRADE_TYPE.NONE && data.grade) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['grade'],
        message: 'Grade should not be provided when grade type is None',
      });
    }

    if (data.gradeType !== GRADE_TYPE.NONE && !data.grade) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['grade'],
        message: 'Grade is required for the selected grade type',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                          Update Education Schema                           */
/* -------------------------------------------------------------------------- */

const updateEducationBodySchema = z
  .object({
    institution: institutionSchema.optional(),

    degree: degreeSchema.optional(),

    fieldOfStudy: fieldOfStudySchema.optional(),

    institutionLogo: imageSchema.optional(),

    educationLevel: educationLevelSchema.optional(),

    educationType: educationTypeSchema.optional(),

    location: locationSchema.optional(),

    startDate: startDateSchema.optional(),

    endDate: endDateSchema,

    isCurrent: isCurrentSchema.optional(),

    gradeType: gradeTypeSchema.optional(),

    grade: gradeSchema.optional(),

    description: descriptionSchema.optional(),

    achievements: achievementsSchema.optional(),

    skills: skillsSchema.optional(),

    institutionWebsite: institutionWebsiteSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.startDate && data.startDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['startDate'],
        message: 'Start date cannot be in the future',
      });
    }

    if (data.isCurrent === true && data.endDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'Current education cannot have an end date',
      });
    }

    if (data.startDate && data.endDate && data.endDate.getTime() < data.startDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date cannot be earlier than start date',
      });
    }

    if (data.gradeType === GRADE_TYPE.NONE && data.grade) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['grade'],
        message: 'Grade should not be provided when grade type is None',
      });
    }

    if (
      data.gradeType !== undefined &&
      data.gradeType !== GRADE_TYPE.NONE &&
      data.grade === undefined
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['grade'],
        message: 'Grade is required when grade type is provided',
      });
    }

    if (data.isCurrent === false && data.endDate === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['endDate'],
        message: 'End date is required when education is not current',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createEducationValidationSchema = z
  .object({
    body: createEducationBodySchema,
  })
  .strict();

const updateEducationValidationSchema = z
  .object({
    body: updateEducationBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const EducationValidation = Object.freeze({
  createEducationValidationSchema,

  updateEducationValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateEducationInput = z.infer<typeof createEducationBodySchema>;

export type TUpdateEducationInput = z.infer<typeof updateEducationBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  institutionSchema,
  degreeSchema,
  fieldOfStudySchema,
  educationLevelSchema,
  educationTypeSchema,
  gradeTypeSchema,
  locationSchema,
  startDateSchema,
  endDateSchema,
  gradeSchema,
  descriptionSchema,
  achievementSchema,
  achievementsSchema,
  skillSchema,
  skillsSchema,
  institutionWebsiteSchema,
  sortOrderSchema,
  isCurrentSchema,
  isActiveSchema,
  createEducationBodySchema,
  updateEducationBodySchema,
};
