/**
 * =============================================================================
 * File: src/configs/env.validation.ts
 * Description:
 * Centralized environment variable validation using Zod.
 * =============================================================================
 */

import { z } from 'zod';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type NodeEnvironment = 'development' | 'production' | 'test';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const removeTrailingSlash = (value: string): string => value.replace(/\/+$/, '');

const splitCommaSeparated = (value: string): string[] =>
  value
    .split(',')
    .map((item) => removeTrailingSlash(item.trim()))
    .filter(Boolean);

/* -------------------------------------------------------------------------- */
/*                              Shared Schemas                                */
/* -------------------------------------------------------------------------- */

/**
 * Base string schema.
 *
 * Every string in the application starts here.
 */
const stringSchema = z.string().trim();

/**
 * Required string.
 */
const requiredStringSchema = stringSchema.min(1, 'This environment variable is required.');

/**
 * URL.
 */
const urlSchema = stringSchema.url('Invalid URL.').transform(removeTrailingSlash);

/**
 * Email.
 */
const emailSchema = stringSchema.email('Invalid email address.');

/**
 * JWT Secret.
 */
const jwtSecretSchema = stringSchema.min(32, 'JWT secret must contain at least 32 characters.');

/**
 * JWT Duration.
 *
 * Examples:
 * 15m
 * 1h
 * 7d
 * 30d
 */
const jwtDurationSchema = stringSchema.regex(/^\d+(s|m|h|d)$/i, 'Invalid JWT duration.');

/**
 * Port.
 */
const portSchema = z.coerce.number().int().min(1).max(65535);

/**
 * Positive Integer.
 */
const positiveIntegerSchema = z.coerce.number().int().positive();

/**
 * Cloudinary API Key.
 */
const cloudinaryApiKeySchema = stringSchema.regex(
  /^\d+$/,
  'Cloudinary API Key must contain only digits.',
);

/**
 * CORS Origins.
 */
const corsOriginSchema = stringSchema.transform(splitCommaSeparated);

/**
 * Supported Node environments.
 */
const nodeEnvironmentSchema = z.enum(['development', 'production', 'test']);
/* -------------------------------------------------------------------------- */
/*                           Environment Schema                               */
/* -------------------------------------------------------------------------- */

export const envSchema = z.object({
  /* ------------------------------------------------------------------------ */
  /* Application                                                              */
  /* ------------------------------------------------------------------------ */

  NODE_ENV: nodeEnvironmentSchema.default('development'),

  PORT: portSchema.default(5000),

  DEVELOPMENT__URL: urlSchema,

  PRODUCTION__URL: urlSchema,

  /* ------------------------------------------------------------------------ */
  /* Database                                                                 */
  /* ------------------------------------------------------------------------ */

  DATABASE_URL: requiredStringSchema.refine(
    (value: string) => value.startsWith('mongodb://') || value.startsWith('mongodb+srv://'),
    {
      message: 'DATABASE_URL must be a valid MongoDB connection string.',
    },
  ),

  /* ------------------------------------------------------------------------ */
  /* JWT                                                                      */
  /* ------------------------------------------------------------------------ */

  JWT_SECRET: jwtSecretSchema,

  JWT_EXPIRES_IN: jwtDurationSchema,

  JWT_REFRESH_SECRET: jwtSecretSchema,

  JWT_REFRESH_EXPIRES_IN: jwtDurationSchema,

  /* ------------------------------------------------------------------------ */
  /* Security                                                                 */
  /* ------------------------------------------------------------------------ */

  BCRYPT_SALT_ROUNDS: positiveIntegerSchema.min(8).max(15).default(10),

  /* ------------------------------------------------------------------------ */
  /* CORS                                                                     */
  /* ------------------------------------------------------------------------ */

  CORS_ORIGIN: corsOriginSchema,

  /* ------------------------------------------------------------------------ */
  /* Cloudinary                                                               */
  /* ------------------------------------------------------------------------ */

  CLOUDINARY_CLOUD_NAME: requiredStringSchema,

  CLOUDINARY_API_KEY: cloudinaryApiKeySchema,

  CLOUDINARY_API_SECRET: requiredStringSchema.min(20, 'Cloudinary API Secret is invalid.'),

  CLOUDINARY_FOLDER: requiredStringSchema.min(2).max(100),

  /* ------------------------------------------------------------------------ */
  /* Admin Seeder                                                             */
  /* ------------------------------------------------------------------------ */

  ADMIN_NAME: requiredStringSchema.min(2).max(100),

  ADMIN_EMAIL: emailSchema,

  ADMIN_PASSWORD: requiredStringSchema.min(8).max(128),

  /* ------------------------------------------------------------------------ */
  /* Google OAuth                                                             */
  /* ------------------------------------------------------------------------ */

  GOOGLE_CLIENT_ID: requiredStringSchema.regex(
    /^[a-zA-Z0-9-]+\.apps\.googleusercontent\.com$/,
    'Invalid Google Client ID.',
  ),
});
/* -------------------------------------------------------------------------- */
/*                         Cross Field Validation                             */
/* -------------------------------------------------------------------------- */

