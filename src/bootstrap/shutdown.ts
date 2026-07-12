// src/bootstrap/shutdown.ts

import type { Server } from 'node:http';

import { disconnectDatabase } from '../configs/index.js';
import { logger } from '../shared/logger/index.js';

let isShuttingDown = false;

/**
 * Gracefully shuts down the application.
 *
 * Shutdown order:
 * 1. Stop accepting new HTTP connections.
 * 2. Close existing HTTP connections.
 * 3. Disconnect the database.
 * 4. Exit the process.
 *
 * @param server HTTP server instance.
 * @param signal Shutdown signal or reason.
 * @param exitCode Process exit code.
 */
export async function gracefulShutdown(
  server: Server,
  signal: string,
  exitCode = 0,
): Promise<never> {
  /**
   * Prevent duplicate shutdown attempts.
   */
  if (isShuttingDown) {
    logger.warn('Shutdown already in progress.');

    process.exit(exitCode);
  }

  isShuttingDown = true;

  logger.warn(
    {
      signal,
    },
    'Graceful shutdown initiated.',
  );

  try {
    /**
     * Stop accepting new connections.
     */
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);

          return;
        }

        resolve();
      });
    });

    logger.info('HTTP server stopped.');

    /**
     * Disconnect MongoDB.
     */
    await disconnectDatabase();

    logger.info('Database disconnected.');

    logger.info('Application shutdown completed.');

    process.exit(exitCode);
  } catch (error) {
    logger.fatal(
      {
        error,
      },
      'Application shutdown failed.',
    );

    process.exit(1);
  }
}

/**
 * Registers graceful shutdown signal handlers.
 *
 * Handles:
 * - SIGINT
 * - SIGTERM
 */
export function registerShutdownHandlers(server: Server): void {
  process.on('SIGINT', () => {
    void gracefulShutdown(server, 'SIGINT');
  });

  process.on('SIGTERM', () => {
    void gracefulShutdown(server, 'SIGTERM');
  });
}
