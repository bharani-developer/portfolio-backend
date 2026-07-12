// src/modules/settings/settings.constant.ts

/**
 * Settings module constants.
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

export const SETTINGS_MESSAGE = {
  CREATED: 'Settings created successfully',

  RETRIEVED: 'Settings retrieved successfully',

  UPDATED: 'Settings updated successfully',

  DELETED: 'Settings deleted successfully',

  NOT_FOUND: 'Settings not found',

  ALREADY_EXISTS: 'Settings already exist',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const SETTINGS_DEFAULT = {
  IS_ACTIVE: true,

  SOCIAL_LINKS: {
    github: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    youtube: '',
    leetcode: '',
    hackerrank: '',
    stackoverflow: '',
  },

  SEO: {
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
    siteUrl: '',
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

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

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */
export const SETTINGS_VALIDATION = {
  SITE_TITLE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  SITE_DESCRIPTION: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 500,
  },

  SITE_URL: {
    MAX_LENGTH: 500,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  EMAIL: {
    MAX_LENGTH: 255,
  },

  PHONE: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 30,
  },

  ADDRESS: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 500,
  },

  SEO: {
    META_TITLE: {
      MIN_LENGTH: 10,
      MAX_LENGTH: 70,
    },

    META_DESCRIPTION: {
      MIN_LENGTH: 50,
      MAX_LENGTH: 360,
    },

    KEYWORDS: {
      MAX_COUNT: 20,
      MAX_LENGTH: 50,
    },

    SITE_URL: {
      MAX_LENGTH: 500,
    },
  },

  GOOGLE_VERIFICATION: {
    MAX_LENGTH: 255,
  },

  BING_VERIFICATION: {
    MAX_LENGTH: 255,
  },
} as const;
