// src/modules/blogs/blogs.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

import type { BLOG_CATEGORY, BLOG_STATUS } from "./blogs.constant.js";

export type TBlogCategory = (typeof BLOG_CATEGORY)[keyof typeof BLOG_CATEGORY];

export type TBlogStatus = (typeof BLOG_STATUS)[keyof typeof BLOG_STATUS];

export interface IBlog {
  title: string;

  slug: string;

  excerpt: string;

  content: string;

  featuredImage?: IImage;

  category: TBlogCategory;

  tags: string[];

  author: string;

  status: TBlogStatus;

  readTime: number;

  viewCount: number;

  isFeatured: boolean;

  isPublished: boolean;

  publishedAt?: Date | null;

  seoTitle?: string;

  seoDescription?: string;

  seoKeywords: string[];

  canonicalUrl?: string;

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TBlogDocument = HydratedDocument<IBlog>;

export type TCreateBlogPayload = Omit<
  IBlog,
  "slug" | "viewCount" | "createdAt" | "updatedAt"
>;

export type TUpdateBlogPayload = Partial<
  Omit<IBlog, "slug" | "viewCount" | "createdAt" | "updatedAt">
>;

export interface IBlogModel extends Model<IBlog> {}
