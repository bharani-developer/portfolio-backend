/**
 * Skill validation schemas.
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

import { SKILLS_CATEGORIES, SKILLS_DEFAULT, SKILLS_VALIDATION } from './skills.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Image URL is required',
      })
      .trim()
      .url('Image URL must be a valid URL')
      .max(
        SKILLS_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Image URL cannot exceed ${SKILLS_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Image public ID is required',
      })
      .trim()
      .min(1, 'Image public ID is required')
      .max(
        SKILLS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Image public ID cannot exceed ${SKILLS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const nameSchema = z
  .string({
    error: 'Skill name is required',
  })
  .trim()
  .min(
    SKILLS_VALIDATION.NAME.MIN_LENGTH,
    `Skill name must be at least ${SKILLS_VALIDATION.NAME.MIN_LENGTH} characters`,
  )
  .max(
    SKILLS_VALIDATION.NAME.MAX_LENGTH,
    `Skill name cannot exceed ${SKILLS_VALIDATION.NAME.MAX_LENGTH} characters`,
  );

const categorySchema = z.enum(SKILLS_CATEGORIES as [string, ...string[]], {
  error: () => ({
    message: 'Invalid skill category',
  }),
});

const proficiencySchema = z.coerce
  .number({
    error: 'Proficiency must be a valid number',
  })
  .int('Proficiency must be an integer')
  .min(
    SKILLS_VALIDATION.PROFICIENCY.MIN,
    `Proficiency must be at least ${SKILLS_VALIDATION.PROFICIENCY.MIN}`,
  )
  .max(
    SKILLS_VALIDATION.PROFICIENCY.MAX,
    `Proficiency cannot exceed ${SKILLS_VALIDATION.PROFICIENCY.MAX}`,
  )
  .default(SKILLS_DEFAULT.PROFICIENCY);

const descriptionSchema = z
  .string()
  .trim()
  .max(
    SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const sortOrderSchema = z.coerce
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    SKILLS_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${SKILLS_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    SKILLS_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${SKILLS_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(SKILLS_DEFAULT.SORT_ORDER);

const isActiveSchema = z.boolean().default(SKILLS_DEFAULT.IS_ACTIVE);
/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createSkillBodySchema = z
  .object({
    name: nameSchema,

    category: categorySchema,

    proficiency: proficiencySchema,

    image: imageSchema.optional(),

    description: descriptionSchema.optional(),

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateSkillBodySchema = z
  .object({
    name: nameSchema.optional(),

    category: categorySchema.optional(),

    proficiency: proficiencySchema.optional(),

    image: imageSchema.optional(),

    description: descriptionSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict();
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createSkillValidationSchema = z
  .object({
    body: createSkillBodySchema,
  })
  .strict();

const updateSkillValidationSchema = z
  .object({
    body: updateSkillBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SkillsValidation = Object.freeze({
  createSkillValidationSchema,

  updateSkillValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateSkillInput = z.infer<typeof createSkillBodySchema>;

export type TUpdateSkillInput = z.infer<typeof updateSkillBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  nameSchema,
  categorySchema,
  proficiencySchema,
  descriptionSchema,
  sortOrderSchema,
  isActiveSchema,
  createSkillBodySchema,
  updateSkillBodySchema,
};
