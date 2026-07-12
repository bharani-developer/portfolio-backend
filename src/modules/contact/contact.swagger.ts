/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import {
  CONTACT_DEFAULT,
  CONTACT_MESSAGE,
  CONTACT_PRIORITIES,
  CONTACT_SOURCES,
  CONTACT_STATUSES,
  CONTACT_SELECT_FIELDS,
  CONTACT_SORT_FIELDS,
  CONTACT_VALIDATION,
} from './contact.constant.js';
/* -------------------------------------------------------------------------- */
/*                               Example Objects                              */
/* -------------------------------------------------------------------------- */

const contactExample = {
  _id: '684c7b0d6e8e9a4d0a123456',

  name: 'Bharani',

  email: 'bharani@example.com',

  phone: '+91 9876543210',

  company: 'OpenAI Technologies',

  subject: 'Portfolio Development',

  message:
    'I would like to discuss a full-stack development opportunity and project collaboration.',

  status: 'New',

  priority: 'Medium',

  source: 'Website',

  isRead: false,

  isReplied: false,

  repliedAt: null,

  notes: 'Potential client. Follow up within 24 hours.',

  ipAddress: '103.25.115.20',

  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/138.0.0.0 Safari/537.36',

  sortOrder: 0,

  isActive: true,

  hasReply: false,

  isOpen: true,

  needsAttention: false,

  createdAt: '2026-07-07T09:15:30.000Z',

  updatedAt: '2026-07-07T09:15:30.000Z',
};

const createContactExample = {
  name: 'Bharani',

  email: 'bharani@example.com',

  phone: '+91 9876543210',

  company: 'OpenAI Technologies',

  subject: 'Portfolio Development',

  message:
    'I would like to discuss a full-stack development opportunity and project collaboration.',
};

const updateContactExample = {
  status: 'Replied',

  priority: 'High',

  source: 'Website',

  isRead: true,

  isReplied: true,

  repliedAt: '2026-07-07T10:45:00.000Z',

  notes: 'Initial response has been sent. Waiting for the client confirmation.',

  sortOrder: 1,

  isActive: true,
};

const contactStatsExample = {
  total: 120,

  active: 118,

  unread: 8,

  read: 112,

  replied: 95,
};

/* -------------------------------------------------------------------------- */
/*                             Component Schemas                              */
/* -------------------------------------------------------------------------- */

