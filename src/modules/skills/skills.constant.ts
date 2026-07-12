// src/modules/skills/skills.constant.ts

/**
 * Skills module constants.
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

export const SKILLS_MESSAGE = {
  CREATED: 'Skill created successfully',

  RETRIEVED: 'Skill retrieved successfully',

  UPDATED: 'Skill updated successfully',

  DELETED: 'Skill deleted successfully',

  NOT_FOUND: 'Skill not found',

  ALREADY_EXISTS: 'Skill already exists',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const SKILLS_DEFAULT = {
  IS_ACTIVE: true,

  SORT_ORDER: 0,

  PROFICIENCY: 50,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

export const SKILLS_CATEGORY = {
  FRONTEND: 'Frontend',

  BACKEND: 'Backend',

  DATABASE: 'Database',

  MOBILE: 'Mobile',

  DEVOPS: 'DevOps',

  TOOLS: 'Tools',

  CLOUD: 'Cloud',

  AI_ML: 'AI / ML',

  TESTING: 'Testing',

  API_INTEGRATION: 'API Integration',

  OTHER: 'Other',
} as const;

export const SKILLS_CATEGORIES = Object.values(SKILLS_CATEGORY);

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

export const SKILLS_SEARCHABLE_FIELDS = ['name', 'category'] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const SKILLS_FILTERABLE_FIELDS = ['category', 'isActive'] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const SKILLS_SORT_FIELDS = [
  'name',

  'category',

  'proficiency',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const SKILLS_SELECT_FIELDS = [
  'name',

  'category',

  'description',

  'image',

  'proficiency',

  'sortOrder',

  'isActive',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const SKILLS_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,

    MAX_LENGTH: 100,
  },

  CATEGORY: {
    MAX_LENGTH: 50,
  },

  DESCRIPTION: {
    MAX_LENGTH: 1000,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,

    PUBLIC_ID_MAX_LENGTH: 255,
  },

  PROFICIENCY: {
    MIN: 0,

    MAX: 100,
  },

  SORT_ORDER: {
    MIN: 0,

    MAX: 9999,
  },
} as const;
