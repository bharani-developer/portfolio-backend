// src/modules/blogs/blogs.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/index.js";

import {
  BLOG_CATEGORIES,
  BLOG_DEFAULT,
  BLOG_STATUSES,
} from "./blogs.constant.js";

import type { IBlog, IBlogModel } from "./blogs.interface.js";

const blogSchema = new Schema<IBlog, IBlogModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    featuredImage: {
      type: imageSchema,
    },

    category: {
      type: String,
      required: true,
      enum: BLOG_CATEGORIES,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    author: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    status: {
      type: String,
      required: true,
      enum: BLOG_STATUSES,
      default: "Draft",
    },

    readTime: {
      type: Number,
      required: true,
      min: 1,
      default: BLOG_DEFAULT.READ_TIME,
    },

    viewCount: {
      type: Number,
      required: true,
      min: 0,
      default: BLOG_DEFAULT.VIEW_COUNT,
    },

    isFeatured: {
      type: Boolean,
      default: BLOG_DEFAULT.IS_FEATURED,
    },

    isPublished: {
      type: Boolean,
      default: BLOG_DEFAULT.IS_PUBLISHED,
    },

    publishedAt: {
      type: Date,
      default: null,
    },

    seoTitle: {
      type: String,
      trim: true,
      maxlength: 70,
    },

    seoDescription: {
      type: String,
      trim: true,
      maxlength: 160,
    },

    seoKeywords: {
      type: [String],
      default: [],
    },

    canonicalUrl: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    sortOrder: {
      type: Number,
      min: 0,
      default: BLOG_DEFAULT.SORT_ORDER,
    },

    isActive: {
      type: Boolean,
      default: BLOG_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/**
 * ============================================================================
 * Indexes
 * ============================================================================
 */

/**
 * Category filtering
 */
blogSchema.index({
  category: 1,
  isActive: 1,
});

/**
 * Status filtering
 */
blogSchema.index({
  status: 1,
  isActive: 1,
});

/**
 * Published blogs
 */
blogSchema.index({
  isPublished: 1,
  publishedAt: -1,
});

/**
 * Featured blogs
 */
blogSchema.index({
  isFeatured: 1,
  isPublished: 1,
});

/**
 * Portfolio ordering
 */
blogSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Popular blogs
 */
blogSchema.index({
  viewCount: -1,
});

/**
 * Recent blogs
 */
blogSchema.index({
  createdAt: -1,
});

/**
 * Tag filtering
 */
blogSchema.index({
  tags: 1,
});

/**
 * Author filtering
 */
blogSchema.index({
  author: 1,
  isActive: 1,
});

/**
 * Full-text search
 */
blogSchema.index({
  title: "text",
  excerpt: "text",
  content: "text",
  tags: "text",
});

/**
 * ============================================================================
 * Model
 * ============================================================================
 */

export const Blog = model<IBlog, IBlogModel>("Blog", blogSchema);
