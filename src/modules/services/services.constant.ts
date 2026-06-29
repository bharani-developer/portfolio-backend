// src\modules\services\services.constant.ts

export const SERVICES_MESSAGE = {
  NOT_FOUND: "Service not found",

  ALREADY_EXISTS: "Service already exists",
} as const;

export const SERVICES_DEFAULT = {
  IS_ACTIVE: true,

  SORT_ORDER: 0,
} as const;

export const SERVICES_SEARCHABLE_FIELDS = [
  "title",
  "shortDescription",
  "description",
] as const;
