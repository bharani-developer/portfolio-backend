// src/shared/utils/index.ts

/**
 * Shared utilities.
 *
 * Centralized exports for reusable utility functions and classes.
 *
 * Responsibilities:
 * - Application errors
 * - Async handler wrapper
 * - Slug generation
 * - API response helper
 *
 * This module contains no runtime logic.
 */

/* -------------------------------------------------------------------------- */
/*                               Application Error                            */
/* -------------------------------------------------------------------------- */

export { default as AppError } from './app-error.js';

/* -------------------------------------------------------------------------- */
/*                              Async Utilities                               */
/* -------------------------------------------------------------------------- */

export { default as catchAsync } from './catch-async.js';

/* -------------------------------------------------------------------------- */
/*                              Slug Generation                               */
/* -------------------------------------------------------------------------- */

export * from './generate-slug.js';

/* -------------------------------------------------------------------------- */
/*                              API Responses                                 */
/* -------------------------------------------------------------------------- */

export { default as sendResponse } from './send-response.js';
