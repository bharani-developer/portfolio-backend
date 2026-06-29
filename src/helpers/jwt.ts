// src\helpers\jwt.ts

import jwt from "jsonwebtoken";

import { env } from "../config/env.js";

import type { IJwtPayload } from "../interfaces/jwtPayload.interface.js";

export const generateAccessToken = (payload: IJwtPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as never,
  });
};

export const generateRefreshToken = (payload: IJwtPayload): string => {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as never,
  });
};

export const verifyToken = (token: string, secret: string): IJwtPayload => {
  return jwt.verify(token, secret) as IJwtPayload;
};
