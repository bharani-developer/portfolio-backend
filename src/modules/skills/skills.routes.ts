/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { SkillsController } from './skills.controller.js';
import { SkillsValidation } from './skills.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(SkillsController.getSkills)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(SkillsValidation.createSkillValidationSchema),
    SkillsController.createSkill,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/active', SkillsController.getActiveSkills);

router.get('/category/:category', SkillsController.getSkillsByCategory);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(SkillsController.getSkillById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(SkillsValidation.updateSkillValidationSchema),
    SkillsController.updateSkill,
  )
  .delete(auth(ROLE.ADMIN), SkillsController.deleteSkill);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SkillsRoutes = router;
