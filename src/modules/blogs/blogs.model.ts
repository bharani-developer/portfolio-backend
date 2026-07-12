// src/modules/blogs/blogs.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import {
  BLOG_CATEGORIES,
  BLOG_DEFAULT,
  BLOG_STATUS,
  BLOG_STATUSES,
  BLOG_VALIDATION,
} from './blogs.constant.js';

import type { IBlog, IBlogModel, TBlogDocument } from './blogs.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const blogSchema = new Schema<IBlog, IBlogModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: BLOG_VALIDATION.TITLE.MIN_LENGTH,
      maxlength: BLOG_VALIDATION.TITLE.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: BLOG_VALIDATION.SLUG.MAX_LENGTH,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
      maxlength: BLOG_VALIDATION.EXCERPT.MAX_LENGTH,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minlength: BLOG_VALIDATION.CONTENT.MIN_LENGTH,
      maxlength: BLOG_VALIDATION.CONTENT.MAX_LENGTH,
    },

    featuredImage: {
      type: imageSchema,
    },

    category: {
      type: String,
      required: true,
      enum: BLOG_CATEGORIES,
      trim: true,
      maxlength: BLOG_VALIDATION.CATEGORY.MAX_LENGTH,
    },

    tags: {
      type: [String],
      default: [],

      validate: [
        {
          validator(tags: string[]) {
            return tags.length <= BLOG_VALIDATION.TAGS.MAX_COUNT;
          },
          message: `Maximum ${BLOG_VALIDATION.TAGS.MAX_COUNT} tags are allowed`,
        },

        {
          validator(tags: string[]) {
            return tags.every(
              (tag) => tag.trim().length > 0 && tag.length <= BLOG_VALIDATION.TAGS.MAX_LENGTH,
            );
          },
          message: 'Each tag must be non-empty and within the maximum length.',
        },

        {
          validator(tags: string[]) {
            return new Set(tags).size === tags.length;
          },
          message: 'Duplicate tags are not allowed.',
        },
      ],
    },

    author: {
      type: String,
      required: true,
      trim: true,
      maxlength: BLOG_VALIDATION.AUTHOR.MAX_LENGTH,
    },

    status: {
      type: String,
      required: true,
      enum: BLOG_STATUSES,
      default: BLOG_STATUS.DRAFT,
    },

    readTime: {
      type: Number,
      required: true,
      default: BLOG_DEFAULT.READ_TIME,
      min: BLOG_VALIDATION.READ_TIME.MIN,
      max: BLOG_VALIDATION.READ_TIME.MAX,
    },

    viewCount: {
      type: Number,
      required: true,
      default: BLOG_DEFAULT.VIEW_COUNT,
      min: BLOG_VALIDATION.VIEW_COUNT.MIN,
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
      maxlength: BLOG_VALIDATION.SEO_TITLE.MAX_LENGTH,
    },

    seoDescription: {
      type: String,
      trim: true,
      maxlength: BLOG_VALIDATION.SEO_DESCRIPTION.MAX_LENGTH,
    },

    seoKeywords: {
      type: [String],
      default: [],

      validate: [
        {
          validator(keywords: string[]) {
            return keywords.length <= BLOG_VALIDATION.SEO_KEYWORDS.MAX_COUNT;
          },
          message: `Maximum ${BLOG_VALIDATION.SEO_KEYWORDS.MAX_COUNT} SEO keywords are allowed`,
        },

        {
          validator(keywords: string[]) {
            return keywords.every(
              (keyword) =>
                keyword.trim().length > 0 &&
                keyword.length <= BLOG_VALIDATION.SEO_KEYWORDS.MAX_LENGTH,
            );
          },
          message: 'Each SEO keyword must be non-empty and within the maximum length.',
        },

        {
          validator(keywords: string[]) {
            return new Set(keywords).size === keywords.length;
          },
          message: 'Duplicate SEO keywords are not allowed.',
        },
      ],
    },

    canonicalUrl: {
      type: String,
      trim: true,
      maxlength: BLOG_VALIDATION.CANONICAL_URL.MAX_LENGTH,
    },

    sortOrder: {
      type: Number,
      default: BLOG_DEFAULT.SORT_ORDER,
      min: BLOG_VALIDATION.SORT_ORDER.MIN,
      max: BLOG_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: BLOG_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,

    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  },
);
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Automatically manage the published date.
 */
blogSchema.pre('save', function (this: TBlogDocument) {
  if (this.isModified('isPublished') && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  if (this.isModified('isPublished') && !this.isPublished) {
    this.publishedAt = null;
  }
});

/**
 * Normalize tags and SEO keywords.
 */
blogSchema.pre('save', function (this: TBlogDocument) {
  if (this.isModified('tags')) {
    this.tags = [...new Set(this.tags.map((tag: string) => tag.trim()))];
  }

  if (this.isModified('seoKeywords')) {
    this.seoKeywords = [...new Set(this.seoKeywords.map((keyword: string) => keyword.trim()))];
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Total number of tags.
 */
blogSchema.virtual('tagCount').get(function (this: TBlogDocument) {
  return this.tags.length;
});

/**
 * Total number of SEO keywords.
 */
blogSchema.virtual('seoKeywordCount').get(function (this: TBlogDocument) {
  return this.seoKeywords.length;
});

/**
 * Whether the blog is publicly visible.
 */
blogSchema.virtual('isLive').get(function (this: TBlogDocument) {
  return this.isPublished && this.isActive;
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Blog = model<IBlog, IBlogModel>('Blog', blogSchema);
