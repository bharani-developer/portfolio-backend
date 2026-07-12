/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Constants
import { MESSAGE } from '../../constants/index.js';

// Shared
import { catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { BlogService } from './blogs.service.js';

// Types
import type { TCreateBlogPayload, TUpdateBlogPayload } from './blogs.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateBlogPayload = req.body;

  const result = await BlogService.createBlog(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

const getBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const result = await BlogService.getBlogById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getBlogBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = String(req.params.slug);

  const result = await BlogService.getBlogBySlug(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const payload: TUpdateBlogPayload = req.body;

  const result = await BlogService.updateBlog(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

const getActiveBlogs = catchAsync(async (_req: Request, res: Response) => {
  const result = await BlogService.getActiveBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getPublishedBlogs = catchAsync(async (_req: Request, res: Response) => {
  const result = await BlogService.getPublishedBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getFeaturedBlogs = catchAsync(async (_req: Request, res: Response) => {
  const result = await BlogService.getFeaturedBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getBlogsByCategory = catchAsync(async (req: Request, res: Response) => {
  const category = String(req.params.category);

  const result = await BlogService.getBlogsByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getBlogsByTag = catchAsync(async (req: Request, res: Response) => {
  const tag = String(req.params.tag);

  const result = await BlogService.getBlogsByTag(tag);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getPopularBlogs = catchAsync(async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;

  const result = await BlogService.getPopularBlogs(limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

const incrementViewCount = catchAsync(async (req: Request, res: Response) => {
  const slug = String(req.params.slug);

  const result = await BlogService.incrementViewCount(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const BlogController = {
  createBlog,

  getBlogs,

  getBlogById,

  getBlogBySlug,

  updateBlog,

  deleteBlog,

  getActiveBlogs,

  getPublishedBlogs,

  getFeaturedBlogs,

  getBlogsByCategory,

  getBlogsByTag,

  getPopularBlogs,

  incrementViewCount,
};
