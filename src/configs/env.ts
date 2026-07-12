/**
 * =============================================================================
 * File: src/configs/env.ts
 * Description:
 * Loads and normalizes validated environment variables.
 * =============================================================================
 */

import 'dotenv/config';

import { validateEnv } from './env.validation.js';

/* -------------------------------------------------------------------------- */
/*                           Raw Validated Environment                        */
/* -------------------------------------------------------------------------- */

const validated = validateEnv(process.env);

/* -------------------------------------------------------------------------- */
/*                             Normalized Environment                         */
/* -------------------------------------------------------------------------- */

export const env = Object.freeze({
  /* ------------------------------------------------------------------------ */
  /* Application                                                              */
  /* ------------------------------------------------------------------------ */

  NODE_ENV: validated.NODE_ENV,

  PORT: validated.PORT,

  DEVELOPMENT_URL: validated.DEVELOPMENT__URL,

  PRODUCTION_URL: validated.PRODUCTION__URL,

  APP_URL:
    validated.NODE_ENV === 'production' ? validated.PRODUCTION__URL : validated.DEVELOPMENT__URL,

  /* ------------------------------------------------------------------------ */
  /* Database                                                                 */
  /* ------------------------------------------------------------------------ */

  DATABASE_URL: validated.DATABASE_URL,

  /* ------------------------------------------------------------------------ */
  /* JWT                                                                      */
  /* ------------------------------------------------------------------------ */

  JWT_SECRET: validated.JWT_SECRET,

  JWT_EXPIRES_IN: validated.JWT_EXPIRES_IN,

  JWT_REFRESH_SECRET: validated.JWT_REFRESH_SECRET,

  JWT_REFRESH_EXPIRES_IN: validated.JWT_REFRESH_EXPIRES_IN,

  /* ------------------------------------------------------------------------ */
  /* Security                                                                 */
  /* ------------------------------------------------------------------------ */

  BCRYPT_SALT_ROUNDS: validated.BCRYPT_SALT_ROUNDS,

  /* ------------------------------------------------------------------------ */
  /* CORS                                                                     */
  /* ------------------------------------------------------------------------ */

  CORS_ORIGIN: validated.CORS_ORIGIN,

  /* ------------------------------------------------------------------------ */
  /* Cloudinary                                                               */
  /* ------------------------------------------------------------------------ */

  CLOUDINARY_CLOUD_NAME: validated.CLOUDINARY_CLOUD_NAME,

  CLOUDINARY_API_KEY: validated.CLOUDINARY_API_KEY,

  CLOUDINARY_API_SECRET: validated.CLOUDINARY_API_SECRET,

  CLOUDINARY_FOLDER: validated.CLOUDINARY_FOLDER,

  /* ------------------------------------------------------------------------ */
  /* Seeder                                                                   */
  /* ------------------------------------------------------------------------ */

  ADMIN_NAME: validated.ADMIN_NAME,

  ADMIN_EMAIL: validated.ADMIN_EMAIL,

  ADMIN_PASSWORD: validated.ADMIN_PASSWORD,

  /* ------------------------------------------------------------------------ */
  /* Google OAuth                                                             */
  /* ------------------------------------------------------------------------ */

  GOOGLE_CLIENT_ID: validated.GOOGLE_CLIENT_ID,
});

/* -------------------------------------------------------------------------- */
/*                              Environment Flags                            */
/* -------------------------------------------------------------------------- */

export const isDevelopment = env.NODE_ENV === 'development';

export const isProduction = env.NODE_ENV === 'production';

export const isTest = env.NODE_ENV === 'test';

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export type Env = typeof env;
