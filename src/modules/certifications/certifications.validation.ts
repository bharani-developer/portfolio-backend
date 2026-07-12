/**
 * Certification validation schemas.
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

import { CERTIFICATION_DEFAULT, CERTIFICATION_VALIDATION } from './certifications.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Certificate image URL is required',
      })
      .trim()
      .url('Certificate image URL must be a valid URL')
      .max(
        CERTIFICATION_VALIDATION.IMAGE.URL_MAX_LENGTH,
        `Certificate image URL cannot exceed ${CERTIFICATION_VALIDATION.IMAGE.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Certificate image public ID is required',
      })
      .trim()
      .min(1, 'Certificate image public ID is required')
      .max(
        CERTIFICATION_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        `Certificate image public ID cannot exceed ${CERTIFICATION_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const titleSchema = z
  .string({
    error: 'Title is required',
  })
  .trim()
  .min(1, 'Title is required')
  .max(
    CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,
    `Title cannot exceed ${CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH} characters`,
  );

const issuerSchema = z
  .string({
    error: 'Issuer is required',
  })
  .trim()
  .min(1, 'Issuer is required')
  .max(
    CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH,
    `Issuer cannot exceed ${CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH} characters`,
  );

const credentialIdSchema = z
  .string()
  .trim()
  .max(
    CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH,
    `Credential ID cannot exceed ${CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH} characters`,
  );

const credentialUrlSchema = z
  .string()
  .trim()
  .url('Credential URL must be a valid URL')
  .max(
    CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH,
    `Credential URL cannot exceed ${CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH} characters`,
  );

const descriptionSchema = z
  .string()
  .trim()
  .max(
    CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH,
    `Description cannot exceed ${CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH} characters`,
  );

const skillSchema = z
  .string()
  .trim()
  .min(1, 'Skill cannot be empty')
  .max(
    CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH,
    `Skill cannot exceed ${CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH} characters`,
  );

const skillsSchema = z
  .array(skillSchema)
  .max(
    CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT,
    `Skills cannot exceed ${CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT} items`,
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

const issueDateSchema = z.coerce.date({
  error: 'Invalid issue date',
});

const expiryDateSchema = z.union([z.coerce.date(), z.null()]).optional();

const sortOrderSchema = z
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    CERTIFICATION_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${CERTIFICATION_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    CERTIFICATION_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${CERTIFICATION_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(CERTIFICATION_DEFAULT.SORT_ORDER);

const neverExpiresSchema = z.boolean().default(CERTIFICATION_DEFAULT.NEVER_EXPIRES);

const isActiveSchema = z.boolean().default(CERTIFICATION_DEFAULT.IS_ACTIVE);
/* -------------------------------------------------------------------------- */
/*                         Create Certification Schema                        */
/* -------------------------------------------------------------------------- */

const createCertificationBodySchema = z
  .object({
    title: titleSchema,

    issuer: issuerSchema,

    certificateImage: imageSchema.optional(),

    credentialId: credentialIdSchema.optional(),

    credentialUrl: credentialUrlSchema.optional(),

    issueDate: issueDateSchema,

    expiryDate: expiryDateSchema,

    neverExpires: neverExpiresSchema,

    description: descriptionSchema.optional(),

    skills: skillsSchema,

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.neverExpires && data.expiryDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date must be null when certification never expires',
      });
    }

    if (!data.neverExpires && !data.expiryDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date is required when certification expires',
      });
    }

    if (data.expiryDate && data.issueDate && data.expiryDate.getTime() < data.issueDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date cannot be earlier than issue date',
      });
    }

    if (data.issueDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['issueDate'],
        message: 'Issue date cannot be in the future',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                         Update Certification Schema                        */
/* -------------------------------------------------------------------------- */

const updateCertificationBodySchema = z
  .object({
    title: titleSchema.optional(),

    issuer: issuerSchema.optional(),

    certificateImage: imageSchema.optional(),

    credentialId: credentialIdSchema.optional(),

    credentialUrl: credentialUrlSchema.optional(),

    issueDate: issueDateSchema.optional(),

    expiryDate: expiryDateSchema,

    neverExpires: neverExpiresSchema.optional(),

    description: descriptionSchema.optional(),

    skills: skillsSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.neverExpires === true && data.expiryDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date must be null when certification never expires',
      });
    }

    if (data.issueDate && data.issueDate.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['issueDate'],
        message: 'Issue date cannot be in the future',
      });
    }

    if (data.issueDate && data.expiryDate && data.expiryDate.getTime() < data.issueDate.getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date cannot be earlier than issue date',
      });
    }

    if (data.neverExpires === false && data.expiryDate === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['expiryDate'],
        message: 'Expiry date is required when certification expires',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation Schemas                       */
/* -------------------------------------------------------------------------- */

const createCertificationValidationSchema = z.object({
  body: createCertificationBodySchema,
});

const updateCertificationValidationSchema = z.object({
  body: updateCertificationBodySchema,
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const CertificationValidation = Object.freeze({
  createCertificationValidationSchema,

  updateCertificationValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateCertificationInput = z.infer<typeof createCertificationBodySchema>;

export type TUpdateCertificationInput = z.infer<typeof updateCertificationBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  imageSchema,
  titleSchema,
  issuerSchema,
  credentialIdSchema,
  credentialUrlSchema,
  descriptionSchema,
  skillSchema,
  skillsSchema,
  issueDateSchema,
  expiryDateSchema,
  sortOrderSchema,
  neverExpiresSchema,
  isActiveSchema,
  createCertificationBodySchema,
  updateCertificationBodySchema,
};
