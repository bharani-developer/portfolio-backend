// src/shared/types/index.ts

/**
 * Shared application types.
 *
 * Centralized exports for reusable TypeScript types and interfaces.
 *
 * Responsibilities:
 * - API response types
 * - JWT payload types
 * - Shared model types
 *
 * Note:
 * The Express declaration file is intentionally NOT exported because it
 * performs global module augmentation. It is automatically picked up by
 * TypeScript via tsconfig.
 */

/* -------------------------------------------------------------------------- */
/*                              API Response Types                            */
/* -------------------------------------------------------------------------- */

export type * from './api-response.type.js';

/* -------------------------------------------------------------------------- */
/*                                 Image Types                                */
/* -------------------------------------------------------------------------- */

export type * from './image.type.js';

/* -------------------------------------------------------------------------- */
/*                               JWT Payload                                  */
/* -------------------------------------------------------------------------- */

export type * from './jwt-payload.type.js';
