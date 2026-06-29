// src\modules\projects\projects.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { ProjectController } from "./projects.controller.js";

import { ProjectValidation } from "./projects.validation.js";

const router = Router();

/**
 * Public Routes
 */

// Featured projects
router.get("/featured", ProjectController.getFeaturedProjects);

// Active projects
router.get("/active", ProjectController.getActiveProjects);

// Project by slug
router.get("/slug/:slug", ProjectController.getProjectBySlug);

// Projects by category
router.get("/category/:category", ProjectController.getProjectsByCategory);

// Projects by technology
router.get(
  "/technology/:technology",
  ProjectController.getProjectsByTechnology,
);

// Projects by status
router.get("/status/:status", ProjectController.getProjectsByStatus);

// Get all projects
router.get("/", ProjectController.getProjects);

// Get project by id
router.get("/:id", ProjectController.getProjectById);

/**
 * Admin Routes
 */

// Create project
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(ProjectValidation.createProjectValidationSchema),
  ProjectController.createProject,
);

// Update project
router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(ProjectValidation.updateProjectValidationSchema),
  ProjectController.updateProject,
);

// Delete project
router.delete("/:id", auth(ROLE.ADMIN), ProjectController.deleteProject);

export const ProjectsRoutes = router;
