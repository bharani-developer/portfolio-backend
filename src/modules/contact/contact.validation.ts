/**
 * Contact validation schemas.
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
  CONTACT_DEFAULT,
  CONTACT_PRIORITIES,
  CONTACT_SOURCES,
  CONTACT_STATUSES,
  CONTACT_SOURCE,
  CONTACT_VALIDATION,
} from './contact.constant.js';

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const nameSchema = z
  .string({
    error: 'Name is required',
  })
  .trim()
  .min(
    CONTACT_VALIDATION.NAME.MIN_LENGTH,
    `Name must be at least ${CONTACT_VALIDATION.NAME.MIN_LENGTH} characters`,
  )
  .max(
    CONTACT_VALIDATION.NAME.MAX_LENGTH,
    `Name cannot exceed ${CONTACT_VALIDATION.NAME.MAX_LENGTH} characters`,
  );

const emailSchema = z
  .string({
    error: 'Email is required',
  })
  .trim()
  .toLowerCase()
  .email('Invalid email address')
  .max(
    CONTACT_VALIDATION.EMAIL.MAX_LENGTH,
    `Email cannot exceed ${CONTACT_VALIDATION.EMAIL.MAX_LENGTH} characters`,
  );

const phoneSchema = z
  .string()
  .trim()
  .min(6, 'Phone number is too short')
  .max(
    CONTACT_VALIDATION.PHONE.MAX_LENGTH,
    `Phone number cannot exceed ${CONTACT_VALIDATION.PHONE.MAX_LENGTH} characters`,
  )
  .regex(/^[+\d\s\-()]+$/, 'Invalid phone number format');

const companySchema = z
  .string()
  .trim()
  .max(
    CONTACT_VALIDATION.COMPANY.MAX_LENGTH,
    `Company name cannot exceed ${CONTACT_VALIDATION.COMPANY.MAX_LENGTH} characters`,
  );

const subjectSchema = z
  .string({
    error: 'Subject is required',
  })
  .trim()
  .min(
    CONTACT_VALIDATION.SUBJECT.MIN_LENGTH,
    `Subject must be at least ${CONTACT_VALIDATION.SUBJECT.MIN_LENGTH} characters`,
  )
  .max(
    CONTACT_VALIDATION.SUBJECT.MAX_LENGTH,
    `Subject cannot exceed ${CONTACT_VALIDATION.SUBJECT.MAX_LENGTH} characters`,
  );

const messageSchema = z
  .string({
    error: 'Message is required',
  })
  .trim()
  .min(
    CONTACT_VALIDATION.MESSAGE.MIN_LENGTH,
    `Message must be at least ${CONTACT_VALIDATION.MESSAGE.MIN_LENGTH} characters`,
  )
  .max(
    CONTACT_VALIDATION.MESSAGE.MAX_LENGTH,
    `Message cannot exceed ${CONTACT_VALIDATION.MESSAGE.MAX_LENGTH} characters`,
  );

const statusSchema = z
  .enum(CONTACT_STATUSES as [string, ...string[]], {
    error: () => ({
      message: 'Invalid contact status',
    }),
  })
  .default(CONTACT_DEFAULT.STATUS);

const prioritySchema = z
  .enum(CONTACT_PRIORITIES as [string, ...string[]], {
    error: () => ({
      message: 'Invalid contact priority',
    }),
  })
  .default(CONTACT_DEFAULT.PRIORITY);

const sourceSchema = z
  .enum(CONTACT_SOURCES as [string, ...string[]], {
    error: () => ({
      message: 'Invalid contact source',
    }),
  })
  .default(CONTACT_SOURCE.WEBSITE);

const repliedAtSchema = z.union([z.coerce.date(), z.null()]).default(null);

const notesSchema = z.string().trim().max(3000, 'Notes cannot exceed 3000 characters');

const sortOrderSchema = z
  .number({
    error: 'Sort order must be a valid number',
  })
  .int('Sort order must be an integer')
  .min(
    CONTACT_VALIDATION.SORT_ORDER.MIN,
    `Sort order cannot be less than ${CONTACT_VALIDATION.SORT_ORDER.MIN}`,
  )
  .max(
    CONTACT_VALIDATION.SORT_ORDER.MAX,
    `Sort order cannot exceed ${CONTACT_VALIDATION.SORT_ORDER.MAX}`,
  )
  .default(CONTACT_DEFAULT.SORT_ORDER);

const isReadSchema = z.boolean().default(CONTACT_DEFAULT.IS_READ);

const isRepliedSchema = z.boolean().default(CONTACT_DEFAULT.IS_REPLIED);

const isActiveSchema = z.boolean().default(CONTACT_DEFAULT.IS_ACTIVE);
/* -------------------------------------------------------------------------- */
/*                           Create Body Validation                           */
/* -------------------------------------------------------------------------- */