export const contactSchemas = {
  Contact: {
    type: 'object',

    description: 'Contact message resource.',

    additionalProperties: false,

    properties: {
      _id: {
        type: 'string',

        example: contactExample._id,
      },

      name: {
        type: 'string',

        minLength: CONTACT_VALIDATION.NAME.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.NAME.MAX_LENGTH,

        example: contactExample.name,
      },

      email: {
        type: 'string',

        format: 'email',

        maxLength: CONTACT_VALIDATION.EMAIL.MAX_LENGTH,

        example: contactExample.email,
      },

      phone: {
        type: 'string',

        nullable: true,

        minLength: CONTACT_VALIDATION.PHONE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.PHONE.MAX_LENGTH,

        example: contactExample.phone,
      },

      company: {
        type: 'string',

        nullable: true,

        maxLength: CONTACT_VALIDATION.COMPANY.MAX_LENGTH,

        example: contactExample.company,
      },

      subject: {
        type: 'string',

        minLength: CONTACT_VALIDATION.SUBJECT.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.SUBJECT.MAX_LENGTH,

        example: contactExample.subject,
      },

      message: {
        type: 'string',

        minLength: CONTACT_VALIDATION.MESSAGE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.MESSAGE.MAX_LENGTH,

        example: contactExample.message,
      },

      status: {
        type: 'string',

        enum: [...CONTACT_STATUSES],

        example: contactExample.status,
      },

      priority: {
        type: 'string',

        enum: [...CONTACT_PRIORITIES],

        example: contactExample.priority,
      },

      source: {
        type: 'string',

        enum: [...CONTACT_SOURCES],

        default: CONTACT_DEFAULT.SOURCE,

        example: contactExample.source,
      },

      isRead: {
        type: 'boolean',

        default: CONTACT_DEFAULT.IS_READ,

        example: contactExample.isRead,
      },

      isReplied: {
        type: 'boolean',

        default: CONTACT_DEFAULT.IS_REPLIED,

        example: contactExample.isReplied,
      },
      repliedAt: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        example: contactExample.repliedAt,
      },

      notes: {
        type: 'string',

        nullable: true,

        maxLength: CONTACT_VALIDATION.NOTES.MAX_LENGTH,

        example: contactExample.notes,
      },

      ipAddress: {
        type: 'string',

        nullable: true,

        example: contactExample.ipAddress,
      },

      userAgent: {
        type: 'string',

        nullable: true,

        example: contactExample.userAgent,
      },

      sortOrder: {
        type: 'integer',

        minimum: CONTACT_VALIDATION.SORT_ORDER.MIN,

        maximum: CONTACT_VALIDATION.SORT_ORDER.MAX,

        default: CONTACT_DEFAULT.SORT_ORDER,

        example: contactExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        default: CONTACT_DEFAULT.IS_ACTIVE,

        example: contactExample.isActive,
      },

      hasReply: {
        type: 'boolean',

        readOnly: true,

        example: contactExample.hasReply,
      },

      isOpen: {
        type: 'boolean',

        readOnly: true,

        example: contactExample.isOpen,
      },

      needsAttention: {
        type: 'boolean',

        readOnly: true,

        example: contactExample.needsAttention,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        example: contactExample.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        example: contactExample.updatedAt,
      },
    },

    required: [
      '_id',

      'name',

      'email',

      'subject',

      'message',

      'status',

      'priority',

      'source',

      'isRead',

      'isReplied',

      'repliedAt',

      'sortOrder',

      'isActive',

      'createdAt',

      'updatedAt',
    ],
  },
  CreateContactRequest: {
    type: 'object',

    description: 'Request payload for creating a contact message.',

    additionalProperties: false,

    properties: {
      name: {
        type: 'string',

        minLength: CONTACT_VALIDATION.NAME.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.NAME.MAX_LENGTH,

        example: createContactExample.name,
      },

      email: {
        type: 'string',

        format: 'email',

        maxLength: CONTACT_VALIDATION.EMAIL.MAX_LENGTH,

        example: createContactExample.email,
      },

      phone: {
        type: 'string',

        nullable: true,

        minLength: CONTACT_VALIDATION.PHONE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.PHONE.MAX_LENGTH,

        example: createContactExample.phone,
      },

      company: {
        type: 'string',

        nullable: true,

        maxLength: CONTACT_VALIDATION.COMPANY.MAX_LENGTH,

        example: createContactExample.company,
      },

      subject: {
        type: 'string',

        minLength: CONTACT_VALIDATION.SUBJECT.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.SUBJECT.MAX_LENGTH,

        example: createContactExample.subject,
      },

      message: {
        type: 'string',

        minLength: CONTACT_VALIDATION.MESSAGE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.MESSAGE.MAX_LENGTH,

        example: createContactExample.message,
      },
    },

    required: ['name', 'email', 'subject', 'message'],

    example: createContactExample,
  },
  UpdateContactRequest: {
    type: 'object',

    description: 'Request payload for updating a contact message.',

    additionalProperties: false,

    properties: {
      name: {
        type: 'string',

        minLength: CONTACT_VALIDATION.NAME.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.NAME.MAX_LENGTH,

        example: 'Bharani S',
      },

      email: {
        type: 'string',

        format: 'email',

        maxLength: CONTACT_VALIDATION.EMAIL.MAX_LENGTH,

        example: 'bharani@example.com',
      },

      phone: {
        type: 'string',

        nullable: true,

        minLength: CONTACT_VALIDATION.PHONE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.PHONE.MAX_LENGTH,

        example: '+91 9876543210',
      },

      company: {
        type: 'string',

        nullable: true,

        maxLength: CONTACT_VALIDATION.COMPANY.MAX_LENGTH,

        example: 'OpenAI Technologies',
      },

      subject: {
        type: 'string',

        minLength: CONTACT_VALIDATION.SUBJECT.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.SUBJECT.MAX_LENGTH,

        example: 'Updated Portfolio Discussion',
      },

      message: {
        type: 'string',

        minLength: CONTACT_VALIDATION.MESSAGE.MIN_LENGTH,

        maxLength: CONTACT_VALIDATION.MESSAGE.MAX_LENGTH,

        example:
          'Thank you for reaching out. We have reviewed your inquiry and will get back to you shortly.',
      },

      status: {
        type: 'string',

        enum: [...CONTACT_STATUSES],

        example: updateContactExample.status,
      },

      priority: {
        type: 'string',

        enum: [...CONTACT_PRIORITIES],

        example: updateContactExample.priority,
      },

      source: {
        type: 'string',

        enum: [...CONTACT_SOURCES],

        example: updateContactExample.source,
      },

      isRead: {
        type: 'boolean',

        example: updateContactExample.isRead,
      },

      isReplied: {
        type: 'boolean',

        example: updateContactExample.isReplied,
      },

      repliedAt: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        example: updateContactExample.repliedAt,
      },

      notes: {
        type: 'string',

        nullable: true,

        maxLength: CONTACT_VALIDATION.NOTES.MAX_LENGTH,

        example: updateContactExample.notes,
      },

      sortOrder: {
        type: 'integer',

        minimum: CONTACT_VALIDATION.SORT_ORDER.MIN,

        maximum: CONTACT_VALIDATION.SORT_ORDER.MAX,

        example: updateContactExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        example: updateContactExample.isActive,
      },
    },

    example: updateContactExample,
  },
  ContactStats: {
    type: 'object',

    description: 'Contact statistics.',

    additionalProperties: false,

    properties: {
      total: {
        type: 'integer',

        minimum: 0,

        example: contactStatsExample.total,
      },

      active: {
        type: 'integer',

        minimum: 0,

        example: contactStatsExample.active,
      },

      unread: {
        type: 'integer',

        minimum: 0,

        example: contactStatsExample.unread,
      },

      read: {
        type: 'integer',

        minimum: 0,

        example: contactStatsExample.read,
      },

      replied: {
        type: 'integer',

        minimum: 0,

        example: contactStatsExample.replied,
      },
    },

    required: ['total', 'active', 'unread', 'read', 'replied'],

    example: contactStatsExample,
  },
  ContactResponse: {
    type: 'object',

    description: 'Single contact response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CONTACT_MESSAGE.RETRIEVED,
      },

      data: {
        $ref: '#/components/schemas/Contact',
      },
    },

    required: ['success', 'message', 'data'],
  },

  ContactListResponse: {
    type: 'object',

    description: 'Paginated contact list response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CONTACT_MESSAGE.RETRIEVED,
      },

      meta: {
        type: 'object',

        additionalProperties: false,

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

            example: 125,
          },

          totalPage: {
            type: 'integer',

            example: 13,
          },
        },

        required: ['page', 'limit', 'total', 'totalPage'],
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Contact',
        },
      },
    },

    required: ['success', 'message', 'meta', 'data'],
  },
  ContactStatsResponse: {
    type: 'object',

    description: 'Contact statistics response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CONTACT_MESSAGE.RETRIEVED,
      },

      data: {
        $ref: '#/components/schemas/ContactStats',
      },
    },

    required: ['success', 'message', 'data'],
  },

  DeleteContactResponse: {
    type: 'object',

    description: 'Delete contact response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CONTACT_MESSAGE.DELETED,
      },

      data: {
        type: 'null',

        nullable: true,

        example: null,
      },
    },

    required: ['success', 'message', 'data'],
  },
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

              example: 'email',
            },

            message: {
              type: 'string',

              example: 'Invalid email address',
            },
          },

          required: ['path', 'message'],
        },

        example: [
          {
            path: 'email',

            message: 'Invalid email address',
          },
          {
            path: 'subject',

            message: 'Subject must be at least 5 characters',
          },
        ],
      },

      stack: {
        type: 'string',

        nullable: true,

        example: null,
      },
    },

    required: ['success', 'message', 'errorSources'],
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

        example: 'Unauthorized',
      },
    },

    required: ['success', 'message'],

    example: {
      success: false,

      message: 'Unauthorized',
    },
  },

  ForbiddenResponse: {
    type: 'object',

    description: 'User does not have permission to perform this action.',

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
    },

    required: ['success', 'message'],

    example: {
      success: false,

      message: 'Forbidden',
    },
  },

  NotFoundResponse: {
    type: 'object',

    description: 'Requested contact resource was not found.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: CONTACT_MESSAGE.NOT_FOUND,
      },
    },

    required: ['success', 'message'],

    example: {
      success: false,

      message: CONTACT_MESSAGE.NOT_FOUND,
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

        example: 'Internal Server Error',
      },
    },

    required: ['success', 'message'],

    example: {
      success: false,

      message: 'Internal Server Error',
    },
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const contactPaths = {
  '/contact': {
    get: {
      tags: ['Contact'],

      operationId: 'getContacts',

      summary: 'Get all contact messages',

      description:
        'Retrieve contact messages with pagination, searching, filtering, sorting and field selection. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'page',

          in: 'query',

          description: 'Page number.',

          schema: {
            type: 'integer',

            minimum: 1,

            default: 1,
          },
        },

        {
          name: 'limit',

          in: 'query',

          description: 'Number of records per page.',

          schema: {
            type: 'integer',

            minimum: 1,

            maximum: 100,

            default: 10,
          },
        },

        {
          name: 'searchTerm',

          in: 'query',

          description: 'Search by name, email, phone, company, subject or message.',

          schema: {
            type: 'string',

            example: 'Bharani',
          },
        },

        {
          name: 'status',

          in: 'query',

          description: 'Filter by contact status.',

          schema: {
            type: 'string',

            enum: [...CONTACT_STATUSES],

            example: 'New',
          },
        },

        {
          name: 'priority',

          in: 'query',

          description: 'Filter by priority.',

          schema: {
            type: 'string',

            enum: [...CONTACT_PRIORITIES],

            example: 'Medium',
          },
        },

        {
          name: 'source',

          in: 'query',

          description: 'Filter by contact source.',

          schema: {
            type: 'string',

            enum: [...CONTACT_SOURCES],

            example: 'Website',
          },
        },

        {
          name: 'isRead',

          in: 'query',

          description: 'Filter by read status.',

          schema: {
            type: 'boolean',

            example: false,
          },
        },

        {
          name: 'isReplied',

          in: 'query',

          description: 'Filter by replied status.',

          schema: {
            type: 'boolean',

            example: false,
          },
        },

        {
          name: 'isActive',

          in: 'query',

          description: 'Filter by active status.',

          schema: {
            type: 'boolean',

            example: true,
          },
        },

        {
          name: 'sortBy',

          in: 'query',

          description: 'Field to sort by.',

          schema: {
            type: 'string',

            enum: [...CONTACT_SORT_FIELDS],

            default: 'createdAt',
          },
        },

        {
          name: 'sortOrder',

          in: 'query',

          description: 'Sorting direction.',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],

            default: 'desc',
          },
        },

        {
          name: 'fields',

          in: 'query',

          description: 'Comma-separated list of fields to include in the response.',

          schema: {
            type: 'string',

            example: CONTACT_SELECT_FIELDS.join(','),
          },
        },
      ],
      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    meta: {
                      page: 1,

                      limit: 10,

                      total: 125,

                      totalPage: 13,
                    },

                    data: [contactExample],
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
      tags: ['Contact'],

      operationId: 'createContact',

      summary: 'Create contact message',

      description: 'Submit a new contact message from the public portfolio contact form.',

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CreateContactRequest',
            },

            examples: {
              default: {
                summary: 'Create contact message',

                value: createContactExample,
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: CONTACT_MESSAGE.CREATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactResponse',
              },

              examples: {
                success: {
                  summary: 'Contact created successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.CREATED,

                    data: contactExample,
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

  /* -------------------------------------------------------------------------- */
  /*                           Single Resource Routes                           */
  /* -------------------------------------------------------------------------- */

  '/contact/{id}': {
    get: {
      tags: ['Contact'],

      operationId: 'getContactById',

      summary: 'Get contact message by ID',

      description:
        'Retrieve a contact message using its MongoDB document ID. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'id',

          in: 'path',

          required: true,

          description: 'Contact document ID.',

          schema: {
            type: 'string',

            example: contactExample._id,
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactResponse',
              },

              examples: {
                success: {
                  summary: 'Contact retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: contactExample,
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
          description: CONTACT_MESSAGE.NOT_FOUND,

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
    patch: {
      tags: ['Contact'],

      operationId: 'updateContact',

      summary: 'Update contact message',

      description: 'Update an existing contact message. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'id',

          in: 'path',

          required: true,

          description: 'Contact document ID.',

          schema: {
            type: 'string',

            example: contactExample._id,
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateContactRequest',
            },

            examples: {
              default: {
                summary: 'Update contact message',

                value: updateContactExample,
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: CONTACT_MESSAGE.UPDATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactResponse',
              },

              examples: {
                success: {
                  summary: 'Contact updated successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.UPDATED,

                    data: {
                      ...contactExample,

                      ...updateContactExample,

                      updatedAt: '2026-07-07T10:45:00.000Z',
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
          description: CONTACT_MESSAGE.NOT_FOUND,

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
      tags: ['Contact'],

      operationId: 'deleteContact',

      summary: 'Delete contact message',

      description: 'Delete an existing contact message. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'id',

          in: 'path',

          required: true,

          description: 'Contact document ID.',

          schema: {
            type: 'string',

            example: contactExample._id,
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.DELETED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteContactResponse',
              },

              examples: {
                success: {
                  summary: 'Contact deleted successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.DELETED,

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
          description: CONTACT_MESSAGE.NOT_FOUND,

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

  /* -------------------------------------------------------------------------- */
  /*                           Statistics & Custom Routes                       */
  /* -------------------------------------------------------------------------- */

  '/contact/stats': {
    get: {
      tags: ['Contact'],

      operationId: 'getContactStats',

      summary: 'Get contact statistics',

      description:
        'Retrieve dashboard statistics for contact messages. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactStatsResponse',
              },

              examples: {
                success: {
                  summary: 'Contact statistics retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: contactStatsExample,
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

  '/contact/active': {
    get: {
      tags: ['Contact'],

      operationId: 'getActiveContacts',

      summary: 'Get active contact messages',

      description: 'Retrieve all active contact messages. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Active contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No active contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
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

  '/contact/unread': {
    get: {
      tags: ['Contact'],

      operationId: 'getUnreadContacts',

      summary: 'Get unread contact messages',

      description: 'Retrieve all unread contact messages. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Unread contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No unread contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
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

  '/contact/read': {
    get: {
      tags: ['Contact'],

      operationId: 'getReadContacts',

      summary: 'Get read contact messages',

      description:
        'Retrieve all contact messages that have been marked as read. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Read contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No read contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
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

  '/contact/replied': {
    get: {
      tags: ['Contact'],

      operationId: 'getRepliedContacts',

      summary: 'Get replied contact messages',

      description:
        'Retrieve all contact messages that have been replied to. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Replied contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [
                      {
                        ...contactExample,

                        isRead: true,

                        isReplied: true,

                        status: 'Replied',

                        repliedAt: '2026-07-07T10:45:00.000Z',
                      },
                    ],
                  },
                },

                empty: {
                  summary: 'No replied contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
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

  '/contact/status/{status}': {
    get: {
      tags: ['Contact'],

      operationId: 'getContactsByStatus',

      summary: 'Get contacts by status',

      description:
        'Retrieve all contact messages with the specified status. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'status',

          in: 'path',

          required: true,

          description: 'Contact status.',

          schema: {
            type: 'string',

            enum: [...CONTACT_STATUSES],

            example: 'New',
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid status supplied',

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

  '/contact/priority/{priority}': {
    get: {
      tags: ['Contact'],

      operationId: 'getContactsByPriority',

      summary: 'Get contacts by priority',

      description:
        'Retrieve all contact messages with the specified priority. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'priority',

          in: 'path',

          required: true,

          description: 'Contact priority.',

          schema: {
            type: 'string',

            enum: [...CONTACT_PRIORITIES],

            example: 'High',
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid priority supplied',

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

  '/contact/{id}/read': {
    patch: {
      tags: ['Contact'],

      operationId: 'getContactsByStatus',

      summary: 'Get contacts by status',

      description:
        'Retrieve all contact messages with the specified status. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'status',

          in: 'path',

          required: true,

          description: 'Contact status.',

          schema: {
            type: 'string',

            enum: [...CONTACT_STATUSES],

            example: 'New',
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactListResponse',
              },

              examples: {
                success: {
                  summary: 'Contacts retrieved successfully',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [contactExample],
                  },
                },

                empty: {
                  summary: 'No contacts found',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid status supplied',

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

  '/contact/{id}/replied': {
    patch: {
      tags: ['Contact'],

      operationId: 'markAsReplied',

      summary: 'Mark contact as replied',

      description: 'Mark a contact message as replied. Administrator access is required.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'id',

          in: 'path',

          required: true,

          description: 'Contact document ID.',

          schema: {
            type: 'string',

            example: contactExample._id,
          },
        },
      ],

      responses: {
        200: {
          description: CONTACT_MESSAGE.MARKED_AS_REPLIED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ContactResponse',
              },

              examples: {
                success: {
                  summary: 'Contact marked as replied',

                  value: {
                    success: true,

                    message: CONTACT_MESSAGE.MARKED_AS_REPLIED,

                    data: {
                      ...contactExample,

                      status: 'Replied',

                      isRead: true,

                      isReplied: true,

                      repliedAt: '2026-07-07T10:45:00.000Z',

                      hasReply: true,

                      isOpen: false,

                      needsAttention: false,
                    },
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
          description: CONTACT_MESSAGE.NOT_FOUND,

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
