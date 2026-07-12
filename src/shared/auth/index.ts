// src/shared/auth/index.ts

/**
 * Authentication helpers.
 *
 * Centralized exports for authentication utilities.
 *
 * Responsibilities:
 * - JWT generation and verification
 * - Password hashing and comparison
 *
 * This module should never contain runtime logic.
 */

/* -------------------------------------------------------------------------- */
/*                                   JWT                                      */
/* -------------------------------------------------------------------------- */

export { generateAccessToken, generateRefreshToken, verifyToken } from './jwt.js';

/* -------------------------------------------------------------------------- */
/*                                 Password                                   */
/* -------------------------------------------------------------------------- */

export { hashPassword, comparePassword } from './password.js';
