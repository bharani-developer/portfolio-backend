// src/shared/utils/catch-async.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import type { NextFunction, Request, RequestHandler, Response } from 'express';

import type { ParamsDictionary } from 'express-serve-static-core';

import type { ParsedQs } from 'qs';

/* -------------------------------------------------------------------------- */
/*                                 catchAsync                                 */
/* -------------------------------------------------------------------------- */

/**
 * Wraps an asynchronous Express route handler and forwards rejected promises
 * to the Express error handling middleware.
 *
 * Supports strongly typed:
 * - Route params
 * - Request body
 * - Query parameters
 * - Response body
 * - Response locals
 *
 * Example:
 *
 * const createUser = catchAsync<
 *   ParamsDictionary,
 *   unknown,
 *   TCreateUserInput
 * >(async (req, res) => {
 *   req.body;
 * });
 */
const catchAsync =
  <
    TParams = ParamsDictionary,
    TResponseBody = unknown,
    TRequestBody = unknown,
    TRequestQuery = ParsedQs,
    TLocals extends Record<string, unknown> = Record<string, unknown>,
  >(
    fn: (
      req: Request<TParams, TResponseBody, TRequestBody, TRequestQuery, TLocals>,
      res: Response<TResponseBody, TLocals>,
      next: NextFunction,
    ) => Promise<unknown>,
  ): RequestHandler<TParams, TResponseBody, TRequestBody, TRequestQuery, TLocals> =>
  (
    req: Request<TParams, TResponseBody, TRequestBody, TRequestQuery, TLocals>,
    res: Response<TResponseBody, TLocals>,
    next: NextFunction,
  ): void => {
    void Promise.resolve(fn(req, res, next)).catch(next);
  };

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export default catchAsync;
