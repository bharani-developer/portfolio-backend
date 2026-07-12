// src/middlewares/index.ts

/**
 * =============================================================================
 * File: src/middlewares/index.ts
 * Description:
 * Centralized exports for all application middleware.
 *
 * This file contains NO runtime logic.
 * It only re-exports middleware.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*                           Authentication                                   */
/* -------------------------------------------------------------------------- */

export { default as auth } from './auth.middleware.js';

/* -------------------------------------------------------------------------- */
/*                          Request Validation                                */
/* -------------------------------------------------------------------------- */

export { default as validateRequest } from './validate-request.middleware.js';

/* -------------------------------------------------------------------------- */
/*                               File Upload                                  */
/* -------------------------------------------------------------------------- */

export { upload } from './multer.middleware.js';

/* -------------------------------------------------------------------------- */
/*                               Request ID                                   */
/* -------------------------------------------------------------------------- */

export { requestIdMiddleware } from './request-id.middleware.js';

/* -------------------------------------------------------------------------- */
/*                             Request Logger                                 */
/* -------------------------------------------------------------------------- */

export { requestLoggerMiddleware } from './request-logger.middleware.js';

/* -------------------------------------------------------------------------- */
/*                                Security                                    */
/* -------------------------------------------------------------------------- */

export { securityMiddleware } from './security.middleware.js';

/* -------------------------------------------------------------------------- */
/*                              Rate Limiting                                 */
/* -------------------------------------------------------------------------- */

export {
  globalRateLimiter,
  authRateLimiter,
  contactRateLimiter,
  uploadRateLimiter,
  publicRateLimiter,
} from './rate-limit.middleware.js';

/* -------------------------------------------------------------------------- */
/*                               Not Found                                    */
/* -------------------------------------------------------------------------- */

export { default as notFound } from './not-found.middleware.js';

/* -------------------------------------------------------------------------- */
/*                           Global Error Handler                             */
/* -------------------------------------------------------------------------- */

export { default as globalErrorHandler } from './global-error.middleware.js';
