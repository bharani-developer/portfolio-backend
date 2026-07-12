// src/modules/contact/contact.constant.ts

/**
 * Contact module constants.
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

export const CONTACT_MESSAGE = {
  CREATED: 'Contact created successfully',

  RETRIEVED: 'Contact retrieved successfully',

  UPDATED: 'Contact updated successfully',

  DELETED: 'Contact deleted successfully',

  NOT_FOUND: 'Contact message not found',

  ALREADY_EXISTS: 'Contact message already exists',

  MARKED_AS_READ: 'Contact message marked as read',

  MARKED_AS_REPLIED: 'Contact message marked as replied',
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

export const CONTACT_STATUS = {
  NEW: 'New',

  IN_PROGRESS: 'In Progress',

  REPLIED: 'Replied',

  CLOSED: 'Closed',
} as const;

export const CONTACT_STATUSES = Object.values(CONTACT_STATUS);

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

export const CONTACT_PRIORITY = {
  LOW: 'Low',

  MEDIUM: 'Medium',

  HIGH: 'High',

  URGENT: 'Urgent',
} as const;

export const CONTACT_PRIORITIES = Object.values(CONTACT_PRIORITY);

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const CONTACT_SOURCE = {
  WEBSITE: 'Website',

  EMAIL: 'Email',

  LINKEDIN: 'LinkedIn',

  GITHUB: 'GitHub',

  REFERRAL: 'Referral',

  OTHER: 'Other',
} as const;

export const CONTACT_SOURCES = Object.values(CONTACT_SOURCE);

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const CONTACT_DEFAULT = {
  STATUS: CONTACT_STATUS.NEW,

  PRIORITY: CONTACT_PRIORITY.MEDIUM,

  SOURCE: CONTACT_SOURCE.WEBSITE,

  IS_READ: false,

  IS_REPLIED: false,

  IS_ACTIVE: true,

  SORT_ORDER: 0,
} as const;

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const CONTACT_SEARCHABLE_FIELDS = [
  'name',

  'email',

  'subject',

  'message',

  'company',

  'phone',
] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const CONTACT_FILTERABLE_FIELDS = [
  'status',

  'priority',

  'source',

  'isRead',

  'isReplied',

  'isActive',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const CONTACT_SORT_FIELDS = [
  'name',

  'email',

  'status',

  'priority',

  'createdAt',

  'updatedAt',

  'sortOrder',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const CONTACT_SELECT_FIELDS = [
  'name',

  'email',

  'phone',

  'company',

  'subject',

  'message',

  'status',

  'priority',

  'source',

  'isRead',

  'isReplied',

  'isActive',

  'sortOrder',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */
export const CONTACT_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  },

  EMAIL: {
    MAX_LENGTH: 255,
  },

  PHONE: {
    MIN_LENGTH: 6,

    MAX_LENGTH: 30,
  },

  COMPANY: {
    MAX_LENGTH: 150,
  },

  SUBJECT: {
    MIN_LENGTH: 5,
    MAX_LENGTH: 200,
  },

  MESSAGE: {
    MIN_LENGTH: 10,
    MAX_LENGTH: 5000,
  },

  NOTES: {
    MAX_LENGTH: 3000,
  },

  SORT_ORDER: {
    MIN: 0,
    MAX: 9999,
  },
} as const;
