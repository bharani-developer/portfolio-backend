// src/bootstrap/routes.ts

import type { Express, Request, Response } from 'express';

import { env } from '../configs/env.js';
import { globalErrorHandler, notFound } from '../middlewares/index.js';
import { v1Router } from '../routes/index.js';

export function registerRoutes(app: Express): void {
  /**
   * Root endpoint.
   */
  app.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: 'Portfolio Backend API',
      version: 'v1',
      environment: env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  });

  /**
   * Simple API information endpoint.
   */
  app.get('/api', (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: 'Portfolio Backend API',
      version: 'v1',
      documentation: '/api-docs',
      health: '/health',
      timestamp: new Date().toISOString(),
    });
  });

  /**
   * Health check endpoint.
   */
  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      status: 'UP',
      environment: env.NODE_ENV,
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    });
  });

  /**
   * Versioned API routes.
   */
  app.use('/api/v1', v1Router);

  /**
   * Handle unmatched routes.
   */
  app.use(notFound);

  /**
   * Global error handler.
   *
   * Must always be registered last.
   */
  app.use(globalErrorHandler);
}
