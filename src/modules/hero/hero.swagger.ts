// src/modules/hero/hero.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { HERO_DEFAULT, HERO_MESSAGE, HERO_VALIDATION } from './hero.constant.js';

/* -------------------------------------------------------------------------- */
/*                               Example Objects                              */
/* -------------------------------------------------------------------------- */

const heroExample = {
  _id: '6848d5a4b63f9f4d9b8c1234',

  title: "Hi, I'm Bharani",

  subtitle: 'Full Stack Developer',

  description:
    'Passionate Full Stack Developer specializing in scalable web applications, REST APIs, modern frontend frameworks, cloud deployment, and mobile development.',

  profileImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/profile.jpg',

    publicId: 'portfolio/profile-image',
  },

  resumeUrl: 'https://example.com/resume.pdf',

  ctaButtonText: 'Download Resume',

  ctaButtonLink: 'https://example.com/resume.pdf',

  technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Flutter'],

  technologyCount: 7,

  hasResume: true,

  hasProfileImage: true,

  hasCallToAction: true,

  isActive: true,

  createdAt: '2026-01-15T09:15:12.000Z',

  updatedAt: '2026-06-20T14:45:30.000Z',
};

const createHeroExample = {
  title: "Hi, I'm Bharani",

  subtitle: 'Full Stack Developer',

  description:
    'Passionate Full Stack Developer specializing in scalable web applications, REST APIs, cloud deployment, and modern frontend technologies.',

  profileImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1/portfolio/profile.jpg',

    publicId: 'portfolio/profile-image',
  },

  resumeUrl: 'https://example.com/resume.pdf',

  ctaButtonText: 'Download Resume',

  ctaButtonLink: 'https://example.com/resume.pdf',

  technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],

  isActive: HERO_DEFAULT.IS_ACTIVE,
};

const updateHeroExample = {
  subtitle: 'Senior Full Stack Developer',

  description:
    'Experienced Full Stack Developer building enterprise-grade applications using React, Node.js, Laravel, Flutter, and cloud-native technologies.',

  technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'MongoDB', 'Docker'],
};

/* -------------------------------------------------------------------------- */
/*                             Component Schemas                              */
/* -------------------------------------------------------------------------- */

