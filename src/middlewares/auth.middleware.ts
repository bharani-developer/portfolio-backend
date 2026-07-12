// src\middlewares\auth.middleware.ts

import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';

import { env } from '../configs/env.js';

import type { NextFunction, Request, Response } from 'express';
import type { TRole } from '../constants/role.constants.js';
import { AppError } from '../shared/utils/index.js';
import type { IJwtPayload } from '../shared/types/jwt-payload.type.js';

const auth =
  (...requiredRoles: TRole[]) =>
    (req: Request, _res: Response, next: NextFunction): void => {
      try {
        const token = req.headers.authorization?.startsWith('Bearer ')
          ? req.headers.authorization.split(' ')[1]
          : null;

        if (!token) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'Authentication token is required');
        }

        const decoded = jwt.verify(token, env.JWT_SECRET) as IJwtPayload;

        req.user = decoded;

        if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.role)) {
          throw new AppError(
            httpStatus.FORBIDDEN,
            'You do not have permission to access this resource',
          );
        }

        next();
      } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
          return next(new AppError(httpStatus.UNAUTHORIZED, 'Token has expired'));
        }

        if (error instanceof jwt.JsonWebTokenError) {
          return next(new AppError(httpStatus.UNAUTHORIZED, 'Invalid token'));
        }

        next(error);
      }
    };

export default auth;
