/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/role.constants.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { AboutController } from './about.controller.js';
import { AboutValidation } from './about.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

/**
 * GET    /
 * POST   /
 * PATCH  /
 * DELETE /
 *
 * Singleton resource.
 */
router
  .route('/')
  .get(AboutController.getAbout)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(AboutValidation.createAboutValidationSchema),
    AboutController.createAbout,
  )
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(AboutValidation.updateAboutValidationSchema),
    AboutController.updateAbout,
  )
  .delete(auth(ROLE.ADMIN), AboutController.deleteAbout);

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

// No custom public routes.

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

// Not applicable for singleton resource.

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutRoutes = router;
