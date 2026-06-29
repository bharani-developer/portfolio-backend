// src/modules/blogs/blogs.controller.ts

import { MESSAGE, httpStatus } from "../../constants/index.js";

import { catchAsync, sendResponse } from "../../utils/index.js";

import { BlogService } from "./blogs.service.js";

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.getBlogs(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});

const getBlogById = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await BlogService.getBlogById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await BlogService.updateBlog(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});

const getActiveBlogs = catchAsync(async (_req, res) => {
  const result = await BlogService.getActiveBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getPublishedBlogs = catchAsync(async (_req, res) => {
  const result = await BlogService.getPublishedBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getFeaturedBlogs = catchAsync(async (_req, res) => {
  const result = await BlogService.getFeaturedBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getBlogBySlug = catchAsync(async (req, res) => {
  const slug = String(req.params.slug);

  const result = await BlogService.getBlogBySlug(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const incrementViewCount = catchAsync(async (req, res) => {
  const slug = String(req.params.slug);

  const result = await BlogService.incrementViewCount(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: "View count updated successfully",

    data: result,
  });
});

const getBlogsByCategory = catchAsync(async (req, res) => {
  const category = String(req.params.category) as never;

  const result = await BlogService.getBlogsByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getBlogsByTag = catchAsync(async (req, res) => {
  const tag = String(req.params.tag);

  const result = await BlogService.getBlogsByTag(tag);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getPopularBlogs = catchAsync(async (req, res) => {
  const limit = Number(req.query.limit) || 10;

  const result = await BlogService.getPopularBlogs(limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

export const BlogController = {
  createBlog,

  getBlogs,

  getBlogById,

  updateBlog,

  deleteBlog,

  getActiveBlogs,

  getPublishedBlogs,

  getFeaturedBlogs,

  getBlogBySlug,

  incrementViewCount,

  getBlogsByCategory,

  getBlogsByTag,

  getPopularBlogs,
};
