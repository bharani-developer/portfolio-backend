// src/modules/about/about.constant.ts

export const ABOUT_MESSAGE = {
  CREATED: "About created successfully",

  RETRIEVED: "About retrieved successfully",

  UPDATED: "About updated successfully",

  DELETED: "About deleted successfully",

  NOT_FOUND: "About section not found",

  ALREADY_EXISTS: "About section already exists",
} as const;

export const ABOUT_DEFAULT = {
  IS_ACTIVE: true,

  MAX_IMAGES: 20,

  MAX_STATS: 20,

  MAX_YEARS_OF_EXPERIENCE: 100,
} as const;

export const ABOUT_LIMIT = {
  FULL_NAME: 100,

  DESIGNATION: 150,

  BIO: 3000,

  EMAIL: 255,

  PHONE: 30,

  ADDRESS: 500,

  RESUME_URL: 500,

  STAT_LABEL: 100,

  STAT_VALUE: 100,
} as const;
