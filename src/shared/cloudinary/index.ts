// src/shared/cloudinary/index.ts

/**
 * Cloudinary utilities.
 *
 * Centralized exports for Cloudinary operations.
 *
 * Responsibilities:
 * - Upload assets
 * - Delete assets
 *
 * This module contains no runtime logic.
 */

/* -------------------------------------------------------------------------- */
/*                                   Upload                                   */
/* -------------------------------------------------------------------------- */

export * from './upload-to-cloudinary.js';

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

export * from './delete-from-cloudinary.js';
