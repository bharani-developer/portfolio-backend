/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import {
  CERTIFICATION_DEFAULT,
  CERTIFICATION_MESSAGE,
  CERTIFICATION_SELECT_FIELDS,
  CERTIFICATION_SORT_FIELDS,
  CERTIFICATION_VALIDATION,
} from './certifications.constant.js';
/* -------------------------------------------------------------------------- */
/*                               Example Objects                              */
/* -------------------------------------------------------------------------- */

const certificationExample = {
  _id: '6848d5a4b63f9f4d9b8c4321',

  title: 'AWS Certified Developer – Associate',

  slug: 'aws-certified-developer-associate',

  issuer: 'Amazon Web Services',

  certificateImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1750000000/portfolio/certifications/aws-certified-developer.png',

    publicId: 'portfolio/certifications/aws-certified-developer',
  },

  credentialId: 'AWS-DEV-123456',

  credentialUrl: 'https://www.credly.com/badges/aws-certified-developer-associate',

  issueDate: '2025-01-15T00:00:00.000Z',

  expiryDate: '2028-01-15T00:00:00.000Z',

  neverExpires: false,

  description:
    'Validated expertise in developing, deploying, debugging, and maintaining applications on Amazon Web Services.',

  skills: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB', 'CloudFormation'],

  skillCount: 5,

  isExpired: false,

  isValid: true,

  sortOrder: 1,

  isActive: true,

  createdAt: '2025-01-15T10:15:30.000Z',

  updatedAt: '2026-06-20T09:45:10.000Z',
};

const createCertificationExample = {
  title: 'AWS Certified Developer – Associate',

  issuer: 'Amazon Web Services',

  certificateImage: {
    url: 'https://res.cloudinary.com/demo/image/upload/v1750000000/portfolio/certifications/aws-certified-developer.png',

    publicId: 'portfolio/certifications/aws-certified-developer',
  },

  credentialId: 'AWS-DEV-123456',

  credentialUrl: 'https://www.credly.com/badges/aws-certified-developer-associate',

  issueDate: '2025-01-15T00:00:00.000Z',

  expiryDate: '2028-01-15T00:00:00.000Z',

  neverExpires: false,

  description:
    'Validated expertise in developing, deploying, debugging, and maintaining applications on Amazon Web Services.',

  skills: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB', 'CloudFormation'],

  sortOrder: CERTIFICATION_DEFAULT.SORT_ORDER,

  isActive: CERTIFICATION_DEFAULT.IS_ACTIVE,
};

const updateCertificationExample = {
  description: 'Updated certification description for enterprise cloud application development.',

  skills: ['AWS', 'Lambda', 'Docker', 'Terraform', 'CloudFormation'],

  sortOrder: 2,

  isActive: true,
};

/* -------------------------------------------------------------------------- */
/*                             Component Schemas                              */
/* -------------------------------------------------------------------------- */

