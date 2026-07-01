// src\modules\certifications\certifications.constant.ts

export const CERTIFICATION_MESSAGE = {
  CREATED: "Certification created successfully",

  RETRIEVED: "Certification retrieved successfully",

  UPDATED: "Certification updated successfully",

  DELETED: "Certification deleted successfully",

  NOT_FOUND: "Certification not found",

  ALREADY_EXISTS: "Certification already exists",
} as const;

export const CERTIFICATION_DEFAULT = {
  IS_ACTIVE: true,

  NEVER_EXPIRES: false,

  SORT_ORDER: 0,
} as const;

export const CERTIFICATION_SEARCHABLE_FIELDS = [
  "title",

  "issuer",

  "credentialId",

  "description",

  "skills",
] as const;

export const CERTIFICATION_FILTERABLE_FIELDS = [
  "issuer",

  "neverExpires",

  "isActive",
] as const;

export const CERTIFICATION_SORT_FIELDS = [
  "title",

  "issuer",

  "issueDate",

  "expiryDate",

  "sortOrder",

  "createdAt",

  "updatedAt",
] as const;
