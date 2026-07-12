/**
 * =============================================================================
 * File: api.constants.ts
 * Description: Global API constants
 * =============================================================================
 */

export const API = Object.freeze({
  /**
   * API Information
   */
  NAME: 'Portfolio Management API',
  DESCRIPTION: 'REST API for the Portfolio Management System',
  VERSION: 'v1',

  /**
   * Base API Path
   */
  PREFIX: '/api',
  BASE_PATH: '/api/v1',

  /**
   * Default Response Messages
   */
  DEFAULT_SUCCESS_MESSAGE: 'Request completed successfully.',
  DEFAULT_ERROR_MESSAGE: 'Something went wrong.',

  /**
   * Health Check
   */
  HEALTH_ENDPOINT: '/health',
  LIVE_ENDPOINT: '/health/live',
  READY_ENDPOINT: '/health/ready',

  /**
   * Documentation
   */
  DOCS_ENDPOINT: '/docs',
  OPENAPI_JSON_ENDPOINT: '/docs/json',

  /**
   * Content Types
   */
  CONTENT_TYPES: Object.freeze({
    JSON: 'application/json',
    FORM_DATA: 'multipart/form-data',
    URL_ENCODED: 'application/x-www-form-urlencoded',
    TEXT: 'text/plain',
    HTML: 'text/html',
    XML: 'application/xml',
    OCTET_STREAM: 'application/octet-stream',
  }),

  /**
   * Common Headers
   */
  HEADERS: Object.freeze({
    AUTHORIZATION: 'Authorization',
    CONTENT_TYPE: 'Content-Type',
    ACCEPT: 'Accept',
    CACHE_CONTROL: 'Cache-Control',
    IF_NONE_MATCH: 'If-None-Match',
    ETAG: 'ETag',
    LOCATION: 'Location',
    USER_AGENT: 'User-Agent',
    ORIGIN: 'Origin',
    REFERER: 'Referer',
    X_FORWARDED_FOR: 'X-Forwarded-For',
    X_REQUEST_ID: 'X-Request-Id',
    X_RESPONSE_TIME: 'X-Response-Time',
  }),

  /**
   * Authentication Schemes
   */
  AUTH: Object.freeze({
    BEARER: 'Bearer',
    BASIC: 'Basic',
  }),

  /**
   * HTTP Methods
   */
  METHODS: Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
    OPTIONS: 'OPTIONS',
    HEAD: 'HEAD',
  }),

  /**
   * MIME Types
   */
  MIME: Object.freeze({
    JPEG: 'image/jpeg',
    JPG: 'image/jpg',
    PNG: 'image/png',
    WEBP: 'image/webp',
    SVG: 'image/svg+xml',
    GIF: 'image/gif',
    PDF: 'application/pdf',
  }),

  /**
   * API Versions
   */
  VERSIONS: Object.freeze({
    V1: 'v1',
  }),

  /**
   * Cache Headers
   */
  CACHE: Object.freeze({
    NO_CACHE: 'no-cache',
    NO_STORE: 'no-store',
    PRIVATE: 'private',
    PUBLIC: 'public',
    MAX_AGE: 'max-age',
    MUST_REVALIDATE: 'must-revalidate',
  }),
} as const);

/**
 * API Prefix
 */
export const API_PREFIX = API.PREFIX;

/**
 * API Version
 */
export const API_VERSION = API.VERSION;

/**
 * Base API Path
 */
export const API_BASE_PATH = API.BASE_PATH;

/**
 * Health Endpoints
 */
export const HEALTH_ENDPOINT = API.HEALTH_ENDPOINT;
export const HEALTH_LIVE_ENDPOINT = API.LIVE_ENDPOINT;
export const HEALTH_READY_ENDPOINT = API.READY_ENDPOINT;

/**
 * Documentation Endpoints
 */
export const DOCS_ENDPOINT = API.DOCS_ENDPOINT;
export const OPENAPI_JSON_ENDPOINT = API.OPENAPI_JSON_ENDPOINT;

/**
 * HTTP Methods
 */
export const HTTP_METHODS = API.METHODS;

/**
 * HTTP Headers
 */
export const HTTP_HEADERS = API.HEADERS;

/**
 * Authentication Schemes
 */
export const AUTH_SCHEMES = API.AUTH;

/**
 * Content Types
 */
export const CONTENT_TYPES = API.CONTENT_TYPES;

/**
 * MIME Types
 */
export const MIME_TYPES = API.MIME;

/**
 * Cache Headers
 */
export const CACHE_HEADERS = API.CACHE;
