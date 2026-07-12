// src/modules/experience/experience.constant.ts

/**
 * Experience module constants.
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

export const EXPERIENCE_MESSAGE = {
  CREATED: 'Experience created successfully',

  RETRIEVED: 'Experience retrieved successfully',

  UPDATED: 'Experience updated successfully',

  DELETED: 'Experience deleted successfully',

  NOT_FOUND: 'Experience not found',

  ALREADY_EXISTS: 'Experience already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE_DEFAULT = {
  IS_ACTIVE: true,

  IS_CURRENT: false,

  SORT_ORDER: 0,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

export const EMPLOYMENT_TYPE = {
  ONSITE: 'Onsite',

  REMOTE: 'Remote',

  HYBRID: 'Hybrid',
} as const;

export const EMPLOYMENT_TYPES = Object.values(EMPLOYMENT_TYPE) as [string, ...string[]];

export const EXPERIENCE_CATEGORIES = EMPLOYMENT_TYPES;

/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const WORK_MODE = {
  FULL_TIME: 'Full Time',

  PART_TIME: 'Part Time',

  CONTRACT: 'Contract',

  FREELANCE: 'Freelance',

  INTERNSHIP: 'Internship',

  APPRENTICESHIP: 'Apprenticeship',

  TEMPORARY: 'Temporary',
} as const;

export const WORK_MODES = Object.values(WORK_MODE);

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE_SEARCHABLE_FIELDS = [
  'company',

  'position',

  'location',

  'employmentType',

  'workMode',

  'summary',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE_FILTERABLE_FIELDS = [
  'employmentType',

  'workMode',

  'isCurrent',

  'isActive',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE_SORT_FIELDS = [
  'company',

  'position',

  'startDate',

  'endDate',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const EXPERIENCE_SELECT_FIELDS = [
  'company',

  'position',

  'employmentType',

  'workMode',

  'location',

  'summary',

  'responsibilities',

  'technologies',

  'startDate',

  'endDate',

  'isCurrent',

  'companyLogo',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */
export const EXPERIENCE_VALIDATION = {
  COMPANY: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 200,
  },

  POSITION: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  LOCATION: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  SUMMARY: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 3000,
  },

  RESPONSIBILITIES: {
    MAX_COUNT: 50,
    MAX_LENGTH: 500,
  },

  TECHNOLOGIES: {
    MAX_COUNT: 50,
    MAX_LENGTH: 100,
  },

  COMPANY_WEBSITE: {
    MAX_LENGTH: 500,
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
