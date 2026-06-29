// src\modules\services\services.swagger.ts

export const servicesSchemas = {
  Service: {
    type: "object",

    required: [
      "title",
      "slug",
      "shortDescription",
      "description",
      "sortOrder",
      "isActive",
    ],

    properties: {
      _id: {
        type: "string",
        example: "685b0d6c7e5e8d1a9a9a9a9a",
      },

      title: {
        type: "string",
        example: "Web Development",
      },

      slug: {
        type: "string",
        example: "web-development",
      },

      shortDescription: {
        type: "string",
        example: "Modern web applications",
      },

      description: {
        type: "string",
        example:
          "Building scalable and responsive web applications using React, Node.js, TypeScript, Express, and MongoDB.",
      },

      icon: {
        type: "string",
        example: "code",
      },

      sortOrder: {
        type: "integer",
        example: 1,
      },

      isActive: {
        type: "boolean",
        example: true,
      },

      createdAt: {
        type: "string",
        format: "date-time",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  CreateServiceRequest: {
    type: "object",

    required: ["title", "shortDescription", "description"],

    properties: {
      title: {
        type: "string",
        example: "Web Development",
      },

      shortDescription: {
        type: "string",
        example: "Modern web applications",
      },

      description: {
        type: "string",
        example: "Building scalable and responsive web applications.",
      },

      icon: {
        type: "string",
        example: "code",
      },

      sortOrder: {
        type: "integer",
        example: 1,
      },

      isActive: {
        type: "boolean",
        default: true,
      },
    },
  },

  UpdateServiceRequest: {
    type: "object",

    properties: {
      title: {
        type: "string",
        example: "Advanced Web Development",
      },

      shortDescription: {
        type: "string",
      },

      description: {
        type: "string",
      },

      icon: {
        type: "string",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
      },
    },
  },

  ServiceResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Data retrieved successfully",
      },

      data: {
        $ref: "#/components/schemas/Service",
      },
    },
  },

  ServicesResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Data retrieved successfully",
      },

      meta: {
        type: "object",

        properties: {
          page: {
            type: "integer",
            example: 1,
          },

          limit: {
            type: "integer",
            example: 10,
          },

          total: {
            type: "integer",
            example: 25,
          },

          totalPage: {
            type: "integer",
            example: 3,
          },
        },
      },

      data: {
        type: "array",

        items: {
          $ref: "#/components/schemas/Service",
        },
      },
    },
  },

  ServiceDeleteResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Deleted successfully",
      },

      data: {
        $ref: "#/components/schemas/Service",
      },
    },
  },
};

export const servicesPaths = {
  "/services": {
    get: {
      tags: ["Services"],

      summary: "Get all services",

      description:
        "Retrieve paginated services with search, filtering, sorting and field selection support.",

      parameters: [
        {
          in: "query",
          name: "searchTerm",
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "page",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "limit",
          schema: {
            type: "integer",
          },
        },
        {
          in: "query",
          name: "sort",
          schema: {
            type: "string",
          },
        },
        {
          in: "query",
          name: "fields",
          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Services retrieved successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServicesResponse",
              },
            },
          },
        },
      },
    },

    post: {
      tags: ["Services"],

      summary: "Create service",

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
              $ref: "#/components/schemas/CreateServiceRequest",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Service created successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServiceResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
        },

        403: {
          description: "Forbidden",
        },

        409: {
          description: "Service already exists",
        },
      },
    },
  },

  "/services/{id}": {
    get: {
      tags: ["Services"],

      summary: "Get service by id",

      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Service retrieved successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServiceResponse",
              },
            },
          },
        },

        404: {
          description: "Service not found",
        },
      },
    },

    patch: {
      tags: ["Services"],

      summary: "Update service",

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateServiceRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "Service updated successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServiceResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
        },

        403: {
          description: "Forbidden",
        },

        404: {
          description: "Service not found",
        },
      },
    },

    delete: {
      tags: ["Services"],

      summary: "Delete service",

      security: [
        {
          bearerAuth: [],
        },
      ],

      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],

      responses: {
        200: {
          description: "Service deleted successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ServiceDeleteResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
        },

        403: {
          description: "Forbidden",
        },

        404: {
          description: "Service not found",
        },
      },
    },
  },
};
