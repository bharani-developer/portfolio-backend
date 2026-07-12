/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, upload, validateRequest } from '../../middlewares/index.js';

import { UploadController } from './upload.controller.js';
import { UploadValidation } from './upload.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

// No public routes.

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

/**
 * Upload an image.
 *
 * Available folders:
 * - hero
 * - about
 * - skills
 * - services
 * - projects
 * - blogs
 * - experience
 * - education
 * - certifications
 * - testimonials
 * - settings
 * - contact
 * - temp
 */
router.post(
  '/image/:folder',
  auth(ROLE.ADMIN),
  upload.single('file'),
  validateRequest(UploadValidation.uploadImageValidationSchema),
  UploadController.uploadImage,
);

/**
 * Delete an uploaded image.
 */
router.delete('/image', auth(ROLE.ADMIN), UploadController.deleteImage);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UploadRoutes = router;
