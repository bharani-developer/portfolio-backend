// src\middlewares\notFound.ts

import httpStatus from "http-status";

import type { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, _next: NextFunction): void => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
    errorSources: [
      {
        path: req.originalUrl,
        message: "API endpoint does not exist",
      },
    ],
  });
};

export default notFound;
