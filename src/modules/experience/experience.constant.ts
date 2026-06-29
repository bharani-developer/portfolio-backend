// src\modules\experience\experience.constant.ts

export const EXPERIENCE_MESSAGE = {
  NOT_FOUND: "Experience not found",

  ALREADY_EXISTS: "Experience already exists",
} as const;

export const EXPERIENCE_DEFAULT = {
  IS_ACTIVE: true,

  IS_CURRENT: false,

  SORT_ORDER: 0,
} as const;

export const EMPLOYMENT_TYPE = {
  FULL_TIME: "Full Time",

  PART_TIME: "Part Time",

  CONTRACT: "Contract",

  FREELANCE: "Freelance",

  INTERNSHIP: "Internship",

  APPRENTICESHIP: "Apprenticeship",

  TEMPORARY: "Temporary",
} as const;

export const EMPLOYMENT_TYPES = Object.values(EMPLOYMENT_TYPE);

export const WORK_MODE = {
  ONSITE: "Onsite",

  REMOTE: "Remote",

  HYBRID: "Hybrid",
} as const;

export const WORK_MODES = Object.values(WORK_MODE);

export const EXPERIENCE_SEARCHABLE_FIELDS = [
  "company",
  "position",
  "location",
  "employmentType",
  "workMode",
  "summary",
] as const;