export const validatedEnvSchema = envSchema.superRefine((env, ctx) => {
  /* ------------------------------------------------------------------------ */
  /* JWT Secrets                                                              */
  /* ------------------------------------------------------------------------ */

  if (env.JWT_SECRET === env.JWT_REFRESH_SECRET) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['JWT_REFRESH_SECRET'],
      message: 'JWT_REFRESH_SECRET must be different from JWT_SECRET.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Development & Production URLs                                            */
  /* ------------------------------------------------------------------------ */

  if (env.DEVELOPMENT__URL === env.PRODUCTION__URL) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['PRODUCTION__URL'],
      message: 'Production URL must be different from Development URL.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Duplicate CORS Origins                                                   */
  /* ------------------------------------------------------------------------ */

  const uniqueOrigins = new Set(env.CORS_ORIGIN);

  if (uniqueOrigins.size !== env.CORS_ORIGIN.length) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['CORS_ORIGIN'],
      message: 'Duplicate origins were found in CORS_ORIGIN.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Bcrypt Salt Rounds                                                       */
  /* ------------------------------------------------------------------------ */

  if (env.NODE_ENV === 'production' && env.BCRYPT_SALT_ROUNDS < 10) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['BCRYPT_SALT_ROUNDS'],
      message: 'Use at least 10 bcrypt salt rounds in production.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Cloudinary Folder                                                        */
  /* ------------------------------------------------------------------------ */

  if (env.CLOUDINARY_FOLDER.startsWith('/')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['CLOUDINARY_FOLDER'],
      message: "Cloudinary folder must not start with '/'.",
    });
  }

  if (env.CLOUDINARY_FOLDER.endsWith('/')) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['CLOUDINARY_FOLDER'],
      message: "Cloudinary folder must not end with '/'.",
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Admin Password                                                           */
  /* ------------------------------------------------------------------------ */

  if (env.ADMIN_PASSWORD === env.ADMIN_EMAIL) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['ADMIN_PASSWORD'],
      message: 'Admin password must not be the same as the admin email.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* JWT Secret Length Recommendation                                         */
  /* ------------------------------------------------------------------------ */

  if (env.NODE_ENV === 'production' && env.JWT_SECRET.length < 64) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['JWT_SECRET'],
      message: 'Use a JWT secret with at least 64 characters in production.',
    });
  }

  if (env.NODE_ENV === 'production' && env.JWT_REFRESH_SECRET.length < 64) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['JWT_REFRESH_SECRET'],
      message: 'Use a refresh JWT secret with at least 64 characters in production.',
    });
  }

  /* ------------------------------------------------------------------------ */
  /* Cloudinary API Secret                                                    */
  /* ------------------------------------------------------------------------ */

  if (env.NODE_ENV === 'production' && env.CLOUDINARY_API_SECRET.length < 20) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['CLOUDINARY_API_SECRET'],
      message: 'Cloudinary API Secret appears to be too short.',
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                Export Type                                 */
/* -------------------------------------------------------------------------- */

export type Env = z.infer<typeof validatedEnvSchema>;
/* -------------------------------------------------------------------------- */
/*                           Validation Function                              */
/* -------------------------------------------------------------------------- */

/**
 * Validates the supplied environment variables.
 *
 * Throws a detailed error if validation fails.
 */
export const validateEnv = (environment: NodeJS.ProcessEnv): Env => {
  const result = validatedEnvSchema.safeParse(environment);

  if (result.success) {
    return Object.freeze(result.data);
  }

  const errors = result.error.issues
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join('.') : 'Environment';

      return `• ${path}: ${issue.message}`;
    })
    .join('\n');

  throw new Error(
    ['', 'Environment validation failed.', '', errors, '', 'Please check your .env file.'].join(
      '\n',
    ),
  );
};

/* -------------------------------------------------------------------------- */
/*                             Parsed Environment                             */
/* -------------------------------------------------------------------------- */

/**
 * Fully validated environment configuration.
 *
 * Import this object everywhere in the application.
 *
 * Example:
 *
 * import { validatedEnv } from "@/configs/env.validation";
 */
export const validatedEnv = validateEnv(process.env);

/* -------------------------------------------------------------------------- */
/*                              Convenience Exports                           */
/* -------------------------------------------------------------------------- */

export const isDevelopment = validatedEnv.NODE_ENV === 'development';

export const isProduction = validatedEnv.NODE_ENV === 'production';

export const isTest = validatedEnv.NODE_ENV === 'test';

/* -------------------------------------------------------------------------- */
/*                                 Freeze                                     */
/* -------------------------------------------------------------------------- */

Object.freeze(validatedEnv);
