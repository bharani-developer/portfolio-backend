/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { EMPLOYMENT_TYPES, WORK_MODES } from './experience.constant.js';

/* -------------------------------------------------------------------------- */
/*                                   Schemas                                  */
/* -------------------------------------------------------------------------- */

export const experienceSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                              Shared Schemas                              */
  /* ------------------------------------------------------------------------ */

  ExperienceImage: {
    type: 'object',

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        example: 'https://res.cloudinary.com/demo/image/upload/v1740000000/company-logo.png',
      },

      publicId: {
        type: 'string',
        example: 'portfolio/experience/company-logo',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Main Resource                               */
  /* ------------------------------------------------------------------------ */

  Experience: {
    type: 'object',

    properties: {
      _id: {
        type: 'string',
        example: '685b0d6c7e5e8d1a9a9a9a9a',
      },

      company: {
        type: 'string',
        example: 'OpenAI',
      },

      slug: {
        type: 'string',
        example: 'openai-full-stack-developer',
      },

      companyLogo: {
        allOf: [
          {
            $ref: '#/components/schemas/ExperienceImage',
          },
        ],

        nullable: true,
      },

      position: {
        type: 'string',
        example: 'Full Stack Developer',
      },

      employmentType: {
        type: 'string',

        enum: EMPLOYMENT_TYPES,

        example: 'Remote',
      },

      workMode: {
        type: 'string',

        enum: WORK_MODES,

        example: 'Full Time',
      },

      location: {
        type: 'string',
        example: 'Chennai, Tamil Nadu, India',
      },

      startDate: {
        type: 'string',
        format: 'date',
        example: '2023-01-01',
      },

      endDate: {
        type: 'string',
        format: 'date',
        nullable: true,
        example: null,
      },

      isCurrent: {
        type: 'boolean',
        example: true,
      },

      summary: {
        type: 'string',
        example:
          'Responsible for designing and developing scalable enterprise web applications using React, Node.js, Express, MongoDB and TypeScript.',
      },

      responsibilities: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: [
          'Developed REST APIs using Express.js',
          'Built reusable React components',
          'Implemented JWT authentication',
          'Optimized MongoDB queries',
        ],
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
      },

      companyWebsite: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://openai.com',
      },

      sortOrder: {
        type: 'integer',
        minimum: 0,
        maximum: 9999,
        example: 1,
      },

      isActive: {
        type: 'boolean',
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2025-06-25T10:15:30.000Z',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
        example: '2025-06-30T18:40:22.000Z',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Request Schemas                              */
  /* ------------------------------------------------------------------------ */

  CreateExperienceRequest: {
    type: 'object',

    required: [
      'company',
      'position',
      'employmentType',
      'workMode',
      'location',
      'startDate',
      'summary',
      'responsibilities',
      'technologies',
    ],

    properties: {
      company: {
        type: 'string',
        example: 'OpenAI',
      },

      companyLogo: {
        $ref: '#/components/schemas/ExperienceImage',
      },

      position: {
        type: 'string',
        example: 'Full Stack Developer',
      },

      employmentType: {
        type: 'string',

        enum: EMPLOYMENT_TYPES,

        example: 'Remote',
      },

      workMode: {
        type: 'string',

        enum: WORK_MODES,

        example: 'Full Time',
      },

      location: {
        type: 'string',
        example: 'Chennai, Tamil Nadu, India',
      },

      startDate: {
        type: 'string',
        format: 'date',
        example: '2023-01-01',
      },

      endDate: {
        type: 'string',
        format: 'date',
        nullable: true,
        example: null,
      },

      isCurrent: {
        type: 'boolean',
        default: false,
        example: true,
      },

      summary: {
        type: 'string',
        example: 'Developing scalable enterprise applications using modern web technologies.',
      },

      responsibilities: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: ['Designed REST APIs', 'Implemented authentication', 'Code reviews'],
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
      },

      companyWebsite: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://openai.com',
      },

      sortOrder: {
        type: 'integer',
        default: 0,
        example: 1,
      },

      isActive: {
        type: 'boolean',
        default: true,
        example: true,
      },
    },
  },

  UpdateExperienceRequest: {
    type: 'object',

    properties: {
      company: {
        type: 'string',
        example: 'OpenAI',
      },

      companyLogo: {
        $ref: '#/components/schemas/ExperienceImage',
      },

      position: {
        type: 'string',
        example: 'Senior Full Stack Developer',
      },

      employmentType: {
        type: 'string',

        enum: EMPLOYMENT_TYPES,
      },

      workMode: {
        type: 'string',

        enum: WORK_MODES,
      },

      location: {
        type: 'string',
        example: 'Bangalore, Karnataka, India',
      },

      startDate: {
        type: 'string',
        format: 'date',
      },

      endDate: {
        type: 'string',
        format: 'date',
        nullable: true,
      },

      isCurrent: {
        type: 'boolean',
      },

      summary: {
        type: 'string',
      },

      responsibilities: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      technologies: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      companyWebsite: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },

      sortOrder: {
        type: 'integer',
      },

      isActive: {
        type: 'boolean',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Response Schemas                             */
  /* ------------------------------------------------------------------------ */

  ExperienceResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Experience retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/Experience',
      },
    },
  },

  ExperienceListResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Experiences retrieved successfully',
      },

      meta: {
        $ref: '#/components/schemas/PaginationMeta',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Experience',
        },
      },
    },
  },

  PaginationMeta: {
    type: 'object',

    properties: {
      page: {
        type: 'integer',
        example: 1,
      },

      limit: {
        type: 'integer',
        example: 10,
      },

      total: {
        type: 'integer',
        example: 18,
      },

      totalPage: {
        type: 'integer',
        example: 2,
      },
    },
  },

  ExperienceStats: {
    type: 'object',

    properties: {
      total: {
        type: 'integer',
        example: 8,
      },

      active: {
        type: 'integer',
        example: 7,
      },

      current: {
        type: 'integer',
        example: 1,
      },
    },
  },

  ExperienceStatsResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      statusCode: {
        type: 'integer',
        example: 200,
      },

      message: {
        type: 'string',
        example: 'Experience statistics retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/ExperienceStats',
      },
    },
  },

  ErrorResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 400,
      },

      message: {
        type: 'string',
        example: 'Validation Error',
      },

      errorSources: {
        type: 'array',

        items: {
          type: 'object',

          properties: {
            path: {
              type: 'string',
              example: 'company',
            },

            message: {
              type: 'string',
              example: 'Company is required',
            },
          },
        },
      },

      stack: {
        type: 'string',
        nullable: true,
      },
    },
  },

  NotFoundResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },

  UnauthorizedResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },

  ForbiddenResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },

  ConflictResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },

  ValidationErrorResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },

  InternalServerErrorResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },
    ],
  },
};
/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const experiencePaths = {
  /* ------------------------------------------------------------------------ */
  /*                           GET /experience                                */
  /* ------------------------------------------------------------------------ */

  '/experience': {
    get: {
      tags: ['Experience'],

      summary: 'Get all experiences',

      description:
        'Retrieve a paginated list of experiences with searching, filtering and sorting support.',

      parameters: [
        {
          in: 'query',

          name: 'page',

          schema: {
            type: 'integer',
            minimum: 1,
            default: 1,
          },

          description: 'Page number',
        },

        {
          in: 'query',

          name: 'limit',

          schema: {
            type: 'integer',
            minimum: 1,
            maximum: 100,
            default: 10,
          },

          description: 'Number of records per page',
        },

        {
          in: 'query',

          name: 'search',

          schema: {
            type: 'string',
          },

          description: 'Search by company, position, location or summary',
        },

        {
          in: 'query',

          name: 'employmentType',

          schema: {
            type: 'string',

            enum: EMPLOYMENT_TYPES,
          },

          description: 'Filter by employment type',
        },

        {
          in: 'query',

          name: 'workMode',

          schema: {
            type: 'string',

            enum: WORK_MODES,
          },

          description: 'Filter by work mode',
        },

        {
          in: 'query',

          name: 'isCurrent',

          schema: {
            type: 'boolean',
          },

          description: 'Filter current experiences',
        },

        {
          in: 'query',

          name: 'isActive',

          schema: {
            type: 'boolean',
          },

          description: 'Filter active experiences',
        },

        {
          in: 'query',

          name: 'sort',

          schema: {
            type: 'string',
          },

          example: '-startDate',

          description:
            'Sort fields: company, position, startDate, endDate, sortOrder, createdAt, updatedAt',
        },
      ],

      responses: {
        200: {
          description: 'Experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },

    post: {
      tags: ['Experience'],

      summary: 'Create experience',

      description: 'Create a new professional experience.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateExperienceRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Experience created successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        409: {
          description: 'Experience already exists',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                        GET /experience/active                            */
  /* ------------------------------------------------------------------------ */

  '/experience/active': {
    get: {
      tags: ['Experience'],

      summary: 'Get active experiences',

      description:
        'Retrieve all publicly active experiences ordered by current status, start date and sort order.',

      responses: {
        200: {
          description: 'Active experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                       GET /experience/current                            */
  /* ------------------------------------------------------------------------ */

  '/experience/current': {
    get: {
      tags: ['Experience'],

      summary: 'Get current experiences',

      description: 'Retrieve all current active experiences.',

      responses: {
        200: {
          description: 'Current experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                     GET /experience/slug/{slug}                          */
  /* ------------------------------------------------------------------------ */

  '/experience/slug/{slug}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experience by slug',

      description: 'Retrieve a single experience using its unique slug.',

      parameters: [
        {
          in: 'path',

          name: 'slug',

          required: true,

          schema: {
            type: 'string',
          },

          example: 'openai-full-stack-developer',

          description: 'Experience slug',
        },
      ],

      responses: {
        200: {
          description: 'Experience retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceResponse',
              },
            },
          },
        },

        404: {
          description: 'Experience not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                   GET /experience/company/{company}                      */
  /* ------------------------------------------------------------------------ */

  '/experience/company/{company}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experiences by company',

      description: 'Retrieve all experiences for the specified company.',

      parameters: [
        {
          in: 'path',

          name: 'company',

          required: true,

          schema: {
            type: 'string',
          },

          example: 'OpenAI',

          description: 'Company name',
        },
      ],

      responses: {
        200: {
          description: 'Experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*               GET /experience/technology/{technology}                    */
  /* ------------------------------------------------------------------------ */

  '/experience/technology/{technology}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experiences by technology',

      description: 'Retrieve all experiences that use the specified technology.',

      parameters: [
        {
          in: 'path',

          name: 'technology',

          required: true,

          schema: {
            type: 'string',
          },

          example: 'React',

          description: 'Technology name',
        },
      ],

      responses: {
        200: {
          description: 'Experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*         GET /experience/employment-type/{employmentType}                */
  /* ------------------------------------------------------------------------ */

  '/experience/employment-type/{employmentType}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experiences by employment type',

      description: 'Retrieve experiences filtered by employment type.',

      parameters: [
        {
          in: 'path',

          name: 'employmentType',

          required: true,

          schema: {
            type: 'string',

            enum: EMPLOYMENT_TYPES,
          },

          example: 'Remote',

          description: 'Employment type',
        },
      ],

      responses: {
        200: {
          description: 'Experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*               GET /experience/work-mode/{workMode}                       */
  /* ------------------------------------------------------------------------ */

  '/experience/work-mode/{workMode}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experiences by work mode',

      description: 'Retrieve experiences filtered by work mode.',

      parameters: [
        {
          in: 'path',

          name: 'workMode',

          required: true,

          schema: {
            type: 'string',

            enum: WORK_MODES,
          },

          example: 'Full Time',

          description: 'Work mode',
        },
      ],

      responses: {
        200: {
          description: 'Experiences retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceListResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                       GET /experience/{id}                               */
  /* ------------------------------------------------------------------------ */

  '/experience/{id}': {
    get: {
      tags: ['Experience'],

      summary: 'Get experience by ID',

      description: 'Retrieve a single experience by its unique identifier.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          schema: {
            type: 'string',
          },

          example: '685b0d6c7e5e8d1a9a9a9a9a',

          description: 'Experience ID',
        },
      ],

      responses: {
        200: {
          description: 'Experience retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceResponse',
              },
            },
          },
        },

        404: {
          description: 'Experience not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ['Experience'],

      summary: 'Update experience',

      description: 'Update an existing experience.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          schema: {
            type: 'string',
          },

          example: '685b0d6c7e5e8d1a9a9a9a9a',
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateExperienceRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Experience updated successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        404: {
          description: 'Experience not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        409: {
          description: 'Experience already exists',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ['Experience'],

      summary: 'Delete experience',

      description: 'Delete an experience.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          schema: {
            type: 'string',
          },

          example: '685b0d6c7e5e8d1a9a9a9a9a',
        },
      ],

      responses: {
        200: {
          description: 'Experience deleted successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        404: {
          description: 'Experience not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                     GET /experience/stats                                */
  /* ------------------------------------------------------------------------ */

  '/experience/stats': {
    get: {
      tags: ['Experience'],

      summary: 'Get experience statistics',

      description:
        'Retrieve experience statistics including total, active and current experiences.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: 'Experience statistics retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ExperienceStatsResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/InternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },
};
