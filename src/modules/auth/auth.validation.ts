/**
 * Authentication validation schemas.
 *
 * Structure:
 * 1. Imports
 * 2. Regular Expressions
 * 3. Reusable Validators
 * 4. Body Schemas
 * 5. Cookie Schemas
 * 6. Request Schemas
 * 7. Export
 * 8. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

import { AUTH_COOKIE, AUTH_VALIDATION } from './auth.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Regular Expressions                           */
/* -------------------------------------------------------------------------- */

/**
 * Password requirements:
 *
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one digit
 * - At least one special character
 */
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()[\]{}\-_=+|:;"'<>,./\\`~^#]).+$/;

/* -------------------------------------------------------------------------- */
/*                            Reusable Validators                             */
/* -------------------------------------------------------------------------- */

/**
 * Email validator.
 */
export const emailSchema = z
  .string({
    error: 'Email is required',
  })
  .trim()
  .toLowerCase()
  .email('Please provide a valid email address')
  .max(
    AUTH_VALIDATION.EMAIL.MAX_LENGTH,
    `Email cannot exceed ${AUTH_VALIDATION.EMAIL.MAX_LENGTH} characters`,
  );

/**
 * Password validator.
 */
export const passwordSchema = z
  .string({
    error: 'Password is required',
  })
  .trim()
  .min(
    AUTH_VALIDATION.PASSWORD.MIN_LENGTH,
    `Password must be at least ${AUTH_VALIDATION.PASSWORD.MIN_LENGTH} characters`,
  )
  .max(
    AUTH_VALIDATION.PASSWORD.MAX_LENGTH,
    `Password cannot exceed ${AUTH_VALIDATION.PASSWORD.MAX_LENGTH} characters`,
  )
  .regex(
    PASSWORD_REGEX,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  );

/**
 * JWT / Google token validator.
 */
export const tokenSchema = z
  .string({
    error: 'Token is required',
  })
  .trim()
  .min(AUTH_VALIDATION.TOKEN.MIN_LENGTH, 'Token is required');

/* -------------------------------------------------------------------------- */
/*                            Reusable Schema Exports                         */
/* -------------------------------------------------------------------------- */

/**
 * Export reusable validators so they can be reused
 * by other authentication-related modules.
 */
export const AuthSchemas = Object.freeze({
  emailSchema,

  passwordSchema,

  tokenSchema,
});
/* -------------------------------------------------------------------------- */
/*                                Body Schemas                                */
/* -------------------------------------------------------------------------- */

/**
 * Email/password login request.
 */
export const loginBodySchema = z
  .object({
    email: emailSchema,

    password: passwordSchema,
  })
  .strict();

/**
 * Google Sign-In request.
 */
export const googleLoginBodySchema = z
  .object({
    token: tokenSchema,
  })
  .strict();

/**
 * Change password request.
 */
export const changePasswordBodySchema = z
  .object({
    oldPassword: passwordSchema,

    newPassword: passwordSchema,
  })
  .strict()
  .superRefine((data, ctx) => {
    const oldPassword = data.oldPassword.trim();

    const newPassword = data.newPassword.trim();

    /**
     * New password must differ from current password.
     */
    if (oldPassword === newPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['newPassword'],
        message: 'New password must be different from the current password',
      });
    }
  });

/* -------------------------------------------------------------------------- */
/*                               Cookie Schemas                               */
/* -------------------------------------------------------------------------- */

/**
 * Refresh token cookie.
 */
export const refreshTokenCookieSchema = z
  .object({
    [AUTH_COOKIE.REFRESH_TOKEN]: tokenSchema,
  })
  .strip();
/* -------------------------------------------------------------------------- */
/*                              Request Schemas                               */
/* -------------------------------------------------------------------------- */

/**
 * Login request validation.
 */
export const loginValidationSchema = z
  .object({
    body: loginBodySchema,
  })
  .strict();

/**
 * Google Sign-In request validation.
 */
export const googleLoginValidationSchema = z
  .object({
    body: googleLoginBodySchema,
  })
  .strict();

/**
 * Change password request validation.
 */
export const changePasswordValidationSchema = z
  .object({
    body: changePasswordBodySchema,
  })
  .strict();

/**
 * Refresh token request validation.
 */
export const refreshTokenValidationSchema = z
  .object({
    cookies: refreshTokenCookieSchema,
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

/**
 * Authentication validation schemas.
 *
 * These schemas should be used by the validateRequest middleware.
 */
export const AuthValidation = Object.freeze({
  loginValidationSchema,

  googleLoginValidationSchema,

  changePasswordValidationSchema,

  refreshTokenValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Login request body.
 */
export type TLoginInput = z.infer<typeof loginBodySchema>;

/**
 * Google login request body.
 */
export type TGoogleLoginInput = z.infer<typeof googleLoginBodySchema>;

/**
 * Change password request body.
 */
export type TChangePasswordInput = z.infer<typeof changePasswordBodySchema>;

/**
 * Refresh token cookie.
 */
export type TRefreshTokenInput = z.infer<typeof refreshTokenCookieSchema>;

/* -------------------------------------------------------------------------- */
/*                            Reusable Schema Types                           */
/* -------------------------------------------------------------------------- */

/**
 * Reusable validator types.
 */
export type TEmail = z.infer<typeof emailSchema>;

export type TPassword = z.infer<typeof passwordSchema>;

export type TToken = z.infer<typeof tokenSchema>;
