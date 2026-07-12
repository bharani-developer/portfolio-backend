/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { BlogController } from './blogs.controller.js';
import { BlogValidation } from './blogs.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

/**
 * GET /blogs/featured
 */
router.get('/featured', BlogController.getFeaturedBlogs);

/**
 * GET /blogs/popular
 */
router.get('/popular', BlogController.getPopularBlogs);

/**
 * GET /blogs/published
 */
router.get('/published', BlogController.getPublishedBlogs);

/**
 * GET /blogs/active
 */
router.get('/active', BlogController.getActiveBlogs);

/**
 * GET /blogs/category/:category
 */
router.get('/category/:category', BlogController.getBlogsByCategory);

/**
 * GET /blogs/tag/:tag
 */
router.get('/tag/:tag', BlogController.getBlogsByTag);

/**
 * GET /blogs/slug/:slug
 */
router.get('/slug/:slug', BlogController.getBlogBySlug);

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

/**
 * GET    /
 * POST   /
 */
router
  .route('/')
  .get(BlogController.getBlogs)
  .post(
    auth(ROLE.ADMIN),
    validateRequest(BlogValidation.createBlogValidationSchema),
    BlogController.createBlog,
  );

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

/**
 * GET    /:id
 * PATCH  /:id
 * DELETE /:id
 */
router
  .route('/:id')
  .get(BlogController.getBlogById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(BlogValidation.updateBlogValidationSchema),
    BlogController.updateBlog,
  )
  .delete(auth(ROLE.ADMIN), BlogController.deleteBlog);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

/**
 * PATCH /blogs/slug/:slug/view
 */
router.patch('/slug/:slug/view', BlogController.incrementViewCount);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const BlogsRoutes = router;
