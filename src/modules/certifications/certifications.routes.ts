/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { CertificationController } from './certifications.controller.js';
import { CertificationValidation } from './certifications.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

/**
 * GET /certifications/active
 */
router.get('/active', CertificationController.getActiveCertifications);

/**
 * GET /certifications/valid
 */
router.get('/valid', CertificationController.getValidCertifications);

/**
 * GET /certifications/expired
 */
router.get('/expired', CertificationController.getExpiredCertifications);

/**
 * GET /certifications/slug/:slug
 */
router.get('/slug/:slug', CertificationController.getCertificationBySlug);

/**
 * GET /certifications/issuer/:issuer
 */
router.get('/issuer/:issuer', CertificationController.getCertificationsByIssuer);

/**
 * GET /certifications/skill/:skill
 */
router.get('/skill/:skill', CertificationController.getCertificationsBySkill);

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

/**
 * GET    /
 * POST   /
 */
router
  .route('/')
  .get(CertificationController.getCertifications)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(CertificationValidation.createCertificationValidationSchema),
    CertificationController.createCertification,
  );

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

/**
 * GET    /:id
 * PATCH  /:id
 * DELETE /:id
 */
router
  .route('/:id')
  .get(CertificationController.getCertificationById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(CertificationValidation.updateCertificationValidationSchema),
    CertificationController.updateCertification,
  )
  .delete(auth(ROLE.ADMIN), CertificationController.deleteCertification);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const CertificationsRoutes = router;
