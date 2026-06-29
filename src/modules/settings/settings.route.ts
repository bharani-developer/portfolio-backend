// src\modules\settings\settings.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { SettingsController } from "./settings.controller.js";
import { SettingsValidation } from "./settings.validation.js";

const router = Router();

router.get("/", SettingsController.getSettings);

router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(SettingsValidation.createSettingsValidationSchema),
  SettingsController.createSettings,
);

router.patch(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(SettingsValidation.updateSettingsValidationSchema),
  SettingsController.updateSettings,
);

router.delete("/", auth(ROLE.ADMIN), SettingsController.deleteSettings);

export const SettingsRoutes = router;
