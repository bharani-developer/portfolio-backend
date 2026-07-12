/**
 * Upload validation schemas.
 *
 * Structure:
 * 1. Imports
 * 2. Helper Schemas
 * 3. Reusable Validators
 * 4. Base Schema
 * 5. Create Validation
 * 6. Update Validation
 * 7. Export
 * 8. Infer Types
 */

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { z } from 'zod';

/* -------------------------------------------------------------------------- */
/*                               Helper Schemas                               */
/* -------------------------------------------------------------------------- */

// Multipart uploads are handled by Multer.
// Validation is performed by the upload middleware, so no request body
// fields are required here.

/* -------------------------------------------------------------------------- */
/*                             Reusable Validators                            */
/* -------------------------------------------------------------------------- */

// No reusable validators are required for this module.

/* -------------------------------------------------------------------------- */
/*                               Body Schema                                  */
/* -------------------------------------------------------------------------- */

const uploadImageBodySchema = z.object({}).strict();

/* -------------------------------------------------------------------------- */
/*                           Request Validation                               */
/* -------------------------------------------------------------------------- */

const uploadImageValidationSchema = z
  .object({
    body: uploadImageBodySchema.optional(),
  })
  .strict();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UploadValidation = Object.freeze({
  uploadImageValidationSchema,
});

/* -------------------------------------------------------------------------- */
/*                                 Infer Types                                */
/* -------------------------------------------------------------------------- */

export type TUploadImageInput = z.infer<typeof uploadImageBodySchema>;

/* -------------------------------------------------------------------------- */
/*                          Reusable Schema Exports                           */
/* -------------------------------------------------------------------------- */

export { uploadImageBodySchema };
