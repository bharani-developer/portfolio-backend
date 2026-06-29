// src\modules\hero\hero.constant.ts

export const HERO_MESSAGE = {
  CREATED: "Hero section created successfully",

  RETRIEVED: "Hero section retrieved successfully",

  UPDATED: "Hero section updated successfully",

  DELETED: "Hero section deleted successfully",

  NOT_FOUND: "Hero section not found",

  ALREADY_EXISTS: "Hero section already exists",
} as const;

export const HERO_DEFAULT = {
  IS_ACTIVE: true,
} as const;
