import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";
import { auth } from "../../middlewares/index.js";

import { DashboardController } from "./dashboard.controller.js";

const router = Router();

router.get("/", auth(ROLE.VIEWER,ROLE.ADMIN), DashboardController.getDashboardStats);

export const DashboardRoutes = router;
