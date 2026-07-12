// src/modules/hero/hero.constant.ts

/**
 * Hero module constants.
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

export const HERO_MESSAGE = {
  CREATED: 'Hero section created successfully',

  RETRIEVED: 'Hero section retrieved successfully',

  UPDATED: 'Hero section updated successfully',

  DELETED: 'Hero section deleted successfully',

  NOT_FOUND: 'Hero section not found',

  ALREADY_EXISTS: 'Hero section already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const HERO_DEFAULT = {
  IS_ACTIVE: true,
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

export const HERO_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  TITLE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  SUBTITLE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 250,
  },

  DESCRIPTION: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 2000,
  },

  TECHNOLOGIES: {
    MAX_COUNT: 50,
    MAX_LENGTH: 75,
  },

  RESUME_URL: {
    MAX_LENGTH: 500,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  CTA_BUTTON_TEXT: {
    MAX_LENGTH: 50,
  },

  CTA_BUTTON_LINK: {
    MAX_LENGTH: 500,
  },

  SOCIAL_LINK: {
    LABEL_MAX_LENGTH: 50,
    URL_MAX_LENGTH: 500,
  },
} as const;
