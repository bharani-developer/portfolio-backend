// src/modules/blogs/blogs.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import {
  BLOG_CATEGORIES,
  BLOG_MESSAGE,
  BLOG_SEARCHABLE_FIELDS,
  BLOG_STATUS,
} from './blogs.constant.js';

import { Blog } from './blogs.model.js';

import type { IBlog, TBlogCategory, TCreateBlogPayload, TUpdateBlogPayload } from './blogs.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const blogBaseService = new BaseCrudService<IBlog>(Blog, [...BLOG_SEARCHABLE_FIELDS]);

/* -------------------------------------------------------------------------- */
/*                                 3. Create                                  */
/* -------------------------------------------------------------------------- */

/**
 * Create a new blog.
 */
const createBlog = async (payload: TCreateBlogPayload) => {
  const title = payload.title.trim();

  const author = payload.author.trim();

  const slug = generateSlug(title);

  const existingBlog = await blogBaseService.exists({
    $or: [
      {
        slug,
      },
      {
        title,
      },
    ],
  });

  if (existingBlog) {
    throw new AppError(httpStatus.CONFLICT, BLOG_MESSAGE.ALREADY_EXISTS);
  }

  const blogPayload: Partial<IBlog> = {
    ...payload,

    title,

    author,

    slug,

    tags: payload.tags.map((tag) => tag.trim()),

    seoKeywords: payload.seoKeywords.map((keyword) => keyword.trim()),

    isPublished: payload.status === BLOG_STATUS.PUBLISHED,
  };

  if (payload.status === BLOG_STATUS.PUBLISHED) {
    blogPayload.publishedAt = payload.publishedAt ?? new Date();
  }

  if (payload.status !== BLOG_STATUS.PUBLISHED) {
    blogPayload.publishedAt = null;
  }

  return blogBaseService.create(blogPayload);
};
/* -------------------------------------------------------------------------- */
/*                                4. Get All                                  */
/* -------------------------------------------------------------------------- */

/**
 * Get all blogs.
 */
const getBlogs = async (query: Record<string, unknown>) => blogBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                               5. Get By Id                                 */
/* -------------------------------------------------------------------------- */

/**
 * Get a blog by ID.
 */
const getBlogById = async (id: string) => blogBaseService.getById(id);

/* -------------------------------------------------------------------------- */
/*                                 6. Update                                  */
/* -------------------------------------------------------------------------- */

/**
 * Update an existing blog.
 */
const updateBlog = async (id: string, payload: TUpdateBlogPayload) => {
  const existingBlog = await blogBaseService.getById(id);

  const title = payload.title?.trim() ?? existingBlog.title;

  const author = payload.author?.trim() ?? existingBlog.author;

  if (payload.title) {
    const slug = generateSlug(title);

    const duplicateBlog = await Blog.findOne({
      _id: {
        $ne: existingBlog._id,
      },

      $or: [
        {
          title,
        },
        {
          slug,
        },
      ],
    });

    if (duplicateBlog) {
      throw new AppError(httpStatus.CONFLICT, BLOG_MESSAGE.ALREADY_EXISTS);
    }
  }

  const updatePayload: Partial<IBlog> = {
    ...payload,

    title,

    author,
  };

  if (payload.title) {
    updatePayload.slug = generateSlug(title);
  }

  if (payload.tags) {
    updatePayload.tags = payload.tags.map((tag) => tag.trim());
  }

  if (payload.seoKeywords) {
    updatePayload.seoKeywords = payload.seoKeywords.map((keyword) => keyword.trim());
  }

  if (payload.status === BLOG_STATUS.PUBLISHED) {
    updatePayload.isPublished = true;

    updatePayload.publishedAt = payload.publishedAt ?? existingBlog.publishedAt ?? new Date();
  }

  if (payload.status && payload.status !== BLOG_STATUS.PUBLISHED) {
    updatePayload.isPublished = false;

    updatePayload.publishedAt = null;
  }

  return blogBaseService.update(id, updatePayload);
};

/* -------------------------------------------------------------------------- */
/*                                 7. Delete                                  */
/* -------------------------------------------------------------------------- */

/**
 * Delete a blog.
 */
const deleteBlog = async (id: string) => blogBaseService.delete(id);
/* -------------------------------------------------------------------------- */
/*                             8. Custom Queries                              */
/* -------------------------------------------------------------------------- */

/**
 * Get all active blogs.
 */
const getActiveBlogs = async () =>
  Blog.find({
    isActive: true,
  })
    .sort({
      publishedAt: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get all published blogs.
 */
const getPublishedBlogs = async () =>
  Blog.find({
    isPublished: true,

    isActive: true,

    status: BLOG_STATUS.PUBLISHED,
  })
    .sort({
      publishedAt: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get all featured blogs.
 */
const getFeaturedBlogs = async () =>
  Blog.find({
    isFeatured: true,

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get a published blog by slug.
 */
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

/**
 * Increment blog view count.
 */
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
      runValidators: true,
    },
  );

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, BLOG_MESSAGE.NOT_FOUND);
  }

  return result;
};

/**
 * Get blogs by category.
 */
const getBlogsByCategory = async (category: string) => {
  const normalizedCategory = category.trim();

  if (!BLOG_CATEGORIES.includes(normalizedCategory as TBlogCategory)) {
    throw new AppError(httpStatus.BAD_REQUEST, BLOG_MESSAGE.INVALID_CATEGORY);
  }

  const blogCategory: TBlogCategory = normalizedCategory as TBlogCategory;

  return Blog.find({
    category: blogCategory,

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,

      sortOrder: 1,
    })
    .lean();
};
/**
 * Get blogs by tag.
 */
const getBlogsByTag = async (tag: string) =>
  Blog.find({
    tags: {
      $in: [tag],
    },

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,
      sortOrder: 1,
    })
    .lean();
/**
 * Get most popular blogs.
 */
const getPopularBlogs = async (limit = 10) =>
  Blog.find({
    isPublished: true,

    isActive: true,
  })
    .sort({
      viewCount: -1,

      publishedAt: -1,
    })
    .limit(limit)
    .lean();

/**
 * Get most recent published blogs.
 */
const getRecentBlogs = async (limit = 10) =>
  Blog.find({
    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,

      createdAt: -1,
    })
    .limit(limit)
    .lean();

/**
 * Get related blogs.
 */
const getRelatedBlogs = async (slug: string, category: TBlogCategory, limit = 5) =>
  Blog.find({
    slug: {
      $ne: slug,
    },

    category,

    isPublished: true,

    isActive: true,
  })
    .sort({
      publishedAt: -1,

      viewCount: -1,
    })
    .limit(limit)
    .lean();

/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const BlogService = Object.freeze({
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

  getRecentBlogs,

  getRelatedBlogs,
});
