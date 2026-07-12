/**
 * =============================================================================
 * File: swagger.constants.ts
 * Description: OpenAPI / Swagger constants.
 * =============================================================================
 */

export const SWAGGER = Object.freeze({
  /**
   * OpenAPI Specification Version
   */
  OPENAPI_VERSION: '3.1.0',

  /**
   * API Information
   */
  INFO: Object.freeze({
    TITLE: 'Portfolio Management API',

    DESCRIPTION: 'Production-ready REST API for the Portfolio Management System.',

    VERSION: '1.0.0',

    TERMS_OF_SERVICE: '',

    CONTACT: Object.freeze({
      NAME: 'API Support',

      URL: '',

      EMAIL: '',
    }),

    LICENSE: Object.freeze({
      NAME: 'MIT',

      URL: 'https://opensource.org/licenses/MIT',
    }),
  }),

  /**
   * Documentation Endpoints
   */
  ENDPOINTS: Object.freeze({
    UI: '/docs',

    JSON: '/docs/json',

    YAML: '/docs/yaml',
  }),

  /**
   * Authentication
   */
  SECURITY: Object.freeze({
    BEARER: 'BearerAuth',

    COOKIE: 'CookieAuth',
  }),

  /**
   * Security Schemes
   */
  SECURITY_SCHEMES: Object.freeze({
    BearerAuth: Object.freeze({
      type: 'http',

      scheme: 'bearer',

      bearerFormat: 'JWT',
    }),

    CookieAuth: Object.freeze({
      type: 'apiKey',

      in: 'cookie',

      name: 'access_token',
    }),
  }),

  /**
   * Default Global Security
   */
  DEFAULT_SECURITY: Object.freeze([
    Object.freeze({
      BearerAuth: [],
    }),
  ]),

  /**
   * Tags
   */
  TAGS: Object.freeze({
    AUTH: 'Authentication',

    USERS: 'Users',

    SETTINGS: 'Settings',

    HERO: 'Hero',

    ABOUT: 'About',

    SERVICES: 'Services',

    SKILLS: 'Skills',

    EXPERIENCE: 'Experience',

    EDUCATION: 'Education',

    CERTIFICATIONS: 'Certifications',

    PROJECTS: 'Projects',

    BLOGS: 'Blogs',

    TESTIMONIALS: 'Testimonials',

    CONTACT: 'Contact',

    UPLOAD: 'Upload',

    DASHBOARD: 'Dashboard',

    HEALTH: 'Health',
  }),

  /**
   * Common Content Types
   */
  CONTENT_TYPES: Object.freeze({
    JSON: 'application/json',

    FORM_DATA: 'multipart/form-data',

    TEXT: 'text/plain',
  }),

  /**
   * Common Response Descriptions
   */
  RESPONSES: Object.freeze({
    OK: 'Request completed successfully.',

    CREATED: 'Resource created successfully.',

    NO_CONTENT: 'Request completed successfully with no content.',

    BAD_REQUEST: 'Bad request.',

    UNAUTHORIZED: 'Authentication required.',

    FORBIDDEN: 'Access denied.',

    NOT_FOUND: 'Resource not found.',

    CONFLICT: 'Resource already exists.',

    UNPROCESSABLE_ENTITY: 'Validation failed.',

    TOO_MANY_REQUESTS: 'Too many requests.',

    INTERNAL_SERVER_ERROR: 'Internal server error.',
  }),

  /**
   * External Documentation
   */
  EXTERNAL_DOCS: Object.freeze({
    DESCRIPTION: 'Project Documentation',

    URL: '',
  }),

  /**
   * Servers
   */
  SERVERS: Object.freeze({
    LOCAL: Object.freeze({
      url: 'http://localhost:5000',

      description: 'Local Development',
    }),

    DEVELOPMENT: Object.freeze({
      url: '',

      description: 'Development',
    }),

    STAGING: Object.freeze({
      url: '',

      description: 'Staging',
    }),

    PRODUCTION: Object.freeze({
      url: '',

      description: 'Production',
    }),
  }),

  /**
   * Default Examples
   */
  EXAMPLES: Object.freeze({
    OBJECT_ID: '6831d0b93144ef95b4c03d25',

    UUID: '550e8400-e29b-41d4-a716-446655440000',

    EMAIL: 'john@example.com',

    PHONE: '+919876543210',

    DATE: '2026-01-01',

    DATETIME: '2026-01-01T10:30:00.000Z',

    URL: 'https://example.com',

    IMAGE_URL: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
  }),

  /**
   * Swagger UI
   */
  UI: Object.freeze({
    DOC_EXPANSION: 'none',

    DEFAULT_MODELS_EXPAND_DEPTH: -1,

    DISPLAY_REQUEST_DURATION: true,

    FILTER: true,

    PERSIST_AUTHORIZATION: true,

    TRY_IT_OUT_ENABLED: true,
  }),
} as const);

/* -------------------------------------------------------------------------- */
/*                                Main Export                                 */
/* -------------------------------------------------------------------------- */

export const OPENAPI_VERSION = SWAGGER.OPENAPI_VERSION;

/* -------------------------------------------------------------------------- */
/*                                   Info                                     */
/* -------------------------------------------------------------------------- */

export const SWAGGER_INFO = SWAGGER.INFO;

/* -------------------------------------------------------------------------- */
/*                                 Endpoints                                  */
/* -------------------------------------------------------------------------- */

export const SWAGGER_ENDPOINTS = SWAGGER.ENDPOINTS;

/* -------------------------------------------------------------------------- */
/*                                  Security                                  */
/* -------------------------------------------------------------------------- */

export const SECURITY_SCHEMES = SWAGGER.SECURITY_SCHEMES;

export const DEFAULT_SECURITY = SWAGGER.DEFAULT_SECURITY;

export const SECURITY_NAMES = SWAGGER.SECURITY;

/* -------------------------------------------------------------------------- */
/*                                    Tags                                    */
/* -------------------------------------------------------------------------- */

export const SWAGGER_TAGS = SWAGGER.TAGS;

/* -------------------------------------------------------------------------- */
/*                               Content Types                                */
/* -------------------------------------------------------------------------- */

export const SWAGGER_CONTENT_TYPES = SWAGGER.CONTENT_TYPES;

/* -------------------------------------------------------------------------- */
/*                                  Responses                                 */
/* -------------------------------------------------------------------------- */

export const SWAGGER_RESPONSES = SWAGGER.RESPONSES;

/* -------------------------------------------------------------------------- */
/*                               External Docs                                */
/* -------------------------------------------------------------------------- */

export const SWAGGER_EXTERNAL_DOCS = SWAGGER.EXTERNAL_DOCS;

/* -------------------------------------------------------------------------- */
/*                                   Servers                                  */
/* -------------------------------------------------------------------------- */

export const SWAGGER_SERVERS = SWAGGER.SERVERS;

/* -------------------------------------------------------------------------- */
/*                                  Examples                                  */
/* -------------------------------------------------------------------------- */

export const SWAGGER_EXAMPLES = SWAGGER.EXAMPLES;

/* -------------------------------------------------------------------------- */
/*                                 Swagger UI                                 */
/* -------------------------------------------------------------------------- */

export const SWAGGER_UI = SWAGGER.UI;
