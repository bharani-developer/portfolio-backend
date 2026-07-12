/**
 * =============================================================================
 * File: cache.constants.ts
 * Description: Cache-related constants.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*                                  Cache                                     */
/* -------------------------------------------------------------------------- */

export const CACHE = Object.freeze({
  /**
   * Cache Prefix
   */
  PREFIX: 'portfolio',

  /**
   * Cache Version
   */
  VERSION: 'v1',

  /**
   * Default TTL (seconds)
   */
  TTL: Object.freeze({
    NONE: 0,

    ONE_MINUTE: 60,

    FIVE_MINUTES: 60 * 5,

    TEN_MINUTES: 60 * 10,

    FIFTEEN_MINUTES: 60 * 15,

    THIRTY_MINUTES: 60 * 30,

    ONE_HOUR: 60 * 60,

    SIX_HOURS: 60 * 60 * 6,

    TWELVE_HOURS: 60 * 60 * 12,

    ONE_DAY: 60 * 60 * 24,

    SEVEN_DAYS: 60 * 60 * 24 * 7,

    THIRTY_DAYS: 60 * 60 * 24 * 30,
  }),

  /**
   * Cache Namespaces
   */
  NAMESPACE: Object.freeze({
    SETTINGS: 'settings',

    HERO: 'hero',

    ABOUT: 'about',

    SERVICES: 'services',

    SKILLS: 'skills',

    EXPERIENCE: 'experience',

    EDUCATION: 'education',

    CERTIFICATIONS: 'certifications',

    PROJECTS: 'projects',

    BLOGS: 'blogs',

    TESTIMONIALS: 'testimonials',

    CONTACT: 'contact',

    USERS: 'users',

    AUTH: 'auth',

    DASHBOARD: 'dashboard',

    UPLOADS: 'uploads',
  }),

  /**
   * Cache Tags
   */
  TAGS: Object.freeze({
    SETTINGS: 'settings',

    CONTENT: 'content',

    PORTFOLIO: 'portfolio',

    USER: 'user',

    AUTH: 'auth',

    BLOG: 'blog',

    PROJECT: 'project',

    DASHBOARD: 'dashboard',
  }),

  /**
   * Common Cache Keys
   */
  KEYS: Object.freeze({
    HEALTH: 'health',

    CONFIG: 'config',

    STATS: 'stats',

    DASHBOARD: 'dashboard',

    SETTINGS: 'settings',

    PORTFOLIO: 'portfolio',
  }),

  /**
   * Cache Control Headers
   */
  CONTROL: Object.freeze({
    NO_CACHE: 'no-cache',

    NO_STORE: 'no-store',

    PRIVATE: 'private',

    PUBLIC: 'public',

    IMMUTABLE: 'immutable',

    MUST_REVALIDATE: 'must-revalidate',

    MAX_AGE: 'max-age',

    S_MAXAGE: 's-maxage',
  }),

  /**
   * Cache Header Names
   */
  HEADERS: Object.freeze({
    CACHE_CONTROL: 'Cache-Control',

    ETAG: 'ETag',

    IF_NONE_MATCH: 'If-None-Match',

    LAST_MODIFIED: 'Last-Modified',

    EXPIRES: 'Expires',

    AGE: 'Age',

    VARY: 'Vary',
  }),

  /**
   * Cache Status
   */
  STATUS: Object.freeze({
    HIT: 'HIT',

    MISS: 'MISS',

    BYPASS: 'BYPASS',

    EXPIRED: 'EXPIRED',

    STALE: 'STALE',
  }),

  /**
   * Redis Pub/Sub Channels
   */
  CHANNELS: Object.freeze({
    INVALIDATE: 'cache:invalidate',

    CLEAR: 'cache:clear',

    REFRESH: 'cache:refresh',
  }),
} as const);

/* -------------------------------------------------------------------------- */
/*                                   Prefix                                   */
/* -------------------------------------------------------------------------- */

export const CACHE_PREFIX = CACHE.PREFIX;

export const CACHE_VERSION = CACHE.VERSION;

/* -------------------------------------------------------------------------- */
/*                                     TTL                                    */
/* -------------------------------------------------------------------------- */

export const CACHE_TTL = CACHE.TTL;

/* -------------------------------------------------------------------------- */
/*                                 Namespaces                                 */
/* -------------------------------------------------------------------------- */

export const CACHE_NAMESPACE = CACHE.NAMESPACE;

/* -------------------------------------------------------------------------- */
/*                                    Tags                                    */
/* -------------------------------------------------------------------------- */

export const CACHE_TAGS = CACHE.TAGS;

/* -------------------------------------------------------------------------- */
/*                                     Keys                                   */
/* -------------------------------------------------------------------------- */

export const CACHE_KEYS = CACHE.KEYS;

/* -------------------------------------------------------------------------- */
/*                                Cache Control                               */
/* -------------------------------------------------------------------------- */

export const CACHE_CONTROL = CACHE.CONTROL;

/* -------------------------------------------------------------------------- */
/*                                   Headers                                  */
/* -------------------------------------------------------------------------- */

export const CACHE_HEADERS = CACHE.HEADERS;

/* -------------------------------------------------------------------------- */
/*                                    Status                                  */
/* -------------------------------------------------------------------------- */

export const CACHE_STATUS = CACHE.STATUS;

/* -------------------------------------------------------------------------- */
/*                                  Channels                                  */
/* -------------------------------------------------------------------------- */

export const CACHE_CHANNELS = CACHE.CHANNELS;
