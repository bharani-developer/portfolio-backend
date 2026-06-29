// src\modules\testimonials\testimonials.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { TestimonialController } from "./testimonials.controller.js";

import { TestimonialValidation } from "./testimonials.validation.js";

const router = Router();

/**
 * Public Routes
 */

// Featured testimonials
router.get("/featured", TestimonialController.getFeaturedTestimonials);

// Active testimonials
router.get("/active", TestimonialController.getActiveTestimonials);

// Average rating
router.get("/average-rating", TestimonialController.getAverageRating);

// Testimonials by rating
router.get("/rating/:rating", TestimonialController.getTestimonialsByRating);

// Testimonials by client type
router.get(
  "/client-type/:clientType",
  TestimonialController.getTestimonialsByClientType,
);

// Testimonials by project
router.get(
  "/project/:projectName",
  TestimonialController.getTestimonialsByProject,
);

// Get all testimonials
router.get("/", TestimonialController.getTestimonials);

// Get testimonial by ID
router.get("/:id", TestimonialController.getTestimonialById);

/**
 * Admin Routes
 */

// Create testimonial
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(TestimonialValidation.createTestimonialValidationSchema),
  TestimonialController.createTestimonial,
);

// Update testimonial
router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(TestimonialValidation.updateTestimonialValidationSchema),
  TestimonialController.updateTestimonial,
);

// Delete testimonial
router.delete(
  "/:id",
  auth(ROLE.ADMIN),
  TestimonialController.deleteTestimonial,
);

export const TestimonialsRoutes = router;
