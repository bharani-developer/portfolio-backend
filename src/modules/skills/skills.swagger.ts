// src/modules/skills/skills.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { SKILLS_CATEGORIES, SKILLS_DEFAULT, SKILLS_VALIDATION } from './skills.constant.js';

/* -------------------------------------------------------------------------- */
/*                               2. Reusable Enums                            */
/* -------------------------------------------------------------------------- */

const skillCategoryEnum = [...SKILLS_CATEGORIES];

/* -------------------------------------------------------------------------- */
/*                              3. Shared Schemas                             */
/* -------------------------------------------------------------------------- */

export const skillsSchemas = {
  Image: {
    type: 'object',

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        maxLength: SKILLS_VALIDATION.IMAGE.URL_MAX_LENGTH,
        example: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png',
      },

      publicId: {
        type: 'string',
        maxLength: SKILLS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        example: 'portfolio/skills/react',
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
        example: 50,
      },

      totalPage: {
        type: 'integer',
        example: 5,
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
    },
  },

  ValidationErrorResponse: {
    allOf: [
      {
        $ref: '#/components/schemas/ErrorResponse',
      },

      {
        type: 'object',

        properties: {
          errorMessages: {
            type: 'array',

            items: {
              type: 'object',

              properties: {
                path: {
                  type: 'string',
                  example: 'name',
                },

                message: {
                  type: 'string',
                  example: 'Skill name is required',
                },
              },
            },
          },
        },
      },
    ],
  },

  Skill: {
    type: 'object',

    required: [
      '_id',
      'name',
      'slug',
      'category',
      'proficiency',
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

      name: {
        type: 'string',
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
        maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
        example: 'React',
      },

      slug: {
        type: 'string',
        example: 'react',
      },

      category: {
        type: 'string',
        enum: skillCategoryEnum,
        example: 'Frontend',
      },

      proficiency: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
        maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
        default: SKILLS_DEFAULT.PROFICIENCY,
        example: 95,
      },

      image: {
        allOf: [
          {
            $ref: '#/components/schemas/Image',
          },
        ],

        nullable: true,
      },

      description: {
        type: 'string',
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
        example: 'Building scalable frontend applications using React, Next.js and TypeScript.',
      },

      sortOrder: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
        maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
        default: SKILLS_DEFAULT.SORT_ORDER,
        example: 1,
      },

      isActive: {
        type: 'boolean',
        default: SKILLS_DEFAULT.IS_ACTIVE,
        example: true,
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-06-26T10:15:30.000Z',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-06-26T10:15:30.000Z',
      },

      isAdvanced: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },

      isIntermediate: {
        type: 'boolean',
        readOnly: true,
        example: false,
      },

      isBeginner: {
        type: 'boolean',
        readOnly: true,
        example: false,
      },

      proficiencyLevel: {
        type: 'string',
        readOnly: true,
        example: 'Expert',
      },

      isVisible: {
        type: 'boolean',
        readOnly: true,
        example: true,
      },
    },
  },

  CreateSkillRequest: {
    type: 'object',

    required: ['name', 'category'],

    properties: {
      name: {
        type: 'string',
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
        maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
        example: 'React',
      },

      category: {
        type: 'string',
        enum: skillCategoryEnum,
        example: 'Frontend',
      },

      proficiency: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
        maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
        default: SKILLS_DEFAULT.PROFICIENCY,
        example: 95,
      },

      image: {
        $ref: '#/components/schemas/Image',
      },

      description: {
        type: 'string',
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
        example: 'Building scalable frontend applications using React, Next.js and TypeScript.',
      },

      sortOrder: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
        maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
        default: SKILLS_DEFAULT.SORT_ORDER,
        example: 1,
      },

      isActive: {
        type: 'boolean',
        default: SKILLS_DEFAULT.IS_ACTIVE,
        example: true,
      },
    },
  },

  UpdateSkillRequest: {
    type: 'object',

    properties: {
      name: {
        type: 'string',
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
        maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
        example: 'Next.js',
      },

      category: {
        type: 'string',
        enum: skillCategoryEnum,
        example: 'Frontend',
      },

      proficiency: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
        maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
        example: 98,
      },

      image: {
        $ref: '#/components/schemas/Image',
      },

      description: {
        type: 'string',
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
        example: 'Production-ready React framework for modern web applications.',
      },

      sortOrder: {
        type: 'integer',
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
        maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
        example: 2,
      },

      isActive: {
        type: 'boolean',
        example: true,
      },
    },
  },
  SkillResponse: {
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
        example: 'Skill retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/Skill',
      },
    },
  },

  SkillsResponse: {
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
        example: 'Skill retrieved successfully',
      },

      meta: {
        $ref: '#/components/schemas/PaginationMeta',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Skill',
        },
      },
    },
  },

  ActiveSkillsResponse: {
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
        example: 'Skill retrieved successfully',
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Skill',
        },
      },
    },
  },

  DeleteSkillResponse: {
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
        example: 'Skill deleted successfully',
      },

      data: {
        $ref: '#/components/schemas/Skill',
      },
    },
  },

  UnauthorizedResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 401,
      },

      message: {
        type: 'string',
        example: 'Unauthorized',
      },
    },
  },

  ForbiddenResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 403,
      },

      message: {
        type: 'string',
        example: 'Forbidden',
      },
    },
  },

  NotFoundResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 404,
      },

      message: {
        type: 'string',
        example: 'Skill not found',
      },
    },
  },

  ConflictResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 409,
      },

      message: {
        type: 'string',
        example: 'Skill already exists',
      },
    },
  },

  InternalServerErrorResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      statusCode: {
        type: 'integer',
        example: 500,
      },

      message: {
        type: 'string',
        example: 'Internal Server Error',
      },
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  4. Paths                                  */
/* -------------------------------------------------------------------------- */

