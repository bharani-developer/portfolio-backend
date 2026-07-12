// src/modules/settings/settings.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Tags                                     */
/* -------------------------------------------------------------------------- */

export const settingsTags = [
  {
    name: 'Settings',
    description:
      'Portfolio application settings management endpoints. This singleton resource stores website branding, contact information, SEO configuration, social links, and related metadata.',
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                                  Schemas                                   */
/* -------------------------------------------------------------------------- */

export const settingsSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                               Image Schema                               */
  /* ------------------------------------------------------------------------ */

  SettingsImage: {
    type: 'object',

    additionalProperties: false,

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',
        format: 'uri',
        description: 'Cloudinary image URL.',
        example: 'https://res.cloudinary.com/demo/image/upload/v1740000000/portfolio/logo.png',
      },

      publicId: {
        type: 'string',
        description: 'Cloudinary public identifier.',
        example: 'portfolio/logo',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                           Social Links Schema                            */
  /* ------------------------------------------------------------------------ */

  SettingsSocialLinks: {
    type: 'object',

    additionalProperties: false,

    properties: {
      github: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://github.com/bharani',
      },

      linkedin: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://linkedin.com/in/bharani',
      },

      twitter: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://twitter.com/bharani',
      },

      facebook: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://facebook.com/bharani',
      },

      instagram: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://instagram.com/bharani',
      },

      youtube: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://youtube.com/@bharani',
      },

      leetcode: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://leetcode.com/u/bharani',
      },

      hackerrank: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://www.hackerrank.com/bharani',
      },

      stackoverflow: {
        type: 'string',
        format: 'uri',
        nullable: true,
        example: 'https://stackoverflow.com/users/1234567/bharani',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                               SEO Schema                                 */
  /* ------------------------------------------------------------------------ */

  SettingsSeo: {
    type: 'object',

    additionalProperties: false,

    required: ['metaTitle', 'metaDescription', 'metaKeywords', 'siteUrl'],

    properties: {
      metaTitle: {
        type: 'string',
        minLength: 10,
        maxLength: 70,
        description: 'SEO meta title.',
        example: 'Bharani | Full Stack Developer',
      },

      metaDescription: {
        type: 'string',
        minLength: 50,
        maxLength: 160,
        description: 'SEO meta description.',
        example:
          'Professional Full Stack Developer specializing in React, Node.js, Laravel, Flutter and modern web technologies.',
      },

      metaKeywords: {
        type: 'array',

        description: 'SEO keywords.',

        maxItems: 20,

        items: {
          type: 'string',
          maxLength: 50,
          example: 'Full Stack Developer',
        },

        example: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Laravel', 'Flutter'],
      },

      siteUrl: {
        type: 'string',
        format: 'uri',
        maxLength: 500,
        description: 'Canonical website URL.',
        example: 'https://bharani.dev',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                             Settings Schema                              */
  /* ------------------------------------------------------------------------ */

  Settings: {
    type: 'object',

    additionalProperties: false,

    required: [
      '_id',
      'siteTitle',
      'siteDescription',
      'email',
      'phone',
      'address',
      'socialLinks',
      'seo',
      'createdAt',
      'updatedAt',
    ],

    properties: {
      _id: {
        type: 'string',
        example: '684cf7e1f2d4ab2e6d8d1234',
      },

      siteTitle: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
        example: 'Bharani Portfolio',
      },

      siteDescription: {
        type: 'string',
        minLength: 10,
        maxLength: 500,
        example:
          'Professional portfolio showcasing projects, blogs, experience, skills and services.',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'bharani@example.com',
      },

      phone: {
        type: 'string',
        example: '+91 9876543210',
      },

      address: {
        type: 'string',
        example: 'Tamil Nadu, India',
      },

      logo: {
        nullable: true,
        allOf: [
          {
            $ref: '#/components/schemas/SettingsImage',
          },
        ],
      },

      favicon: {
        nullable: true,
        allOf: [
          {
            $ref: '#/components/schemas/SettingsImage',
          },
        ],
      },

      socialLinks: {
        $ref: '#/components/schemas/SettingsSocialLinks',
      },

      seo: {
        $ref: '#/components/schemas/SettingsSeo',
      },

      createdAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T08:00:00.000Z',
      },

      updatedAt: {
        type: 'string',
        format: 'date-time',
        example: '2026-07-07T08:15:00.000Z',
      },
    },
  },
} as const;
/* -------------------------------------------------------------------------- */
/*                             Request Schemas                                */
/* -------------------------------------------------------------------------- */

export const settingsRequestSchemas = {
  /* ------------------------------------------------------------------------ */
  /*                       Create Settings Request                            */
  /* ------------------------------------------------------------------------ */

  CreateSettingsRequest: {
    type: 'object',

    additionalProperties: false,

    required: ['siteTitle', 'siteDescription', 'email', 'phone', 'address', 'seo'],

    properties: {
      siteTitle: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
        example: 'Bharani Portfolio',
      },

      siteDescription: {
        type: 'string',
        minLength: 10,
        maxLength: 500,
        example:
          'Professional Full Stack Developer portfolio showcasing projects, blogs and experience.',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'bharani@example.com',
      },

      phone: {
        type: 'string',
        example: '+91 9876543210',
      },

      address: {
        type: 'string',
        example: 'Tamil Nadu, India',
      },

      logo: {
        $ref: '#/components/schemas/SettingsImage',
      },

      favicon: {
        $ref: '#/components/schemas/SettingsImage',
      },

      socialLinks: {
        $ref: '#/components/schemas/SettingsSocialLinks',
      },

      seo: {
        $ref: '#/components/schemas/SettingsSeo',
      },
    },

    example: {
      siteTitle: 'Bharani Portfolio',
      siteDescription:
        'Professional Full Stack Developer portfolio showcasing projects, blogs and experience.',
      email: 'bharani@example.com',
      phone: '+91 9876543210',
      address: 'Tamil Nadu, India',

      logo: {
        url: 'https://res.cloudinary.com/demo/image/upload/logo.png',
        publicId: 'portfolio/logo',
      },

      favicon: {
        url: 'https://res.cloudinary.com/demo/image/upload/favicon.png',
        publicId: 'portfolio/favicon',
      },

      socialLinks: {
        github: 'https://github.com/bharani',
        linkedin: 'https://linkedin.com/in/bharani',
        twitter: 'https://twitter.com/bharani',
        instagram: 'https://instagram.com/bharani',
      },

      seo: {
        metaTitle: 'Bharani | Full Stack Developer',
        metaDescription:
          'Professional Full Stack Developer specializing in React, Node.js, Laravel and Flutter.',
        metaKeywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript'],
        siteUrl: 'https://bharani.dev',
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                       Update Settings Request                            */
  /* ------------------------------------------------------------------------ */

  UpdateSettingsRequest: {
    type: 'object',

    additionalProperties: false,

    properties: {
      siteTitle: {
        type: 'string',
        minLength: 2,
        maxLength: 100,
      },

      siteDescription: {
        type: 'string',
        minLength: 10,
        maxLength: 500,
      },

      email: {
        type: 'string',
        format: 'email',
      },

      phone: {
        type: 'string',
      },

      address: {
        type: 'string',
      },

      logo: {
        $ref: '#/components/schemas/SettingsImage',
      },

      favicon: {
        $ref: '#/components/schemas/SettingsImage',
      },

      socialLinks: {
        $ref: '#/components/schemas/SettingsSocialLinks',
      },

      seo: {
        type: 'object',

        additionalProperties: false,

        properties: {
          metaTitle: {
            type: 'string',
            minLength: 10,
            maxLength: 70,
          },

          metaDescription: {
            type: 'string',
            minLength: 50,
            maxLength: 160,
          },

          metaKeywords: {
            type: 'array',

            items: {
              type: 'string',
              maxLength: 50,
            },

            maxItems: 20,
          },

          siteUrl: {
            type: 'string',
            format: 'uri',
          },
        },
      },
    },

    example: {
      siteTitle: 'Updated Portfolio',

      socialLinks: {
        github: 'https://github.com/bharani',
        linkedin: 'https://linkedin.com/in/bharani',
      },

      seo: {
        metaTitle: 'Updated Portfolio Title',
      },
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                             Response Schemas                               */
/* -------------------------------------------------------------------------- */

export const settingsResponseSchemas = {
  SettingsResponse: {
    type: 'object',

    required: ['success', 'message', 'data'],

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Settings retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/Settings',
      },
    },
  },

  SettingsDeleteResponse: {
    type: 'object',

    required: ['success', 'message', 'data'],

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'Settings deleted successfully',
      },

      data: {
        type: 'null',
        example: null,
      },
    },
  },

  SettingsBadRequestResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Validation failed',
      },
    },
  },

  SettingsUnauthorizedResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Unauthorized access',
      },
    },
  },

  SettingsForbiddenResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Forbidden resource',
      },
    },
  },

  SettingsNotFoundResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Settings not found',
      },
    },
  },

  SettingsConflictResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Settings already exist',
      },
    },
  },

  SettingsInternalServerErrorResponse: {
    type: 'object',

    required: ['success', 'message'],

    properties: {
      success: {
        type: 'boolean',
        example: false,
      },

      message: {
        type: 'string',
        example: 'Internal server error',
      },
    },
  },
} as const;
/* -------------------------------------------------------------------------- */
/*                                   Paths                                    */
/* -------------------------------------------------------------------------- */

