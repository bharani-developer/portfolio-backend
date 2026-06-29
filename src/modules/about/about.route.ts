// src\modules\about\about.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { AboutController } from "./about.controller.js";
import { AboutValidation } from "./about.validation.js";

const router = Router();

router.get("/", AboutController.getAbout);

router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(AboutValidation.createAboutValidationSchema),
  AboutController.createAbout,
);

router.patch(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(AboutValidation.updateAboutValidationSchema),
  AboutController.updateAbout,
);

router.delete("/", auth(ROLE.ADMIN), AboutController.deleteAbout);

export const AboutRoutes = router;
