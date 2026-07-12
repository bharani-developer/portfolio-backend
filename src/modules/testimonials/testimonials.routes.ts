// src/modules/testimonials/testimonials.routes.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';
import { auth, validateRequest } from '../../middlewares/index.js';

import { TestimonialController } from './testimonials.controller.js';
import { TestimonialsValidation } from './testimonials.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(TestimonialController.getTestimonials)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(TestimonialsValidation.createTestimonialValidationSchema),
    TestimonialController.createTestimonial,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

router.get('/active', TestimonialController.getActiveTestimonials);

router.get('/featured', TestimonialController.getFeaturedTestimonials);

router.get('/average-rating', TestimonialController.getAverageRating);

router.get('/stats', TestimonialController.getTestimonialStats);

router.get('/rating/:rating', TestimonialController.getTestimonialsByRating);

router.get('/client-type/:clientType', TestimonialController.getTestimonialsByClientType);

router.get('/project/:projectName', TestimonialController.getTestimonialsByProject);

router.get('/company/:clientCompany', TestimonialController.getTestimonialsByCompany);

router.get('/client/:clientName', TestimonialController.getTestimonialsByClient);

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(TestimonialController.getTestimonialById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(TestimonialsValidation.updateTestimonialValidationSchema),
    TestimonialController.updateTestimonial,
  )
  .delete(auth(ROLE.ADMIN), TestimonialController.deleteTestimonial);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

// No custom protected routes.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const TestimonialsRoutes = router;
