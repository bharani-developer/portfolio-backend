// src/modules/about/about.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";
import { auth, validateRequest } from "../../middlewares/index.js";

import { AboutController } from "./about.controller.js";
import { AboutValidation } from "./about.validation.js";

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                               Public Routes                                */
/* -------------------------------------------------------------------------- */

/**
 * @route   GET /about
 * @desc    Get portfolio About section
 * @access  Public
 */
router.get("/", AboutController.getAbout);

/* -------------------------------------------------------------------------- */
/*                              Protected Routes                              */
/* -------------------------------------------------------------------------- */

/**
 * @route   POST /about
 * @desc    Create About section
 * @access  Admin
 */
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(AboutValidation.createAboutValidationSchema),
  AboutController.createAbout,
);

/**
 * @route   PATCH /about
 * @desc    Update About section
 * @access  Admin
 */
router.patch(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(AboutValidation.updateAboutValidationSchema),
  AboutController.updateAbout,
);

/**
 * @route   DELETE /about
 * @desc    Delete About section
 * @access  Admin
 */
router.delete("/", auth(ROLE.ADMIN), AboutController.deleteAbout);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutRoutes = router;