export const settingsPaths = {
  '/settings': {
    /* ---------------------------------------------------------------------- */
    /*                             Get Settings                               */
    /* ---------------------------------------------------------------------- */

    get: {
      tags: ['Settings'],

      operationId: 'getSettings',

      summary: 'Get portfolio settings',

      description:
        'Returns the current portfolio application settings including branding, contact information, SEO configuration, social links, logo, and favicon.',

      responses: {
        200: {
          description: 'Settings retrieved successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsResponse',
              },
            },
          },
        },

        404: {
          description: 'Settings not found',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsNotFoundResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsInternalServerErrorResponse',
              },
            },
          },
        },
      },
    },

    /* ---------------------------------------------------------------------- */
    /*                           Create Settings                              */
    /* ---------------------------------------------------------------------- */

    post: {
      tags: ['Settings'],

      operationId: 'createSettings',

      summary: 'Create portfolio settings',

      description:
        'Creates the singleton portfolio settings document. This endpoint should only be used once during the initial application setup.',

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
              $ref: '#/components/schemas/CreateSettingsRequest',
            },
          },
        },
      },

      responses: {
        201: {
          description: 'Settings created successfully',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsBadRequestResponse',
              },
            },
          },
        },

        401: {
          description: 'Unauthorized',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsUnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Forbidden',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsForbiddenResponse',
              },
            },
          },
        },

        409: {
          description: 'Settings already exist',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsConflictResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SettingsInternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
  },
} as const;
/* -------------------------------------------------------------------------- */
/*                          Extend Settings Paths                             */
/* -------------------------------------------------------------------------- */

