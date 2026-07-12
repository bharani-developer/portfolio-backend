// src/modules/blogs/blogs.constant.ts

/**
 * Blogs module constants.
 *
 * Structure:
 * 1. Messages
 * 2. Default values
 * 3. Status
 * 4. Categories
 * 5. Priorities
 * 6. Types
 * 7. Searchable fields
 * 8. Filterable fields
 * 9. Sort fields
 * 10. Select fields
 * 11. Validation
 */

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */

export const BLOG_MESSAGE = {
  CREATED: 'Blog created successfully',

  RETRIEVED: 'Blog retrieved successfully',

  UPDATED: 'Blog updated successfully',

  DELETED: 'Blog deleted successfully',

  NOT_FOUND: 'Blog not found',

  ALREADY_EXISTS: 'Blog already exists',

  INVALID_CATEGORY: 'Invalid blog category',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const BLOG_DEFAULT = {
  IS_ACTIVE: true,

  IS_FEATURED: false,

  IS_PUBLISHED: false,

  VIEW_COUNT: 0,

  READ_TIME: 1,

  SORT_ORDER: 0,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

export const BLOG_STATUS = {
  DRAFT: 'Draft',

  PUBLISHED: 'Published',

  ARCHIVED: 'Archived',
} as const;

export const BLOG_STATUSES = Object.values(BLOG_STATUS);

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

export const BLOG_CATEGORY = {
  WEB_DEVELOPMENT: 'Web Development',

  FRONTEND: 'Frontend',

  BACKEND: 'Backend',

  FULL_STACK: 'Full Stack',

  MOBILE_DEVELOPMENT: 'Mobile Development',

  DEVOPS: 'DevOps',

  CLOUD: 'Cloud',

  DATABASE: 'Database',

  SOFTWARE_ARCHITECTURE: 'Software Architecture',

  SYSTEM_DESIGN: 'System Design',

  API_DEVELOPMENT: 'API Development',

  TYPESCRIPT: 'TypeScript',

  JAVASCRIPT: 'JavaScript',

  NODEJS: 'Node.js',

  EXPRESSJS: 'Express.js',

  REACT: 'React',

  NEXTJS: 'Next.js',

  FLUTTER: 'Flutter',

  PHP: 'PHP',

  LARAVEL: 'Laravel',

  MONGODB: 'MongoDB',

  MYSQL: 'MySQL',

  CAREER: 'Career',

  PRODUCTIVITY: 'Productivity',

  TECHNOLOGY: 'Technology',

  TUTORIAL: 'Tutorial',

  OTHER: 'Other',
} as const;

export const BLOG_CATEGORIES = Object.values(BLOG_CATEGORY);

/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const BLOG_SEARCHABLE_FIELDS = [
  'title',

  'excerpt',

  'content',

  'category',

  'tags',

  'author',

  'seoTitle',

  'seoDescription',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const BLOG_FILTERABLE_FIELDS = [
  'status',

  'category',

  'isFeatured',

  'isPublished',

  'isActive',

  'author',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const BLOG_SORT_FIELDS = [
  'title',

  'publishedAt',

  'viewCount',

  'readTime',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const BLOG_SELECT_FIELDS = [
  'title',

  'slug',

  'excerpt',

  'featuredImage',

  'category',

  'tags',

  'author',

  'status',

  'isFeatured',

  'isPublished',

  'publishedAt',

  'viewCount',

  'readTime',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const BLOG_VALIDATION = {
  TITLE: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 200,
  },

  SLUG: {
    MAX_LENGTH: 500,
  },

  EXCERPT: {
    MAX_LENGTH: 500,
  },

  CONTENT: {
    MIN_LENGTH: 50,
    MAX_LENGTH: 10000, // Missing
  },

  CATEGORY: {
    MAX_LENGTH: 100,
  },

  TAGS: {
    MAX_COUNT: 20,

    MAX_LENGTH: 50,
  },

  AUTHOR: {
    MAX_LENGTH: 100,
  },
  SEO_KEYWORDS: {
    MAX_COUNT: 30, // Missing
    MAX_LENGTH: 100, // Missing
  },
  CANONICAL_URL: {
    MAX_LENGTH: 500, // Missing
  },

  IS_ACTIVE: {
    DEFAULT: true, // Optional
  },
  SEO_TITLE: {
    MAX_LENGTH: 70,
  },

  SEO_DESCRIPTION: {
    MAX_LENGTH: 160,
  },

  FEATURED_IMAGE: {
    URL_MAX_LENGTH: 500,

    PUBLIC_ID_MAX_LENGTH: 255,
  },

  VIEW_COUNT: {
    MIN: 0,
  },

  READ_TIME: {
    MIN: 1,

    MAX: 999,
  },

  SORT_ORDER: {
    MIN: 0,

    MAX: 9999,
  },
} as const;
