// src/modules/auth/auth.validation.ts

import { z } from "zod";

/**
 * Email / Password Login
 */
const loginValidationSchema = z.object({
  body: z.object({
    email: z.email("Please provide a valid email address").trim().toLowerCase(),

    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password cannot exceed 100 characters"),
  }),
});

/**
 * Google Login
 *
 * Frontend sends Google ID Token
 */
const googleLoginValidationSchema = z.object({
  body: z.object({
    token: z.string().trim().min(1, "Google token is required"),
  }),
});

/**
 * Change Password
 */
const changePasswordValidationSchema = z.object({
  body: z.object({
    oldPassword: z
      .string()
      .trim()
      .min(6, "Old password must be at least 6 characters")
      .max(100, "Old password cannot exceed 100 characters"),

    newPassword: z
      .string()
      .trim()
      .min(6, "New password must be at least 6 characters")
      .max(100, "New password cannot exceed 100 characters"),
  }),
});

/**
 * Refresh Token
 */
const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string().min(1, "Refresh token is required"),
  }),
});

export const AuthValidation = {
  loginValidationSchema,

  googleLoginValidationSchema,

  changePasswordValidationSchema,

  refreshTokenValidationSchema,
};