const createContactBodySchema = z
  .object({
    name: nameSchema,

    email: emailSchema,

    phone: phoneSchema.optional(),

    company: companySchema.optional(),

    subject: subjectSchema,

    message: messageSchema,

    source: sourceSchema,

    notes: notesSchema.optional(),

    sortOrder: sortOrderSchema,

    isActive: isActiveSchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                           Update Body Validation                           */
/* -------------------------------------------------------------------------- */

const updateContactBodySchema = z
  .object({
    name: nameSchema.optional(),

    email: emailSchema.optional(),

    phone: phoneSchema.optional(),

    company: companySchema.optional(),

    subject: subjectSchema.optional(),

    message: messageSchema.optional(),

    status: statusSchema.optional(),

    priority: prioritySchema.optional(),

    source: sourceSchema.optional(),

    isRead: isReadSchema.optional(),

    isReplied: isRepliedSchema.optional(),

    repliedAt: repliedAtSchema.optional(),

    notes: notesSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.isReplied === true && (data.repliedAt === undefined || data.repliedAt === null)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['repliedAt'],
        message: 'Reply date is required when contact is marked as replied',
      });
    }

    if (data.repliedAt && data.repliedAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['repliedAt'],
        message: 'Reply date cannot be in the future',
      });
    }

    if (data.isReplied === false && data.repliedAt instanceof Date) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['isReplied'],
        message: 'A reply date cannot be provided unless the contact is marked as replied',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                         Admin Update Body Schema                           */
/* -------------------------------------------------------------------------- */

const adminUpdateContactBodySchema = z
  .object({
    status: statusSchema.optional(),

    priority: prioritySchema.optional(),

    isRead: isReadSchema.optional(),

    isReplied: isRepliedSchema.optional(),

    repliedAt: repliedAtSchema.optional(),

    notes: notesSchema.optional(),

    sortOrder: sortOrderSchema.optional(),

    isActive: isActiveSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.isReplied === true && (data.repliedAt === undefined || data.repliedAt === null)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['repliedAt'],
        message: 'Reply date is required when contact is marked as replied',
      });
    }

    if (data.repliedAt && data.repliedAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['repliedAt'],
        message: 'Reply date cannot be in the future',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const createContactValidationSchema = z
  .object({
    body: createContactBodySchema,
  })
  .strict();

const updateContactValidationSchema = z
  .object({
    body: updateContactBodySchema,
  })
  .strict();

const adminUpdateContactValidationSchema = z
  .object({
    body: adminUpdateContactBodySchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ContactValidation = Object.freeze({
  createContactValidationSchema,

  updateContactValidationSchema,

  adminUpdateContactValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TCreateContactInput = z.infer<typeof createContactBodySchema>;

export type TUpdateContactInput = z.infer<typeof updateContactBodySchema>;

export type TAdminUpdateContactInput = z.infer<typeof adminUpdateContactBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export {
  nameSchema,
  emailSchema,
  phoneSchema,
  companySchema,
  subjectSchema,
  messageSchema,
  statusSchema,
  prioritySchema,
  sourceSchema,
  repliedAtSchema,
  notesSchema,
  sortOrderSchema,
  isReadSchema,
  isRepliedSchema,
  isActiveSchema,
  createContactBodySchema,
  updateContactBodySchema,
  adminUpdateContactBodySchema,
};
