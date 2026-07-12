// src/modules/auth/auth.swagger.ts

import type { OpenAPIV3_1 } from 'openapi-types';

export const authSchemas = {
  LoginRequest: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
        example: 'bharani.developer@gmail.com',
      },

      password: {
        type: 'string',
        format: 'password',
        example: 'Admin@123',
      },
    },
    additionalProperties: false,
  },

  GoogleLoginRequest: {
    type: 'object',
    required: ['token'],
    properties: {
      token: {
        type: 'string',
        example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjExMjM0NTY3ODkw...',
      },
    },
    additionalProperties: false,
  },

  ChangePasswordRequest: {
    type: 'object',
    required: ['oldPassword', 'newPassword'],
    properties: {
      oldPassword: {
        type: 'string',
        example: 'Admin@123',
      },

      newPassword: {
        type: 'string',
        example: 'NewAdmin@123',
      },
    },
    additionalProperties: false,
  },

  Avatar: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        example: 'https://lh3.googleusercontent.com/avatar.jpg',
      },

      publicId: {
        type: 'string',
        example: '',
      },
    },
  },

  UserProfile: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6857e6d7a2a9f4c9b8f4d123',
      },

      name: {
        type: 'string',
        example: 'Bharani',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'bharani.developer@gmail.com',
      },

      role: {
        type: 'string',
        enum: ['admin', 'viewer'],
        example: 'viewer',
      },

      authProvider: {
        type: 'string',
        enum: ['LOCAL', 'GOOGLE'],
        example: 'GOOGLE',
      },

      googleId: {
        type: 'string',
        example: '108394857392847592384',
      },

      emailVerified: {
        type: 'boolean',
        example: true,
      },

      givenName: {
        type: 'string',
        example: 'Bharani',
      },

      familyName: {
        type: 'string',
        example: 'K',
      },

      locale: {
        type: 'string',
        example: 'en-IN',
      },

      hostedDomain: {
        type: 'string',
        example: 'company.com',
      },

      avatar: {
        $ref: '#/components/schemas/Avatar',
      },

      isActive: {
        type: 'boolean',
        example: true,
      },

      isDeleted: {
        type: 'boolean',
        example: false,
      },

      lastLoginAt: {
        type: 'string',
        format: 'date-time',
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
  },

  LoginResponse: {
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
        example: 'Login successful',
      },

      data: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
            example: 'jwt-access-token',
          },
        },
      },
    },
  },

  RefreshTokenResponse: {
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
        example: 'Access token refreshed successfully',
      },

      data: {
        type: 'object',
        properties: {
          accessToken: {
            type: 'string',
            example: 'jwt-access-token',
          },
        },
      },
    },
  },

  ProfileResponse: {
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
        example: 'Profile retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/UserProfile',
      },
    },
  },

  SuccessResponse: {
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
        example: 'Operation completed successfully',
      },

      data: {
        type: 'object',
        additionalProperties: true,
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
        example: 'Bad Request',
      },
    },
  },
} satisfies Record<string, OpenAPIV3_1.SchemaObject>;

export const authPaths: OpenAPIV3_1.PathsObject = {
  '/auth/login': {
    post: {
      tags: ['Auth'],
      summary: 'Login using email and password',

      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/LoginRequest',
            },
          },
        },
      },

      responses: {
        '200': {
          description: 'Login successful',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LoginResponse',
              },
            },
          },
        },
      },
    },
  },

  '/auth/google': {
    post: {
      tags: ['Auth'],

      summary: 'Authenticate with Google',

      description: 'Send Google ID Token received from Google Sign-In SDK.',

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/GoogleLoginRequest',
            },
          },
        },
      },

      responses: {
        '200': {
          description: 'Google login successful',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/LoginResponse',
              },
            },
          },
        },
      },
    },
  },

  '/auth/refresh-token': {
    post: {
      tags: ['Auth'],

      summary: 'Refresh access token',

      responses: {
        '200': {
          description: 'Token refreshed',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/RefreshTokenResponse',
              },
            },
          },
        },
      },
    },
  },

  '/auth/profile': {
    get: {
      tags: ['Auth'],

      summary: 'Get current user profile',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        '200': {
          description: 'Profile retrieved',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ProfileResponse',
              },
            },
          },
        },
      },
    },
  },

  '/auth/change-password': {
    post: {
      tags: ['Auth'],

      summary: 'Change account password',

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
              $ref: '#/components/schemas/ChangePasswordRequest',
            },
          },
        },
      },

      responses: {
        '200': {
          description: 'Password changed successfully',
        },
      },
    },
  },

  '/auth/logout': {
    post: {
      tags: ['Auth'],

      summary: 'Logout authenticated user',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        '200': {
          description: 'Logout successful',
        },
      },
    },
  },
};
