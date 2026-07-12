// src/bootstrap/http-server.ts

import type { Server } from 'node:http';

import app from '../app/app.js';
import { env } from '../configs/index.js';
import { logger } from '../shared/logger/index.js';

/**
 * Starts the HTTP server.
 *
 * @returns Running HTTP server instance.
 */
export async function startHttpServer(): Promise<Server> {
  return await new Promise<Server>((resolve, reject) => {
    const server = app.listen(env.PORT);

    /**
     * Server started successfully.
     */
    server.once('listening', () => {
      const address = server.address();

      const port = typeof address === 'object' && address !== null ? address.port : env.PORT;

      logger.info(
        {
          port,
          environment: env.NODE_ENV,
        },
        'HTTP server started',
      );

      logger.info(`API        : http://localhost:${port}/api/v1`);
      logger.info(`Swagger   : http://localhost:${port}/api-docs`);
      logger.info(`Health    : http://localhost:${port}/health`);

      resolve(server);
    });

    /**
     * Failed to start server.
     */
    server.once('error', (error) => {
      reject(error);
    });
  });
}
