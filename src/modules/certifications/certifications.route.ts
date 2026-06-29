// src\modules\certifications\certifications.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { CertificationController } from "./certifications.controller.js";

import { CertificationValidation } from "./certifications.validation.js";

const router = Router();

/**
 * Public Routes
 */

// Active certifications
router.get("/active", CertificationController.getActiveCertifications);

// Valid certifications
router.get("/valid", CertificationController.getValidCertifications);

// Expired certifications
router.get("/expired", CertificationController.getExpiredCertifications);

// Certification by slug
router.get("/slug/:slug", CertificationController.getCertificationBySlug);

// Certifications by issuer
router.get(
  "/issuer/:issuer",
  CertificationController.getCertificationsByIssuer,
);

// Certifications by skill
router.get("/skill/:skill", CertificationController.getCertificationsBySkill);

// Get all certifications
router.get("/", CertificationController.getCertifications);

// Get certification by id
router.get("/:id", CertificationController.getCertificationById);

/**
 * Admin Routes
 */

// Create certification
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(CertificationValidation.createCertificationValidationSchema),
  CertificationController.createCertification,
);

// Update certification
router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(CertificationValidation.updateCertificationValidationSchema),
  CertificationController.updateCertification,
);

// Delete certification
router.delete(
  "/:id",
  auth(ROLE.ADMIN),
  CertificationController.deleteCertification,
);

export const CertificationsRoutes = router;
