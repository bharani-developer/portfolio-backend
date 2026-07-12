// src/constants/status.constants.ts
/**
 * =============================================================================
 * File: status.constants.ts
 * Description: Application status constants.
 * =============================================================================
 */

import httpStatus from 'http-status';

/**
 * HTTP status codes used throughout the application.
 *
 * Using this wrapper instead of importing `http-status`
 * everywhere provides a single source of truth and allows
 * future customization if needed.
 */
export const HTTP_STATUS = {
  OK: httpStatus.OK,
  CREATED: httpStatus.CREATED,
  ACCEPTED: httpStatus.ACCEPTED,
  NO_CONTENT: httpStatus.NO_CONTENT,

  BAD_REQUEST: httpStatus.BAD_REQUEST,
  UNAUTHORIZED: httpStatus.UNAUTHORIZED,
  FORBIDDEN: httpStatus.FORBIDDEN,
  NOT_FOUND: httpStatus.NOT_FOUND,
  METHOD_NOT_ALLOWED: httpStatus.METHOD_NOT_ALLOWED,
  CONFLICT: httpStatus.CONFLICT,
  UNPROCESSABLE_ENTITY: httpStatus.UNPROCESSABLE_ENTITY,
  TOO_MANY_REQUESTS: httpStatus.TOO_MANY_REQUESTS,

  INTERNAL_SERVER_ERROR: httpStatus.INTERNAL_SERVER_ERROR,
  BAD_GATEWAY: httpStatus.BAD_GATEWAY,
  SERVICE_UNAVAILABLE: httpStatus.SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT: httpStatus.GATEWAY_TIMEOUT,
} as const;

/* -------------------------------------------------------------------------- */
/*                                Generic Status                              */
/* -------------------------------------------------------------------------- */

export const STATUS = Object.freeze({
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ENABLED: 'enabled',
  DISABLED: 'disabled',
  PENDING: 'pending',
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
  DELETED: 'deleted',
} as const);

/* -------------------------------------------------------------------------- */
/*                               User Status                                  */
/* -------------------------------------------------------------------------- */

export const USER_STATUS = Object.freeze({
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  PENDING: 'pending',
  BLOCKED: 'blocked',
  SUSPENDED: 'suspended',
  DELETED: 'deleted',
} as const);

/* -------------------------------------------------------------------------- */
/*                             Account Verification                           */
/* -------------------------------------------------------------------------- */

export const VERIFICATION_STATUS = Object.freeze({
  VERIFIED: 'verified',
  UNVERIFIED: 'unverified',
  PENDING: 'pending',
} as const);

/* -------------------------------------------------------------------------- */
/*                               Blog Status                                  */
/* -------------------------------------------------------------------------- */

export const BLOG_STATUS = Object.freeze({
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
} as const);

/* -------------------------------------------------------------------------- */
/*                              Project Status                                */
/* -------------------------------------------------------------------------- */

export const PROJECT_STATUS = Object.freeze({
  PLANNING: 'planning',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  MAINTENANCE: 'maintenance',
  ARCHIVED: 'archived',
} as const);

/* -------------------------------------------------------------------------- */
/*                             Contact Status                                 */
/* -------------------------------------------------------------------------- */

export const CONTACT_STATUS = Object.freeze({
  NEW: 'new',
  READ: 'read',
  REPLIED: 'replied',
  CLOSED: 'closed',
  SPAM: 'spam',
} as const);

/* -------------------------------------------------------------------------- */
/*                              Upload Status                                 */
/* -------------------------------------------------------------------------- */

export const UPLOAD_STATUS = Object.freeze({
  PENDING: 'pending',
  UPLOADING: 'uploading',
  COMPLETED: 'completed',
  FAILED: 'failed',
  DELETED: 'deleted',
} as const);

/* -------------------------------------------------------------------------- */
/*                             Background Jobs                                */
/* -------------------------------------------------------------------------- */

export const JOB_STATUS = Object.freeze({
  WAITING: 'waiting',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  FAILED: 'failed',
  DELAYED: 'delayed',
  PAUSED: 'paused',
} as const);

/* -------------------------------------------------------------------------- */
/*                               Email Status                                 */
/* -------------------------------------------------------------------------- */

export const EMAIL_STATUS = Object.freeze({
  PENDING: 'pending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  FAILED: 'failed',
  BOUNCED: 'bounced',
} as const);

/* -------------------------------------------------------------------------- */
/*                              Payment Status                                */
/* -------------------------------------------------------------------------- */

export const PAYMENT_STATUS = Object.freeze({
  PENDING: 'pending',
  PAID: 'paid',
  FAILED: 'failed',
  REFUNDED: 'refunded',
  CANCELLED: 'cancelled',
} as const);

/* -------------------------------------------------------------------------- */
/*                              Notification Status                           */
/* -------------------------------------------------------------------------- */

export const NOTIFICATION_STATUS = Object.freeze({
  UNREAD: 'unread',
  READ: 'read',
  ARCHIVED: 'archived',
} as const);

/* -------------------------------------------------------------------------- */
/*                              API Response                                  */
/* -------------------------------------------------------------------------- */

export const RESPONSE_STATUS = Object.freeze({
  SUCCESS: 'success',
  ERROR: 'error',
  FAIL: 'fail',
} as const);

/* -------------------------------------------------------------------------- */
/*                                Boolean Flags                               */
/* -------------------------------------------------------------------------- */

export const BOOLEAN_STATUS = Object.freeze({
  YES: 'yes',
  NO: 'no',
  TRUE: 'true',
  FALSE: 'false',
} as const);

/* -------------------------------------------------------------------------- */
/*                               Sort Order                                   */
/* -------------------------------------------------------------------------- */

export const SORT_ORDER = Object.freeze({
  ASC: 'asc',
  DESC: 'desc',
} as const);

/* -------------------------------------------------------------------------- */
/*                                Export Types                                */
/* -------------------------------------------------------------------------- */

export type Status = (typeof STATUS)[keyof typeof STATUS];

export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

export type BlogStatus = (typeof BLOG_STATUS)[keyof typeof BLOG_STATUS];

export type ProjectStatus = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];

export type ContactStatus = (typeof CONTACT_STATUS)[keyof typeof CONTACT_STATUS];

export type UploadStatus = (typeof UPLOAD_STATUS)[keyof typeof UPLOAD_STATUS];

export type VerificationStatus = (typeof VERIFICATION_STATUS)[keyof typeof VERIFICATION_STATUS];

export type ResponseStatus = (typeof RESPONSE_STATUS)[keyof typeof RESPONSE_STATUS];

export type JobStatus = (typeof JOB_STATUS)[keyof typeof JOB_STATUS];

export type EmailStatus = (typeof EMAIL_STATUS)[keyof typeof EMAIL_STATUS];

export type PaymentStatus = (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS];

export type NotificationStatus = (typeof NOTIFICATION_STATUS)[keyof typeof NOTIFICATION_STATUS];

export type HttpStatusCode = (typeof HTTP_STATUS)[keyof typeof HTTP_STATUS];
