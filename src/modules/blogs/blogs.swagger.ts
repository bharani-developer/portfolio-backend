// src/modules/blogs/blogs.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { BLOG_CATEGORIES, BLOG_STATUSES } from './blogs.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Reusable Enums                                */
/* -------------------------------------------------------------------------- */

const blogCategoryEnum = [...BLOG_CATEGORIES];

const blogStatusEnum = [...BLOG_STATUSES];

/* -------------------------------------------------------------------------- */
/*                             Reusable Examples                              */
/* -------------------------------------------------------------------------- */

const blogExamples = {
  id: '685b7c1d9c5d1d2a9f5d9c10',

  title: 'Building a Production Ready Express.js REST API',

  slug: 'building-a-production-ready-expressjs-rest-api',

  excerpt:
    'Learn how to structure scalable Express.js APIs using TypeScript, MongoDB, and clean architecture.',

  content:
    'This article explains how to build a scalable Express.js backend using TypeScript, layered architecture, validation, authentication, pagination, and reusable services...',

  featuredImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/blogs/express-api.jpg',

    publicId: 'blogs/express-api',
  },

  category: 'Backend',

  tags: ['Express', 'TypeScript', 'MongoDB', 'REST API'],

  author: 'Bharani',

  status: 'Published',

  readTime: 8,

  viewCount: 1240,

  isFeatured: true,

  isPublished: true,

  publishedAt: '2026-07-06T09:00:00.000Z',

  seoTitle: 'Production Ready Express.js REST API',

  seoDescription: 'Complete guide to building scalable Express.js APIs with TypeScript.',

  seoKeywords: ['express', 'typescript', 'mongodb', 'nodejs'],

  canonicalUrl: 'https://portfolio.com/blog/building-a-production-ready-expressjs-rest-api',

  sortOrder: 1,

  isActive: true,

  createdAt: '2026-07-06T09:00:00.000Z',

  updatedAt: '2026-07-06T09:30:00.000Z',
};

/* -------------------------------------------------------------------------- */
/*                               Component Schemas                            */
/* -------------------------------------------------------------------------- */

