// src/bootstrap/index.ts

/**
 * Bootstrap module.
 *
 * Centralized exports for application startup.
 *
 * Responsibilities:
 * - Application bootstrap
 * - HTTP server startup
 * - Middleware registration
 * - Route registration
 * - Swagger registration
 * - CORS configuration
 * - Process event registration
 * - Graceful shutdown
 */

export * from './bootstrap.js';
export * from './http-server.js';
export * from './middlewares.js';
export * from './routes.js';
export * from './swagger.js';
export * from './cors.js';
export * from './process-events.js';
export * from './shutdown.js';