export const skillsPaths = {
  '/skills': {
    get: {
      tags: ['Skills'],

      operationId: 'getSkills',

      summary: 'Get all skills',

      description:
        'Retrieve a paginated list of skills with support for searching, filtering, sorting, field selection and pagination.',

      parameters: [
        {
          in: 'query',

          name: 'searchTerm',

          required: false,

          description: 'Search by skill name or category.',

          schema: {
            type: 'string',
          },

          example: 'React',
        },

        {
          in: 'query',

          name: 'category',

          required: false,

          description: 'Filter by skill category.',

          schema: {
            type: 'string',

            enum: skillCategoryEnum,
          },

          example: 'Frontend',
        },

        {
          in: 'query',

          name: 'isActive',

          required: false,

          description: 'Filter by active status.',

          schema: {
            type: 'boolean',
          },

          example: true,
        },

        {
          in: 'query',

          name: 'page',

          required: false,

          description: 'Page number.',

          schema: {
            type: 'integer',

            minimum: 1,

            default: 1,
          },

          example: 1,
        },

        {
          in: 'query',

          name: 'limit',

          required: false,

          description: 'Number of records per page.',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 100,

            default: 10,
          },

          example: 10,
        },

        {
          in: 'query',

          name: 'sort',

          required: false,

          description: 'Sort fields. Prefix with "-" for descending order.',

          schema: {
            type: 'string',
          },

          example: '-createdAt',
        },

        {
          in: 'query',

          name: 'fields',

          required: false,

          description: 'Comma separated fields to include in the response.',

          schema: {
            type: 'string',
          },

          example: 'name,category,proficiency,image,isAdvanced,proficiencyLevel',
        },
      ],

      responses: {
        200: {
          description: 'Skills retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SkillsResponse',
              },
            },
          },
        },

        400: {
          description: 'Invalid query parameters.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
      tags: ['Skills'],

      operationId: 'createSkill',

      summary: 'Create a skill',

      description:
        'Create a new portfolio skill. Skill names must be unique. The slug is automatically generated from the name.',

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
              $ref: '#/components/schemas/CreateSkillRequest',
            },

            examples: {
              react: {
                summary: 'Frontend Skill',

                value: {
                  name: 'React',

                  category: 'Frontend',

                  proficiency: 95,

                  image: {
                    url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png',

                    publicId: 'portfolio/skills/react',
                  },

                  description: 'Building scalable user interfaces using React and TypeScript.',

                  sortOrder: 1,

                  isActive: true,
                },
              },

              node: {
                summary: 'Backend Skill',

                value: {
                  name: 'Node.js',

                  category: 'Backend',

                  proficiency: 92,

                  image: {
                    url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nodejs.png',

                    publicId: 'portfolio/skills/nodejs',
                  },

                  description: 'Building scalable REST APIs with Express and TypeScript.',

                  sortOrder: 2,

                  isActive: true,
                },
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Skill created successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SkillResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Authentication required.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        409: {
          description: 'Skill already exists.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
  '/skills/active': {
    get: {
      tags: ['Skills'],

      operationId: 'getActiveSkills',

      summary: 'Get active skills',

      description:
        'Retrieve all active portfolio skills ordered by category, sort order and proficiency.',

      responses: {
        200: {
          description: 'Active skills retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ActiveSkillsResponse',
              },

              examples: {
                success: {
                  summary: 'Active Skills',

                  value: {
                    success: true,

                    statusCode: 200,

                    message: 'Skill retrieved successfully',

                    data: [
                      {
                        _id: '685b0d6c7e5e8d1a9a9a9a9a',

                        name: 'React',

                        slug: 'react',

                        category: 'Frontend',

                        proficiency: 95,

                        image: {
                          url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png',

                          publicId: 'portfolio/skills/react',
                        },

                        description:
                          'Building scalable user interfaces using React and TypeScript.',

                        sortOrder: 1,

                        isActive: true,

                        isAdvanced: true,

                        isIntermediate: false,

                        isBeginner: false,

                        proficiencyLevel: 'Expert',

                        isVisible: true,

                        createdAt: '2026-06-26T08:30:00.000Z',

                        updatedAt: '2026-06-26T08:30:00.000Z',
                      },

                      {
                        _id: '685b0d6c7e5e8d1a9a9a9a9b',

                        name: 'Node.js',

                        slug: 'node-js',

                        category: 'Backend',

                        proficiency: 92,

                        image: {
                          url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nodejs.png',

                          publicId: 'portfolio/skills/nodejs',
                        },

                        description: 'Building scalable REST APIs with Express.js.',

                        sortOrder: 2,

                        isActive: true,

                        isAdvanced: true,

                        isIntermediate: false,

                        isBeginner: false,

                        proficiencyLevel: 'Expert',

                        isVisible: true,

                        createdAt: '2026-06-26T08:30:00.000Z',

                        updatedAt: '2026-06-26T08:30:00.000Z',
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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

  '/skills/category/{category}': {
    get: {
      tags: ['Skills'],

      operationId: 'getSkillsByCategory',

      summary: 'Get skills by category',

      description: 'Retrieve all active skills belonging to a specific category.',

      parameters: [
        {
          in: 'path',

          name: 'category',

          required: true,

          description: 'Skill category.',

          schema: {
            type: 'string',

            enum: skillCategoryEnum,
          },

          example: 'Frontend',
        },
      ],

      responses: {
        200: {
          description: 'Skills retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ActiveSkillsResponse',
              },

              examples: {
                frontend: {
                  summary: 'Frontend Skills',

                  value: {
                    success: true,

                    statusCode: 200,

                    message: 'Skill retrieved successfully',

                    data: [
                      {
                        _id: '685b0d6c7e5e8d1a9a9a9a9a',

                        name: 'React',

                        slug: 'react',

                        category: 'Frontend',

                        proficiency: 95,

                        image: {
                          url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png',

                          publicId: 'portfolio/skills/react',
                        },

                        description: 'Building scalable React applications.',

                        sortOrder: 1,

                        isActive: true,

                        isAdvanced: true,

                        isIntermediate: false,

                        isBeginner: false,

                        proficiencyLevel: 'Expert',

                        isVisible: true,

                        createdAt: '2026-06-26T08:30:00.000Z',

                        updatedAt: '2026-06-26T08:30:00.000Z',
                      },

                      {
                        _id: '685b0d6c7e5e8d1a9a9a9a9c',

                        name: 'Next.js',

                        slug: 'next-js',

                        category: 'Frontend',

                        proficiency: 93,

                        image: {
                          url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nextjs.png',

                          publicId: 'portfolio/skills/nextjs',
                        },

                        description: 'Production-grade React framework.',

                        sortOrder: 2,

                        isActive: true,

                        isAdvanced: true,

                        isIntermediate: false,

                        isBeginner: false,

                        proficiencyLevel: 'Expert',

                        isVisible: true,

                        createdAt: '2026-06-26T08:30:00.000Z',

                        updatedAt: '2026-06-26T08:30:00.000Z',
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid category.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        404: {
          description: 'Skill not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
  '/skills/{id}': {
    get: {
      tags: ['Skills'],

      operationId: 'getSkillById',

      summary: 'Get skill by ID',

      description: 'Retrieve a single skill using its MongoDB ObjectId.',

      parameters: [
        {
          in: 'path',

          name: 'id',

          required: true,

          description: 'MongoDB Skill ID.',

          schema: {
            type: 'string',
          },

          example: '685b0d6c7e5e8d1a9a9a9a9a',
        },
      ],

      responses: {
        200: {
          description: 'Skill retrieved successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SkillResponse',
              },
            },
          },
        },

        404: {
          description: 'Skill not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
      tags: ['Skills'],

      operationId: 'updateSkill',

      summary: 'Update skill',

      description:
        'Update an existing skill. Only administrators are authorized to perform this operation.',

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

          description: 'MongoDB Skill ID.',

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
              $ref: '#/components/schemas/UpdateSkillRequest',
            },

            examples: {
              updateSkill: {
                summary: 'Update React Skill',

                value: {
                  name: 'React',

                  category: 'Frontend',

                  proficiency: 98,

                  image: {
                    url: 'https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png',

                    publicId: 'portfolio/skills/react',
                  },

                  description:
                    'Building enterprise-grade React applications using React 19, TypeScript and Next.js.',

                  sortOrder: 1,

                  isActive: true,
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Skill updated successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SkillResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ValidationErrorResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        404: {
          description: 'Skill not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        409: {
          description: 'Skill already exists.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
      tags: ['Skills'],

      operationId: 'deleteSkill',

      summary: 'Delete skill',

      description:
        'Delete a skill using its MongoDB ObjectId. Only administrators are authorized to delete skills.',

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

          description: 'MongoDB Skill ID.',

          schema: {
            type: 'string',
          },

          example: '685b0d6c7e5e8d1a9a9a9a9a',
        },
      ],

      responses: {
        200: {
          description: 'Skill deleted successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteSkillResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ForbiddenResponse',
              },
            },
          },
        },

        404: {
          description: 'Skill not found.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

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
