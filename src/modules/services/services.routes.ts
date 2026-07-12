/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { ServicesController } from './services.controller.js';
import { ServicesValidation } from './services.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(ServicesController.getServices)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(ServicesValidation.createServiceValidationSchema),
    ServicesController.createService,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/active', ServicesController.getActiveServices);

router.get('/inactive', ServicesController.getInactiveServices);

router.get('/latest', ServicesController.getLatestServices);

router.get('/ordered', ServicesController.getServicesOrdered);

router.get('/alphabetical', ServicesController.getServicesAlphabetically);

router.get('/stats', ServicesController.getServiceStats);

router.get('/slug/:slug', ServicesController.getServiceBySlug);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(ServicesController.getServiceById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(ServicesValidation.updateServiceValidationSchema),
    ServicesController.updateService,
  )
  .delete(auth(ROLE.ADMIN), ServicesController.deleteService);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ServicesRoutes = router;
