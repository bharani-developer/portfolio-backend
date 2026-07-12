// src/modules/testimonials/testimonials.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Schemas                                  */
/* -------------------------------------------------------------------------- */

export const testimonialsSchemas = {
  /* ---------------------------------------------------------------------- */
  /*                              Image Schema                              */
  /* ---------------------------------------------------------------------- */

  TestimonialImage: {
    type: 'object',

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        example:
          'https://res.cloudinary.com/demo/image/upload/v1710000000/testimonials/john-doe.jpg',
      },

      publicId: {
        type: 'string',
        example: 'testimonials/john-doe',
      },
    },

    required: ['url', 'publicId'],
  },

  /* ---------------------------------------------------------------------- */
  /*                           Testimonial Schema                           */
  /* ---------------------------------------------------------------------- */

  Testimonial: {
    type: 'object',

    properties: {
      _id: {
        type: 'string',
        example: '685b37c65217dd18d5f2d101',
      },

      clientName: {
        type: 'string',
        example: 'John Doe',
      },

      clientPosition: {
        type: 'string',
        example: 'Senior Software Engineer',
      },

      clientCompany: {
        type: 'string',
        example: 'Google',
      },

      clientImage: {
        $ref: '#/components/schemas/TestimonialImage',
      },

      clientWebsite: {
        type: 'string',
        format: 'uri',
        example: 'https://google.com',
      },

      projectName: {
        type: 'string',
        example: 'Portfolio Website',
      },

      review: {
        type: 'string',
        example:
          'Working with Bharani was an outstanding experience. The project was delivered on time with excellent code quality and communication.',
      },

      rating: {
        type: 'integer',
        minimum: 1,
        maximum: 5,
        example: 5,
      },

      clientType: {
        type: 'string',

        enum: ['Individual', 'Freelancer', 'Startup', 'Company', 'Agency', 'Organization', 'Other'],

        example: 'Company',
      },

      isFeatured: {
        type: 'boolean',
        example: true,
      },

      sortOrder: {
        type: 'integer',
        example: 1,
      },

      isActive: {
        type: 'boolean',
        example: true,
      },

      /* -------------------------- Virtual Fields -------------------------- */

      displayName: {
        type: 'string',
        readOnly: true,
        example: 'John Doe • Google',
      },

      hasClientImage: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      isVisible: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
      },
    },

    required: [
      '_id',
      'clientName',
      'review',
      'rating',
      'clientType',
      'isFeatured',
      'sortOrder',
      'isActive',
      'createdAt',
      'updatedAt',
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*                         Create Request Schema                          */
  /* ---------------------------------------------------------------------- */

  CreateTestimonialRequest: {
    type: 'object',

    required: ['clientName', 'review', 'rating', 'clientType'],

    properties: {
      clientName: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
        example: 'John Doe',
      },

      clientPosition: {
        type: 'string',
        maxLength: 100,
        example: 'Senior Software Engineer',
      },

      clientCompany: {
        type: 'string',
        maxLength: 150,
        example: 'Google',
      },

      clientImage: {
        $ref: '#/components/schemas/TestimonialImage',
      },

      clientWebsite: {
        type: 'string',
        format: 'uri',
        example: 'https://google.com',
      },

      projectName: {
        type: 'string',
        maxLength: 150,
        example: 'Portfolio Website',
      },

      review: {
        type: 'string',
        minLength: 10,
        maxLength: 3000,
        example:
          'Working with Bharani was an excellent experience. Everything was completed professionally and ahead of schedule.',
      },

      rating: {
        type: 'integer',
        minimum: 1,
        maximum: 5,
        example: 5,
      },

      clientType: {
        type: 'string',

        enum: ['Individual', 'Freelancer', 'Startup', 'Company', 'Agency', 'Organization', 'Other'],

        example: 'Company',
      },

      isFeatured: {
        type: 'boolean',
        default: false,
        example: false,
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
  },

  /* ---------------------------------------------------------------------- */
  /*                         Update Request Schema                          */
  /* ---------------------------------------------------------------------- */

  UpdateTestimonialRequest: {
    type: 'object',

    properties: {
      clientName: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
      },

      clientPosition: {
        type: 'string',
        maxLength: 100,
      },

      clientCompany: {
        type: 'string',
        maxLength: 150,
      },

      clientImage: {
        $ref: '#/components/schemas/TestimonialImage',
      },

      clientWebsite: {
        type: 'string',
        format: 'uri',
      },

      projectName: {
        type: 'string',
        maxLength: 150,
      },

      review: {
        type: 'string',
        minLength: 10,
        maxLength: 3000,
      },

      rating: {
        type: 'integer',
        minimum: 1,
        maximum: 5,
      },

      clientType: {
        type: 'string',

        enum: ['Individual', 'Freelancer', 'Startup', 'Company', 'Agency', 'Organization', 'Other'],
      },

      isFeatured: {
        type: 'boolean',
      },

      sortOrder: {
        type: 'integer',
        minimum: 0,
        maximum: 9999,
      },

      isActive: {
        type: 'boolean',
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                         Average Rating Schema                          */
  /* ---------------------------------------------------------------------- */

  AverageRatingResponse: {
    type: 'object',

    properties: {
      averageRating: {
        type: 'number',
        format: 'float',
        example: 4.92,
      },

      totalTestimonials: {
        type: 'integer',
        example: 37,
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                        Statistics Response Schema                      */
  /* ---------------------------------------------------------------------- */

  TestimonialStats: {
    type: 'object',

    properties: {
      total: {
        type: 'integer',
        example: 37,
      },

      active: {
        type: 'integer',
        example: 34,
      },

      featured: {
        type: 'integer',
        example: 12,
      },

      averageRating: {
        type: 'number',
        format: 'float',
        example: 4.92,
      },

      totalRatings: {
        type: 'integer',
        example: 34,
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                          Pagination Response                           */
  /* ---------------------------------------------------------------------- */

  TestimonialPaginationResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Testimonials retrieved successfully',
      },

      meta: {
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
            example: 37,
          },

          totalPage: {
            type: 'integer',
            example: 4,
          },
        },
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Testimonial',
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                       Single Testimonial Response                      */
  /* ---------------------------------------------------------------------- */

  TestimonialResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Testimonial retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/Testimonial',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                          Array Response Schema                         */
  /* ---------------------------------------------------------------------- */

  TestimonialArrayResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Testimonials retrieved successfully',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Testimonial',
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                           Success Response                             */
  /* ---------------------------------------------------------------------- */

  SuccessResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Operation completed successfully',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                             Error Response                             */
  /* ---------------------------------------------------------------------- */

  ErrorResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Validation failed',
      },

      errorMessages: {
        type: 'array',

        items: {
          type: 'object',

          properties: {
            path: {
              type: 'string',
              example: 'clientName',
            },

            message: {
              type: 'string',
              example: 'Client name is required',
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
};

/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const testimonialsPaths = {
  /* ---------------------------------------------------------------------- */
  /*                           Collection Routes                            */
  /* ---------------------------------------------------------------------- */

  '/testimonials': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get all testimonials',

      description:
        'Retrieve a paginated list of testimonials with search, filtering and sorting support.',

      parameters: [
        {
          in: 'query',

          name: 'searchTerm',

          schema: {
            type: 'string',
          },

          description: 'Search by client name, company, position, project or review.',
        },

        {
          in: 'query',

          name: 'page',

          schema: {
            type: 'integer',
            default: 1,
          },
        },

        {
          in: 'query',

          name: 'limit',

          schema: {
            type: 'integer',
            default: 10,
          },
        },

        {
          in: 'query',

          name: 'sortBy',

          schema: {
            type: 'string',
            example: 'sortOrder',
          },
        },

        {
          in: 'query',

          name: 'sortOrder',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialPaginationResponse',
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
      tags: ['Testimonials'],

      summary: 'Create testimonial',

      description: 'Create a new testimonial.',

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
              $ref: '#/components/schemas/CreateTestimonialRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Testimonial created successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation error',

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
        },

        403: {
          description: 'Forbidden',
        },

        409: {
          description: 'Testimonial already exists',
        },

        500: {
          description: 'Internal server error',
        },
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                          Single Resource Routes                        */
  /* ---------------------------------------------------------------------- */

  '/testimonials/{id}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonial by ID',

      description: 'Retrieve a testimonial using its unique ID.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Testimonial ID',

          schema: {
            type: 'string',
            example: '685b37c65217dd18d5f2d101',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonial retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialResponse',
              },
            },
          },
        },

        404: {
          description: 'Testimonial not found',

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
        },
      },
    },

    patch: {
      tags: ['Testimonials'],

      summary: 'Update testimonial',

      description: 'Update an existing testimonial.',

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

          description: 'Testimonial ID',

          schema: {
            type: 'string',
            example: '685b37c65217dd18d5f2d101',
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateTestimonialRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Testimonial updated successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialResponse',
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
        },

        403: {
          description: 'Forbidden',
        },

        404: {
          description: 'Testimonial not found',
        },

        409: {
          description: 'Duplicate testimonial',
        },

        500: {
          description: 'Internal server error',
        },
      },
    },

    delete: {
      tags: ['Testimonials'],

      summary: 'Delete testimonial',

      description: 'Delete a testimonial by ID.',

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

          description: 'Testimonial ID',

          schema: {
            type: 'string',
            example: '685b37c65217dd18d5f2d101',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonial deleted successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',
        },

        403: {
          description: 'Forbidden',
        },

        404: {
          description: 'Testimonial not found',
        },

        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                              Active Testimonials                       */
  /* ---------------------------------------------------------------------- */

  '/testimonials/active': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get active testimonials',

      description: 'Retrieve all active testimonials.',

      responses: {
        200: {
          description: 'Active testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                            Featured Testimonials                       */
  /* ---------------------------------------------------------------------- */

  '/testimonials/featured': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get featured testimonials',

      description: 'Retrieve all featured testimonials ordered by sort order and rating.',

      responses: {
        200: {
          description: 'Featured testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',
        },
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                           Average Rating Route                         */
  /* ---------------------------------------------------------------------- */

  '/testimonials/average-rating': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get average testimonial rating',

      description: 'Returns the average rating calculated from all active testimonials.',

      responses: {
        200: {
          description: 'Average rating retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AverageRatingResponse',
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

  /* ---------------------------------------------------------------------- */
  /*                              Statistics Route                          */
  /* ---------------------------------------------------------------------- */

  '/testimonials/stats': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonial statistics',

      description:
        'Returns overall testimonial statistics including total, active, featured and average rating.',

      responses: {
        200: {
          description: 'Statistics retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialStats',
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

  /* ---------------------------------------------------------------------- */
  /*                           Rating Filter Route                          */
  /* ---------------------------------------------------------------------- */

  '/testimonials/rating/{rating}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonials by rating',

      description: 'Retrieve all active testimonials having the specified rating.',

      parameters: [
        {
          in: 'path',

          name: 'rating',

          required: true,

          description: 'Rating value (1-5)',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 5,

            example: 5,
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid rating',

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
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                        Client Type Filter Route                        */
  /* ---------------------------------------------------------------------- */

  '/testimonials/client-type/{clientType}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonials by client type',

      description: 'Retrieve testimonials filtered by client type.',

      parameters: [
        {
          in: 'path',

          name: 'clientType',

          required: true,

          description: 'Client type',

          schema: {
            type: 'string',

            enum: [
              'Individual',
              'Freelancer',
              'Startup',
              'Company',
              'Agency',
              'Organization',
              'Other',
            ],

            example: 'Company',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid client type',

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
        },
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                           Project Filter Route                         */
  /* ---------------------------------------------------------------------- */

  '/testimonials/project/{projectName}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonials by project',

      description: 'Retrieve testimonials associated with a specific project.',

      parameters: [
        {
          in: 'path',

          name: 'projectName',

          required: true,

          description: 'Project name',

          schema: {
            type: 'string',

            example: 'Portfolio Website',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid project name',

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
        },
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                          Company Filter Route                          */
  /* ---------------------------------------------------------------------- */

  '/testimonials/company/{clientCompany}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonials by company',

      description:
        'Retrieve all active testimonials belonging to a specific company or organization.',

      parameters: [
        {
          in: 'path',

          name: 'clientCompany',

          required: true,

          description: 'Client company name',

          schema: {
            type: 'string',

            example: 'Google',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid company name',

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

  /* ---------------------------------------------------------------------- */
  /*                           Client Filter Route                          */
  /* ---------------------------------------------------------------------- */

  '/testimonials/client/{clientName}': {
    get: {
      tags: ['Testimonials'],

      summary: 'Get testimonials by client name',

      description: 'Retrieve all active testimonials for a specific client.',

      parameters: [
        {
          in: 'path',

          name: 'clientName',

          required: true,

          description: 'Client name',

          schema: {
            type: 'string',

            example: 'John Doe',
          },
        },
      ],

      responses: {
        200: {
          description: 'Testimonials retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/TestimonialArrayResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid client name',

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
