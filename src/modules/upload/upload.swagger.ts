export const uploadSchemas = {
  UploadResponse: {
    type: "object",

    required: ["url", "publicId"],

    properties: {
      url: {
        type: "string",
        format: "uri",
        example:
          "https://res.cloudinary.com/demo/image/upload/v1749999999/portfolio/profile.webp",
      },

      publicId: {
        type: "string",
        example: "portfolio/profile",
      },
    },
  },

  UploadImageSuccessResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "File uploaded successfully",
      },

      data: {
        $ref: "#/components/schemas/UploadResponse",
      },
    },
  },

  DeleteImageRequest: {
    type: "object",

    required: ["publicId"],

    properties: {
      publicId: {
        type: "string",
        example: "portfolio/profile",
      },
    },
  },

  DeleteImageResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "File deleted successfully",
      },

      data: {
        type: "null",
      },
    },
  },

  UploadValidationError: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: false,
      },

      message: {
        type: "string",
        example: "File is required",
      },
    },
  },

  UploadUnauthorizedResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: false,
      },

      message: {
        type: "string",
        example: "Unauthorized access",
      },
    },
  },
};

export const uploadPaths = {
  "/upload/image": {
    post: {
      tags: ["Upload"],

      summary: "Upload Image",

      description:
        "Upload an image to Cloudinary and receive the uploaded image URL and public ID.",

      security: [
        {
          bearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          "multipart/form-data": {
            schema: {
              type: "object",

              required: ["file"],

              properties: {
                file: {
                  type: "string",
                  format: "binary",
                  description:
                    "Image file (jpeg, jpg, png, webp). Maximum size: 5 MB.",
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: "File uploaded successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UploadImageSuccessResponse",
              },
            },
          },
        },

        400: {
          description: "File is required or invalid file uploaded",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UploadValidationError",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UploadUnauthorizedResponse",
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ["Upload"],

      summary: "Delete Image",

      description: "Delete an uploaded Cloudinary image using its public ID.",

      security: [
        {
          bearerAuth: [],
        },
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DeleteImageRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "File deleted successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DeleteImageResponse",
              },
            },
          },
        },

        400: {
          description: "Public ID is required",
        },

        401: {
          description: "Unauthorized",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UploadUnauthorizedResponse",
              },
            },
          },
        },

        404: {
          description: "File not found",
        },
      },
    },
  },
};
