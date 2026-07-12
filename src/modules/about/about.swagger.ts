// src/modules/about/about.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { ABOUT_DEFAULT, ABOUT_MESSAGE, ABOUT_VALIDATION } from './about.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Example Objects                              */
/* -------------------------------------------------------------------------- */
const aboutExample = {
  _id: '6848d5a4b63f9f4d9b8c5678',

  profileImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-profile.jpg',

    publicId: 'portfolio/about-profile',
  },

  images: [
    {
      url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-1.jpg',

      publicId: 'portfolio/about-1',
    },
    {
      url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-2.jpg',

      publicId: 'portfolio/about-2',
    },
  ],

  fullName: 'Bharani',

  designation: 'Full Stack Developer',

  bio: 'Passionate Full Stack Developer with experience building scalable web applications, REST APIs, cloud-native solutions, and cross-platform mobile applications.',

  email: 'bharani@example.com',

  phone: '+91 9876543210',

  address: 'Tamil Nadu, India',

  resumeUrl: 'https://example.com/resume.pdf',

  yearsOfExperience: 5,

  stats: [
    {
      label: 'Projects',

      value: '50+',
    },
    {
      label: 'Clients',

      value: '20+',
    },
    {
      label: 'Experience',

      value: '5+ Years',
    },
  ],

  totalImages: 2,

  totalStats: 3,

  isActive: true,

  createdAt: '2026-01-15T09:15:12.000Z',

  updatedAt: '2026-06-20T14:45:30.000Z',
};

const createAboutExample = {
  profileImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-profile.jpg',

    publicId: 'portfolio/about-profile',
  },

  images: [
    {
      url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-1.jpg',

      publicId: 'portfolio/about-1',
    },
    {
      url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/about-2.jpg',

      publicId: 'portfolio/about-2',
    },
  ],

  fullName: 'Bharani',

  designation: 'Full Stack Developer',

  bio: 'Passionate Full Stack Developer specializing in React, Node.js, Laravel, Flutter, MongoDB, and cloud technologies.',

  email: 'bharani@example.com',

  phone: '+91 9876543210',

  address: 'Tamil Nadu, India',

  resumeUrl: 'https://example.com/resume.pdf',

  yearsOfExperience: 5,

  stats: [
    {
      label: 'Projects',

      value: '50+',
    },
    {
      label: 'Clients',

      value: '20+',
    },
  ],

  isActive: ABOUT_DEFAULT.IS_ACTIVE,
};

