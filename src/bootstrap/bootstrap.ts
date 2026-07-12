// src/bootstrap/bootstrap.ts

import type { Server } from 'node:http';

import { connectDatabase } from '../configs/index.js';
import { logger } from '../shared/logger/index.js';

import { registerProcessEvents } from './process-events.js';
import { registerShutdownHandlers } from './shutdown.js';
import { startHttpServer } from './http-server.js';

/**
 * Prevents the application from being bootstrapped more than once.
 */
let isBootstrapped = false;

/**
 * Bootstraps the application.
 *
 * Startup sequence:
 *
 * 1. Connect to the database.
 * 2. Start the HTTP server.
 * 3. Register process-level event handlers.
 * 4. Register graceful shutdown handlers.
 *
 * If any step fails, the application logs the error
 * and exits with a non-zero exit code.
 */
export async function bootstrap(): Promise<void> {
  if (isBootstrapped) {
    logger.warn('Bootstrap has already been executed. Skipping.');

    return;
  }

  logger.info('Starting application...');

  try {
    /**
     * Establish database connection.
     */
    logger.info('Connecting to database...');

    await connectDatabase();

    logger.info('Database connected successfully.');

    /**
     * Start the HTTP server.
     */
    logger.info('Starting HTTP server...');

    const server: Server = await startHttpServer();

    logger.info('HTTP server started successfully.');

    /**
     * Register global process event handlers.
     */
    registerProcessEvents(server);

    logger.debug('Process event handlers registered.');

    /**
     * Register graceful shutdown handlers.
     */
    registerShutdownHandlers(server);

    logger.debug('Graceful shutdown handlers registered.');

    isBootstrapped = true;

    logger.info('Application started successfully.');
  } catch (error: unknown) {
    logger.fatal(
      {
        err: error,
      },
      'Application startup failed.',
    );

    process.exit(1);
  }
}
