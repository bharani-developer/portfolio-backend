// src\middlewares\validateRequest.ts

import type { ZodType } from "zod";

import type { NextFunction, Request, RequestHandler, Response } from "express";

const validateRequest = (schema: ZodType): RequestHandler => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
        cookies: req.cookies,
        headers: req.headers,
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
