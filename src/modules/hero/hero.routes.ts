/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { HeroController } from './hero.controller.js';
import { HeroValidation } from './hero.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(HeroController.getHero)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(HeroValidation.createHeroValidationSchema),
    HeroController.createHero,
  )
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(HeroValidation.updateHeroValidationSchema),
    HeroController.updateHero,
  )
  .delete(auth(ROLE.ADMIN), HeroController.deleteHero);

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

export const HeroRoutes = router;
