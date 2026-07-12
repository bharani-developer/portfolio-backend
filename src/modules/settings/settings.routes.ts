/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { SettingsController } from './settings.controller.js';
import { SettingsValidation } from './settings.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(SettingsController.getSettings)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(SettingsValidation.createSettingsValidationSchema),
    SettingsController.createSettings,
  )
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(SettingsValidation.updateSettingsValidationSchema),
    SettingsController.updateSettings,
  )
  .delete(auth(ROLE.ADMIN), SettingsController.deleteSettings);

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

// No custom public routes.

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

// Not applicable for this singleton resource.

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SettingsRoutes = router;
