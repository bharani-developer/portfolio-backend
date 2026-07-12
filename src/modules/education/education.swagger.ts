// src/modules/education/education.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { EDUCATION_LEVELS, EDUCATION_TYPES, GRADE_TYPES } from './education.constant.js';

/* -------------------------------------------------------------------------- */
/*                             Reusable Examples                              */
/* -------------------------------------------------------------------------- */

const educationExample = {
  _id: '686b54d8b30d497d25f1a111',

  institution: 'Anna University',

  slug: 'anna-university-bachelor-of-engineering',

  institutionLogo: {
    url: 'https://res.cloudinary.com/demo/image/upload/education/logo.png',

    publicId: 'education/logo',
  },

  degree: 'Bachelor of Engineering',

  fieldOfStudy: 'Computer Science and Engineering',

  educationLevel: 'Bachelors',

  educationType: 'Full Time',

  location: 'Chennai, Tamil Nadu, India',

  startDate: '2019-06-01T00:00:00.000Z',

  endDate: '2023-05-30T00:00:00.000Z',

  isCurrent: false,

  gradeType: 'CGPA',

  grade: '8.72',

  description:
    'Focused on software engineering, databases, networking, cloud computing, and full-stack application development.',

  achievements: [
    'Graduated with First Class',
    'College Coding Club Coordinator',
    'Completed Final Year Project with Distinction',
  ],

  skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],

  institutionWebsite: 'https://www.annauniv.edu',

  sortOrder: 1,

  isActive: true,

  createdAt: '2026-07-07T09:20:11.000Z',

  updatedAt: '2026-07-07T09:20:11.000Z',
};

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

