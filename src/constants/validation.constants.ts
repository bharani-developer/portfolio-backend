/**
 * =============================================================================
 * File: validation.constants.ts
 * Description: Shared validation constants.
 * =============================================================================
 */

export const VALIDATION = Object.freeze({
  /**
   * String Length
   */
  STRING: Object.freeze({
    MIN_LENGTH: 1,
    DEFAULT_MAX_LENGTH: 255,
    LARGE_TEXT_MAX_LENGTH: 5000,
  }),

  /**
   * Name
   */
  NAME: Object.freeze({
    MIN_LENGTH: 2,
    MAX_LENGTH: 100,
  }),

  /**
   * Username
   */
  USERNAME: Object.freeze({
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
  }),

  /**
   * Password
   */
  PASSWORD: Object.freeze({
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
  }),

  /**
   * Email
   */
  EMAIL: Object.freeze({
    MAX_LENGTH: 254,
  }),

  /**
   * Phone
   */
  PHONE: Object.freeze({
    MIN_LENGTH: 10,
    MAX_LENGTH: 20,
  }),

  /**
   * URL
   */
  URL: Object.freeze({
    MAX_LENGTH: 2048,
  }),

  /**
   * Slug
   */
  SLUG: Object.freeze({
    MIN_LENGTH: 3,
    MAX_LENGTH: 150,
  }),

  /**
   * UUID
   */
  UUID: Object.freeze({
    LENGTH: 36,
  }),

  /**
   * Mongo ObjectId
   */
  OBJECT_ID: Object.freeze({
    LENGTH: 24,
  }),

  /**
   * Numbers
   */
  NUMBER: Object.freeze({
    MIN: Number.MIN_SAFE_INTEGER,
    MAX: Number.MAX_SAFE_INTEGER,
  }),

  /**
   * Decimal Precision
   */
  DECIMAL: Object.freeze({
    SCALE: 2,
  }),

  /**
   * Pagination
   */
  PAGINATION: Object.freeze({
    MIN_PAGE: 1,
    MIN_LIMIT: 1,
    MAX_LIMIT: 100,
  }),

  /**
   * Array
   */
  ARRAY: Object.freeze({
    MIN_ITEMS: 0,
    MAX_ITEMS: 100,
  }),

  /**
   * Sorting
   */
  SORT: Object.freeze({
    MIN_ORDER: 0,
    MAX_ORDER: 9999,
  }),

  /**
   * Date
   */
  DATE: Object.freeze({
    MIN_YEAR: 1900,
    MAX_YEAR: 2100,
  }),

  /**
   * Upload
   */
  FILE: Object.freeze({
    MAX_FILES: 10,

    MAX_FILE_SIZE: 10 * 1024 * 1024,

    IMAGE_MAX_FILE_SIZE: 5 * 1024 * 1024,

    DOCUMENT_MAX_FILE_SIZE: 10 * 1024 * 1024,
  }),

  /**
   * Image
   */
  IMAGE: Object.freeze({
    MIN_WIDTH: 100,
    MIN_HEIGHT: 100,

    MAX_WIDTH: 10000,
    MAX_HEIGHT: 10000,
  }),

  /**
   * Common Mime Types
   */
  MIME_TYPES: Object.freeze({
    IMAGE: Object.freeze([
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'image/svg+xml',
      'image/gif',
    ]),

    DOCUMENT: Object.freeze(['application/pdf']),
  }),

  /**
   * Allowed Image Extensions
   */
  IMAGE_EXTENSIONS: Object.freeze(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']),

  /**
   * Allowed Document Extensions
   */
  DOCUMENT_EXTENSIONS: Object.freeze(['.pdf']),
} as const);

/* -------------------------------------------------------------------------- */
/* String */
/* -------------------------------------------------------------------------- */

export const STRING_VALIDATION = VALIDATION.STRING;

/* -------------------------------------------------------------------------- */
/* Name */
/* -------------------------------------------------------------------------- */

export const NAME_VALIDATION = VALIDATION.NAME;

/* -------------------------------------------------------------------------- */
/* Username */
/* -------------------------------------------------------------------------- */

export const USERNAME_VALIDATION = VALIDATION.USERNAME;

/* -------------------------------------------------------------------------- */
/* Password */
/* -------------------------------------------------------------------------- */

export const PASSWORD_VALIDATION = VALIDATION.PASSWORD;

/* -------------------------------------------------------------------------- */
/* Email */
/* -------------------------------------------------------------------------- */

export const EMAIL_VALIDATION = VALIDATION.EMAIL;

/* -------------------------------------------------------------------------- */
/* Phone */
/* -------------------------------------------------------------------------- */

export const PHONE_VALIDATION = VALIDATION.PHONE;

/* -------------------------------------------------------------------------- */
/* URL */
/* -------------------------------------------------------------------------- */

export const URL_VALIDATION = VALIDATION.URL;

/* -------------------------------------------------------------------------- */
/* Slug */
/* -------------------------------------------------------------------------- */

export const SLUG_VALIDATION = VALIDATION.SLUG;

/* -------------------------------------------------------------------------- */
/* UUID */
/* -------------------------------------------------------------------------- */

export const UUID_VALIDATION = VALIDATION.UUID;

/* -------------------------------------------------------------------------- */
/* ObjectId */
/* -------------------------------------------------------------------------- */

export const OBJECT_ID_VALIDATION = VALIDATION.OBJECT_ID;

/* -------------------------------------------------------------------------- */
/* Number */
/* -------------------------------------------------------------------------- */

export const NUMBER_VALIDATION = VALIDATION.NUMBER;

/* -------------------------------------------------------------------------- */
/* Decimal */
/* -------------------------------------------------------------------------- */

export const DECIMAL_VALIDATION = VALIDATION.DECIMAL;

/* -------------------------------------------------------------------------- */
/* Pagination */
/* -------------------------------------------------------------------------- */

export const PAGINATION_VALIDATION = VALIDATION.PAGINATION;

/* -------------------------------------------------------------------------- */
/* Array */
/* -------------------------------------------------------------------------- */

export const ARRAY_VALIDATION = VALIDATION.ARRAY;

/* -------------------------------------------------------------------------- */
/* Sort */
/* -------------------------------------------------------------------------- */

export const SORT_VALIDATION = VALIDATION.SORT;

/* -------------------------------------------------------------------------- */
/* Date */
/* -------------------------------------------------------------------------- */

export const DATE_VALIDATION = VALIDATION.DATE;

/* -------------------------------------------------------------------------- */
/* Files */
/* -------------------------------------------------------------------------- */

export const FILE_VALIDATION = VALIDATION.FILE;

/* -------------------------------------------------------------------------- */
/* Images */
/* -------------------------------------------------------------------------- */

export const IMAGE_VALIDATION = VALIDATION.IMAGE;

/* -------------------------------------------------------------------------- */
/* Mime Types */
/* -------------------------------------------------------------------------- */

export const ALLOWED_MIME_TYPES = VALIDATION.MIME_TYPES;

/* -------------------------------------------------------------------------- */
/* Extensions */
/* -------------------------------------------------------------------------- */

export const IMAGE_EXTENSIONS = VALIDATION.IMAGE_EXTENSIONS;

export const DOCUMENT_EXTENSIONS = VALIDATION.DOCUMENT_EXTENSIONS;
