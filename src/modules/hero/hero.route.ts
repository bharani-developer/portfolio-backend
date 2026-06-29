// src\modules\hero\hero.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { HeroController } from "./hero.controller.js";
import { HeroValidation } from "./hero.validation.js";

const router = Router();

router.get("/", HeroController.getHero);

router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(HeroValidation.createHeroValidationSchema),
  HeroController.createHero,
);

router.patch(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(HeroValidation.updateHeroValidationSchema),
  HeroController.updateHero,
);

router.delete("/", auth(ROLE.ADMIN), HeroController.deleteHero);

export const HeroRoutes = router;
