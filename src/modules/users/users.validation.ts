/**
 * Users validation schemas.
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

import { ROLE, ROLES } from '../../constants/role.constants.js';

import { AUTH_PROVIDER, AUTH_PROVIDERS } from '../../modules/auth/auth.constant.js';

import { USERS_DEFAULT, USER_VALIDATION } from './users.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

const imageSchema = z
  .object({
    url: z
      .string({
        error: 'Avatar URL is required',
      })
      .trim()
      .url('Avatar URL must be a valid URL')
      .max(
        USER_VALIDATION.AVATAR.URL_MAX_LENGTH,
        `Avatar URL cannot exceed ${USER_VALIDATION.AVATAR.URL_MAX_LENGTH} characters`,
      ),

    publicId: z
      .string({
        error: 'Avatar public ID is required',
      })
      .trim()
      .min(1, 'Avatar public ID is required')
      .max(
        USER_VALIDATION.AVATAR.PUBLIC_ID_MAX_LENGTH,
        `Avatar public ID cannot exceed ${USER_VALIDATION.AVATAR.PUBLIC_ID_MAX_LENGTH} characters`,
      ),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

const nameSchema = z
  .string({
    error: 'Name is required',
  })
  .trim()
  .min(
    USER_VALIDATION.NAME.MIN_LENGTH,
    `Name must be at least ${USER_VALIDATION.NAME.MIN_LENGTH} characters`,
  )
  .max(
    USER_VALIDATION.NAME.MAX_LENGTH,
    `Name cannot exceed ${USER_VALIDATION.NAME.MAX_LENGTH} characters`,
  );

const emailSchema = z
  .string({
    error: 'Email is required',
  })
  .trim()
  .toLowerCase()
  .email('Please provide a valid email address')
  .max(
    USER_VALIDATION.EMAIL.MAX_LENGTH,
    `Email cannot exceed ${USER_VALIDATION.EMAIL.MAX_LENGTH} characters`,
  );

const passwordSchema = z
  .string({
    error: 'Password is required',
  })
  .trim()
  .min(
    USER_VALIDATION.PASSWORD.MIN_LENGTH,
    `Password must be at least ${USER_VALIDATION.PASSWORD.MIN_LENGTH} characters`,
  )
  .max(
    USER_VALIDATION.PASSWORD.MAX_LENGTH,
    `Password cannot exceed ${USER_VALIDATION.PASSWORD.MAX_LENGTH} characters`,
  );

const googleIdSchema = z.string().trim().min(1, 'Google ID cannot be empty');

const givenNameSchema = z
  .string()
  .trim()
  .max(
    USER_VALIDATION.GIVEN_NAME.MAX_LENGTH,
    `Given name cannot exceed ${USER_VALIDATION.GIVEN_NAME.MAX_LENGTH} characters`,
  );

const familyNameSchema = z
  .string()
  .trim()
  .max(
    USER_VALIDATION.FAMILY_NAME.MAX_LENGTH,
    `Family name cannot exceed ${USER_VALIDATION.FAMILY_NAME.MAX_LENGTH} characters`,
  );

const localeSchema = z
  .string()
  .trim()
  .max(
    USER_VALIDATION.LOCALE.MAX_LENGTH,
    `Locale cannot exceed ${USER_VALIDATION.LOCALE.MAX_LENGTH} characters`,
  );

const hostedDomainSchema = z
  .string()
  .trim()
  .max(
    USER_VALIDATION.HOSTED_DOMAIN.MAX_LENGTH,
    `Hosted domain cannot exceed ${USER_VALIDATION.HOSTED_DOMAIN.MAX_LENGTH} characters`,
  );

const roleSchema = z.enum(ROLES as [typeof ROLE.ADMIN, typeof ROLE.VIEWER], {
  error: () => ({
    message: 'Invalid role',
  }),
});

const authProviderSchema = z.enum(
  AUTH_PROVIDERS as [typeof AUTH_PROVIDER.LOCAL, typeof AUTH_PROVIDER.GOOGLE],
  {
    error: () => ({
      message: 'Invalid authentication provider',
    }),
  },
);

const objectIdSchema = z
  .string()
  .trim()
  .regex(/^[0-9a-fA-F]{24}$/, 'Invalid MongoDB ObjectId');

const emailVerifiedSchema = z.boolean().default(USERS_DEFAULT.EMAIL_VERIFIED);

const isDeletedSchema = z.boolean().default(USERS_DEFAULT.IS_DELETED);

const isActiveSchema = z.boolean().default(USERS_DEFAULT.IS_ACTIVE);

const lastLoginAtSchema = z.coerce.date({
  error: 'Invalid last login date',
});

const pageSchema = z.coerce.number().int().min(1);

const limitSchema = z.coerce.number().int().min(1).max(100);

const sortBySchema = z.enum(['name', 'email', 'role', 'createdAt', 'updatedAt', 'lastLoginAt']);

const sortOrderSchema = z.enum(['asc', 'desc']);
/* -------------------------------------------------------------------------- */
/*                          Create User Body Schema                           */
/* -------------------------------------------------------------------------- */

