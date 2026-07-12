/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { ProjectController } from './projects.controller.js';
import { ProjectValidation } from './projects.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(ProjectController.getProjects)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(ProjectValidation.createProjectValidationSchema),
    ProjectController.createProject,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/featured', ProjectController.getFeaturedProjects);

router.get('/active', ProjectController.getActiveProjects);

router.get('/latest', ProjectController.getLatestProjects);

router.get('/ordered', ProjectController.getProjectsOrdered);

router.get('/ongoing', ProjectController.getOngoingProjects);

router.get('/completed', ProjectController.getCompletedProjects);

router.get('/archived', ProjectController.getArchivedProjects);

router.get('/stats', ProjectController.getProjectStats);

router.get('/slug/:slug', ProjectController.getProjectBySlug);

router.get('/category/:category', ProjectController.getProjectsByCategory);

router.get('/technology/:technology', ProjectController.getProjectsByTechnology);

router.get('/status/:status', ProjectController.getProjectsByStatus);

router.get('/date/:date', ProjectController.getProjectsByDate);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(ProjectController.getProjectById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(ProjectValidation.updateProjectValidationSchema),
    ProjectController.updateProject,
  )
  .delete(auth(ROLE.ADMIN), ProjectController.deleteProject);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ProjectsRoutes = router;
