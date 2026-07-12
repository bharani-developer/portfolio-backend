// src/modules/blogs/blogs.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { IImage } from '../../shared/types/image.type.js';

import type { BLOG_CATEGORY, BLOG_STATUS } from './blogs.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

export type TBlogCategory = (typeof BLOG_CATEGORY)[keyof typeof BLOG_CATEGORY];

export type TBlogStatus = (typeof BLOG_STATUS)[keyof typeof BLOG_STATUS];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Blog entity.
 */
export interface IBlog {
  /**
   * Blog title.
   */
  title: string;

  /**
   * URL-friendly slug.
   */
  slug: string;

  /**
   * Short blog summary.
   */
  excerpt: string;

  /**
   * Blog content.
   */
  content: string;

  /**
   * Featured image.
   */
  featuredImage?: IImage;

  /**
   * Blog category.
   */
  category: TBlogCategory;

  /**
   * Searchable tags.
   */
  tags: string[];

  /**
   * Blog author.
   */
  author: string;

  /**
   * Publication status.
   */
  status: TBlogStatus;

  /**
   * Estimated reading time (minutes).
   */
  readTime: number;

  /**
   * Total page views.
   */
  viewCount: number;

  /**
   * Featured blog.
   */
  isFeatured: boolean;

  /**
   * Published flag.
   */
  isPublished: boolean;

  /**
   * Published date.
   */
  publishedAt?: Date | null;

  /**
   * SEO title.
   */
  seoTitle?: string;

  /**
   * SEO description.
   */
  seoDescription?: string;

  /**
   * SEO keywords.
   */
  seoKeywords: string[];

  /**
   * Canonical URL.
   */
  canonicalUrl?: string;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Active status.
   */
  isActive: boolean;

  /**
   * Creation timestamp.
   */
  createdAt?: Date;

  /**
   * Last update timestamp.
   */
  updatedAt?: Date;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Blog document.
 */
export type TBlogDocument = HydratedDocument<IBlog>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create blog payload.
 */
export type TCreateBlogPayload = Omit<IBlog, 'slug' | 'viewCount' | 'createdAt' | 'updatedAt'>;

/**
 * Update blog payload.
 */
export type TUpdateBlogPayload = Partial<
  Omit<IBlog, 'slug' | 'viewCount' | 'createdAt' | 'updatedAt'>
>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Blog mongoose model.
 */
export type IBlogModel = Model<IBlog>;
