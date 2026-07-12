// src\helpers\password.ts

import bcrypt from 'bcrypt';

import { env } from '../../configs/env.js';

export const hashPassword = async (plainPassword: string): Promise<string> =>
  bcrypt.hash(plainPassword, env.BCRYPT_SALT_ROUNDS);

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => bcrypt.compare(plainPassword, hashedPassword);
