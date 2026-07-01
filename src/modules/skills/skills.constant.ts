// src/modules/skills/skills.constant.ts

export const SKILLS_MESSAGE = {
  CREATED: "Skill created successfully",

  RETRIEVED: "Skill retrieved successfully",

  UPDATED: "Skill updated successfully",

  DELETED: "Skill deleted successfully",

  NOT_FOUND: "Skill not found",

  ALREADY_EXISTS: "Skill already exists",
} as const;

export const SKILLS_DEFAULT = {
  IS_ACTIVE: true,
  SORT_ORDER: 0,
  PROFICIENCY: 50,
} as const;

export const SKILLS_CATEGORY = {
  FRONTEND: "Frontend",
  BACKEND: "Backend",
  DATABASE: "Database",
  MOBILE: "Mobile",
  DEVOPS: "DevOps",
  TOOLS: "Tools",
  CLOUD: "Cloud",
  AI_ML: "AI / ML",
  TESTING: "Testing",
  API_INTEGRATION: "API Integration",
  OTHER: "Other",
} as const;

export const SKILLS_CATEGORIES = Object.values(SKILLS_CATEGORY);

export const SKILLS_SEARCHABLE_FIELDS = ["name", "category"] as const;

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

  IMAGE: {
    URL_MAX_LENGTH: 500,
    PUBLIC_ID_MAX_LENGTH: 255,
  },

  DESCRIPTION: {
    MAX_LENGTH: 1000,
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
