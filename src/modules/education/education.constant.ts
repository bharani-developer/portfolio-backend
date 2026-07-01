// src\modules\education\education.constant.ts

export const EDUCATION_MESSAGE = {
  CREATED: "Education created successfully",

  RETRIEVED: "Education retrieved successfully",

  UPDATED: "Education updated successfully",

  DELETED: "Education deleted successfully",

  NOT_FOUND: "Education not found",

  ALREADY_EXISTS: "Education already exists",
} as const;

export const EDUCATION_DEFAULT = {
  IS_ACTIVE: true,

  IS_CURRENT: false,

  SORT_ORDER: 0,

  CGPA_SCALE: 10,
} as const;

export const EDUCATION_LEVEL = {
  DOCTORATE: "Doctorate",

  MASTERS: "Masters",

  BACHELORS: "Bachelors",

  DIPLOMA: "Diploma",

  HIGHER_SECONDARY: "Higher Secondary",

  SECONDARY: "Secondary",

  CERTIFICATION: "Certification",

  OTHER: "Other",
} as const;

export const EDUCATION_LEVELS = Object.values(EDUCATION_LEVEL);

export const EDUCATION_TYPE = {
  FULL_TIME: "Full Time",

  PART_TIME: "Part Time",

  DISTANCE: "Distance",

  ONLINE: "Online",
} as const;

export const EDUCATION_TYPES = Object.values(EDUCATION_TYPE);

export const GRADE_TYPE = {
  CGPA: "CGPA",

  GPA: "GPA",

  PERCENTAGE: "Percentage",

  DIVISION: "Division",

  PASS: "Pass",
} as const;

export const GRADE_TYPES = Object.values(GRADE_TYPE);

export const EDUCATION_SEARCHABLE_FIELDS = [
  "institution",

  "degree",

  "fieldOfStudy",

  "location",

  "description",

  "skills",
] as const;

export const EDUCATION_FILTERABLE_FIELDS = [
  "educationLevel",

  "educationType",

  "gradeType",

  "isCurrent",

  "isActive",
] as const;

export const EDUCATION_SORT_FIELDS = [
  "institution",

  "degree",

  "startDate",

  "endDate",

  "sortOrder",

  "createdAt",

  "updatedAt",
] as const;
