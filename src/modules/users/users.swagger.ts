// src/modules/users/users.swagger.ts

/* -------------------------------------------------------------------------- */
/*                               Users Schemas                                */
/* -------------------------------------------------------------------------- */

export const usersSchemas = {
  User: {
    type: 'object',

    required: ['name', 'email', 'role', 'authProvider', 'emailVerified', 'isActive', 'isDeleted'],

    properties: {
      _id: {
        type: 'string',
        example: '6863df5b88fd1f36cb1d9999',
      },

      name: {
        type: 'string',
        example: 'Bharani',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'bharani@example.com',
      },

      role: {
        type: 'string',
        enum: ['ADMIN', 'USER'],
        example: 'ADMIN',
      },

      authProvider: {
        type: 'string',
        enum: ['LOCAL', 'GOOGLE'],
        example: 'GOOGLE',
      },

      googleId: {
        type: 'string',
        nullable: true,
        example: '118765432198765432101',
      },

      avatar: {
        $ref: '#/components/schemas/Image',
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
        example: 'en',
      },

      hostedDomain: {
        type: 'string',
        nullable: true,
        example: null,
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

  CreateUserRequest: {
    type: 'object',

    required: ['name', 'email', 'password', 'role', 'authProvider'],

    properties: {
      name: {
        type: 'string',
        example: 'Bharani',
      },

      email: {
        type: 'string',
        format: 'email',
        example: 'bharani@example.com',
      },

      password: {
        type: 'string',
        format: 'password',
        example: 'StrongPassword123@',
      },

      role: {
        type: 'string',
        enum: ['ADMIN', 'USER'],
      },

      authProvider: {
        type: 'string',
        enum: ['LOCAL', 'GOOGLE'],
      },

      googleId: {
        type: 'string',
      },

      avatar: {
        $ref: '#/components/schemas/Image',
      },

      emailVerified: {
        type: 'boolean',
        default: false,
      },

      givenName: {
        type: 'string',
      },

      familyName: {
        type: 'string',
      },

      locale: {
        type: 'string',
      },

      hostedDomain: {
        type: 'string',
      },

      isActive: {
        type: 'boolean',
        default: true,
      },
    },
  },

  UpdateUserRequest: {
    type: 'object',

    properties: {
      name: {
        type: 'string',
      },

      email: {
        type: 'string',
        format: 'email',
      },

      password: {
        type: 'string',
        format: 'password',
      },

      role: {
        type: 'string',
        enum: ['ADMIN', 'USER'],
      },

      authProvider: {
        type: 'string',
        enum: ['LOCAL', 'GOOGLE'],
      },

      googleId: {
        type: 'string',
      },

      avatar: {
        $ref: '#/components/schemas/Image',
      },

      emailVerified: {
        type: 'boolean',
      },

      givenName: {
        type: 'string',
      },

      familyName: {
        type: 'string',
      },

      locale: {
        type: 'string',
      },

      hostedDomain: {
        type: 'string',
      },

      isActive: {
        type: 'boolean',
      },

      isDeleted: {
        type: 'boolean',
      },
    },
  },

  UserResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'User retrieved successfully',
      },

      data: {
        $ref: '#/components/schemas/User',
      },
    },
  },

  UsersResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'User retrieved successfully',
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
            example: 25,
          },

          totalPage: {
            type: 'integer',
            example: 3,
          },
        },
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/User',
        },
      },
    },
  },
  ResetPasswordRequest: {
    type: 'object',

    required: ['password'],

    properties: {
      password: {
        type: 'string',
        format: 'password',
        example: 'NewStrongPassword123@',
      },
    },
  },

  ChangeUserRoleRequest: {
    type: 'object',

    required: ['role'],

    properties: {
      role: {
        type: 'string',

        enum: ['ADMIN', 'USER'],

        example: 'ADMIN',
      },
    },
  },

  UpdateAvatarRequest: {
    type: 'object',

    required: ['avatar'],

    properties: {
      avatar: {
        $ref: '#/components/schemas/Image',
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

      message: {
        type: 'string',
        example: 'Operation completed successfully',
      },

      data: {
        $ref: '#/components/schemas/User',
      },
    },
  },

  DeleteUserResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'User deleted successfully',
      },

      data: {
        $ref: '#/components/schemas/User',
      },
    },
  },

  ResetPasswordResponse: {
    type: 'object',

    properties: {
      success: {
        type: 'boolean',
        example: true,
      },

      message: {
        type: 'string',
        example: 'User updated successfully',
      },

      data: {
        type: 'null',
        example: null,
      },
    },
  },

  UserIdParameter: {
    type: 'object',

    required: ['id'],

    properties: {
      id: {
        type: 'string',

        example: '6863df5b88fd1f36cb1d9999',
      },
    },
  },

  UserQuery: {
    type: 'object',

    properties: {
      searchTerm: {
        type: 'string',

        example: 'bharani',
      },

      page: {
        type: 'integer',

        minimum: 1,

        default: 1,
      },

      limit: {
        type: 'integer',

        minimum: 1,

        maximum: 100,

        default: 10,
      },

      sortBy: {
        type: 'string',

        example: 'createdAt',
      },

      sortOrder: {
        type: 'string',

        enum: ['asc', 'desc'],

        example: 'desc',
      },

      role: {
        type: 'string',

        enum: ['ADMIN', 'USER'],
      },

      authProvider: {
        type: 'string',

        enum: ['LOCAL', 'GOOGLE'],
      },

      isActive: {
        type: 'boolean',
      },

      emailVerified: {
        type: 'boolean',
      },
    },
  },
};
