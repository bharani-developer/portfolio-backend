// src/modules/blogs/blogs.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";

import AppError from "../../utils/AppError.js";

import {
  BLOG_MESSAGE,
  BLOG_SEARCHABLE_FIELDS,
  BLOG_STATUS,
} from "./blogs.constant.js";

import { Blog } from "./blogs.model.js";

import type {
  IBlog,
  TCreateBlogPayload,
  TUpdateBlogPayload,
} from "./blogs.interface.js";

const baseService = new BaseCrudService<IBlog>(Blog, [
  ...BLOG_SEARCHABLE_FIELDS,
]);

const createBlog = async (payload: TCreateBlogPayload) => {
  const title = payload.title.trim();

  const existingBlog = await Blog.findOne({
    title,
  });

  if (existingBlog) {
    throw new AppError(httpStatus.CONFLICT, BLOG_MESSAGE.ALREADY_EXISTS);
  }

  const slug = generateSlug(title);

  const blogPayload: Partial<IBlog> = {
    ...payload,

    title,

    slug,

    isPublished: payload.status === BLOG_STATUS.PUBLISHED,
  };

  if (payload.status === BLOG_STATUS.PUBLISHED) {
    blogPayload.publishedAt = payload.publishedAt ?? new Date();
  } else if (payload.publishedAt !== undefined) {
    blogPayload.publishedAt = payload.publishedAt;
  }

  return baseService.create(blogPayload);
};

const getBlogs = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getBlogById = async (id: string) => {
  return baseService.getById(id);
};

const updateBlog = async (id: string, payload: TUpdateBlogPayload) => {
  const existingBlog = await Blog.findById(id);

  if (!existingBlog) {
    throw new AppError(httpStatus.NOT_FOUND, BLOG_MESSAGE.NOT_FOUND);
  }

  const title = payload.title?.trim() ?? existingBlog.title;

  const duplicateBlog = await Blog.findOne({
    title,

    _id: {
      $ne: existingBlog._id,
    },
  });

  if (duplicateBlog) {
    throw new AppError(httpStatus.CONFLICT, BLOG_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Record<string, unknown> = {
    ...payload,
  };

  if (payload.title) {
    updatePayload.slug = generateSlug(title);
  }

  if (payload.status === BLOG_STATUS.PUBLISHED && !existingBlog.publishedAt) {
    updatePayload.publishedAt = new Date();

    updatePayload.isPublished = true;
  }

  if (payload.status === BLOG_STATUS.DRAFT) {
    updatePayload.isPublished = false;
  }

  return baseService.update(id, updatePayload as Partial<IBlog>);
};

const deleteBlog = async (id: string) => {
  return baseService.delete(id);
};

const getActiveBlogs = async () => {
  return Blog.find({
    isActive: true,
  })
    .sort({
      publishedAt: -1,
      sortOrder: 1,
    })
    .lean();
};

const getPublishedBlogs = async () => {
  return Blog.find({
    isPublished: true,

    isActive: true,

    status: BLOG_STATUS.PUBLISHED,
  })
    .sort({
      publishedAt: -1,
    })
    .lean();
};

const getFeaturedBlogs = async () => {
  return Blog.find({
    isFeatured: true,

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,
    })
    .lean();
};

const getBlogBySlug = async (slug: string) => {
  const result = await Blog.findOne({
    slug,

    isPublished: true,

    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, BLOG_MESSAGE.NOT_FOUND);
  }

  return result;
};

const incrementViewCount = async (slug: string) => {
  const result = await Blog.findOneAndUpdate(
    {
      slug,

      isPublished: true,

      isActive: true,
    },
    {
      $inc: {
        viewCount: 1,
      },
    },
    {
      new: true,
    },
  );

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, BLOG_MESSAGE.NOT_FOUND);
  }

  return result;
};

const getBlogsByCategory = async (category: IBlog["category"]) => {
  return Blog.find({
    category,

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,
    })
    .lean();
};

const getBlogsByTag = async (tag: string) => {
  return Blog.find({
    tags: {
      $in: [tag],
    },

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,
    })
    .lean();
};

const getPopularBlogs = async (limit = 10) => {
  return Blog.find({
    isPublished: true,

    isActive: true,
  })
    .sort({
      viewCount: -1,
    })
    .limit(limit)
    .lean();
};

export const BlogService = {
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
