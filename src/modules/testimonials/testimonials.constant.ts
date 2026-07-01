// src/modules/testimonials/testimonials.constant.ts

export const TESTIMONIAL_MESSAGE = {
  CREATED: "Testimonial created successfully",

  UPDATED: "Testimonial updated successfully",

  DELETED: "Testimonial deleted successfully",

  FETCHED: "Testimonials fetched successfully",

  NOT_FOUND: "Testimonial not found",

  ALREADY_EXISTS: "Testimonial already exists",
} as const;

export const TESTIMONIAL_DEFAULT = {
  IS_ACTIVE: true,

  IS_FEATURED: false,

  SORT_ORDER: 0,

  RATING: 5,

  CLIENT_TYPE: "Individual",
} as const;

export const TESTIMONIAL_CLIENT_TYPE = {
  INDIVIDUAL: "Individual",

  FREELANCER: "Freelancer",

  STARTUP: "Startup",

  COMPANY: "Company",

  AGENCY: "Agency",

  ORGANIZATION: "Organization",

  OTHER: "Other",
} as const;

export const TESTIMONIAL_CLIENT_TYPES = Object.values(TESTIMONIAL_CLIENT_TYPE);

export const TESTIMONIAL_RATING = {
  ONE: 1,

  TWO: 2,

  THREE: 3,

  FOUR: 4,

  FIVE: 5,
} as const;

export const TESTIMONIAL_RATINGS = Object.values(TESTIMONIAL_RATING);

export const TESTIMONIAL_SEARCHABLE_FIELDS = [
  "clientName",

  "clientPosition",

  "clientCompany",

  "projectName",

  "review",
] as const;

export const TESTIMONIAL_FILTERABLE_FIELDS = [
  "clientType",

  "rating",

  "isFeatured",

  "isActive",
] as const;

export const TESTIMONIAL_SORT_FIELDS = [
  "clientName",

  "clientPosition",

  "clientCompany",

  "projectName",

  "rating",

  "clientType",

  "isFeatured",

  "sortOrder",

  "createdAt",

  "updatedAt",
] as const;

export const TESTIMONIAL_SELECT_FIELDS = [
  "clientName",

  "clientPosition",

  "clientCompany",

  "clientWebsite",

  "projectName",

  "review",

  "rating",

  "clientType",

  "isFeatured",

  "sortOrder",

  "isActive",

  "createdAt",

  "updatedAt",
] as const;