export const educationSchemas = {
  /* ---------------------------------------------------------------------- */
  /*                             Education Image                            */
  /* ---------------------------------------------------------------------- */

  EducationImage: {
    type: 'object',

    description: 'Institution logo.',

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        description: 'Cloudinary image URL.',

        example: 'https://res.cloudinary.com/demo/image/upload/education/logo.png',
      },

      publicId: {
        type: 'string',

        description: 'Cloudinary public identifier.',

        example: 'education/logo',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                               Education                                */
  /* ---------------------------------------------------------------------- */

  Education: {
    type: 'object',

    description: 'Education resource.',

    required: [
      '_id',
      'institution',
      'slug',
      'degree',
      'fieldOfStudy',
      'educationLevel',
      'educationType',
      'location',
      'startDate',
      'gradeType',
      'achievements',
      'skills',
      'sortOrder',
      'isCurrent',
      'isActive',
      'createdAt',
      'updatedAt',
    ],

    properties: {
      _id: {
        type: 'string',

        readOnly: true,

        example: educationExample._id,
      },

      institution: {
        type: 'string',

        description: 'Educational institution.',

        example: educationExample.institution,
      },

      slug: {
        type: 'string',

        readOnly: true,

        description: 'SEO friendly slug.',

        example: educationExample.slug,
      },

      institutionLogo: {
        allOf: [
          {
            $ref: '#/components/schemas/EducationImage',
          },
        ],

        nullable: true,
      },

      degree: {
        type: 'string',

        description: 'Degree or qualification.',

        example: educationExample.degree,
      },

      fieldOfStudy: {
        type: 'string',

        description: 'Field of study.',

        example: educationExample.fieldOfStudy,
      },

      educationLevel: {
        type: 'string',

        enum: EDUCATION_LEVELS,

        description: 'Education level.',

        example: educationExample.educationLevel,
      },

      educationType: {
        type: 'string',

        enum: EDUCATION_TYPES,

        description: 'Education type.',

        example: educationExample.educationType,
      },

      location: {
        type: 'string',

        description: 'Institution location.',

        example: educationExample.location,
      },

      startDate: {
        type: 'string',

        format: 'date-time',

        example: educationExample.startDate,
      },

      endDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        example: educationExample.endDate,
      },

      isCurrent: {
        type: 'boolean',

        example: educationExample.isCurrent,
      },

      gradeType: {
        type: 'string',

        enum: GRADE_TYPES,

        description: 'Grade format.',

        example: educationExample.gradeType,
      },

      grade: {
        type: 'string',

        nullable: true,

        example: educationExample.grade,
      },

      description: {
        type: 'string',

        nullable: true,

        example: educationExample.description,
      },

      achievements: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: educationExample.achievements,
      },

      skills: {
        type: 'array',

        items: {
          type: 'string',
        },

        example: educationExample.skills,
      },

      institutionWebsite: {
        type: 'string',

        format: 'uri',

        nullable: true,

        example: educationExample.institutionWebsite,
      },

      sortOrder: {
        type: 'integer',

        example: educationExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        example: educationExample.isActive,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        example: educationExample.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        example: educationExample.updatedAt,
      },
    },

    example: educationExample,
  },

  /* ---------------------------------------------------------------------- */
  /*                        Create Education Request                         */
  /* ---------------------------------------------------------------------- */

  CreateEducationRequest: {
    type: 'object',

    required: [
      'institution',
      'degree',
      'fieldOfStudy',
      'educationLevel',
      'educationType',
      'location',
      'startDate',
      'gradeType',
    ],

    properties: {
      institution: {
        type: 'string',
      },

      institutionLogo: {
        $ref: '#/components/schemas/EducationImage',
      },

      degree: {
        type: 'string',
      },

      fieldOfStudy: {
        type: 'string',
      },

      educationLevel: {
        type: 'string',

        enum: EDUCATION_LEVELS,
      },

      educationType: {
        type: 'string',

        enum: EDUCATION_TYPES,
      },

      location: {
        type: 'string',
      },

      startDate: {
        type: 'string',

        format: 'date-time',
      },

      endDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,
      },

      isCurrent: {
        type: 'boolean',

        default: false,
      },

      gradeType: {
        type: 'string',

        enum: GRADE_TYPES,
      },

      grade: {
        type: 'string',
      },

      description: {
        type: 'string',
      },

      achievements: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      skills: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      institutionWebsite: {
        type: 'string',

        format: 'uri',
      },

      sortOrder: {
        type: 'integer',

        default: 0,
      },

      isActive: {
        type: 'boolean',

        default: true,
      },
    },

    example: {
      ...educationExample,
      _id: undefined,
      slug: undefined,
      createdAt: undefined,
      updatedAt: undefined,
    },
  },

  /* ---------------------------------------------------------------------- */
  /*                        Update Education Request                         */
  /* ---------------------------------------------------------------------- */

  UpdateEducationRequest: {
    type: 'object',

    properties: {
      institution: {
        type: 'string',
      },

      institutionLogo: {
        $ref: '#/components/schemas/EducationImage',
      },

      degree: {
        type: 'string',
      },

      fieldOfStudy: {
        type: 'string',
      },

      educationLevel: {
        type: 'string',

        enum: EDUCATION_LEVELS,
      },

      educationType: {
        type: 'string',

        enum: EDUCATION_TYPES,
      },

      location: {
        type: 'string',
      },

      startDate: {
        type: 'string',

        format: 'date-time',
      },

      endDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,
      },

      isCurrent: {
        type: 'boolean',
      },

      gradeType: {
        type: 'string',

        enum: GRADE_TYPES,
      },

      grade: {
        type: 'string',
      },

      description: {
        type: 'string',
      },

      achievements: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      skills: {
        type: 'array',

        items: {
          type: 'string',
        },
      },

      institutionWebsite: {
        type: 'string',

        format: 'uri',
      },

      sortOrder: {
        type: 'integer',
      },

      isActive: {
        type: 'boolean',
      },
    },
  },
};
export const educationPaths = {
  /* ---------------------------------------------------------------------- */
  /*                              GET ALL / CREATE                          */
  /* ---------------------------------------------------------------------- */

  '/education': {
    get: {
      tags: ['Education'],

      operationId: 'getEducations',

      summary: 'Get all education records',

      description:
        'Retrieve paginated education records with searching, filtering, sorting, and field selection.',

      parameters: [
        {
          in: 'query',

          name: 'searchTerm',

          description:
            'Search by institution, degree, field of study, location, description, or skills.',

          schema: {
            type: 'string',
          },

          example: 'Computer Science',
        },

        {
          in: 'query',

          name: 'educationLevel',

          description: 'Filter by education level.',

          schema: {
            type: 'string',

            enum: EDUCATION_LEVELS,
          },

          example: 'Bachelors',
        },

        {
          in: 'query',

          name: 'educationType',

          description: 'Filter by education type.',

          schema: {
            type: 'string',

            enum: EDUCATION_TYPES,
          },

          example: 'Full Time',
        },

        {
          in: 'query',

          name: 'gradeType',

          description: 'Filter by grade type.',

          schema: {
            type: 'string',

            enum: GRADE_TYPES,
          },

          example: 'CGPA',
        },

        {
          in: 'query',

          name: 'isCurrent',

          description: 'Filter current education.',

          schema: {
            type: 'boolean',
          },

          example: false,
        },

        {
          in: 'query',

          name: 'isActive',

          description: 'Filter active education.',

          schema: {
            type: 'boolean',
          },

          example: true,
        },

        {
          in: 'query',

          name: 'page',

          description: 'Page number.',

          schema: {
            type: 'integer',

            minimum: 1,

            default: 1,
          },
        },

        {
          in: 'query',

          name: 'limit',

          description: 'Number of records per page.',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 100,

            default: 10,
          },
        },

        {
          in: 'query',

          name: 'sortBy',

          description: 'Sort field.',

          schema: {
            type: 'string',

            enum: [
              'institution',
              'degree',
              'startDate',
              'endDate',
              'sortOrder',
              'createdAt',
              'updatedAt',
            ],
          },

          example: 'startDate',
        },

        {
          in: 'query',

          name: 'sortOrder',

          description: 'Sort order.',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],
          },

          example: 'desc',
        },

        {
          in: 'query',

          name: 'fields',

          description: 'Comma-separated fields to include.',

          schema: {
            type: 'string',
          },

          example: 'institution,degree,educationLevel,startDate,endDate',
        },
      ],

      responses: {
        200: {
          description: 'Education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
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

                        example: 8,
                      },

                      totalPage: {
                        type: 'integer',

                        example: 1,
                      },
                    },
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid query parameters.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },

    post: {
      tags: ['Education'],

      operationId: 'createEducation',

      summary: 'Create education record',

      description: 'Create a new education record. Admin access required.',

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
              $ref: '#/components/schemas/CreateEducationRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Education created successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education created successfully',
                  },

                  data: {
                    $ref: '#/components/schemas/Education',
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',
        },

        401: {
          description: 'Authentication required.',
        },

        403: {
          description: 'Access denied.',
        },

        409: {
          description: 'Education already exists.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                           GET / UPDATE / DELETE                        */
  /* ---------------------------------------------------------------------- */

  '/education/{id}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationById',

      summary: 'Get education by ID',

      description: 'Retrieve a single education record by its unique ID.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'Education ID.',

          schema: {
            type: 'string',
          },

          example: '686b54d8b30d497d25f1a111',
        },
      ],

      responses: {
        200: {
          description: 'Education retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    $ref: '#/components/schemas/Education',
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid education ID.',
        },

        404: {
          description: 'Education not found.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },

    patch: {
      tags: ['Education'],

      operationId: 'updateEducation',

      summary: 'Update education',

      description: 'Update an existing education record. Admin access required.',

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

          description: 'Education ID.',

          schema: {
            type: 'string',
          },

          example: '686b54d8b30d497d25f1a111',
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateEducationRequest',
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Education updated successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education updated successfully',
                  },

                  data: {
                    $ref: '#/components/schemas/Education',
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',
        },

        401: {
          description: 'Authentication required.',
        },

        403: {
          description: 'Access denied.',
        },

        404: {
          description: 'Education not found.',
        },

        409: {
          description: 'Education already exists.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },

    delete: {
      tags: ['Education'],

      operationId: 'deleteEducation',

      summary: 'Delete education',

      description: 'Delete an education record permanently. Admin access required.',

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

          description: 'Education ID.',

          schema: {
            type: 'string',
          },

          example: '686b54d8b30d497d25f1a111',
        },
      ],

      responses: {
        200: {
          description: 'Education deleted successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education deleted successfully',
                  },

                  data: {
                    $ref: '#/components/schemas/Education',
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid education ID.',
        },

        401: {
          description: 'Authentication required.',
        },

        403: {
          description: 'Access denied.',
        },

        404: {
          description: 'Education not found.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },
  /* ---------------------------------------------------------------------- */
  /*                              Custom Routes                             */
  /* ---------------------------------------------------------------------- */

  '/education/active': {
    get: {
      tags: ['Education'],

      operationId: 'getActiveEducations',

      summary: 'Get active education records',

      description: 'Retrieve all active education records ordered for portfolio display.',

      responses: {
        200: {
          description: 'Active education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/current': {
    get: {
      tags: ['Education'],

      operationId: 'getCurrentEducations',

      summary: 'Get current education records',

      description: 'Retrieve all currently ongoing education records.',

      responses: {
        200: {
          description: 'Current education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/slug/{slug}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationBySlug',

      summary: 'Get education by slug',

      description: 'Retrieve an education record using its slug.',

      parameters: [
        {
          in: 'path',

          name: 'slug',

          required: true,

          description: 'Education slug.',

          schema: {
            type: 'string',
          },

          example: 'anna-university-bachelor-of-engineering',
        },
      ],

      responses: {
        200: {
          description: 'Education retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    $ref: '#/components/schemas/Education',
                  },
                },
              },
            },
          },
        },

        404: {
          description: 'Education not found.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/level/{level}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationsByLevel',

      summary: 'Get education by level',

      description: 'Retrieve education records filtered by education level.',

      parameters: [
        {
          in: 'path',

          name: 'level',

          required: true,

          description: 'Education level.',

          schema: {
            type: 'string',

            enum: EDUCATION_LEVELS,
          },

          example: 'Bachelors',
        },
      ],

      responses: {
        200: {
          description: 'Education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid education level.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/type/{type}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationsByType',

      summary: 'Get education by type',

      description: 'Retrieve education records filtered by education type.',

      parameters: [
        {
          in: 'path',

          name: 'type',

          required: true,

          description: 'Education type.',

          schema: {
            type: 'string',

            enum: EDUCATION_TYPES,
          },

          example: 'Full Time',
        },
      ],

      responses: {
        200: {
          description: 'Education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid education type.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/institution/{institution}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationsByInstitution',

      summary: 'Get education by institution',

      description: 'Retrieve education records belonging to a specific institution.',

      parameters: [
        {
          in: 'path',

          name: 'institution',

          required: true,

          description: 'Institution name.',

          schema: {
            type: 'string',
          },

          example: 'Anna University',
        },
      ],

      responses: {
        200: {
          description: 'Education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/skill/{skill}': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationsBySkill',

      summary: 'Get education by skill',

      description: 'Retrieve education records containing the specified skill.',

      parameters: [
        {
          in: 'path',

          name: 'skill',

          required: true,

          description: 'Skill name.',

          schema: {
            type: 'string',
          },

          example: 'Node.js',
        },
      ],

      responses: {
        200: {
          description: 'Education records retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
                    type: 'array',

                    items: {
                      $ref: '#/components/schemas/Education',
                    },
                  },
                },
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },

  '/education/stats': {
    get: {
      tags: ['Education'],

      operationId: 'getEducationStats',

      summary: 'Get education statistics',

      description: 'Retrieve education statistics. Admin access required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: 'Education statistics retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                type: 'object',

                properties: {
                  success: {
                    type: 'boolean',

                    example: true,
                  },

                  message: {
                    type: 'string',

                    example: 'Education retrieved successfully',
                  },

                  data: {
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
                },
              },
            },
          },
        },

        401: {
          description: 'Authentication required.',
        },

        403: {
          description: 'Access denied.',
        },

        500: {
          description: 'Internal server error.',
        },
      },
    },
  },
};
