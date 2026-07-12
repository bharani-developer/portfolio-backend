// src/modules/testimonials/testimonials.constant.ts

/**
 * Testimonials module constants.
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

export const TESTIMONIAL_MESSAGE = {
  CREATED: 'Testimonial created successfully',

  RETRIEVED: 'Testimonial retrieved successfully',

  UPDATED: 'Testimonial updated successfully',

  DELETED: 'Testimonial deleted successfully',

  NOT_FOUND: 'Testimonial not found',

  ALREADY_EXISTS: 'Testimonial already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_DEFAULT = {
  IS_ACTIVE: true,

  IS_FEATURED: false,

  SORT_ORDER: 0,

  RATING: 5,

  CLIENT_TYPE: 'Individual',
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

export const TESTIMONIAL_TYPE = {
  INDIVIDUAL: 'Individual',

  FREELANCER: 'Freelancer',

  STARTUP: 'Startup',

  COMPANY: 'Company',

  AGENCY: 'Agency',

  ORGANIZATION: 'Organization',

  OTHER: 'Other',
} as const;

export const TESTIMONIAL_TYPES = Object.values(TESTIMONIAL_TYPE);

/* -------------------------------------------------------------------------- */
/*                                   Ratings                                  */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_RATING = {
  ONE: 1,

  TWO: 2,

  THREE: 3,

  FOUR: 4,

  FIVE: 5,
} as const;

export const TESTIMONIAL_RATINGS = Object.values(TESTIMONIAL_RATING);

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_SEARCHABLE_FIELDS = [
  'clientName',

  'clientPosition',

  'clientCompany',

  'projectName',

  'review',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_FILTERABLE_FIELDS = [
  'clientType',

  'rating',

  'isFeatured',

  'isActive',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_SORT_FIELDS = [
  'clientName',

  'clientPosition',

  'clientCompany',

  'projectName',

  'rating',

  'clientType',

  'isFeatured',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_SELECT_FIELDS = [
  'clientName',

  'clientPosition',

  'clientCompany',

  'clientWebsite',

  'clientImage',

  'projectName',

  'review',

  'rating',

  'clientType',

  'isFeatured',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const TESTIMONIAL_VALIDATION = {
  CLIENT_NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  CLIENT_POSITION: {
    MAX_LENGTH: 100,
  },

  CLIENT_COMPANY: {
    MAX_LENGTH: 150,
  },

  CLIENT_WEBSITE: {
    MAX_LENGTH: 500,
  },

  PROJECT_NAME: {
    MAX_LENGTH: 150,
  },

  REVIEW: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 3000,
  },

  CLIENT_IMAGE: {
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  RATING: {
    MIN: 1,
    MAX: 5,
  },

  SORT_ORDER: {
    MIN: 0,
    MAX: 9999,
  },
} as const;
