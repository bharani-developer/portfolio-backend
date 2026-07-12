// src\helpers\jwt.ts

import jwt from 'jsonwebtoken';

import { env } from '../../configs/env.js';
import type { IJwtPayload } from '../types/jwt-payload.type.js';

export const generateAccessToken = (payload: IJwtPayload): string =>
  jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as never,
  });

export const generateRefreshToken = (payload: IJwtPayload): string =>
  jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as never,
  });

export const verifyToken = (token: string, secret: string): IJwtPayload =>
  jwt.verify(token, secret) as IJwtPayload;
