// src/modules/about/about.constant.ts

/**
 * About module constants.
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

export const ABOUT_MESSAGE = {
  CREATED: 'About created successfully',

  RETRIEVED: 'About retrieved successfully',

  UPDATED: 'About updated successfully',

  DELETED: 'About deleted successfully',

  NOT_FOUND: 'About section not found',

  ALREADY_EXISTS: 'About section already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const ABOUT_DEFAULT = {
  /**
   * Whether the About section is publicly visible by default.
   */
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

export const ABOUT_VALIDATION = {
  FULL_NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  DESIGNATION: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  BIO: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 3000,
  },

  EMAIL: {
    MAX_LENGTH: 255,
  },

  PHONE: {
    MAX_LENGTH: 30,
  },

  ADDRESS: {
    MAX_LENGTH: 500,
  },

  RESUME_URL: {
    MAX_LENGTH: 500,
  },

  IMAGE: {
    MAX_COUNT: 20,
  },

  STAT: {
    MAX_COUNT: 20,

    LABEL_MAX_LENGTH: 100,

    VALUE_MAX_LENGTH: 100,
  },

  YEARS_OF_EXPERIENCE: {
    MIN: 0,

    MAX: 100,
  },
} as const;
