/**
 * =============================================================================
 * File: src/configs/index.ts
 * Description:
 * Centralized configuration exports.
 *
 * This module is the single public entry point for all application
 * configuration. Runtime code should import configuration only from here.
 *
 * Responsibilities:
 * - Environment variables
 * - Environment validation
 * - Application configuration
 * - Database configuration
 * - Cloudinary configuration
 *
 * This file should NEVER contain runtime logic.
 * It only re-exports configuration modules.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*                              Environment                                   */
/* -------------------------------------------------------------------------- */

export * from './env.js';

/* -------------------------------------------------------------------------- */
/*                         Application Configuration                          */
/* -------------------------------------------------------------------------- */

export * from './app.config.js';

/* -------------------------------------------------------------------------- */
/*                           Database Configuration                           */
/* -------------------------------------------------------------------------- */

export * from './database.config.js';

/* -------------------------------------------------------------------------- */
/*                         Cloudinary Configuration                           */
/* -------------------------------------------------------------------------- */

export { default as cloudinary } from './cloudinary.config.js';

/* -------------------------------------------------------------------------- */
/*                              Default Exports                               */
/* -------------------------------------------------------------------------- */

export { appConfig } from './app.config.js';
export { env } from './env.js';