export const blogsSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                               Blog Image                                 */
  /* ------------------------------------------------------------------------ */

  BlogImage: {
    type: 'object',

    description: 'Cloudinary image information.',

    additionalProperties: false,

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        description: 'Public image URL.',

        example: blogExamples.featuredImage.url,
      },

      publicId: {
        type: 'string',

        description: 'Cloudinary public identifier.',

        example: blogExamples.featuredImage.publicId,
      },
    },

    example: blogExamples.featuredImage,
  },

  /* ------------------------------------------------------------------------ */
  /*                             Blog Base Schema                             */
  /* ------------------------------------------------------------------------ */

  Blog: {
    type: 'object',

    description: 'Blog resource.',

    additionalProperties: false,

    required: [
      '_id',
      'title',
      'slug',
      'excerpt',
      'content',
      'category',
      'tags',
      'author',
      'status',
      'readTime',
      'viewCount',
      'isFeatured',
      'isPublished',
      'seoKeywords',
      'sortOrder',
      'isActive',
      'createdAt',
      'updatedAt',
    ],

    properties: {
      _id: {
        type: 'string',

        readOnly: true,

        description: 'MongoDB document ID.',

        example: blogExamples.id,
      },

      title: {
        type: 'string',

        minLength: 5,

        maxLength: 200,

        description: 'Blog title.',

        example: blogExamples.title,
      },

      slug: {
        type: 'string',

        readOnly: true,

        description: 'SEO friendly slug.',

        example: blogExamples.slug,
      },

      excerpt: {
        type: 'string',

        maxLength: 500,

        description: 'Short blog summary.',

        example: blogExamples.excerpt,
      },

      content: {
        type: 'string',

        description: 'Complete blog content.',

        example: blogExamples.content,
      },

      featuredImage: {
        allOf: [
          {
            $ref: '#/components/schemas/BlogImage',
          },
        ],

        nullable: true,
      },

      category: {
        type: 'string',

        enum: blogCategoryEnum,

        description: 'Blog category.',

        example: blogExamples.category,
      },

      tags: {
        type: 'array',

        description: 'Searchable blog tags.',

        minItems: 0,

        maxItems: 20,

        uniqueItems: true,

        items: {
          type: 'string',

          maxLength: 50,
        },

        example: blogExamples.tags,
      },

      author: {
        type: 'string',

        maxLength: 100,

        description: 'Blog author name.',

        example: blogExamples.author,
      },

      status: {
        type: 'string',

        enum: blogStatusEnum,

        description: 'Current publication status.',

        example: blogExamples.status,
      },

      readTime: {
        type: 'integer',

        minimum: 1,

        maximum: 999,

        description: 'Estimated reading time in minutes.',

        example: blogExamples.readTime,
      },

      viewCount: {
        type: 'integer',

        minimum: 0,

        readOnly: true,

        description: 'Total blog views.',

        example: blogExamples.viewCount,
      },

      isFeatured: {
        type: 'boolean',

        description: 'Whether the blog is featured.',

        example: blogExamples.isFeatured,
      },

      isPublished: {
        type: 'boolean',

        description: 'Whether the blog is published.',

        example: blogExamples.isPublished,
      },

      publishedAt: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        description: 'Publication date.',

        example: blogExamples.publishedAt,
      },

      seoTitle: {
        type: 'string',

        maxLength: 70,

        nullable: true,

        description: 'SEO title used for search engines.',

        example: blogExamples.seoTitle,
      },

      seoDescription: {
        type: 'string',

        maxLength: 160,

        nullable: true,

        description: 'SEO meta description.',

        example: blogExamples.seoDescription,
      },

      seoKeywords: {
        type: 'array',

        description: 'SEO keywords.',

        minItems: 0,

        maxItems: 30,

        uniqueItems: true,

        items: {
          type: 'string',

          maxLength: 100,
        },

        example: blogExamples.seoKeywords,
      },

      canonicalUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        description: 'Canonical URL for SEO.',

        example: blogExamples.canonicalUrl,
      },

      sortOrder: {
        type: 'integer',

        minimum: 0,

        maximum: 9999,

        description: 'Display order.',

        example: blogExamples.sortOrder,
      },

      isActive: {
        type: 'boolean',

        description: 'Whether the blog is active.',

        example: blogExamples.isActive,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Creation timestamp.',

        example: blogExamples.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Last update timestamp.',

        example: blogExamples.updatedAt,
      },
    },

    example: blogExamples,
  },

  /* ------------------------------------------------------------------------ */
  /*                         Create Blog Request                              */
  /* ------------------------------------------------------------------------ */
  CreateBlogRequest: {
    type: 'object',

    description: 'Request payload for creating a new blog.',

    additionalProperties: false,

    required: ['title', 'excerpt', 'content', 'category', 'author'],

    properties: {
      title: {
        type: 'string',

        minLength: 5,

        maxLength: 200,

        description: 'Blog title.',

        example: blogExamples.title,
      },

      excerpt: {
        type: 'string',

        minLength: 1,

        maxLength: 500,

        description: 'Short summary of the blog.',

        example: blogExamples.excerpt,
      },

      content: {
        type: 'string',

        minLength: 50,

        maxLength: 10000,

        description: 'Complete blog content.',

        example: blogExamples.content,
      },

      featuredImage: {
        $ref: '#/components/schemas/BlogImage',
      },

      category: {
        type: 'string',

        enum: blogCategoryEnum,

        description: 'Blog category.',

        example: blogExamples.category,
      },

      tags: {
        type: 'array',

        uniqueItems: true,

        maxItems: 20,

        items: {
          type: 'string',

          maxLength: 50,
        },

        description: 'Blog tags.',

        example: blogExamples.tags,
      },

      author: {
        type: 'string',

        maxLength: 100,

        description: 'Author name.',

        example: blogExamples.author,
      },

      status: {
        type: 'string',

        enum: blogStatusEnum,

        default: 'Draft',

        description: 'Publication status.',

        example: blogExamples.status,
      },

      readTime: {
        type: 'integer',

        minimum: 1,

        maximum: 999,

        default: 1,

        description: 'Estimated reading time in minutes.',

        example: blogExamples.readTime,
      },

      isFeatured: {
        type: 'boolean',

        default: false,

        description: 'Whether this blog is featured.',

        example: blogExamples.isFeatured,
      },

      seoTitle: {
        type: 'string',

        maxLength: 70,

        description: 'SEO title.',

        example: blogExamples.seoTitle,
      },

      seoDescription: {
        type: 'string',

        maxLength: 160,

        description: 'SEO description.',

        example: blogExamples.seoDescription,
      },

      seoKeywords: {
        type: 'array',

        uniqueItems: true,

        maxItems: 30,

        items: {
          type: 'string',

          maxLength: 100,
        },

        description: 'SEO keywords.',

        example: blogExamples.seoKeywords,
      },

      canonicalUrl: {
        type: 'string',

        format: 'uri',

        description: 'Canonical URL.',

        example: blogExamples.canonicalUrl,
      },

      sortOrder: {
        type: 'integer',

        minimum: 0,

        maximum: 9999,

        default: 0,

        description: 'Display order.',

        example: blogExamples.sortOrder,
      },

      isActive: {
        type: 'boolean',

        default: true,

        description: 'Whether the blog is active.',

        example: blogExamples.isActive,
      },
    },

    example: {
      title: blogExamples.title,

      excerpt: blogExamples.excerpt,

      content: blogExamples.content,

      featuredImage: blogExamples.featuredImage,

      category: blogExamples.category,

      tags: blogExamples.tags,

      author: blogExamples.author,

      status: blogExamples.status,

      readTime: blogExamples.readTime,

      isFeatured: blogExamples.isFeatured,

      seoTitle: blogExamples.seoTitle,

      seoDescription: blogExamples.seoDescription,

      seoKeywords: blogExamples.seoKeywords,

      canonicalUrl: blogExamples.canonicalUrl,

      sortOrder: blogExamples.sortOrder,

      isActive: blogExamples.isActive,
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         Update Blog Request                              */
  /* ------------------------------------------------------------------------ */

  UpdateBlogRequest: {
    type: 'object',

    description: 'Request payload for updating an existing blog.',

    additionalProperties: false,

    properties: {
      title: {
        type: 'string',

        minLength: 5,

        maxLength: 200,

        description: 'Blog title.',

        example: blogExamples.title,
      },

      excerpt: {
        type: 'string',

        minLength: 1,

        maxLength: 500,

        description: 'Short summary of the blog.',

        example: blogExamples.excerpt,
      },

      content: {
        type: 'string',

        minLength: 50,

        maxLength: 10000,

        description: 'Complete blog content.',

        example: blogExamples.content,
      },

      featuredImage: {
        allOf: [
          {
            $ref: '#/components/schemas/BlogImage',
          },
        ],

        nullable: true,
      },

      category: {
        type: 'string',

        enum: blogCategoryEnum,

        description: 'Blog category.',

        example: blogExamples.category,
      },

      tags: {
        type: 'array',

        uniqueItems: true,

        maxItems: 20,

        items: {
          type: 'string',

          maxLength: 50,
        },

        description: 'Blog tags.',

        example: blogExamples.tags,
      },

      author: {
        type: 'string',

        maxLength: 100,

        description: 'Author name.',

        example: blogExamples.author,
      },

      status: {
        type: 'string',

        enum: blogStatusEnum,

        description: 'Publication status.',

        example: blogExamples.status,
      },

      readTime: {
        type: 'integer',

        minimum: 1,

        maximum: 999,

        description: 'Estimated reading time in minutes.',

        example: blogExamples.readTime,
      },

      isFeatured: {
        type: 'boolean',

        description: 'Whether this blog is featured.',

        example: blogExamples.isFeatured,
      },

      isPublished: {
        type: 'boolean',

        description: 'Whether this blog is published.',

        example: blogExamples.isPublished,
      },

      publishedAt: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        description: 'Publication date.',

        example: blogExamples.publishedAt,
      },

      seoTitle: {
        type: 'string',

        maxLength: 70,

        nullable: true,

        description: 'SEO title.',

        example: blogExamples.seoTitle,
      },

      seoDescription: {
        type: 'string',

        maxLength: 160,

        nullable: true,

        description: 'SEO description.',

        example: blogExamples.seoDescription,
      },

      seoKeywords: {
        type: 'array',

        uniqueItems: true,

        maxItems: 30,

        items: {
          type: 'string',

          maxLength: 100,
        },

        description: 'SEO keywords.',

        example: blogExamples.seoKeywords,
      },

      canonicalUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        description: 'Canonical URL.',

        example: blogExamples.canonicalUrl,
      },

      sortOrder: {
        type: 'integer',

        minimum: 0,

        maximum: 9999,

        description: 'Display order.',

        example: blogExamples.sortOrder,
      },

      isActive: {
        type: 'boolean',

        description: 'Whether the blog is active.',

        example: blogExamples.isActive,
      },
    },

    example: {
      title: 'Updated Production Ready Express.js REST API',

      excerpt: 'Updated guide for building scalable REST APIs using Express.js and TypeScript.',

      content:
        'Updated article with Express 5, TypeScript, Zod validation, OpenAPI documentation, authentication and production deployment.',

      category: 'Backend',

      tags: ['Express', 'TypeScript', 'REST API'],

      isFeatured: false,

      seoTitle: 'Updated Express.js Guide',

      seoDescription: 'Updated production-ready Express.js REST API tutorial.',

      seoKeywords: ['express', 'typescript', 'nodejs'],

      sortOrder: 2,
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                             Pagination Meta                              */
  /* ------------------------------------------------------------------------ */

  PaginationMeta: {
    type: 'object',

    additionalProperties: false,

    required: ['page', 'limit', 'total', 'totalPage'],

    properties: {
      page: {
        type: 'integer',

        example: 1,
      },

      limit: {
        type: 'integer',

        example: 10,
      },

      total: {
        type: 'integer',

        example: 125,
      },

      totalPage: {
        type: 'integer',

        example: 13,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Success Response                               */
  /* ------------------------------------------------------------------------ */

  SuccessResponse: {
    type: 'object',

    additionalProperties: false,

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      statusCode: {
        type: 'integer',

        example: 200,
      },

      message: {
        type: 'string',

        example: 'Success',
      },

      meta: {
        $ref: '#/components/schemas/PaginationMeta',
      },

      data: {
        nullable: true,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                            Error Response                                */
  /* ------------------------------------------------------------------------ */

  ErrorResponse: {
    type: 'object',

    additionalProperties: false,

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      statusCode: {
        type: 'integer',

        example: 400,
      },

      message: {
        type: 'string',

        example: 'Bad Request',
      },

      errorMessages: {
        type: 'array',

        items: {
          type: 'object',

          properties: {
            path: {
              type: 'string',

              example: 'title',
            },

            message: {
              type: 'string',

              example: 'Title is required',
            },
          },
        },
      },

      stack: {
        type: 'string',

        nullable: true,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Single Blog Response                             */
  /* ------------------------------------------------------------------------ */

  BlogResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/SuccessResponse',
      },
      {
        type: 'object',

        properties: {
          data: {
            $ref: '#/components/schemas/Blog',
          },
        },
      },
    ],
  },

  /* ------------------------------------------------------------------------ */
  /*                         Blog List Response                               */
  /* ------------------------------------------------------------------------ */

  BlogListResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/SuccessResponse',
      },
      {
        type: 'object',

        properties: {
          meta: {
            $ref: '#/components/schemas/PaginationMeta',
          },

          data: {
            type: 'array',

            items: {
              $ref: '#/components/schemas/Blog',
            },
          },
        },
      },
    ],
  },
};
/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const blogsPaths = {
  /* ------------------------------------------------------------------------ */
  /*                                  /blogs                                  */
  /* ------------------------------------------------------------------------ */

  '/blogs': {
    get: {
      tags: ['Blogs'],

      operationId: 'getBlogs',

      summary: 'Get all blogs',

      description:
        'Retrieve a paginated list of blogs with support for searching, filtering, sorting and pagination.',

      parameters: [
        {
          in: 'query',

          name: 'searchTerm',

          description: 'Search by title, excerpt, content, author or tags.',

          schema: {
            type: 'string',
          },
        },

        {
          in: 'query',

          name: 'page',

          description: 'Page number.',

          schema: {
            type: 'integer',

            minimum: 1,

            default: 1,
          },
        },

        {
          in: 'query',

          name: 'limit',

          description: 'Number of records per page.',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 100,

            default: 10,
          },
        },

        {
          in: 'query',

          name: 'sortBy',

          description: 'Field used for sorting.',

          schema: {
            type: 'string',

            enum: [
              'title',
              'publishedAt',
              'viewCount',
              'readTime',
              'sortOrder',
              'createdAt',
              'updatedAt',
            ],
          },
        },

        {
          in: 'query',

          name: 'sortOrder',

          description: 'Sort direction.',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],

            default: 'desc',
          },
        },

        {
          in: 'query',

          name: 'category',

          description: 'Filter by category.',

          schema: {
            type: 'string',

            enum: blogCategoryEnum,
          },
        },

        {
          in: 'query',

          name: 'status',

          description: 'Filter by publication status.',

          schema: {
            type: 'string',

            enum: blogStatusEnum,
          },
        },

        {
          in: 'query',

          name: 'isFeatured',

          schema: {
            type: 'boolean',
          },
        },

        {
          in: 'query',

          name: 'isPublished',

          schema: {
            type: 'boolean',
          },
        },

        {
          in: 'query',

          name: 'isActive',

          schema: {
            type: 'boolean',
          },
        },
      ],

      responses: {
        200: {
          description: 'Blogs retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogListResponse',
              },
            },
          },
        },

        400: {
          description: 'Bad Request',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    post: {
      tags: ['Blogs'],

      operationId: 'createBlog',

      summary: 'Create a new blog',

      description: 'Create a new blog article.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateBlogRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Blog created successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Blog already exists',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                               /blogs/{id}                                */
  /* ------------------------------------------------------------------------ */

  '/blogs/{id}': {
    get: {
      tags: ['Blogs'],

      operationId: 'getBlogById',

      summary: 'Get blog by ID',

      description: 'Retrieve a single blog using its MongoDB ObjectId.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Blog ObjectId.',

          schema: {
            type: 'string',
          },
        },
      ],

      responses: {
        200: {
          description: 'Blog retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogResponse',
              },
            },
          },
        },

        404: {
          description: 'Blog not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ['Blogs'],

      operationId: 'updateBlog',

      summary: 'Update blog',

      description: 'Update an existing blog.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Blog ObjectId.',

          schema: {
            type: 'string',
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateBlogRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Blog updated successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Blog not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Duplicate blog',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ['Blogs'],

      operationId: 'deleteBlog',

      summary: 'Delete blog',

      description: 'Delete a blog permanently.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Blog ObjectId.',

          schema: {
            type: 'string',
          },
        },
      ],

      responses: {
        200: {
          description: 'Blog deleted successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Blog not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           /blogs/featured                                */
  /* ------------------------------------------------------------------------ */

  '/blogs/featured': {
    get: {
      tags: ['Blogs'],

      operationId: 'getFeaturedBlogs',

      summary: 'Get featured blogs',

      description: 'Retrieve all featured published blogs.',

      responses: {
        200: {
          description: 'Featured blogs retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                            /blogs/popular                                */
  /* ------------------------------------------------------------------------ */

  '/blogs/popular': {
    get: {
      tags: ['Blogs'],

      operationId: 'getPopularBlogs',

      summary: 'Get popular blogs',

      description: 'Retrieve blogs ordered by view count.',

      parameters: [
        {
          in: 'query',

          name: 'limit',

          description: 'Maximum number of blogs to return.',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 100,

            default: 10,
          },
        },
      ],

      responses: {
        200: {
          description: 'Popular blogs retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           /blogs/published                               */
  /* ------------------------------------------------------------------------ */

  '/blogs/published': {
    get: {
      tags: ['Blogs'],

      operationId: 'getPublishedBlogs',

      summary: 'Get published blogs',

      description: 'Retrieve all published blogs.',

      responses: {
        200: {
          description: 'Published blogs retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             /blogs/active                                */
  /* ------------------------------------------------------------------------ */

  '/blogs/active': {
    get: {
      tags: ['Blogs'],

      operationId: 'getActiveBlogs',

      summary: 'Get active blogs',

      description: 'Retrieve all active blogs.',

      responses: {
        200: {
          description: 'Active blogs retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
};
