// src/middlewares/rate-limit.middleware.ts

import type { NextFunction, Request, Response } from 'express';
import { rateLimit, type Options } from 'express-rate-limit';

import { env } from '../configs/index.js';

/**
 * Time windows.
 */
const FIFTEEN_MINUTES = 15 * 60 * 1000;
const TEN_MINUTES = 10 * 60 * 1000;
const ONE_HOUR = 60 * 60 * 1000;

/**
 * Standard rate-limit response.
 */
function createRateLimitResponse(retryAfter: number) {
  return {
    success: false,
    statusCode: 429,
    error: 'Too Many Requests',
    message: 'Too many requests were received from your IP address. Please try again later.',
    retryAfter,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Shared configuration.
 */
const commonOptions: Partial<Options> = {
  standardHeaders: 'draft-8',

  legacyHeaders: false,

  skip: () => env.NODE_ENV === 'test',

  handler(_request: Request, response: Response, _next: NextFunction, options): void {
    response
      .status(options.statusCode)
      .json(createRateLimitResponse(Math.ceil(options.windowMs / 1000)));
  },
};

/**
 * Global limiter.
 */
export const globalRateLimiter = rateLimit({
  ...commonOptions,

  windowMs: FIFTEEN_MINUTES,

  limit: 100,

  identifier: 'global-api',
});

/**
 * Authentication limiter.
 */
export const authRateLimiter = rateLimit({
  ...commonOptions,

  windowMs: TEN_MINUTES,

  limit: 5,

  identifier: 'auth',
});

/**
 * Contact limiter.
 */
export const contactRateLimiter = rateLimit({
  ...commonOptions,

  windowMs: ONE_HOUR,

  limit: 5,

  identifier: 'contact',
});

/**
 * Upload limiter.
 */
export const uploadRateLimiter = rateLimit({
  ...commonOptions,

  windowMs: ONE_HOUR,

  limit: 20,

  identifier: 'upload',
});

/**
 * Public endpoints.
 */
export const publicRateLimiter = rateLimit({
  ...commonOptions,

  windowMs: FIFTEEN_MINUTES,

  limit: 300,

  identifier: 'public',
});

export default globalRateLimiter;
