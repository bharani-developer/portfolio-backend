// src/modules/education/education.constant.ts

/**
 * Education module constants.
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

export const EDUCATION_MESSAGE = {
  CREATED: 'Education created successfully',

  RETRIEVED: 'Education retrieved successfully',

  UPDATED: 'Education updated successfully',

  DELETED: 'Education deleted successfully',

  NOT_FOUND: 'Education not found',

  ALREADY_EXISTS: 'Education already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const EDUCATION_DEFAULT = {
  IS_ACTIVE: true,

  IS_CURRENT: false,

  SORT_ORDER: 0,

  CGPA_SCALE: 10,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

export const EDUCATION_LEVEL = {
  DOCTORATE: 'Doctorate',

  MASTERS: 'Masters',

  BACHELORS: 'Bachelors',

  DIPLOMA: 'Diploma',

  HIGHER_SECONDARY: 'Higher Secondary',

  SECONDARY: 'Secondary',

  CERTIFICATION: 'Certification',

  OTHER: 'Other',
} as const;

export const EDUCATION_LEVELS = Object.values(EDUCATION_LEVEL) as [string, ...string[]];

export const EDUCATION_CATEGORIES = EDUCATION_LEVELS;
/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const EDUCATION_TYPE = {
  FULL_TIME: 'Full Time',

  PART_TIME: 'Part Time',

  DISTANCE: 'Distance',

  ONLINE: 'Online',
} as const;

export const EDUCATION_TYPES = Object.values(EDUCATION_TYPE);

/* -------------------------------------------------------------------------- */
/*                              Grade Types                                   */
/* -------------------------------------------------------------------------- */

export const GRADE_TYPE = {
  NONE: 'None',

  CGPA: 'CGPA',

  GPA: 'GPA',

  PERCENTAGE: 'Percentage',

  DIVISION: 'Division',

  PASS: 'Pass',
} as const;

export const GRADE_TYPES = Object.values(GRADE_TYPE) as [string, ...string[]];

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const EDUCATION_SEARCHABLE_FIELDS = [
  'institution',

  'degree',

  'fieldOfStudy',

  'location',

  'description',

  'skills',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const EDUCATION_FILTERABLE_FIELDS = [
  'educationLevel',

  'educationType',

  'gradeType',

  'isCurrent',

  'isActive',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const EDUCATION_SORT_FIELDS = [
  'institution',

  'degree',

  'startDate',

  'endDate',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const EDUCATION_SELECT_FIELDS = [
  'institution',

  'degree',

  'fieldOfStudy',

  'educationLevel',

  'educationType',

  'grade',

  'gradeType',

  'cgpaScale',

  'location',

  'description',

  'skills',

  'startDate',

  'endDate',

  'isCurrent',

  'image',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */
export const EDUCATION_VALIDATION = {
  INSTITUTION: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 200,
  },

  DEGREE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  FIELD_OF_STUDY: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  LOCATION: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 150,
  },

  DESCRIPTION: {
    MAX_LENGTH: 3000,
  },

  GRADE: {
    MAX_LENGTH: 50,
  },

  CGPA_SCALE: {
    MIN: 4,
    MAX: 10,
  },

  ACHIEVEMENTS: {
    MAX_COUNT: 100,
    MAX_LENGTH: 200,
  },

  SKILLS: {
    MAX_COUNT: 50,
    MAX_LENGTH: 100,
  },

  INSTITUTION_WEBSITE: {
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
