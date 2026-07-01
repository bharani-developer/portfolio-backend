// src/modules/hero/hero.swagger.ts

export const heroSchemas = {
  HeroImage: {
    type: "object",
    required: ["url", "publicId"],
    properties: {
      url: {
        type: "string",
        format: "uri",
        example:
          "https://res.cloudinary.com/demo/image/upload/v1/portfolio/profile.jpg",
      },

      publicId: {
        type: "string",
        example: "portfolio/profile-image",
      },
    },
  },

  Hero: {
    type: "object",
    required: ["title", "subtitle", "description", "technologies", "isActive"],
    properties: {
      _id: {
        type: "string",
        example: "6848d5a4b63f9f4d9b8c1234",
      },

      title: {
        type: "string",
        example: "Hi, I'm Bharani",
      },

      subtitle: {
        type: "string",
        example: "Full Stack Developer",
      },

      description: {
        type: "string",
        example:
          "Passionate Full Stack Developer specializing in modern web and mobile applications.",
      },

      profileImage: {
        $ref: "#/components/schemas/HeroImage",
      },

      resumeUrl: {
        type: "string",
        format: "uri",
        example: "https://example.com/resume.pdf",
      },

      ctaButtonText: {
        type: "string",
        example: "Download Resume",
      },

      ctaButtonLink: {
        type: "string",
        format: "uri",
        example: "https://example.com/resume.pdf",
      },

      technologies: {
        type: "array",
        items: {
          type: "string",
        },
        example: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Flutter",
        ],
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

  CreateHeroRequest: {
    type: "object",
    required: ["title", "subtitle", "description"],
    properties: {
      title: {
        type: "string",
        maxLength: 150,
        example: "Hi, I'm Bharani",
      },

      subtitle: {
        type: "string",
        maxLength: 200,
        example: "Full Stack Developer",
      },

      description: {
        type: "string",
        maxLength: 1000,
        example:
          "Passionate Full Stack Developer building scalable web and mobile applications.",
      },

      profileImage: {
        $ref: "#/components/schemas/HeroImage",
      },

      resumeUrl: {
        type: "string",
        format: "uri",
        example: "https://example.com/resume.pdf",
      },

      ctaButtonText: {
        type: "string",
        maxLength: 100,
        example: "Download Resume",
      },

      ctaButtonLink: {
        type: "string",
        format: "uri",
        maxLength: 255,
        example: "https://example.com/resume.pdf",
      },

      technologies: {
        type: "array",
        maxItems: 20,
        items: {
          type: "string",
          maxLength: 50,
        },
        example: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
      },

      isActive: {
        type: "boolean",
        default: true,
      },
    },
  },

  UpdateHeroRequest: {
    type: "object",
    properties: {
      title: {
        type: "string",
        maxLength: 150,
      },

      subtitle: {
        type: "string",
        maxLength: 200,
      },

      description: {
        type: "string",
        maxLength: 1000,
      },

      profileImage: {
        $ref: "#/components/schemas/HeroImage",
      },

      resumeUrl: {
        type: "string",
        format: "uri",
      },

      ctaButtonText: {
        type: "string",
        maxLength: 100,
      },

      ctaButtonLink: {
        type: "string",
        format: "uri",
        maxLength: 255,
      },

      technologies: {
        type: "array",
        maxItems: 20,
        items: {
          type: "string",
          maxLength: 50,
        },
      },

      isActive: {
        type: "boolean",
      },
    },
  },

  HeroResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Hero section retrieved successfully",
      },

      data: {
        $ref: "#/components/schemas/Hero",
      },
    },
  },

  DeleteHeroResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Hero section deleted successfully",
      },

      data: {
        type: "null",
      },
    },
  },

  ValidationErrorResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },

      message: {
        type: "string",
        example: "Validation Error",
      },

      errorSources: {
        type: "array",
        items: {
          type: "object",
          properties: {
            path: {
              type: "string",
              example: "title",
            },

            message: {
              type: "string",
              example: "Title is required",
            },
          },
        },
      },
    },
  },

  UnauthorizedResponse: {
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

  ForbiddenResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },

      message: {
        type: "string",
        example: "Forbidden",
      },
    },
  },

  NotFoundResponse: {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: false,
      },

      message: {
        type: "string",
        example: "Hero section not found",
      },
    },
  },
};

export const heroPaths = {
  "/hero": {
    get: {
      tags: ["Hero"],
      summary: "Get Hero Section",
      description: "Retrieve the portfolio hero section.",

      responses: {
        200: {
          description: "Hero section retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/HeroResponse",
              },
            },
          },
        },

        404: {
          description: "Hero section not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundResponse",
              },
            },
          },
        },
      },
    },

    post: {
      tags: ["Hero"],
      summary: "Create Hero Section",
      description: "Create the portfolio hero section.",

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
              $ref: "#/components/schemas/CreateHeroRequest",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Hero section created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/HeroResponse",
              },
            },
          },
        },

        400: {
          description: "Validation Error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationErrorResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedResponse",
              },
            },
          },
        },

        403: {
          description: "Forbidden",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ForbiddenResponse",
              },
            },
          },
        },
      },
    },

    patch: {
      tags: ["Hero"],
      summary: "Update Hero Section",
      description: "Update the portfolio hero section.",

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
              $ref: "#/components/schemas/UpdateHeroRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "Hero section updated successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/HeroResponse",
              },
            },
          },
        },

        400: {
          description: "Validation Error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ValidationErrorResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedResponse",
              },
            },
          },
        },

        403: {
          description: "Forbidden",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ForbiddenResponse",
              },
            },
          },
        },

        404: {
          description: "Hero section not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundResponse",
              },
            },
          },
        },
      },
    },

    delete: {
      tags: ["Hero"],
      summary: "Delete Hero Section",
      description: "Delete the portfolio hero section.",

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: "Hero section deleted successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DeleteHeroResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UnauthorizedResponse",
              },
            },
          },
        },

        403: {
          description: "Forbidden",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ForbiddenResponse",
              },
            },
          },
        },

        404: {
          description: "Hero section not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/NotFoundResponse",
              },
            },
          },
        },
      },
    },
  },
};
