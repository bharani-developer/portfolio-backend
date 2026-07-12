// src/middlewares/request-id.middleware.ts

import { randomUUID } from 'node:crypto';

import type { NextFunction, Request, Response } from 'express';

/**
 * HTTP header used for request correlation.
 */
const REQUEST_ID_HEADER = 'X-Request-Id';

/**
 * Maximum accepted request ID length.
 */
const MAX_REQUEST_ID_LENGTH = 128;

/**
 * Returns a sanitized request ID.
 *
 * Reuses the incoming request ID when provided,
 * otherwise generates a new UUID.
 */
function resolveRequestId(request: Request): string {
  const header = request.header(REQUEST_ID_HEADER);

  if (typeof header === 'string') {
    const value = header.trim();

    if (value.length > 0 && value.length <= MAX_REQUEST_ID_LENGTH) {
      return value;
    }
  }

  return randomUUID();
}

/**
 * Adds a request ID to every incoming request.
 *
 * The ID is:
 * - available as req.id
 * - available as res.locals.requestId
 * - returned in the X-Request-Id response header
 */
export function requestIdMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const requestId = resolveRequestId(request);

  request.id = requestId;

  response.locals.requestId = requestId;

  response.setHeader(REQUEST_ID_HEADER, requestId);

  next();
}

export default requestIdMiddleware;
