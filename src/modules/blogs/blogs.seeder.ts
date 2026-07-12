// src/modules/blogs/blogs.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { Blog } from './blogs.model.js';

import { BLOG_CATEGORY, BLOG_STATUS } from './blogs.constant.js';

import { logger } from '../../shared/logger/index.js';
import { generateSlug } from '../../shared/utils/generate-slug.js';

export const seedBlogs = async (): Promise<void> => {
  const existingCount = await Blog.countDocuments();

  if (existingCount > 0) {
    logger.info('Blogs already seeded.');

    return;
  }

  const blogs = [
    {
      title: 'Building a Production Ready Portfolio Backend with Express and TypeScript',

      slug: generateSlug(
        'Building a Production Ready Portfolio Backend with Express and TypeScript',
      ),

      excerpt:
        'Learn how to build a scalable portfolio backend using Express 5, TypeScript, MongoDB, Zod, and Mongoose.',

      content: `
# Building a Production Ready Portfolio Backend

In this article we will build a modern backend architecture using:

- Express 5
- TypeScript
- MongoDB
- Mongoose
- Zod
- JWT Authentication
- Cloudinary

The architecture follows modular design principles and is suitable for portfolio applications.

We will also implement:
- Validation
- Authentication
- Authorization
- Error Handling
- Swagger Documentation

This setup is highly scalable and production ready.
        `,

      category: BLOG_CATEGORY.BACKEND,

      tags: ['Node.js', 'Express', 'TypeScript', 'MongoDB'],

      author: 'Bharani',

      status: BLOG_STATUS.PUBLISHED,

      readTime: 8,

      viewCount: 125,

      isFeatured: true,

      isPublished: true,

      publishedAt: new Date('2026-01-10'),

      seoTitle: 'Production Ready Express TypeScript Backend',

      seoDescription:
        'Build a scalable Express and TypeScript backend with MongoDB and modern best practices.',

      seoKeywords: ['express', 'typescript', 'mongodb', 'backend'],

      sortOrder: 1,

      isActive: true,
    },

    {
      title: 'Advanced MongoDB Query Optimization Techniques',

      slug: generateSlug('Advanced MongoDB Query Optimization Techniques'),

      excerpt:
        'Improve MongoDB performance using indexes, aggregation pipelines, and query optimization strategies.',

      content: `
# Advanced MongoDB Query Optimization

MongoDB performance depends heavily on:

- Proper indexes
- Aggregation optimization
- Pagination strategies
- Query planning

This article explores practical optimization techniques used in production systems.
        `,

      category: BLOG_CATEGORY.DATABASE,

      tags: ['MongoDB', 'Database', 'Performance', 'Indexing'],

      author: 'Bharani',

      status: BLOG_STATUS.PUBLISHED,

      readTime: 6,

      viewCount: 98,

      isFeatured: false,

      isPublished: true,

      publishedAt: new Date('2026-02-15'),

      seoTitle: 'MongoDB Query Optimization Guide',

      seoDescription: 'Learn MongoDB indexing and performance optimization techniques.',

      seoKeywords: ['mongodb', 'database', 'indexing', 'performance'],

      sortOrder: 2,

      isActive: true,
    },

    {
      title: 'React and TypeScript Best Practices in 2026',

      slug: generateSlug('React and TypeScript Best Practices in 2026'),

      excerpt: 'A practical guide to building maintainable React applications with TypeScript.',

      content: `
# React and TypeScript Best Practices

Topics covered:

- Component architecture
- Type safety
- Hooks patterns
- State management
- Folder structure

These practices help create scalable frontend applications.
        `,

      category: BLOG_CATEGORY.FRONTEND,

      tags: ['React', 'TypeScript', 'Frontend'],

      author: 'Bharani',

      status: BLOG_STATUS.PUBLISHED,

      readTime: 7,

      viewCount: 145,

      isFeatured: true,

      isPublished: true,

      publishedAt: new Date('2026-03-05'),

      seoTitle: 'React TypeScript Best Practices',

      seoDescription: 'Learn modern React and TypeScript architecture patterns.',

      seoKeywords: ['react', 'typescript', 'frontend'],

      sortOrder: 3,

      isActive: true,
    },

    {
      title: 'Complete Full Stack Developer Roadmap',

      slug: generateSlug('Complete Full Stack Developer Roadmap'),

      excerpt:
        'A structured roadmap covering frontend, backend, databases, DevOps, and deployment.',

      content: `
# Full Stack Developer Roadmap

This roadmap covers:

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express
- MongoDB
- DevOps

Follow this path to become a modern full stack developer.
        `,

      category: BLOG_CATEGORY.FULL_STACK,

      tags: ['Career', 'Roadmap', 'Full Stack'],

      author: 'Bharani',

      status: BLOG_STATUS.PUBLISHED,

      readTime: 10,

      viewCount: 220,

      isFeatured: true,

      isPublished: true,

      publishedAt: new Date('2026-04-20'),

      seoTitle: 'Full Stack Developer Roadmap 2026',

      seoDescription: 'Learn the complete path to becoming a full stack developer.',

      seoKeywords: ['full stack', 'roadmap', 'career'],

      sortOrder: 4,

      isActive: true,
    },

    {
      title: 'Getting Started with DevOps for Developers',

      slug: generateSlug('Getting Started with DevOps for Developers'),

      excerpt: 'Understand CI/CD, Docker, GitHub Actions, and cloud deployment fundamentals.',

      content: `
# DevOps for Developers

Modern developers should understand:

- Docker
- CI/CD
- GitHub Actions
- Cloud Platforms

This guide introduces the core concepts and tools.
        `,

      category: BLOG_CATEGORY.DEVOPS,

      tags: ['DevOps', 'Docker', 'CI/CD'],

      author: 'Bharani',

      status: BLOG_STATUS.DRAFT,

      readTime: 5,

      viewCount: 0,

      isFeatured: false,

      isPublished: false,

      publishedAt: null,

      seoTitle: 'DevOps Beginner Guide',

      seoDescription: 'Learn DevOps fundamentals for modern software development.',

      seoKeywords: ['devops', 'docker', 'cicd'],

      sortOrder: 5,

      isActive: true,
    },
  ];

  await Blog.insertMany(blogs);

  logger.info(`Seeded ${blogs.length} blogs successfully.`);
};

export const runBlogsSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedBlogs();

    logger.info('Blogs seeding completed.');
  } catch (error) {
    logger.error(
      {
        error,
      },
      'Failed to seed blogs.',
    );

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('blogs.seeder')) {
  void runBlogsSeeder(true);
}
