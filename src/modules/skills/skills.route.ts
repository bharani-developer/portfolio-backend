// src\modules\skills\skills.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { SkillsController } from "./skills.controller.js";
import { SkillsValidation } from "./skills.validation.js";

const router = Router();

/**
 * Public Routes
 */
router.get("/", SkillsController.getSkills);

router.get("/active", SkillsController.getActiveSkills);

router.get("/category/:category", SkillsController.getSkillsByCategory);

router.get("/:id", SkillsController.getSkillById);

/**
 * Protected Routes
 */
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(SkillsValidation.createSkillValidationSchema),
  SkillsController.createSkill,
);

router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(SkillsValidation.updateSkillValidationSchema),
  SkillsController.updateSkill,
);

router.delete("/:id", auth(ROLE.ADMIN), SkillsController.deleteSkill);

export const SkillsRoutes = router;