export const heroSchemas = {
  HeroImage: {
    type: 'object',

    description: 'Profile image information.',

    additionalProperties: false,

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        maxLength: HERO_VALIDATION.IMAGE.URL_MAX_LENGTH,

        description: 'Cloudinary image URL.',

        example: heroExample.profileImage.url,
      },

      publicId: {
        type: 'string',

        maxLength: HERO_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,

        description: 'Cloudinary public identifier.',

        example: heroExample.profileImage.publicId,
      },
    },
  },

  Hero: {
    type: 'object',

    description: 'Portfolio Hero section.',

    additionalProperties: false,

    required: ['title', 'subtitle', 'description', 'technologies', 'isActive'],

    properties: {
      _id: {
        type: 'string',

        readOnly: true,

        description: 'Hero document ID.',

        example: heroExample._id,
      },

      title: {
        type: 'string',

        minLength: HERO_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.TITLE.MAX_LENGTH,

        description: 'Main hero heading.',

        example: heroExample.title,
      },

      subtitle: {
        type: 'string',

        minLength: HERO_VALIDATION.SUBTITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.SUBTITLE.MAX_LENGTH,

        description: 'Hero subtitle.',

        example: heroExample.subtitle,
      },

      description: {
        type: 'string',

        minLength: HERO_VALIDATION.DESCRIPTION.MIN_LENGTH,

        maxLength: HERO_VALIDATION.DESCRIPTION.MAX_LENGTH,

        description: 'Hero description.',

        example: heroExample.description,
      },

      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/HeroImage',
          },
        ],

        nullable: true,

        description: 'Profile image.',
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: HERO_VALIDATION.RESUME_URL.MAX_LENGTH,

        description: 'Resume download URL.',

        example: heroExample.resumeUrl,
      },

      ctaButtonText: {
        type: 'string',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH,

        description: 'CTA button label.',

        example: heroExample.ctaButtonText,
      },

      ctaButtonLink: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_LINK.MAX_LENGTH,

        description: 'CTA button destination URL.',

        example: heroExample.ctaButtonLink,
      },
      technologies: {
        type: 'array',

        description:
          'Technologies displayed in the Hero section. Duplicate values are not allowed.',

        maxItems: HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT,

        example: heroExample.technologies,

        items: {
          type: 'string',

          minLength: 1,

          maxLength: HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH,

          example: 'React',
        },
      },

      technologyCount: {
        type: 'integer',

        readOnly: true,

        description: 'Total number of technologies.',

        example: heroExample.technologyCount,
      },

      hasResume: {
        type: 'boolean',

        readOnly: true,

        description: 'Whether a resume URL has been configured.',

        example: heroExample.hasResume,
      },

      hasProfileImage: {
        type: 'boolean',

        readOnly: true,

        description: 'Whether a profile image has been configured.',

        example: heroExample.hasProfileImage,
      },

      hasCallToAction: {
        type: 'boolean',

        readOnly: true,

        description: 'Whether both CTA button text and link are configured.',

        example: heroExample.hasCallToAction,
      },

      isActive: {
        type: 'boolean',

        default: HERO_DEFAULT.IS_ACTIVE,

        description: 'Whether the Hero section is publicly visible.',

        example: heroExample.isActive,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Creation timestamp.',

        example: heroExample.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Last update timestamp.',

        example: heroExample.updatedAt,
      },
    },

    example: heroExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                              Request Schemas                               */
  /* -------------------------------------------------------------------------- */

  CreateHeroRequest: {
    type: 'object',

    description: 'Request payload for creating the Hero section.',

    additionalProperties: false,

    required: ['title', 'subtitle', 'description'],

    properties: {
      title: {
        type: 'string',

        minLength: HERO_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.TITLE.MAX_LENGTH,

        example: createHeroExample.title,
      },

      subtitle: {
        type: 'string',

        minLength: HERO_VALIDATION.SUBTITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.SUBTITLE.MAX_LENGTH,

        example: createHeroExample.subtitle,
      },

      description: {
        type: 'string',

        minLength: HERO_VALIDATION.DESCRIPTION.MIN_LENGTH,

        maxLength: HERO_VALIDATION.DESCRIPTION.MAX_LENGTH,

        example: createHeroExample.description,
      },

      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/HeroImage',
          },
        ],

        nullable: true,
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        maxLength: HERO_VALIDATION.RESUME_URL.MAX_LENGTH,

        nullable: true,

        example: createHeroExample.resumeUrl,
      },

      ctaButtonText: {
        type: 'string',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH,

        example: createHeroExample.ctaButtonText,
      },

      ctaButtonLink: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_LINK.MAX_LENGTH,

        example: createHeroExample.ctaButtonLink,
      },
      technologies: {
        type: 'array',

        description:
          'Technologies displayed in the Hero section. Duplicate technology names are not allowed.',

        maxItems: HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT,

        items: {
          type: 'string',

          minLength: 1,

          maxLength: HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH,

          example: 'React',
        },

        example: createHeroExample.technologies,
      },

      isActive: {
        type: 'boolean',

        default: HERO_DEFAULT.IS_ACTIVE,

        example: createHeroExample.isActive,
      },
    },

    example: createHeroExample,
  },

  UpdateHeroRequest: {
    type: 'object',

    description: 'Request payload for updating the Hero section.',

    additionalProperties: false,

    properties: {
      title: {
        type: 'string',

        minLength: HERO_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.TITLE.MAX_LENGTH,

        example: updateHeroExample.subtitle ?? heroExample.title,
      },

      subtitle: {
        type: 'string',

        minLength: HERO_VALIDATION.SUBTITLE.MIN_LENGTH,

        maxLength: HERO_VALIDATION.SUBTITLE.MAX_LENGTH,

        example: updateHeroExample.subtitle,
      },

      description: {
        type: 'string',

        minLength: HERO_VALIDATION.DESCRIPTION.MIN_LENGTH,

        maxLength: HERO_VALIDATION.DESCRIPTION.MAX_LENGTH,

        example: updateHeroExample.description,
      },

      profileImage: {
        allOf: [
          {
            $ref: '#/components/schemas/HeroImage',
          },
        ],

        nullable: true,
      },

      resumeUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: HERO_VALIDATION.RESUME_URL.MAX_LENGTH,

        example: heroExample.resumeUrl,
      },

      ctaButtonText: {
        type: 'string',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_TEXT.MAX_LENGTH,

        example: heroExample.ctaButtonText,
      },

      ctaButtonLink: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: HERO_VALIDATION.CTA_BUTTON_LINK.MAX_LENGTH,

        example: heroExample.ctaButtonLink,
      },

      technologies: {
        type: 'array',

        maxItems: HERO_VALIDATION.TECHNOLOGIES.MAX_COUNT,

        description: 'Updated technologies. Duplicate values are not allowed.',

        items: {
          type: 'string',

          minLength: 1,

          maxLength: HERO_VALIDATION.TECHNOLOGIES.MAX_LENGTH,

          example: 'Next.js',
        },

        example: updateHeroExample.technologies,
      },

      isActive: {
        type: 'boolean',

        example: true,
      },
    },

    example: updateHeroExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                             Response Schemas                               */
  /* -------------------------------------------------------------------------- */

  HeroResponse: {
    type: 'object',

    description: 'Successful Hero API response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: HERO_MESSAGE.RETRIEVED,
      },

      data: {
        $ref: '#/components/schemas/Hero',
      },
    },
  },

  DeleteHeroResponse: {
    type: 'object',

    description: 'Successful Hero deletion response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: HERO_MESSAGE.DELETED,
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

              example: 'title',
            },

            message: {
              type: 'string',

              example: 'Title must be at least 2 characters',
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

    description: 'Requested Hero section was not found.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: HERO_MESSAGE.NOT_FOUND,
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

    description: 'Conflict response when a Hero section already exists.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: HERO_MESSAGE.ALREADY_EXISTS,
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

export const heroPaths = {
  '/hero': {
    get: {
      tags: ['Hero'],

      operationId: 'getHero',

      summary: 'Get Hero section',

      description: 'Retrieve the portfolio Hero section displayed on the public homepage.',
      responses: {
        200: {
          description: HERO_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HeroResponse',
              },

              examples: {
                success: {
                  summary: 'Hero retrieved successfully',

                  value: {
                    success: true,

                    message: HERO_MESSAGE.RETRIEVED,

                    data: heroExample,
                  },
                },
              },
            },
          },
        },

        404: {
          description: HERO_MESSAGE.NOT_FOUND,

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
      tags: ['Hero'],

      operationId: 'createHero',

      summary: 'Create Hero section',

      description: 'Create the portfolio Hero section. Only one Hero section can exist at a time.',

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
              $ref: '#/components/schemas/CreateHeroRequest',
            },

            examples: {
              default: {
                summary: 'Create Hero',

                value: createHeroExample,
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: HERO_MESSAGE.CREATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HeroResponse',
              },

              examples: {
                success: {
                  summary: 'Hero created',

                  value: {
                    success: true,

                    message: HERO_MESSAGE.CREATED,

                    data: heroExample,
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
          description: HERO_MESSAGE.ALREADY_EXISTS,

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
      tags: ['Hero'],

      operationId: 'updateHero',

      summary: 'Update Hero section',

      description:
        'Update the existing portfolio Hero section. Only administrators can perform this operation.',

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
              $ref: '#/components/schemas/UpdateHeroRequest',
            },

            examples: {
              default: {
                summary: 'Update Hero',

                value: updateHeroExample,
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: HERO_MESSAGE.UPDATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/HeroResponse',
              },

              examples: {
                success: {
                  summary: 'Hero updated successfully',

                  value: {
                    success: true,

                    message: HERO_MESSAGE.UPDATED,

                    data: {
                      ...heroExample,

                      ...updateHeroExample,

                      technologyCount:
                        updateHeroExample.technologies?.length ?? heroExample.technologyCount,
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
          description: HERO_MESSAGE.NOT_FOUND,

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
      tags: ['Hero'],

      operationId: 'deleteHero',

      summary: 'Delete Hero section',

      description:
        'Delete the existing Hero section from the portfolio. Only administrators can perform this operation.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: HERO_MESSAGE.DELETED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteHeroResponse',
              },

              examples: {
                success: {
                  summary: 'Hero deleted successfully',

                  value: {
                    success: true,

                    message: HERO_MESSAGE.DELETED,

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
          description: HERO_MESSAGE.NOT_FOUND,

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
