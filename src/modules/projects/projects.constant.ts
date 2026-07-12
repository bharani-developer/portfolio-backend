// src/modules/projects/projects.constant.ts

/**
 * Projects module constants.
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

export const PROJECT_MESSAGE = {
  CREATED: 'Project created successfully',

  RETRIEVED: 'Project retrieved successfully',

  UPDATED: 'Project updated successfully',

  DELETED: 'Project deleted successfully',

  NOT_FOUND: 'Project not found',

  ALREADY_EXISTS: 'Project already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const PROJECT_DEFAULT = {
  IS_ACTIVE: true,

  FEATURED: false,

  SORT_ORDER: 0,

  GALLERY_LIMIT: 20,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

export const PROJECT_STATUS = {
  PLANNING: 'Planning',

  IN_PROGRESS: 'In Progress',

  COMPLETED: 'Completed',

  MAINTENANCE: 'Maintenance',

  ARCHIVED: 'Archived',
} as const;

export const PROJECT_STATUSES = Object.values(PROJECT_STATUS);

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

export const PROJECT_CATEGORY = {
  FULL_STACK: 'Full Stack',

  FRONTEND: 'Frontend',

  BACKEND: 'Backend',

  WEB_APPLICATION: 'Web Application',

  MOBILE_APPLICATION: 'Mobile Application',

  DESKTOP_APPLICATION: 'Desktop Application',

  API: 'API',

  OPEN_SOURCE: 'Open Source',

  OTHER: 'Other',
} as const;

export const PROJECT_CATEGORIES = Object.values(PROJECT_CATEGORY);

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

export const PROJECT_SEARCHABLE_FIELDS = [
  'title',

  'shortDescription',

  'description',

  'technologies',

  'category',

  'status',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const PROJECT_FILTERABLE_FIELDS = ['category', 'status', 'featured', 'isActive'] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const PROJECT_SORT_FIELDS = [
  'title',

  'category',

  'status',

  'featured',

  'startDate',

  'endDate',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const PROJECT_SELECT_FIELDS = [
  'title',

  'slug',

  'shortDescription',

  'description',

  'category',

  'status',

  'featured',

  'thumbnail',

  'gallery',

  'technologies',

  'repositoryUrl',

  'liveUrl',

  'figmaUrl',

  'playStoreUrl',

  'appStoreUrl',

  'startDate',

  'endDate',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */
export const PROJECT_VALIDATION = {
  TITLE: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 200,
  },

  SLUG: {
    MAX_LENGTH: 200,
  },

  SHORT_DESCRIPTION: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 500,
  },

  DESCRIPTION: {
    MIN_LENGTH: 20,
    MAX_LENGTH: 5000,
  },

  TECHNOLOGIES: {
    MAX_COUNT: 100,
    MAX_LENGTH: 100,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  GALLERY: {
    MAX_COUNT: PROJECT_DEFAULT.GALLERY_LIMIT,
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  GITHUB_URL: {
    MAX_LENGTH: 500,
  },

  LIVE_URL: {
    MAX_LENGTH: 500,
  },

  FIGMA_URL: {
    MAX_LENGTH: 500,
  },

  PLAY_STORE_URL: {
    MAX_LENGTH: 500,
  },

  APP_STORE_URL: {
    MAX_LENGTH: 500,
  },

  SORT_ORDER: {
    MIN: 0,
    MAX: 9999,
  },
} as const;
