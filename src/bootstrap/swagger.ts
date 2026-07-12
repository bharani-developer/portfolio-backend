// src/bootstrap/swagger.ts

import type { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

import { swaggerDocument } from '../docs/swagger.config.js';

export function registerSwagger(app: Express): void {
  /**
   * Raw OpenAPI specification.
   */
  app.get('/api-docs/swagger.json', (_req, res) => {
    res.status(200).type('application/json').json(swaggerDocument);
  });

  /**
   * Swagger UI.
   */
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      explorer: true,

      customSiteTitle: 'Portfolio Backend API',

      customCss: `
        .swagger-ui .topbar {
          display: none;
        }
      `,

      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        displayOperationId: true,
        deepLinking: true,
        showExtensions: true,
        showCommonExtensions: true,
        displayExtensions: true,
        filter: true,
        tryItOutEnabled: true,
        defaultModelsExpandDepth: 1,
        defaultModelExpandDepth: 2,
        requestSnippetsEnabled: true,
        syntaxHighlight: {
          activate: true,
        },
      },
    }),
  );
}
