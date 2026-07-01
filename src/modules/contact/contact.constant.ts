// src/modules/contact/contact.constant.ts

export const CONTACT_MESSAGE = {
  CREATED: "Contact created successfully",

  RETRIEVED: "Contact retrieved successfully",

  UPDATED: "Contact updated successfully",

  DELETED: "Contact deleted successfully",

  NOT_FOUND: "Contact message not found",

  ALREADY_EXISTS: "Contact message already exists",

  MARKED_AS_READ: "Contact message marked as read",

  MARKED_AS_REPLIED: "Contact message marked as replied",
} as const;

export const CONTACT_DEFAULT = {
  IS_READ: false,

  IS_REPLIED: false,

  IS_ACTIVE: true,

  SORT_ORDER: 0,
} as const;

export const CONTACT_STATUS = {
  NEW: "New",

  IN_PROGRESS: "In Progress",

  REPLIED: "Replied",

  CLOSED: "Closed",
} as const;

export const CONTACT_STATUSES = Object.values(CONTACT_STATUS);

export const CONTACT_PRIORITY = {
  LOW: "Low",

  MEDIUM: "Medium",

  HIGH: "High",

  URGENT: "Urgent",
} as const;

export const CONTACT_PRIORITIES = Object.values(CONTACT_PRIORITY);

export const CONTACT_SOURCE = {
  WEBSITE: "Website",

  EMAIL: "Email",

  LINKEDIN: "LinkedIn",

  GITHUB: "GitHub",

  REFERRAL: "Referral",

  OTHER: "Other",
} as const;

export const CONTACT_SOURCES = Object.values(CONTACT_SOURCE);

export const CONTACT_SEARCHABLE_FIELDS = [
  "name",

  "email",

  "subject",

  "message",

  "company",

  "phone",
] as const;

export const CONTACT_FILTERABLE_FIELDS = [
  "status",

  "priority",

  "source",

  "isRead",

  "isReplied",

  "isActive",
] as const;

export const CONTACT_SORT_FIELDS = [
  "name",

  "email",

  "status",

  "priority",

  "createdAt",

  "updatedAt",

  "sortOrder",
] as const;
