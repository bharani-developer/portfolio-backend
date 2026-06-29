// src/modules/blogs/blogs.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";

import { auth, validateRequest } from "../../middlewares/index.js";

import { BlogController } from "./blogs.controller.js";

import { BlogValidation } from "./blogs.validation.js";

const router = Router();

/**
 * Public Routes
 */

// Featured blogs
router.get("/featured", BlogController.getFeaturedBlogs);

// Popular blogs
router.get("/popular", BlogController.getPopularBlogs);

// Published blogs
router.get("/published", BlogController.getPublishedBlogs);

// Active blogs
router.get("/active", BlogController.getActiveBlogs);

// Blogs by category
router.get("/category/:category", BlogController.getBlogsByCategory);

// Blogs by tag
router.get("/tag/:tag", BlogController.getBlogsByTag);

// Blog by slug
router.get("/slug/:slug", BlogController.getBlogBySlug);

// Increment view count
router.patch("/slug/:slug/view", BlogController.incrementViewCount);

// All blogs
router.get("/", BlogController.getBlogs);

// Blog by ID
router.get("/:id", BlogController.getBlogById);

/**
 * Admin Routes
 */

// Create blog
router.post(
  "/",
  auth(ROLE.ADMIN),
  validateRequest(BlogValidation.createBlogValidationSchema),
  BlogController.createBlog,
);

// Update blog
router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(BlogValidation.updateBlogValidationSchema),
  BlogController.updateBlog,
);

// Delete blog
router.delete("/:id", auth(ROLE.ADMIN), BlogController.deleteBlog);

export const BlogsRoutes = router;