Object.assign(settingsPaths['/settings'], {
  /* ------------------------------------------------------------------------ */
  /*                            Update Settings                               */
  /* ------------------------------------------------------------------------ */

  patch: {
    tags: ['Settings'],

    operationId: 'updateSettings',

    summary: 'Update portfolio settings',

    description:
      'Updates the existing singleton portfolio settings. Only the supplied fields will be modified.',

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
            $ref: '#/components/schemas/UpdateSettingsRequest',
          },
        },
      },
    },

    responses: {
      200: {
        description: 'Settings updated successfully',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsResponse',
            },
          },
        },
      },

      400: {
        description: 'Validation failed',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsBadRequestResponse',
            },
          },
        },
      },

      401: {
        description: 'Unauthorized',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsUnauthorizedResponse',
            },
          },
        },
      },

      403: {
        description: 'Forbidden',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsForbiddenResponse',
            },
          },
        },
      },

      404: {
        description: 'Settings not found',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsNotFoundResponse',
            },
          },
        },
      },

      500: {
        description: 'Internal server error',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsInternalServerErrorResponse',
            },
          },
        },
      },
    },
  },

  /* ------------------------------------------------------------------------ */
  /*                            Delete Settings                               */
  /* ------------------------------------------------------------------------ */

  delete: {
    tags: ['Settings'],

    operationId: 'deleteSettings',

    summary: 'Delete portfolio settings',

    description: 'Deletes the singleton portfolio settings document from the database.',

    security: [
      {
        bearerAuth: [],
      },
    ],

    responses: {
      200: {
        description: 'Settings deleted successfully',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsDeleteResponse',
            },
          },
        },
      },

      401: {
        description: 'Unauthorized',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsUnauthorizedResponse',
            },
          },
        },
      },

      403: {
        description: 'Forbidden',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsForbiddenResponse',
            },
          },
        },
      },

      404: {
        description: 'Settings not found',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsNotFoundResponse',
            },
          },
        },
      },

      500: {
        description: 'Internal server error',

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SettingsInternalServerErrorResponse',
            },
          },
        },
      },
    },
  },
});

/* -------------------------------------------------------------------------- */
/*                              Final Exports                                 */
/* -------------------------------------------------------------------------- */

export default {
  tags: settingsTags,

  schemas: {
    ...settingsSchemas,
    ...settingsRequestSchemas,
    ...settingsResponseSchemas,
  },

  paths: settingsPaths,
} as const;