const updateAboutExample = {
  designation: 'Senior Full Stack Developer',

  bio: 'Experienced Full Stack Developer building enterprise-grade web, mobile, and cloud applications.',

  yearsOfExperience: 6,

  stats: [
    {
      label: 'Projects',

      value: '70+',
    },
    {
      label: 'Clients',

      value: '30+',
    },
    {
      label: 'Experience',

      value: '6+ Years',
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                             Component Schemas                              */
/* -------------------------------------------------------------------------- */

export const aboutSchemas = {
  AboutImage: {
    type: 'object',

    description: 'Image information used in the About section.',

    additionalProperties: false,

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        description: 'Cloudinary image URL.',

        maxLength: 2048,

        example: aboutExample.profileImage.url,
      },

      publicId: {
        type: 'string',

        description: 'Cloudinary public identifier.',

        maxLength: 255,

        example: aboutExample.profileImage.publicId,
      },
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                              About Stat Schema                             */
  /* -------------------------------------------------------------------------- */

  AboutStat: {
    type: 'object',

    description: 'Portfolio statistic displayed in the About section.',

    additionalProperties: false,

    required: ['label', 'value'],

    properties: {
      label: {
        type: 'string',

        minLength: 1,

        maxLength: ABOUT_VALIDATION.STAT.LABEL_MAX_LENGTH,

        description: 'Statistic label.',

        example: 'Projects',
      },

      value: {
        type: 'string',

        minLength: 1,

        maxLength: ABOUT_VALIDATION.STAT.VALUE_MAX_LENGTH,

        description: 'Statistic value.',

        example: '50+',
      },
    },

    example: {
      label: 'Projects',

      value: '50+',
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                                About Schema                                */
  /* -------------------------------------------------------------------------- */

  About: {
    type: 'object',

    description: 'Portfolio About section.',

    additionalProperties: false,

    required: ['images', 'fullName', 'designation', 'bio', 'isActive'],

    properties: {
      _id: {
        type: 'string',

        readOnly: true,

        description: 'About document ID.',

        example: aboutExample._id,
      },

      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/AboutImage',
          },
        ],

        nullable: true,

        description: 'Primary profile image.',
      },

      images: {
        type: 'array',

        description: 'Gallery images displayed in the About section.',

        minItems: 1,

        maxItems: ABOUT_VALIDATION.IMAGE.MAX_COUNT,

        items: {
          $ref: '#/components/schemas/AboutImage',
        },

        example: aboutExample.images,
      },

      fullName: {
        type: 'string',

        minLength: ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,

        description: 'Full name.',

        example: aboutExample.fullName,
      },

      designation: {
        type: 'string',

        minLength: ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,

        description: 'Professional designation.',

        example: aboutExample.designation,
      },

      bio: {
        type: 'string',

        minLength: 1,

        maxLength: ABOUT_VALIDATION.BIO.MAX_LENGTH,

        description: 'Professional biography.',

        example: aboutExample.bio,
      },

      email: {
        type: 'string',

        format: 'email',

        nullable: true,

        maxLength: ABOUT_VALIDATION.EMAIL.MAX_LENGTH,

        description: 'Professional email address.',

        example: aboutExample.email,
      },

      phone: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.PHONE.MAX_LENGTH,

        description: 'Contact phone number.',

        example: aboutExample.phone,
      },
      address: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,

        description: 'Current address or location.',

        example: aboutExample.address,
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH,

        description: 'Resume download URL.',

        example: aboutExample.resumeUrl,
      },

      yearsOfExperience: {
        type: 'integer',

        minimum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,

        maximum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,

        nullable: true,

        description: 'Total years of professional experience.',

        example: aboutExample.yearsOfExperience,
      },

      stats: {
        type: 'array',

        nullable: true,

        description: 'Portfolio statistics displayed in the About section.',

        maxItems: ABOUT_VALIDATION.STAT.MAX_COUNT,

        items: {
          $ref: '#/components/schemas/AboutStat',
        },

        example: aboutExample.stats,
      },

      totalImages: {
        type: 'integer',

        readOnly: true,

        description: 'Total number of gallery images.',

        example: aboutExample.totalImages,
      },

      totalStats: {
        type: 'integer',

        readOnly: true,

        description: 'Total number of statistics.',

        example: aboutExample.totalStats,
      },

      isActive: {
        type: 'boolean',

        default: ABOUT_DEFAULT.IS_ACTIVE,

        description: 'Whether the About section is publicly visible.',

        example: aboutExample.isActive,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Creation timestamp.',

        example: aboutExample.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Last update timestamp.',

        example: aboutExample.updatedAt,
      },
    },

    example: aboutExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                              Request Schemas                               */
  /* -------------------------------------------------------------------------- */
  CreateAboutRequest: {
    type: 'object',

    description: 'Request payload for creating the About section.',

    additionalProperties: false,

    required: ['images', 'fullName', 'designation', 'bio'],

    properties: {
      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/AboutImage',
          },
        ],

        nullable: true,
      },

      images: {
        type: 'array',

        minItems: 1,

        maxItems: ABOUT_VALIDATION.IMAGE.MAX_COUNT,

        description:
          'Gallery images for the About section. Duplicate URLs and public IDs are not allowed.',

        items: {
          $ref: '#/components/schemas/AboutImage',
        },

        example: createAboutExample.images,
      },

      fullName: {
        type: 'string',

        minLength: ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,

        example: createAboutExample.fullName,
      },

      designation: {
        type: 'string',

        minLength: ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,

        example: createAboutExample.designation,
      },

      bio: {
        type: 'string',

        minLength: 1,

        maxLength: ABOUT_VALIDATION.BIO.MAX_LENGTH,

        example: createAboutExample.bio,
      },

      email: {
        type: 'string',

        format: 'email',

        nullable: true,

        maxLength: ABOUT_VALIDATION.EMAIL.MAX_LENGTH,

        example: createAboutExample.email,
      },

      phone: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.PHONE.MAX_LENGTH,

        example: createAboutExample.phone,
      },

      address: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,

        example: createAboutExample.address,
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH,

        example: createAboutExample.resumeUrl,
      },

      yearsOfExperience: {
        type: 'integer',

        minimum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,

        maximum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,

        nullable: true,

        example: createAboutExample.yearsOfExperience,
      },

      stats: {
        type: 'array',

        nullable: true,

        maxItems: ABOUT_VALIDATION.STAT.MAX_COUNT,

        description: 'Portfolio statistics. Duplicate labels are not allowed.',

        items: {
          $ref: '#/components/schemas/AboutStat',
        },

        example: createAboutExample.stats,
      },

      isActive: {
        type: 'boolean',

        default: ABOUT_DEFAULT.IS_ACTIVE,

        example: createAboutExample.isActive,
      },
    },

    example: createAboutExample,
  },
  UpdateAboutRequest: {
    type: 'object',

    description: 'Request payload for updating the About section.',

    additionalProperties: false,

    properties: {
      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/AboutImage',
          },
        ],

        nullable: true,
      },

      images: {
        type: 'array',

        minItems: 1,

        maxItems: ABOUT_VALIDATION.IMAGE.MAX_COUNT,

        description: 'Updated gallery images. Duplicate URLs and public IDs are not allowed.',

        items: {
          $ref: '#/components/schemas/AboutImage',
        },

        example: createAboutExample.images,
      },

      fullName: {
        type: 'string',

        minLength: ABOUT_VALIDATION.FULL_NAME.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.FULL_NAME.MAX_LENGTH,

        example: aboutExample.fullName,
      },

      designation: {
        type: 'string',

        minLength: ABOUT_VALIDATION.DESIGNATION.MIN_LENGTH,

        maxLength: ABOUT_VALIDATION.DESIGNATION.MAX_LENGTH,

        example: updateAboutExample.designation,
      },

      bio: {
        type: 'string',

        minLength: 1,

        maxLength: ABOUT_VALIDATION.BIO.MAX_LENGTH,

        example: updateAboutExample.bio,
      },

      email: {
        type: 'string',

        format: 'email',

        nullable: true,

        maxLength: ABOUT_VALIDATION.EMAIL.MAX_LENGTH,

        example: aboutExample.email,
      },

      phone: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.PHONE.MAX_LENGTH,

        example: aboutExample.phone,
      },

      address: {
        type: 'string',

        nullable: true,

        maxLength: ABOUT_VALIDATION.ADDRESS.MAX_LENGTH,

        example: aboutExample.address,
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: ABOUT_VALIDATION.RESUME_URL.MAX_LENGTH,

        example: aboutExample.resumeUrl,
      },

      yearsOfExperience: {
        type: 'integer',

        minimum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MIN,

        maximum: ABOUT_VALIDATION.YEARS_OF_EXPERIENCE.MAX,

        nullable: true,

        example: updateAboutExample.yearsOfExperience,
      },

      stats: {
        type: 'array',

        nullable: true,

        maxItems: ABOUT_VALIDATION.STAT.MAX_COUNT,

        description: 'Updated portfolio statistics. Duplicate labels are not allowed.',

        items: {
          $ref: '#/components/schemas/AboutStat',
        },

        example: updateAboutExample.stats,
      },

      isActive: {
        type: 'boolean',

        example: true,
      },
    },

    example: updateAboutExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                             Response Schemas                               */
  /* -------------------------------------------------------------------------- */
  AboutResponse: {
    type: 'object',

    description: 'Successful About API response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: ABOUT_MESSAGE.RETRIEVED,
      },

      data: {
        $ref: '#/components/schemas/About',
      },
    },
  },

  DeleteAboutResponse: {
    type: 'object',

    description: 'Successful About deletion response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: ABOUT_MESSAGE.DELETED,
      },

      data: {
        type: 'null',

        example: null,
      },
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                               Error Schemas                                */
  /* -------------------------------------------------------------------------- */

  ValidationErrorResponse: {
    type: 'object',

    description: 'Validation error response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: 'Validation Error',
      },

      errorSources: {
        type: 'array',

        items: {
          type: 'object',

          additionalProperties: false,

          properties: {
            path: {
              type: 'string',

              example: 'fullName',
            },

            message: {
              type: 'string',

              example: 'Full name is required',
            },
          },
        },
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },

  UnauthorizedResponse: {
    type: 'object',

    description: 'Authentication failed.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: 'Unauthorized access',
      },

      errorSources: {
        type: 'array',

        example: [],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },
  ForbiddenResponse: {
    type: 'object',

    description: 'User does not have permission to access this resource.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: 'Forbidden',
      },

      errorSources: {
        type: 'array',

        example: [],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },

  NotFoundResponse: {
    type: 'object',

    description: 'Requested About section was not found.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: ABOUT_MESSAGE.NOT_FOUND,
      },

      errorSources: {
        type: 'array',

        example: [],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },

  ConflictResponse: {
    type: 'object',

    description: 'Conflict response when an About section already exists.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: ABOUT_MESSAGE.ALREADY_EXISTS,
      },

      errorSources: {
        type: 'array',

        example: [],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },

  InternalServerErrorResponse: {
    type: 'object',

    description: 'Unexpected server error.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: 'Something went wrong',
      },

      errorSources: {
        type: 'array',

        example: [],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const aboutPaths = {
  '/about': {
    get: {
      tags: ['About'],

      operationId: 'getAbout',

      summary: 'Get About section',

      description: 'Retrieve the portfolio About section displayed on the public website.',

      responses: {
        200: {
          description: ABOUT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AboutResponse',
              },

              examples: {
                success: {
                  summary: 'About section retrieved successfully',

                  value: {
                    success: true,

                    message: ABOUT_MESSAGE.RETRIEVED,

                    data: aboutExample,
                  },
                },
              },
            },
          },
        },

        404: {
          description: ABOUT_MESSAGE.NOT_FOUND,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

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
      tags: ['About'],

      operationId: 'createAbout',

      summary: 'Create About section',

      description:
        'Create the portfolio About section. Only one About section can exist at a time.',

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
              $ref: '#/components/schemas/CreateAboutRequest',
            },

            examples: {
              default: {
                summary: 'Create About section',

                value: createAboutExample,
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: ABOUT_MESSAGE.CREATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AboutResponse',
              },

              examples: {
                success: {
                  summary: 'About section created successfully',

                  value: {
                    success: true,

                    message: ABOUT_MESSAGE.CREATED,

                    data: aboutExample,
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Validation Error',

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
          description: ABOUT_MESSAGE.ALREADY_EXISTS,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

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
      tags: ['About'],

      operationId: 'updateAbout',

      summary: 'Update About section',

      description:
        'Update the existing portfolio About section. Only administrators can perform this operation.',

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
              $ref: '#/components/schemas/UpdateAboutRequest',
            },

            examples: {
              default: {
                summary: 'Update About section',

                value: updateAboutExample,
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: ABOUT_MESSAGE.UPDATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/AboutResponse',
              },

              examples: {
                success: {
                  summary: 'About section updated successfully',

                  value: {
                    success: true,

                    message: ABOUT_MESSAGE.UPDATED,

                    data: {
                      ...aboutExample,

                      ...updateAboutExample,

                      totalStats: updateAboutExample.stats?.length ?? aboutExample.totalStats,
                    },
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Validation Error',

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
          description: ABOUT_MESSAGE.NOT_FOUND,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

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
      tags: ['About'],

      operationId: 'deleteAbout',

      summary: 'Delete About section',

      description:
        'Delete the existing About section from the portfolio. Only administrators can perform this operation.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: ABOUT_MESSAGE.DELETED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteAboutResponse',
              },

              examples: {
                success: {
                  summary: 'About section deleted successfully',

                  value: {
                    success: true,

                    message: ABOUT_MESSAGE.DELETED,

                    data: null,
                  },
                },
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
          description: ABOUT_MESSAGE.NOT_FOUND,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal Server Error',

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
} as const;
