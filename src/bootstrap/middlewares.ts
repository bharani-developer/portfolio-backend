// src/bootstrap/middlewares.ts

import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';

import { BODY_PARSER_LIMIT } from '../constants/app.constants.js';
import {
  globalRateLimiter,
  requestIdMiddleware,
  requestLoggerMiddleware,
  securityMiddleware,
} from '../middlewares/index.js';

import { corsOptions } from './cors.js';

/**
 * Registers all global application middlewares.
 *
 * Middleware order is important.
 */
export function registerMiddlewares(app: Express): void {
  /**
   * Hide Express fingerprint.
   */
  app.disable('x-powered-by');

  /**
   * Trust reverse proxy.
   *
   * Required for:
   * - Render
   * - Railway
   * - Fly.io
   * - Cloudflare
   * - Nginx
   * - Vercel
   */
  app.set('trust proxy', 1);

  /**
   * Assign request ID.
   */
  app.use(requestIdMiddleware);

  /**
   * HTTP request logging.
   */
  app.use(requestLoggerMiddleware);

  /**
   * Security headers.
   */
  app.use(securityMiddleware);

  /**
   * Cross-Origin Resource Sharing.
   */
  app.use(cors(corsOptions));

  /**
   * Global rate limiting.
   */
  app.use(globalRateLimiter);

  /**
   * Compress responses.
   */
  app.use(compression());

  /**
   * Parse cookies.
   */
  app.use(cookieParser());

  /**
   * Parse JSON request bodies.
   */
  app.use(
    express.json({
      limit: BODY_PARSER_LIMIT,
      strict: true,
    }),
  );

  /**
   * Parse URL-encoded request bodies.
   */
  app.use(
    express.urlencoded({
      extended: true,
      limit: BODY_PARSER_LIMIT,
    }),
  );
}
