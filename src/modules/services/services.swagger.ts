// src/modules/services/services.swagger.ts

/* -------------------------------------------------------------------------- */
/*                               Services Schemas                             */
/* -------------------------------------------------------------------------- */

export const servicesSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                                Image Schema                              */
  /* ------------------------------------------------------------------------ */

  Image: {
    type: 'object',

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        example:
          'https://res.cloudinary.com/demo/image/upload/v1751800000/services/web-development.webp',
      },

      publicId: {
        type: 'string',
        example: 'portfolio/services/web-development',
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                               Service Schema                             */
  /* ------------------------------------------------------------------------ */

  Service: {
    type: 'object',

    required: [
      '_id',
      'title',
      'slug',
      'shortDescription',
      'description',
      'currency',
      'sortOrder',
      'isActive',
      'createdAt',
      'updatedAt',
    ],

    properties: {
      _id: {
        type: 'string',
        example: '685b0d6c7e5e8d1a9a9a9a9a',
      },

      title: {
        type: 'string',
        example: 'Full Stack Development',
      },

      slug: {
        type: 'string',
        example: 'full-stack-development',
      },

      shortDescription: {
        type: 'string',
        example: 'Custom web applications using React, Node.js, TypeScript and MongoDB.',
      },

      description: {
        type: 'string',
        example:
          'I build scalable, secure, responsive and production-ready web applications using modern technologies including React, Next.js, Node.js, Express, TypeScript and MongoDB.',
      },

      image: {
        allOf: [
          {
            $ref: '#/components/schemas/Image',
          },
        ],
        nullable: true,
      },

      price: {
        type: 'number',
        nullable: true,
        example: 15000,
      },

      currency: {
        type: 'string',
        example: 'INR',
      },

      sortOrder: {
        type: 'integer',
        example: 1,
      },

      isActive: {
        type: 'boolean',
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T10:30:00.000Z',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T10:45:00.000Z',
      },

      hasImage: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      hasPrice: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      formattedPrice: {
        type: 'string',
        nullable: true,
        readOnly: true,
        example: 'INR 15,000',
      },

      isVisible: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      titleLength: {
        type: 'integer',
        readOnly: true,
        example: 22,
      },

      shortDescriptionLength: {
        type: 'integer',
        readOnly: true,
        example: 68,
      },

      descriptionLength: {
        type: 'integer',
        readOnly: true,
        example: 245,
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         Create Service Request                           */
  /* ------------------------------------------------------------------------ */

  CreateServiceRequest: {
    type: 'object',

    required: ['title', 'shortDescription', 'description'],

    properties: {
      title: {
        type: 'string',
        minLength: 2,
        maxLength: 150,
        example: 'Full Stack Development',
      },

      shortDescription: {
        type: 'string',
        maxLength: 300,
        example: 'End-to-end web application development using modern technologies.',
      },

      description: {
        type: 'string',
        maxLength: 3000,
        example:
          'I develop scalable, secure and responsive web applications using React, Next.js, Node.js, Express, TypeScript and MongoDB with clean architecture and best practices.',
      },

      image: {
        $ref: '#/components/schemas/Image',
      },

      price: {
        type: 'number',
        minimum: 0,
        maximum: 99999999,
        example: 15000,
        nullable: true,
      },

      currency: {
        type: 'string',
        minLength: 3,
        maxLength: 3,
        example: 'INR',
        default: 'INR',
      },

      sortOrder: {
        type: 'integer',
        minimum: 0,
        maximum: 9999,
        default: 0,
        example: 1,
      },

      isActive: {
        type: 'boolean',
        default: true,
        example: true,
      },
    },

    example: {
      title: 'Full Stack Development',

      shortDescription: 'Professional web application development services.',

      description:
        'Building scalable, secure and responsive web applications using React, Next.js, Node.js, Express, TypeScript and MongoDB.',

      image: {
        url: 'https://res.cloudinary.com/demo/image/upload/v1751800000/services/full-stack.webp',

        publicId: 'portfolio/services/full-stack',
      },

      price: 15000,

      currency: 'INR',

      sortOrder: 1,

      isActive: true,
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                         Update Service Request                           */
  /* ------------------------------------------------------------------------ */

  UpdateServiceRequest: {
    type: 'object',

    properties: {
      title: {
        type: 'string',
        minLength: 2,
        maxLength: 150,
        example: 'Advanced Full Stack Development',
      },

      shortDescription: {
        type: 'string',
        maxLength: 300,
        example: 'Enterprise-grade web application development using modern technologies.',
      },

      description: {
        type: 'string',
        maxLength: 3000,
        example:
          'Developing scalable, secure and high-performance web applications with React, Next.js, Node.js, Express, TypeScript and MongoDB following clean architecture and production best practices.',
      },

      image: {
        allOf: [
          {
            $ref: '#/components/schemas/Image',
          },
        ],
        nullable: true,
      },

      price: {
        type: 'number',
        minimum: 0,
        maximum: 99999999,
        nullable: true,
        example: 25000,
      },

      currency: {
        type: 'string',
        minLength: 3,
        maxLength: 3,
        example: 'USD',
      },

      sortOrder: {
        type: 'integer',
        minimum: 0,
        maximum: 9999,
        example: 2,
      },

      isActive: {
        type: 'boolean',
        example: false,
      },
    },

    example: {
      title: 'Advanced Full Stack Development',

      shortDescription: 'Enterprise-grade full stack application development.',

      description:
        'Providing advanced development services with scalable architecture, REST APIs, authentication, cloud deployment, CI/CD and performance optimization.',

      image: {
        url: 'https://res.cloudinary.com/demo/image/upload/v1751800000/services/advanced-full-stack.webp',

        publicId: 'portfolio/services/advanced-full-stack',
      },

      price: 25000,

      currency: 'USD',

      sortOrder: 2,

      isActive: false,
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                            Pagination Meta                               */
  /* ------------------------------------------------------------------------ */

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
        example: 25,
      },

      totalPage: {
        type: 'integer',
        example: 3,
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                              Error Response                              */
  /* ------------------------------------------------------------------------ */

  ErrorResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Service not found',
      },

      errorMessages: {
        type: 'array',

        items: {
          type: 'object',

          properties: {
            path: {
              type: 'string',
              example: 'title',
            },

            message: {
              type: 'string',
              example: 'Title is required',
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

  /* ------------------------------------------------------------------------ */
  /*                            Service Response                              */
  /* ------------------------------------------------------------------------ */

  ServiceResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Service retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/Service',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Services Response                              */
  /* ------------------------------------------------------------------------ */

  ServicesResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Services retrieved successfully',
      },

      meta: {
        $ref: '#/components/schemas/PaginationMeta',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Service',
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                         Service Delete Response                          */
  /* ------------------------------------------------------------------------ */

  ServiceDeleteResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Service deleted successfully',
      },

      data: {
        $ref: '#/components/schemas/Service',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          Service Stats Response                          */
  /* ------------------------------------------------------------------------ */

  ServiceStatsResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Service statistics retrieved successfully',
      },

      data: {
        type: 'object',

        properties: {
          total: {
            type: 'integer',
            example: 12,
          },

          active: {
            type: 'integer',
            example: 10,
          },

          inactive: {
            type: 'integer',
            example: 2,
          },
        },
      },
    },
  },
};
/* -------------------------------------------------------------------------- */
/*                               Services Paths                               */
/* -------------------------------------------------------------------------- */

export const servicesPaths = {
  '/services': {
    get: {
      tags: ['Services'],

      summary: 'Get all services',

      description:
        'Retrieve a paginated list of services with support for searching, filtering, sorting and field selection.',

      parameters: [
        {
          in: 'query',
          name: 'searchTerm',

          schema: {
            type: 'string',
          },

          description: 'Search by title, short description or description.',
        },

        {
          in: 'query',
          name: 'page',

          schema: {
            type: 'integer',
            default: 1,
          },

          description: 'Page number.',
        },

        {
          in: 'query',
          name: 'limit',

          schema: {
            type: 'integer',
            default: 10,
          },

          description: 'Number of records per page.',
        },

        {
          in: 'query',
          name: 'sort',

          schema: {
            type: 'string',
            example: '-createdAt',
          },

          description: 'Sort results.',
        },

        {
          in: 'query',
          name: 'fields',

          schema: {
            type: 'string',
            example: 'title,price,currency',
          },

          description: 'Comma separated fields to return.',
        },

        {
          in: 'query',
          name: 'isActive',

          schema: {
            type: 'boolean',
          },

          description: 'Filter by active status.',
        },

        {
          in: 'query',
          name: 'currency',

          schema: {
            type: 'string',
            example: 'INR',
          },

          description: 'Filter by currency.',
        },
      ],

      responses: {
        200: {
          description: 'Services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid query parameters',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    post: {
      tags: ['Services'],

      summary: 'Create service',

      description: 'Create a new service.',

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
              $ref: '#/components/schemas/CreateServiceRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Service created successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Service already exists',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  '/services/{id}': {
    get: {
      tags: ['Services'],

      summary: 'Get service by ID',

      description: 'Retrieve a single service by its unique ID.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Service ID.',

          schema: {
            type: 'string',

            example: '685b0d6c7e5e8d1a9a9a9a9a',
          },
        },
      ],

      responses: {
        200: {
          description: 'Service retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceResponse',
              },
            },
          },
        },

        404: {
          description: 'Service not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ['Services'],

      summary: 'Update service',

      description: 'Update an existing service.',

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

          description: 'Service ID.',

          schema: {
            type: 'string',

            example: '685b0d6c7e5e8d1a9a9a9a9a',
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateServiceRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Service updated successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Service not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        409: {
          description: 'Service already exists',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ['Services'],

      summary: 'Delete service',

      description: 'Delete a service by its unique ID.',

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

          description: 'Service ID.',

          schema: {
            type: 'string',

            example: '685b0d6c7e5e8d1a9a9a9a9a',
          },
        },
      ],

      responses: {
        200: {
          description: 'Service deleted successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceDeleteResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Service not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           Active Services                                */
  /* ------------------------------------------------------------------------ */

  '/services/active': {
    get: {
      tags: ['Services'],

      summary: 'Get active services',

      description: 'Retrieve all active services ordered by sort order and creation date.',

      responses: {
        200: {
          description: 'Active services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                          Inactive Services                               */
  /* ------------------------------------------------------------------------ */

  '/services/inactive': {
    get: {
      tags: ['Services'],

      summary: 'Get inactive services',

      description: 'Retrieve all inactive services ordered by last updated date.',

      responses: {
        200: {
          description: 'Inactive services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Latest Services                                */
  /* ------------------------------------------------------------------------ */

  '/services/latest': {
    get: {
      tags: ['Services'],

      summary: 'Get latest services',

      description: 'Retrieve the latest active services sorted by creation date.',

      parameters: [
        {
          in: 'query',

          name: 'limit',

          description: 'Maximum number of services to return.',

          schema: {
            type: 'integer',

            default: 5,

            minimum: 1,

            maximum: 100,
          },
        },
      ],

      responses: {
        200: {
          description: 'Latest services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid limit parameter',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           Ordered Services                               */
  /* ------------------------------------------------------------------------ */

  '/services/ordered': {
    get: {
      tags: ['Services'],

      summary: 'Get services ordered for portfolio',

      description: 'Retrieve all active services ordered by sort order and title.',

      responses: {
        200: {
          description: 'Ordered services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                        Alphabetical Services                             */
  /* ------------------------------------------------------------------------ */

  '/services/alphabetical': {
    get: {
      tags: ['Services'],

      summary: 'Get services alphabetically',

      description: 'Retrieve all active services sorted alphabetically by title.',

      responses: {
        200: {
          description: 'Alphabetical services retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServicesResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Service Statistics                             */
  /* ------------------------------------------------------------------------ */

  '/services/stats': {
    get: {
      tags: ['Services'],

      summary: 'Get service statistics',

      description: 'Retrieve statistics including total, active and inactive services.',

      responses: {
        200: {
          description: 'Service statistics retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceStatsResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
  /* ------------------------------------------------------------------------ */
  /*                           Service By Slug                                */
  /* ------------------------------------------------------------------------ */

  '/services/slug/{slug}': {
    get: {
      tags: ['Services'],

      summary: 'Get service by slug',

      description: 'Retrieve a single active service using its unique slug.',

      parameters: [
        {
          in: 'path',

          name: 'slug',

          required: true,

          description: 'Unique service slug.',

          schema: {
            type: 'string',

            example: 'full-stack-development',
          },
        },
      ],

      responses: {
        200: {
          description: 'Service retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ServiceResponse',
              },
            },
          },
        },

        404: {
          description: 'Service not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse',
              },
            },
          },
        },
      },
    },
  },
};
