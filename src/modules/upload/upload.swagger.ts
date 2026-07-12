// src/modules/upload/upload.swagger.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { UPLOAD_FOLDER, UPLOAD_VALIDATION } from './upload.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Shared Constants                              */
/* -------------------------------------------------------------------------- */

const uploadFolderExamples = Object.values(UPLOAD_FOLDER);

const allowedMimeTypes = UPLOAD_VALIDATION.FILE.ALLOWED_MIME_TYPES.join(', ');

const maxFileSizeMB = UPLOAD_VALIDATION.FILE.MAX_SIZE / (1024 * 1024);

/* -------------------------------------------------------------------------- */
/*                             Component Schemas                              */
/* -------------------------------------------------------------------------- */

export const uploadSchemas = {
  /* ---------------------------------------------------------------------- */
  /* Upload Response                                                        */
  /* ---------------------------------------------------------------------- */

  UploadResponse: {
    type: 'object',

    description: 'Uploaded Cloudinary image information.',

    required: ['url', 'publicId'],

    properties: {
      url: {
        type: 'string',

        format: 'uri',

        description: 'Public Cloudinary image URL.',

        example:
          'https://res.cloudinary.com/demo/image/upload/v1749999999/portfolio/projects/ecommerce-dashboard.webp',
      },

      publicId: {
        type: 'string',

        description: 'Cloudinary public identifier.',

        example: 'portfolio/projects/ecommerce-dashboard',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Upload Success Response                                                */
  /* ---------------------------------------------------------------------- */

  UploadImageSuccessResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message', 'data'],

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

        example: 'File uploaded successfully',
      },

      data: {
        $ref: '#/components/schemas/UploadResponse',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Delete Request                                                         */
  /* ---------------------------------------------------------------------- */

  DeleteImageRequest: {
    type: 'object',

    required: ['publicId'],

    properties: {
      publicId: {
        type: 'string',

        description: 'Cloudinary public ID.',

        example: 'portfolio/projects/ecommerce-dashboard',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Delete Success Response                                                */
  /* ---------------------------------------------------------------------- */

  DeleteImageSuccessResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message', 'data'],

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

        example: 'File deleted successfully',
      },

      data: {
        type: 'null',

        example: null,
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Validation Error                                                       */
  /* ---------------------------------------------------------------------- */

  UploadValidationError: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

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

        example: 'File is required',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Unauthorized                                                           */
  /* ---------------------------------------------------------------------- */

  UploadUnauthorizedResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

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

        example: 'Unauthorized access',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Forbidden                                                              */
  /* ---------------------------------------------------------------------- */

  UploadForbiddenResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

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

        example: 'Forbidden resource',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Not Found                                                              */
  /* ---------------------------------------------------------------------- */

  UploadNotFoundResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

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

        example: 'File not found',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Payload Too Large                                                      */
  /* ---------------------------------------------------------------------- */

  UploadFileTooLargeResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      statusCode: {
        type: 'integer',

        example: 413,
      },

      message: {
        type: 'string',

        example: 'File size limit exceeded',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Unsupported Media Type                                                 */
  /* ---------------------------------------------------------------------- */

  UploadUnsupportedMediaTypeResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

    properties: {
      success: {
        type: 'boolean',

        example: false,
      },

      statusCode: {
        type: 'integer',

        example: 415,
      },

      message: {
        type: 'string',

        example: 'Invalid file type',
      },
    },
  },

  /* ---------------------------------------------------------------------- */
  /* Internal Server Error                                                  */
  /* ---------------------------------------------------------------------- */

  UploadInternalServerErrorResponse: {
    type: 'object',

    required: ['success', 'statusCode', 'message'],

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

        example: 'Something went wrong',
      },
    },
  },
};
/* -------------------------------------------------------------------------- */
/*                                    Paths                                   */
/* -------------------------------------------------------------------------- */

export const uploadPaths = {
  /* ---------------------------------------------------------------------- */
  /* Upload Image                                                           */
  /* ---------------------------------------------------------------------- */

  '/upload/image/{folder}': {
    post: {
      tags: ['Upload'],

      operationId: 'uploadImage',

      summary: 'Upload image',

      description:
        'Uploads an image to Cloudinary under the specified folder and returns the uploaded image URL along with its Cloudinary public ID.',

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          name: 'folder',

          in: 'path',

          required: true,

          description: 'Destination upload folder.',

          schema: {
            type: 'string',

            enum: uploadFolderExamples,

            example: UPLOAD_FOLDER.PROJECTS,
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          'multipart/form-data': {
            schema: {
              type: 'object',

              required: ['file'],

              properties: {
                file: {
                  type: 'string',

                  format: 'binary',

                  description: `Supported image formats: ${allowedMimeTypes}. Maximum file size: ${maxFileSizeMB} MB.`,
                },
              },
            },

            encoding: {
              file: {
                contentType: 'image/jpeg, image/jpg, image/png, image/webp',
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: 'Image uploaded successfully.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadImageSuccessResponse',
              },
            },
          },
        },

        400: {
          description: 'Validation failed or folder is invalid.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadValidationError',
              },

              examples: {
                fileRequired: {
                  summary: 'File missing',

                  value: {
                    success: false,

                    statusCode: 400,

                    message: 'File is required',
                  },
                },

                invalidFolder: {
                  summary: 'Invalid folder',

                  value: {
                    success: false,

                    statusCode: 400,

                    message: 'Invalid upload folder',
                  },
                },
              },
            },
          },
        },

        401: {
          description: 'Authentication required.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadUnauthorizedResponse',
              },
            },
          },
        },

        403: {
          description: 'Authenticated but not authorized.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadForbiddenResponse',
              },
            },
          },
        },

        413: {
          description: 'Uploaded file exceeds the maximum allowed size.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadFileTooLargeResponse',
              },
            },
          },
        },

        415: {
          description: 'Unsupported file type.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadUnsupportedMediaTypeResponse',
              },
            },
          },
        },

        500: {
          description: 'Internal server error.',

          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UploadInternalServerErrorResponse',
              },
            },
          },
        },
      },
    },
    /* ---------------------------------------------------------------------- */
    /* Delete Image                                                          */
    /* ---------------------------------------------------------------------- */

    '/upload/image': {
      delete: {
        tags: ['Upload'],

        operationId: 'deleteImage',

        summary: 'Delete uploaded image',

        description: 'Deletes an existing Cloudinary image using its public ID.',

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
                $ref: '#/components/schemas/DeleteImageRequest',
              },

              examples: {
                projectImage: {
                  summary: 'Delete project image',

                  value: {
                    publicId: 'portfolio/projects/ecommerce-dashboard',
                  },
                },

                heroImage: {
                  summary: 'Delete hero image',

                  value: {
                    publicId: 'portfolio/hero/profile-image',
                  },
                },
              },
            },
          },
        },

        responses: {
          200: {
            description: 'Image deleted successfully.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DeleteImageSuccessResponse',
                },
              },
            },
          },

          400: {
            description: 'Invalid request.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UploadValidationError',
                },

                examples: {
                  missingPublicId: {
                    summary: 'Missing public ID',

                    value: {
                      success: false,

                      statusCode: 400,

                      message: 'Public ID is required',
                    },
                  },
                },
              },
            },
          },

          401: {
            description: 'Authentication required.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UploadUnauthorizedResponse',
                },
              },
            },
          },

          403: {
            description: 'Authenticated but not authorized.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UploadForbiddenResponse',
                },
              },
            },
          },

          404: {
            description: 'Image not found.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UploadNotFoundResponse',
                },
              },
            },
          },

          500: {
            description: 'Internal server error.',

            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/UploadInternalServerErrorResponse',
                },
              },
            },
          },
        },
      },
    },
  },
};
