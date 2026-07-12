// src/modules/certifications/certifications.constant.ts

/**
 * Certifications module constants.
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

export const CERTIFICATION_MESSAGE = {
  CREATED: 'Certification created successfully',

  RETRIEVED: 'Certification retrieved successfully',

  UPDATED: 'Certification updated successfully',

  DELETED: 'Certification deleted successfully',

  NOT_FOUND: 'Certification not found',

  ALREADY_EXISTS: 'Certification already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const CERTIFICATION_DEFAULT = {
  IS_ACTIVE: true,

  NEVER_EXPIRES: false,

  SORT_ORDER: 0,
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

export const CERTIFICATION_SEARCHABLE_FIELDS = [
  'title',

  'issuer',

  'credentialId',

  'description',

  'skills',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const CERTIFICATION_FILTERABLE_FIELDS = ['issuer', 'neverExpires', 'isActive'] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const CERTIFICATION_SORT_FIELDS = [
  'title',

  'issuer',

  'issueDate',

  'expiryDate',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const CERTIFICATION_SELECT_FIELDS = [
  'title',

  'issuer',

  'credentialId',

  'credentialUrl',

  'issueDate',

  'expiryDate',

  'neverExpires',

  'description',

  'skills',

  'image',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const CERTIFICATION_VALIDATION = {
  TITLE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 200,
  },

  ISSUER: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  CREDENTIAL_ID: {
    MAX_LENGTH: 150,
  },

  CREDENTIAL_URL: {
    MAX_LENGTH: 500,
  },

  DESCRIPTION: {
    MAX_LENGTH: 2000,
  },

  SKILLS: {
    MAX_COUNT: 50,

    MAX_LENGTH: 100,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,

    PUBLIC_ID_MAX_LENGTH: 255,
  },

  SORT_ORDER: {
    MIN: 0,

    MAX: 9999,
  },
} as const;
