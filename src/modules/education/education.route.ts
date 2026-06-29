// src\modules\education\education.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { EducationController } from "./education.controller.js";

import { EducationValidation } from "./education.validation.js";

const router = Router();

/**
 * Public Routes
 */

// Active educations
router.get("/active", EducationController.getActiveEducations);

// Current educations
router.get("/current", EducationController.getCurrentEducations);

// Education by slug
router.get("/slug/:slug", EducationController.getEducationBySlug);

// Education by level
router.get("/level/:level", EducationController.getEducationsByLevel);

// Education by skill
router.get("/skill/:skill", EducationController.getEducationsBySkill);

// Get all educations
router.get("/", EducationController.getEducations);

// Get education by id
router.get("/:id", EducationController.getEducationById);

/**
 * Admin Routes
 */

// Create education
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(EducationValidation.createEducationValidationSchema),
  EducationController.createEducation,
);

// Update education
router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(EducationValidation.updateEducationValidationSchema),
  EducationController.updateEducation,
);

// Delete education
router.delete("/:id", auth(ROLE.ADMIN), EducationController.deleteEducation);

export const EducationRoutes = router;
