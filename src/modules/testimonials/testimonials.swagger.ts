// src\modules\testimonials\testimonials.swagger.ts

export const testimonialsSchemas = {
  TestimonialImage: {
    type: "object",

    properties: {
      url: {
        type: "string",
        format: "uri",
      },

      publicId: {
        type: "string",
      },
    },

    required: ["url", "publicId"],
  },

  Testimonial: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      clientName: {
        type: "string",
      },

      clientPosition: {
        type: "string",
      },

      clientCompany: {
        type: "string",
      },

      clientImage: {
        $ref: "#/components/schemas/TestimonialImage",
      },

      clientWebsite: {
        type: "string",
        format: "uri",
      },

      projectName: {
        type: "string",
      },

      review: {
        type: "string",
      },

      rating: {
        type: "integer",
        minimum: 1,
        maximum: 5,
      },

      clientType: {
        type: "string",
        enum: [
          "Individual",
          "Freelancer",
          "Startup",
          "Company",
          "Agency",
          "Organization",
          "Other",
        ],
      },

      isFeatured: {
        type: "boolean",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
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

  CreateTestimonialRequest: {
    type: "object",

    required: ["clientName", "review", "rating", "clientType"],

    properties: {
      clientName: {
        type: "string",
      },

      clientPosition: {
        type: "string",
      },

      clientCompany: {
        type: "string",
      },

      clientImage: {
        $ref: "#/components/schemas/TestimonialImage",
      },

      clientWebsite: {
        type: "string",
        format: "uri",
      },

      projectName: {
        type: "string",
      },

      review: {
        type: "string",
      },

      rating: {
        type: "integer",
        minimum: 1,
        maximum: 5,
      },

      clientType: {
        type: "string",
        enum: [
          "Individual",
          "Freelancer",
          "Startup",
          "Company",
          "Agency",
          "Organization",
          "Other",
        ],
      },

      isFeatured: {
        type: "boolean",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
      },
    },
  },

  UpdateTestimonialRequest: {
    type: "object",

    properties: {
      clientName: {
        type: "string",
      },

      clientPosition: {
        type: "string",
      },

      clientCompany: {
        type: "string",
      },

      clientImage: {
        $ref: "#/components/schemas/TestimonialImage",
      },

      clientWebsite: {
        type: "string",
        format: "uri",
      },

      projectName: {
        type: "string",
      },

      review: {
        type: "string",
      },

      rating: {
        type: "integer",
        minimum: 1,
        maximum: 5,
      },

      clientType: {
        type: "string",
        enum: [
          "Individual",
          "Freelancer",
          "Startup",
          "Company",
          "Agency",
          "Organization",
          "Other",
        ],
      },

      isFeatured: {
        type: "boolean",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
      },
    },
  },

  AverageRatingResponse: {
    type: "object",

    properties: {
      averageRating: {
        type: "number",
      },

      totalTestimonials: {
        type: "integer",
      },
    },
  },
};

export const testimonialsPaths = {
  "/testimonials": {
    get: {
      tags: ["Testimonials"],

      summary: "Get all testimonials",

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
          name: "sortBy",
          schema: {
            type: "string",
          },
        },

        {
          in: "query",
          name: "sortOrder",
          schema: {
            type: "string",
            enum: ["asc", "desc"],
          },
        },
      ],

      responses: {
        200: {
          description: "Testimonials retrieved successfully",
        },
      },
    },

    post: {
      tags: ["Testimonials"],

      summary: "Create testimonial",

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
              $ref: "#/components/schemas/CreateTestimonialRequest",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Testimonial created successfully",
        },
      },
    },
  },

  "/testimonials/{id}": {
    get: {
      tags: ["Testimonials"],

      summary: "Get testimonial by ID",

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
          description: "Testimonial retrieved successfully",
        },
      },
    },

    patch: {
      tags: ["Testimonials"],

      summary: "Update testimonial",

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
              $ref: "#/components/schemas/UpdateTestimonialRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "Testimonial updated successfully",
        },
      },
    },

    delete: {
      tags: ["Testimonials"],

      summary: "Delete testimonial",

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
          description: "Testimonial deleted successfully",
        },
      },
    },
  },

  "/testimonials/featured": {
    get: {
      tags: ["Testimonials"],
      summary: "Get featured testimonials",
    },
  },

  "/testimonials/active": {
    get: {
      tags: ["Testimonials"],
      summary: "Get active testimonials",
    },
  },

  "/testimonials/average-rating": {
    get: {
      tags: ["Testimonials"],

      summary: "Get average rating",

      responses: {
        200: {
          description: "Average rating retrieved successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AverageRatingResponse",
              },
            },
          },
        },
      },
    },
  },

  "/testimonials/rating/{rating}": {
    get: {
      tags: ["Testimonials"],

      summary: "Get testimonials by rating",

      parameters: [
        {
          in: "path",
          name: "rating",
          required: true,
          schema: {
            type: "integer",
            minimum: 1,
            maximum: 5,
          },
        },
      ],
    },
  },

  "/testimonials/client-type/{clientType}": {
    get: {
      tags: ["Testimonials"],

      summary: "Get testimonials by client type",

      parameters: [
        {
          in: "path",
          name: "clientType",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },

  "/testimonials/project/{projectName}": {
    get: {
      tags: ["Testimonials"],

      summary: "Get testimonials by project",

      parameters: [
        {
          in: "path",
          name: "projectName",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },
};
