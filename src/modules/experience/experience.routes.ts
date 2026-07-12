/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { ExperienceController } from './experience.controller.js';
import { ExperienceValidation } from './experience.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(ExperienceController.getExperiences)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(ExperienceValidation.createExperienceValidationSchema),
    ExperienceController.createExperience,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/active', ExperienceController.getActiveExperiences);

router.get('/current', ExperienceController.getCurrentExperiences);

router.get('/slug/:slug', ExperienceController.getExperienceBySlug);

router.get('/company/:company', ExperienceController.getExperiencesByCompany);

router.get('/employment-type/:employmentType', ExperienceController.getExperiencesByEmploymentType);

router.get('/work-mode/:workMode', ExperienceController.getExperiencesByWorkMode);

router.get('/technology/:technology', ExperienceController.getExperiencesByTechnology);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(ExperienceController.getExperienceById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(ExperienceValidation.updateExperienceValidationSchema),
    ExperienceController.updateExperience,
  )
  .delete(auth(ROLE.ADMIN), ExperienceController.deleteExperience);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

router.get('/stats', auth(ROLE.ADMIN), ExperienceController.getExperienceStats);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ExperienceRoutes = router;
