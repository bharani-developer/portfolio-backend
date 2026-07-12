// src/modules/services/services.constant.ts

/**
 * Services module constants.
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

export const SERVICES_MESSAGE = {
  CREATED: 'Service created successfully',

  RETRIEVED: 'Service retrieved successfully',

  UPDATED: 'Service updated successfully',

  DELETED: 'Service deleted successfully',

  NOT_FOUND: 'Service not found',

  ALREADY_EXISTS: 'Service already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const SERVICES_DEFAULT = {
  IS_ACTIVE: true,

  SORT_ORDER: 0,

  CURRENCY: 'INR',
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

export const SERVICES_SEARCHABLE_FIELDS = ['title', 'shortDescription', 'description'] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const SERVICES_FILTERABLE_FIELDS = ['isActive', 'currency'] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const SERVICES_SORT_FIELDS = [
  'title',

  'price',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const SERVICES_SELECT_FIELDS = [
  'title',

  'slug',

  'shortDescription',

  'description',

  'image',

  'price',

  'currency',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const SERVICES_VALIDATION = {
  TITLE: {
    MIN_LENGTH: 2,

    MAX_LENGTH: 150,
  },

  SHORT_DESCRIPTION: {
    MAX_LENGTH: 300,
  },

  DESCRIPTION: {
    MAX_LENGTH: 3000,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,

    PUBLIC_ID_MAX_LENGTH: 255,
  },

  PRICE: {
    MIN: 0,

    MAX: 99_999_999,
  },

  CURRENCY: {
    MIN_LENGTH: 3,

    MAX_LENGTH: 3,
  },

  SORT_ORDER: {
    MIN: 0,

    MAX: 9999,
  },
} as const;
