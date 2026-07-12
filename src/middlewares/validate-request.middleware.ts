/**
 * =============================================================================
 * File: src/middlewares/validate-request.middleware.ts
 * Description:
 * Generic Zod request validation middleware.
 *
 * Features:
 * - Supports body, params, query, cookies and headers
 * - Validates only properties defined by the schema
 * - Works with Zod v4
 * - Express 5 compatible
 * - Production ready
 * =============================================================================
 */

import { ZodObject, type ZodTypeAny } from 'zod';

import type {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';

/* -------------------------------------------------------------------------- */
/*                             Validate Request                               */
/* -------------------------------------------------------------------------- */

const validateRequest =
  (schema: ZodTypeAny): RequestHandler =>
  async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      /**
       * Validate only the request properties defined
       * by the supplied Zod schema.
       */
      if (schema instanceof ZodObject) {
        const shape = schema.shape;

        const requestData: Record<string, unknown> = {};

        if ('body' in shape) {
          requestData.body = req.body;
        }

        if ('params' in shape) {
          requestData.params = req.params;
        }

        if ('query' in shape) {
          requestData.query = req.query;
        }

        if ('cookies' in shape) {
          requestData.cookies = req.cookies;
        }

        if ('headers' in shape) {
          requestData.headers = req.headers;
        }

        await schema.parseAsync(requestData);
      } else {
        await schema.parseAsync(req.body);
      }

      next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;