// src/bootstrap/process-events.ts

import type { Server } from 'node:http';

import { logger } from '../shared/logger/index.js';

import { gracefulShutdown } from './shutdown.js';

/**
 * Registers all Node.js process event handlers.
 *
 * Handles:
 * - uncaughtException
 * - unhandledRejection
 */
export function registerProcessEvents(server: Server): void {
  /**
   * Synchronous exceptions that escape the application.
   *
   * These are considered unrecoverable.
   */
  process.on('uncaughtException', async (error: Error) => {
    logger.fatal(
      {
        error,
      },
      'Uncaught exception detected.',
    );

    await gracefulShutdown(server, 'uncaughtException', 1);
  });

  /**
   * Unhandled promise rejections.
   *
   * These indicate unexpected asynchronous failures.
   */
  process.on('unhandledRejection', async (reason: unknown) => {
    logger.fatal(
      {
        reason,
      },
      'Unhandled promise rejection detected.',
    );

    await gracefulShutdown(server, 'unhandledRejection', 1);
  });

  /**
   * Multiple promise resolutions.
   *
   * Deprecated in recent Node versions but still useful for
   * detecting application bugs in development.
   */
  process.on('multipleResolves', (type, promise, value) => {
    logger.warn(
      {
        type,
        promise,
        value,
      },
      'Multiple promise resolution detected.',
    );
  });

  /**
   * Process warning events.
   *
   * Useful for deprecations and memory warnings.
   */
  process.on('warning', (warning) => {
    logger.warn(
      {
        name: warning.name,
        message: warning.message,
        stack: warning.stack,
      },
      'Node.js process warning.',
    );
  });
}
