// src/app/app.ts

import express, { type Express } from 'express';

import { registerMiddlewares } from '../bootstrap/middlewares.js';
import { registerRoutes } from '../bootstrap/routes.js';
import { registerSwagger } from '../bootstrap/swagger.js';

/**
 * Creates and configures the Express application.
 */
function createApp(): Express {
  const app = express();

  registerMiddlewares(app);

  registerSwagger(app);

  registerRoutes(app);

  return app;
}

/**
 * Configured Express application.
 */
const app = createApp();

export default app;
