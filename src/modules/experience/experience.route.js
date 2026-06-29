// src\modules\experience\experience.route.ts
import { Router } from "express";
import { ROLE } from "../../constants/role.constant.js";
import { auth, validateRequest } from "../../middlewares/index.js";
import { ExperienceController } from "./experience.controller.js";
import { ExperienceValidation } from "./experience.validation.js";
const router = Router();
/**
 * Public Routes
 */
/**
 * GET /experience
 * Supports:
 * ?page=1
 * ?limit=10
 * ?searchTerm=developer
 * ?sort=-startDate
 * ?fields=company,position
 */
router.get("/", ExperienceController.getExperiences);
/**
 * GET /experience/active
 */
router.get("/active", ExperienceController.getActiveExperiences);
/**
 * GET /experience/current
 */
router.get("/current", ExperienceController.getCurrentExperiences);
/**
 * GET /experience/slug/:slug
 */
router.get("/slug/:slug", ExperienceController.getExperienceBySlug);
/**
 * GET /experience/company/:company
 */
router.get("/company/:company", ExperienceController.getExperiencesByCompany);
/**
 * GET /experience/technology/:technology
 */
router.get("/technology/:technology", ExperienceController.getExperiencesByTechnology);
/**
 * GET /experience/:id
 *
 * Must be after all custom routes
 */
router.get("/:id", ExperienceController.getExperienceById);
/**
 * Admin Routes
 */
router.post("/", auth(ROLE.ADMIN), validateRequest(ExperienceValidation.createExperienceValidationSchema), ExperienceController.createExperience);
router.patch("/:id", auth(ROLE.ADMIN), validateRequest(ExperienceValidation.updateExperienceValidationSchema), ExperienceController.updateExperience);
router.delete("/:id", auth(ROLE.ADMIN), ExperienceController.deleteExperience);
export const ExperienceRoutes = router;
//# sourceMappingURL=experience.route.js.map