const createUserBodySchema = z
  .object({
    name: nameSchema,

    email: emailSchema,

    password: passwordSchema.optional(),

    role: roleSchema.default(ROLE.VIEWER),

    authProvider: authProviderSchema.default(AUTH_PROVIDER.LOCAL),

    googleId: googleIdSchema.optional(),

    avatar: imageSchema.optional(),

    emailVerified: emailVerifiedSchema,

    givenName: givenNameSchema.optional(),

    familyName: familyNameSchema.optional(),

    locale: localeSchema.optional(),

    hostedDomain: hostedDomainSchema.optional(),

    isDeleted: isDeletedSchema,

    isActive: isActiveSchema,

    lastLoginAt: lastLoginAtSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    /* ---------------------------------------------------------------------- */
    /* LOCAL account                                                          */
    /* ---------------------------------------------------------------------- */

    if (data.authProvider === AUTH_PROVIDER.LOCAL) {
      if (!data.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password is required for LOCAL accounts',
        });
      }

      if (data.googleId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['googleId'],
          message: 'Google ID is not allowed for LOCAL accounts',
        });
      }
    }

    /* ---------------------------------------------------------------------- */
    /* GOOGLE account                                                         */
    /* ---------------------------------------------------------------------- */

    if (data.authProvider === AUTH_PROVIDER.GOOGLE) {
      if (!data.googleId) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['googleId'],
          message: 'Google ID is required for GOOGLE accounts',
        });
      }

      if (data.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password should not be provided for GOOGLE accounts',
        });
      }
    }

    /* ---------------------------------------------------------------------- */
    /* Last Login                                                             */
    /* ---------------------------------------------------------------------- */

    if (data.lastLoginAt && data.lastLoginAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['lastLoginAt'],
        message: 'Last login date cannot be in the future',
      });
    }

    /* ---------------------------------------------------------------------- */
    /* Hosted Domain                                                          */
    /* ---------------------------------------------------------------------- */

    if (data.hostedDomain && data.authProvider !== AUTH_PROVIDER.GOOGLE) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['hostedDomain'],
        message: 'Hosted domain is only supported for GOOGLE accounts',
      });
    }

    /* ---------------------------------------------------------------------- */
    /* Google Profile                                                         */
    /* ---------------------------------------------------------------------- */

    if (
      data.authProvider === AUTH_PROVIDER.GOOGLE &&
      (data.givenName || data.familyName || data.locale) &&
      !data.googleId
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['googleId'],
        message: 'Google profile information requires a Google ID',
      });
    }
  });
/* -------------------------------------------------------------------------- */
/*                          Update User Body Schema                           */
/* -------------------------------------------------------------------------- */

const updateUserBodySchema = z
  .object({
    name: nameSchema.optional(),

    email: emailSchema.optional(),

    password: passwordSchema.optional(),

    role: roleSchema.optional(),

    authProvider: authProviderSchema.optional(),

    googleId: googleIdSchema.optional(),

    avatar: imageSchema.optional(),

    emailVerified: emailVerifiedSchema.optional(),

    givenName: givenNameSchema.optional(),

    familyName: familyNameSchema.optional(),

    locale: localeSchema.optional(),

    hostedDomain: hostedDomainSchema.optional(),

    isDeleted: isDeletedSchema.optional(),

    isActive: isActiveSchema.optional(),

    lastLoginAt: lastLoginAtSchema.optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    /* ---------------------------------------------------------------------- */
    /* LOCAL Account                                                          */
    /* ---------------------------------------------------------------------- */

    if (data.authProvider === AUTH_PROVIDER.LOCAL) {
      if (data.googleId !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['googleId'],
          message: 'Google ID cannot be provided for LOCAL accounts',
        });
      }
    }

    /* ---------------------------------------------------------------------- */
    /* GOOGLE Account                                                         */
    /* ---------------------------------------------------------------------- */

    if (data.authProvider === AUTH_PROVIDER.GOOGLE) {
      if (data.googleId === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['googleId'],
          message: 'Google ID cannot be empty',
        });
      }

      if (data.password !== undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password cannot be updated for GOOGLE accounts',
        });
      }
    }

    /* ---------------------------------------------------------------------- */
    /* Last Login                                                             */
    /* ---------------------------------------------------------------------- */

    if (data.lastLoginAt && data.lastLoginAt.getTime() > Date.now()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['lastLoginAt'],
        message: 'Last login date cannot be in the future',
      });
    }

    /* ---------------------------------------------------------------------- */
    /* Hosted Domain                                                          */
    /* ---------------------------------------------------------------------- */

    if (
      data.hostedDomain !== undefined &&
      data.authProvider !== undefined &&
      data.authProvider !== AUTH_PROVIDER.GOOGLE
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['hostedDomain'],
        message: 'Hosted domain is only supported for GOOGLE accounts',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                           Params Validation                                */
/* -------------------------------------------------------------------------- */

const userParamsSchema = z
  .object({
    id: objectIdSchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                            Query Validation                                */
/* -------------------------------------------------------------------------- */

const usersQuerySchema = z
  .object({
    page: pageSchema.optional(),

    limit: limitSchema.optional(),

    searchTerm: z.string().trim().optional(),

    role: roleSchema.optional(),

    authProvider: authProviderSchema.optional(),

    isActive: z.coerce.boolean().optional(),

    emailVerified: z.coerce.boolean().optional(),

    sortBy: sortBySchema.optional(),

    sortOrder: sortOrderSchema.optional(),
  })
  .strict();
const createUserValidationSchema = z.object({
  body: createUserBodySchema,
});

const updateUserValidationSchema = z.object({
  body: updateUserBodySchema,
});

const userParamsValidationSchema = z.object({
  params: userParamsSchema,
});

const usersQueryValidationSchema = z.object({
  query: usersQuerySchema,
});

export const UsersValidation = Object.freeze({
  createUserValidationSchema,
  updateUserValidationSchema,
  userParamsValidationSchema,
  usersQueryValidationSchema,
});
