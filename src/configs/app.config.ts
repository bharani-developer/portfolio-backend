/**
 * =============================================================================
 * File: src/configs/app.config.ts
 * Description:
 * Application configuration.
 * =============================================================================
 */

import { env } from './env.js';

/* -------------------------------------------------------------------------- */
/*                           Application Configuration                        */
/* -------------------------------------------------------------------------- */

export const appConfig = Object.freeze({
  /**
   * Environment
   */
  environment: env.NODE_ENV,

  /**
   * Server
   */
  server: Object.freeze({
    host: '0.0.0.0',

    port: env.PORT,
  }),

  /**
   * URLs
   */
  urls: Object.freeze({
    application: env.APP_URL,

    development: env.DEVELOPMENT_URL,

    production: env.PRODUCTION_URL,
  }),

  /**
   * Flags
   */
  flags: Object.freeze({
    isDevelopment: env.NODE_ENV === 'development',

    isProduction: env.NODE_ENV === 'production',

    isTest: env.NODE_ENV === 'test',
  }),
});
