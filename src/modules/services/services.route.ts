// src\modules\services\services.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { ServicesController } from "./services.controller.js";
import { ServicesValidation } from "./services.validation.js";

const router = Router();

router.get("/", ServicesController.getServices);

router.get("/:id", ServicesController.getServiceById);

router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(ServicesValidation.createServiceValidationSchema),
  ServicesController.createService,
);

router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(ServicesValidation.updateServiceValidationSchema),
  ServicesController.updateService,
);

router.delete("/:id", auth(ROLE.ADMIN), ServicesController.deleteService);

export const ServicesRoutes = router;