export const certificationsSchemas = {
  /* -------------------------------------------------------------------------- */
  /*                             Certificate Image                              */
  /* -------------------------------------------------------------------------- */

  CertificateImage: {
    type: 'object',

    description: 'Cloudinary certificate image.',

    additionalProperties: false,

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        maxLength: CERTIFICATION_VALIDATION.IMAGE.URL_MAX_LENGTH,

        description: 'Certificate image URL.',

        example: certificationExample.certificateImage.url,
      },

      publicId: {
        type: 'string',

        maxLength: CERTIFICATION_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,

        description: 'Cloudinary public identifier.',

        example: certificationExample.certificateImage.publicId,
      },
    },

    example: certificationExample.certificateImage,
  },

  /* -------------------------------------------------------------------------- */
  /*                              Certification                                 */
  /* -------------------------------------------------------------------------- */

  Certification: {
    type: 'object',

    description: 'Portfolio certification.',

    additionalProperties: false,

    required: [
      'title',

      'slug',

      'issuer',

      'issueDate',

      'neverExpires',

      'skills',

      'sortOrder',

      'isActive',
    ],

    properties: {
      _id: {
        type: 'string',

        readOnly: true,

        description: 'MongoDB document identifier.',

        example: certificationExample._id,
      },

      title: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,

        description: 'Certification title.',

        example: certificationExample.title,
      },

      slug: {
        type: 'string',

        readOnly: true,

        description: 'SEO-friendly unique slug.',

        example: certificationExample.slug,
      },

      issuer: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.ISSUER.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH,

        description: 'Certification issuing organization.',

        example: certificationExample.issuer,
      },

      certificateImage: {
        allOf: [
          {
            $ref: '#/components/schemas/CertificateImage',
          },
        ],

        nullable: true,

        description: 'Certificate image.',
      },
      credentialId: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH,

        description: 'Certification credential identifier.',

        example: certificationExample.credentialId,
      },

      credentialUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH,

        description: 'Credential verification URL.',

        example: certificationExample.credentialUrl,
      },

      issueDate: {
        type: 'string',

        format: 'date-time',

        description: 'Certification issue date.',

        example: certificationExample.issueDate,
      },

      expiryDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        description: 'Certification expiry date. Null when the certification never expires.',

        example: certificationExample.expiryDate,
      },

      neverExpires: {
        type: 'boolean',

        default: CERTIFICATION_DEFAULT.NEVER_EXPIRES,

        description: 'Whether the certification never expires.',

        example: certificationExample.neverExpires,
      },

      description: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH,

        description: 'Certification description.',

        example: certificationExample.description,
      },

      skills: {
        type: 'array',

        description: 'Skills covered by the certification. Duplicate values are not allowed.',

        maxItems: CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT,

        items: {
          type: 'string',

          maxLength: CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH,

          example: 'AWS',
        },

        example: certificationExample.skills,
      },

      skillCount: {
        type: 'integer',

        readOnly: true,

        description: 'Total number of associated skills.',

        example: certificationExample.skillCount,
      },

      isExpired: {
        type: 'boolean',

        readOnly: true,

        description: 'Whether the certification has expired.',

        example: certificationExample.isExpired,
      },

      isValid: {
        type: 'boolean',

        readOnly: true,

        description: 'Whether the certification is currently valid.',

        example: certificationExample.isValid,
      },

      sortOrder: {
        type: 'integer',

        minimum: CERTIFICATION_VALIDATION.SORT_ORDER.MIN,

        maximum: CERTIFICATION_VALIDATION.SORT_ORDER.MAX,

        description: 'Display order.',

        example: certificationExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        default: CERTIFICATION_DEFAULT.IS_ACTIVE,

        description: 'Whether the certification is publicly visible.',

        example: certificationExample.isActive,
      },

      createdAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Creation timestamp.',

        example: certificationExample.createdAt,
      },

      updatedAt: {
        type: 'string',

        format: 'date-time',

        readOnly: true,

        description: 'Last update timestamp.',

        example: certificationExample.updatedAt,
      },
    },

    example: certificationExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                              Request Schemas                               */
  /* -------------------------------------------------------------------------- */
  CreateCertificationRequest: {
    type: 'object',

    description: 'Request payload for creating a certification.',

    additionalProperties: false,

    required: ['title', 'issuer', 'issueDate'],

    properties: {
      title: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,

        description: 'Certification title.',

        example: createCertificationExample.title,
      },

      issuer: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.ISSUER.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH,

        description: 'Certification issuer.',

        example: createCertificationExample.issuer,
      },

      certificateImage: {
        allOf: [
          {
            $ref: '#/components/schemas/CertificateImage',
          },
        ],

        nullable: true,

        description: 'Certificate image.',
      },

      credentialId: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH,

        description: 'Credential identifier.',

        example: createCertificationExample.credentialId,
      },

      credentialUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH,

        description: 'Credential verification URL.',

        example: createCertificationExample.credentialUrl,
      },

      issueDate: {
        type: 'string',

        format: 'date-time',

        description: 'Certification issue date.',

        example: createCertificationExample.issueDate,
      },

      expiryDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        description: 'Expiry date. Must be null when neverExpires is true.',

        example: createCertificationExample.expiryDate,
      },

      neverExpires: {
        type: 'boolean',

        default: CERTIFICATION_DEFAULT.NEVER_EXPIRES,

        description: 'Whether the certification never expires.',

        example: createCertificationExample.neverExpires,
      },

      description: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH,

        description: 'Certification description.',

        example: createCertificationExample.description,
      },

      skills: {
        type: 'array',

        description: 'Skills associated with the certification.',

        maxItems: CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT,

        items: {
          type: 'string',

          maxLength: CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH,

          example: 'AWS',
        },

        example: createCertificationExample.skills,
      },

      sortOrder: {
        type: 'integer',

        minimum: CERTIFICATION_VALIDATION.SORT_ORDER.MIN,

        maximum: CERTIFICATION_VALIDATION.SORT_ORDER.MAX,

        default: CERTIFICATION_DEFAULT.SORT_ORDER,

        description: 'Display order.',

        example: createCertificationExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        default: CERTIFICATION_DEFAULT.IS_ACTIVE,

        description: 'Whether the certification is publicly visible.',

        example: createCertificationExample.isActive,
      },
    },

    example: createCertificationExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                          Update Request Schema                             */
  /* -------------------------------------------------------------------------- */
  UpdateCertificationRequest: {
    type: 'object',

    description: 'Request payload for updating an existing certification.',

    additionalProperties: false,

    properties: {
      title: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.TITLE.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,

        description: 'Certification title.',

        example: certificationExample.title,
      },

      issuer: {
        type: 'string',

        minLength: CERTIFICATION_VALIDATION.ISSUER.MIN_LENGTH,

        maxLength: CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH,

        description: 'Certification issuer.',

        example: certificationExample.issuer,
      },

      certificateImage: {
        allOf: [
          {
            $ref: '#/components/schemas/CertificateImage',
          },
        ],

        nullable: true,

        description: 'Certificate image.',
      },

      credentialId: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH,

        description: 'Credential identifier.',

        example: certificationExample.credentialId,
      },

      credentialUrl: {
        type: 'string',

        format: 'uri',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH,

        description: 'Credential verification URL.',

        example: certificationExample.credentialUrl,
      },

      issueDate: {
        type: 'string',

        format: 'date-time',

        description: 'Certification issue date.',

        example: certificationExample.issueDate,
      },

      expiryDate: {
        type: 'string',

        format: 'date-time',

        nullable: true,

        description: 'Expiry date. Must be null when neverExpires is true.',

        example: certificationExample.expiryDate,
      },

      neverExpires: {
        type: 'boolean',

        description: 'Whether the certification never expires.',

        example: certificationExample.neverExpires,
      },

      description: {
        type: 'string',

        nullable: true,

        maxLength: CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH,

        description: 'Certification description.',

        example: updateCertificationExample.description,
      },

      skills: {
        type: 'array',

        description: 'Updated skills associated with the certification.',

        maxItems: CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT,

        items: {
          type: 'string',

          maxLength: CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH,

          example: 'Docker',
        },

        example: updateCertificationExample.skills,
      },

      sortOrder: {
        type: 'integer',

        minimum: CERTIFICATION_VALIDATION.SORT_ORDER.MIN,

        maximum: CERTIFICATION_VALIDATION.SORT_ORDER.MAX,

        description: 'Display order.',

        example: updateCertificationExample.sortOrder,
      },

      isActive: {
        type: 'boolean',

        description: 'Whether the certification is publicly visible.',

        example: updateCertificationExample.isActive,
      },
    },

    example: updateCertificationExample,
  },

  /* -------------------------------------------------------------------------- */
  /*                             Response Schemas                               */
  /* -------------------------------------------------------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                           Success Response Schemas                         */
  /* -------------------------------------------------------------------------- */

  CertificationResponse: {
    type: 'object',

    description: 'Single certification response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CERTIFICATION_MESSAGE.RETRIEVED,
      },

      data: {
        $ref: '#/components/schemas/Certification',
      },
    },

    example: {
      success: true,

      message: CERTIFICATION_MESSAGE.RETRIEVED,

      data: certificationExample,
    },
  },

  CertificationListResponse: {
    type: 'object',

    description: 'Paginated certification list response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CERTIFICATION_MESSAGE.RETRIEVED,
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

            example: 25,
          },

          totalPage: {
            type: 'integer',

            example: 3,
          },
        },

        required: ['page', 'limit', 'total', 'totalPage'],
      },

      data: {
        type: 'array',

        items: {
          $ref: '#/components/schemas/Certification',
        },

        example: [certificationExample],
      },
    },

    example: {
      success: true,

      message: CERTIFICATION_MESSAGE.RETRIEVED,

      meta: {
        page: 1,

        limit: 10,

        total: 1,

        totalPage: 1,
      },

      data: [certificationExample],
    },
  },

  DeleteCertificationResponse: {
    type: 'object',

    description: 'Certification deletion response.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: true,
      },

      message: {
        type: 'string',

        example: CERTIFICATION_MESSAGE.DELETED,
      },

      data: {
        nullable: true,

        example: null,
      },
    },

    example: {
      success: true,

      message: CERTIFICATION_MESSAGE.DELETED,

      data: null,
    },
  },

  /* -------------------------------------------------------------------------- */
  /*                              Error Schemas                                */
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

              example: 'Title is required',
            },
          },

          required: ['path', 'message'],
        },
      },

      stack: {
        type: 'string',

        nullable: true,
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

        example: 'Unauthorized',
      },
    },

    example: {
      success: false,

      message: 'Unauthorized',
    },
  },

  ForbiddenResponse: {
    type: 'object',

    description: 'Insufficient permissions.',

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

    example: {
      success: false,

      message: 'Forbidden',
    },
  },

  NotFoundResponse: {
    type: 'object',

    description: 'Requested resource was not found.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: CERTIFICATION_MESSAGE.NOT_FOUND,
      },
    },

    example: {
      success: false,

      message: CERTIFICATION_MESSAGE.NOT_FOUND,
    },
  },

  ConflictResponse: {
    type: 'object',

    description: 'Duplicate resource.',

    additionalProperties: false,

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      message: {
        type: 'string',

        example: CERTIFICATION_MESSAGE.ALREADY_EXISTS,
      },
    },

    example: {
      success: false,

      message: CERTIFICATION_MESSAGE.ALREADY_EXISTS,
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

    example: {
      success: false,

      message: 'Internal Server Error',
    },
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const certificationsPaths = {
  '/certifications': {
    get: {
      tags: ['Certifications'],

      operationId: 'getCertifications',

      summary: 'Get all certifications',

      description:
        'Retrieve certifications with pagination, searching, filtering, sorting, and field selection.',

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

          description: 'Number of certifications per page.',

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

          description: 'Search by title, issuer, credential ID, description or skills.',

          schema: {
            type: 'string',

            example: 'AWS',
          },
        },

        {
          name: 'issuer',

          in: 'query',

          description: 'Filter by issuer.',

          schema: {
            type: 'string',

            example: 'Amazon Web Services',
          },
        },

        {
          name: 'neverExpires',

          in: 'query',

          description: 'Filter certifications that never expire.',

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

          description: 'Sort field.',

          schema: {
            type: 'string',

            enum: [...CERTIFICATION_SORT_FIELDS],

            default: 'sortOrder',
          },
        },

        {
          name: 'sortOrder',

          in: 'query',

          description: 'Sort direction.',

          schema: {
            type: 'string',

            enum: ['asc', 'desc'],

            default: 'asc',
          },
        },

        {
          name: 'fields',

          in: 'query',

          description: 'Comma-separated list of fields to include.',

          schema: {
            type: 'string',

            example: CERTIFICATION_SELECT_FIELDS.join(','),
          },
        },
      ],
      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    meta: {
                      page: 1,

                      limit: 10,

                      total: 1,

                      totalPage: 1,
                    },

                    data: [certificationExample],
                  },
                },
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
        description: 'Number of certifications per page.',
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
        description: 'Search by title, issuer, credential ID, description or skills.',
        schema: {
          type: 'string',
          example: 'AWS',
        },
      },

      {
        name: 'issuer',
        in: 'query',
        description: 'Filter by issuer.',
        schema: {
          type: 'string',
          example: 'Amazon Web Services',
        },
      },

      {
        name: 'neverExpires',
        in: 'query',
        description: 'Filter certifications that never expire.',
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
        description: 'Sort field.',
        schema: {
          type: 'string',
          enum: [...CERTIFICATION_SORT_FIELDS],
          default: 'sortOrder',
        },
      },

      {
        name: 'sortOrder',
        in: 'query',
        description: 'Sort direction.',
        schema: {
          type: 'string',
          enum: ['asc', 'desc'],
          default: 'asc',
        },
      },

      {
        name: 'fields',
        in: 'query',
        description: 'Comma-separated list of fields to include.',
        schema: {
          type: 'string',
          example: CERTIFICATION_SELECT_FIELDS.join(','),
        },
      },
    ],

    responses: {
      200: {
        description: CERTIFICATION_MESSAGE.RETRIEVED,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/CertificationListResponse',
            },

            examples: {
              success: {
                summary: 'Certifications retrieved successfully',

                value: {
                  success: true,

                  message: CERTIFICATION_MESSAGE.RETRIEVED,

                  meta: {
                    page: 1,

                    limit: 10,

                    total: 1,

                    totalPage: 1,
                  },

                  data: [certificationExample],
                },
              },
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
    post: {
      tags: ['Certifications'],

      operationId: 'createCertification',

      summary: 'Create certification',

      description: 'Create a new certification. Administrator access is required.',

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
              $ref: '#/components/schemas/CreateCertificationRequest',
            },

            examples: {
              default: {
                summary: 'Create certification',

                value: createCertificationExample,
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: CERTIFICATION_MESSAGE.CREATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationResponse',
              },

              examples: {
                success: {
                  summary: 'Certification created successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.CREATED,

                    data: certificationExample,
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
          description: CERTIFICATION_MESSAGE.ALREADY_EXISTS,

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
  },

  /* -------------------------------------------------------------------------- */
  /*                           Single Resource Routes                           */
  /* -------------------------------------------------------------------------- */

  '/certifications/{id}': {
    get: {
      tags: ['Certifications'],

      operationId: 'getCertificationById',

      summary: 'Get certification by ID',

      description: 'Retrieve a certification using its MongoDB document ID.',

      parameters: [
        {
          name: 'id',

          in: 'path',

          required: true,

          description: 'Certification document ID.',

          schema: {
            type: 'string',

            example: certificationExample._id,
          },
        },
      ],

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationResponse',
              },

              examples: {
                success: {
                  summary: 'Certification retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: certificationExample,
                  },
                },
              },
            },
          },
        },

        404: {
          description: CERTIFICATION_MESSAGE.NOT_FOUND,

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
      tags: ['Certifications'],

      operationId: 'updateCertification',

      summary: 'Update certification',

      description: 'Update an existing certification. Administrator access is required.',

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

          description: 'Certification document ID.',

          schema: {
            type: 'string',

            example: certificationExample._id,
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/UpdateCertificationRequest',
            },

            examples: {
              default: {
                summary: 'Update certification',

                value: updateCertificationExample,
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.UPDATED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationResponse',
              },

              examples: {
                success: {
                  summary: 'Certification updated successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.UPDATED,

                    data: {
                      ...certificationExample,

                      ...updateCertificationExample,

                      updatedAt: '2026-07-07T10:30:00.000Z',
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
          description: CERTIFICATION_MESSAGE.NOT_FOUND,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NotFoundResponse',
              },
            },
          },
        },

        409: {
          description: CERTIFICATION_MESSAGE.ALREADY_EXISTS,

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
    delete: {
      tags: ['Certifications'],

      operationId: 'deleteCertification',

      summary: 'Delete certification',

      description: 'Delete an existing certification. Administrator access is required.',

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

          description: 'Certification document ID.',

          schema: {
            type: 'string',

            example: certificationExample._id,
          },
        },
      ],

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.DELETED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DeleteCertificationResponse',
              },

              examples: {
                success: {
                  summary: 'Certification deleted successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.DELETED,

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
          description: CERTIFICATION_MESSAGE.NOT_FOUND,

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
  /*                              Custom Public Routes                          */
  /* -------------------------------------------------------------------------- */

  '/certifications/active': {
    get: {
      tags: ['Certifications'],

      operationId: 'getActiveCertifications',

      summary: 'Get active certifications',

      description: 'Retrieve all active certifications ordered by sort order and issue date.',

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Active certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [certificationExample],
                  },
                },

                empty: {
                  summary: 'No active certifications',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
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

  '/certifications/valid': {
    get: {
      tags: ['Certifications'],

      operationId: 'getValidCertifications',

      summary: 'Get valid certifications',

      description: 'Retrieve all certifications that are currently valid.',

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Valid certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [certificationExample],
                  },
                },

                empty: {
                  summary: 'No valid certifications',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
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

  '/certifications/expired': {
    get: {
      tags: ['Certifications'],

      operationId: 'getExpiredCertifications',

      summary: 'Get expired certifications',

      description: 'Retrieve all certifications that have expired.',

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Expired certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [certificationExample],
                  },
                },

                empty: {
                  summary: 'No expired certifications',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
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
  /*                              Lookup Routes                                */
  /* -------------------------------------------------------------------------- */

  '/certifications/slug/{slug}': {
    get: {
      tags: ['Certifications'],

      operationId: 'getCertificationBySlug',

      summary: 'Get certification by slug',

      description: 'Retrieve a certification using its unique URL-friendly slug.',

      parameters: [
        {
          name: 'slug',

          in: 'path',

          required: true,

          description: 'Certification slug.',

          schema: {
            type: 'string',

            example: certificationExample.slug,
          },
        },
      ],

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationResponse',
              },

              examples: {
                success: {
                  summary: 'Certification retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: certificationExample,
                  },
                },
              },
            },
          },
        },

        404: {
          description: CERTIFICATION_MESSAGE.NOT_FOUND,

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

  '/certifications/issuer/{issuer}': {
    get: {
      tags: ['Certifications'],

      operationId: 'getCertificationsByIssuer',

      summary: 'Get certifications by issuer',

      description: 'Retrieve all active certifications issued by the specified organization.',

      parameters: [
        {
          name: 'issuer',

          in: 'path',

          required: true,

          description: 'Certification issuer.',

          schema: {
            type: 'string',

            example: certificationExample.issuer,
          },
        },
      ],

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [certificationExample],
                  },
                },

                empty: {
                  summary: 'No certifications found for issuer',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
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

  '/certifications/skill/{skill}': {
    get: {
      tags: ['Certifications'],

      operationId: 'getCertificationsBySkill',

      summary: 'Get certifications by skill',

      description: 'Retrieve all active certifications associated with the specified skill.',

      parameters: [
        {
          name: 'skill',

          in: 'path',

          required: true,

          description: 'Skill name.',

          schema: {
            type: 'string',

            example: 'AWS',
          },
        },
      ],

      responses: {
        200: {
          description: CERTIFICATION_MESSAGE.RETRIEVED,

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/CertificationListResponse',
              },

              examples: {
                success: {
                  summary: 'Certifications retrieved successfully',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [certificationExample],
                  },
                },

                empty: {
                  summary: 'No certifications found',

                  value: {
                    success: true,

                    message: CERTIFICATION_MESSAGE.RETRIEVED,

                    data: [],
                  },
                },
              },
            },
          },
        },

        400: {
          description: 'Invalid skill parameter',

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
} as const;
