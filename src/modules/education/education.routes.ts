/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { EducationController } from './education.controller.js';
import { EducationValidation } from './education.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(EducationController.getEducations)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(EducationValidation.createEducationValidationSchema),
    EducationController.createEducation,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/active', EducationController.getActiveEducations);

router.get('/current', EducationController.getCurrentEducations);

router.get('/slug/:slug', EducationController.getEducationBySlug);

router.get('/level/:level', EducationController.getEducationsByLevel);

router.get('/type/:type', EducationController.getEducationsByType);

router.get('/institution/:institution', EducationController.getEducationsByInstitution);

router.get('/skill/:skill', EducationController.getEducationsBySkill);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(EducationController.getEducationById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(EducationValidation.updateEducationValidationSchema),
    EducationController.updateEducation,
  )
  .delete(auth(ROLE.ADMIN), EducationController.deleteEducation);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

router.get('/stats', auth(ROLE.ADMIN), EducationController.getEducationStats);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const EducationRoutes = router;
