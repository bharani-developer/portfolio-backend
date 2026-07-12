// src/bootstrap/cors.ts

import type { CorsOptions } from 'cors';

import { env } from '../configs/index.js';

/**
 * Allowed origins configured via environment variables.
 * Trailing slashes are removed for consistent matching.
 */
const allowedOrigins = env.CORS_ORIGIN.map((origin) => origin.trim().replace(/\/$/, ''));

/**
 * Determines whether the request origin is allowed.
 */
function isAllowedOrigin(origin: string): boolean {
  const normalizedOrigin = origin.trim().replace(/\/$/, '');

  return (
    allowedOrigins.includes(normalizedOrigin) ||
    normalizedOrigin.endsWith('.vercel.app') ||
    normalizedOrigin.endsWith('.onrender.com')
  );
}

/**
 * Production-ready CORS configuration.
 */
export const corsOptions: CorsOptions = {
  origin(origin, callback) {
    /**
     * Allow:
     * - Server-to-server requests
     * - Postman
     * - curl
     * - Mobile apps
     */
    if (!origin) {
      callback(null, true);
      return;
    }

    if (isAllowedOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS policy does not allow origin: ${origin}`));
  },

  credentials: true,

  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

  allowedHeaders: ['Origin', 'Accept', 'Authorization', 'Content-Type', 'X-Requested-With'],

  exposedHeaders: ['Content-Disposition'],

  optionsSuccessStatus: 204,

  maxAge: 86400,
};
