// src/modules/skills/skills.swagger.ts

import {
  SKILLS_CATEGORIES,
  SKILLS_DEFAULT,
  SKILLS_VALIDATION,
} from "./skills.constant.js";

/* -------------------------------------------------------------------------- */
/*                               Reusable Enums                               */
/* -------------------------------------------------------------------------- */

const skillCategoryEnum = [...SKILLS_CATEGORIES];

/* -------------------------------------------------------------------------- */
/*                               Shared Schemas                               */
/* -------------------------------------------------------------------------- */

export const skillsSchemas = {
  Image: {
    type: "object",

    required: ["url", "publicId"],

    properties: {
      url: {
        type: "string",
        format: "uri",
        maxLength: SKILLS_VALIDATION.IMAGE.URL_MAX_LENGTH,
        example:
          "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",
      },

      publicId: {
        type: "string",
        maxLength: SKILLS_VALIDATION.IMAGE.PUBLIC_ID_MAX_LENGTH,
        example: "portfolio/skills/react",
      },
    },
  },

  Skill: {
    type: "object",

    required: [
      "_id",
      "name",
      "slug",
      "category",
      "proficiency",
      "sortOrder",
      "isActive",
      "createdAt",
      "updatedAt",
    ],

    properties: {
      _id: {
        type: "string",
        example: "685b0d6c7e5e8d1a9a9a9a9a",
      },

      name: {
        type: "string",
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
        maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
        example: "React",
      },

      slug: {
        type: "string",
        example: "react",
      },

      category: {
        type: "string",
        enum: skillCategoryEnum,
        example: "Frontend",
      },

      proficiency: {
        type: "integer",
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
        maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
        default: SKILLS_DEFAULT.PROFICIENCY,
        example: 95,
      },

      image: {
        allOf: [
          {
            $ref: "#/components/schemas/Image",
          },
        ],
        nullable: true,
      },

      description: {
        type: "string",
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
        example:
          "Building modern, scalable and high-performance user interfaces using React, TypeScript and the latest ecosystem.",
      },

      sortOrder: {
        type: "integer",
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
        maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
        default: SKILLS_DEFAULT.SORT_ORDER,
        example: 1,
      },

      isActive: {
        type: "boolean",
        default: SKILLS_DEFAULT.IS_ACTIVE,
        example: true,
      },

      createdAt: {
        type: "string",
        format: "date-time",
        example: "2026-06-26T10:15:30.000Z",
      },

      updatedAt: {
        type: "string",
        format: "date-time",
        example: "2026-06-26T10:15:30.000Z",
      },
    },
  },
 
CreateSkillRequest: {
  type: "object",

    required: [
      "name",
      "category",
    ],

      properties: {
    name: {
      type: "string",
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
          maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
            example: "React",
      },

    category: {
      type: "string",
        enum: skillCategoryEnum,
        example: "Frontend",
      },

    proficiency: {
      type: "integer",
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
          maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
        default: SKILLS_DEFAULT.PROFICIENCY,
        example: 95,
      },

    image: {
      allOf: [
        {
          $ref: "#/components/schemas/Image",
        },
      ],
      },

    description: {
      type: "string",
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
          example:
      "Building scalable frontend applications using React, Next.js and TypeScript.",
      },

    sortOrder: {
      type: "integer",
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
          maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
        default: SKILLS_DEFAULT.SORT_ORDER,
        example: 1,
      },

    isActive: {
      type: "boolean",
        default: SKILLS_DEFAULT.IS_ACTIVE,
        example: true,
      },
  },
},

UpdateSkillRequest: {
  type: "object",

    properties: {
    name: {
      type: "string",
        minLength: SKILLS_VALIDATION.NAME.MIN_LENGTH,
          maxLength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
            example: "Next.js",
      },

    category: {
      type: "string",
        enum: skillCategoryEnum,
        example: "Frontend",
      },

    proficiency: {
      type: "integer",
        minimum: SKILLS_VALIDATION.PROFICIENCY.MIN,
          maximum: SKILLS_VALIDATION.PROFICIENCY.MAX,
            example: 98,
      },

    image: {
      allOf: [
        {
          $ref: "#/components/schemas/Image",
        },
      ],
      },

    description: {
      type: "string",
        maxLength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
          example:
      "Updated skill description for the latest technologies and frameworks.",
      },

    sortOrder: {
      type: "integer",
        minimum: SKILLS_VALIDATION.SORT_ORDER.MIN,
          maximum: SKILLS_VALIDATION.SORT_ORDER.MAX,
            example: 2,
      },

    isActive: {
      type: "boolean",
        example: true,
      },
  },
},

SkillResponse: {
  type: "object",

    properties: {
    success: {
      type: "boolean",
        example: true,
      },

    statusCode: {
      type: "integer",
        example: 200,
      },

    message: {
      type: "string",
        example: "Skill retrieved successfully",
      },

    data: {
      $ref: "#/components/schemas/Skill",
      },
  },
},

SkillsResponse: {
  type: "object",

    properties: {
    success: {
      type: "boolean",
        example: true,
      },

    statusCode: {
      type: "integer",
        example: 200,
      },

    message: {
      type: "string",
        example: "Skill retrieved successfully",
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
            example: 50,
          },

        totalPage: {
          type: "integer",
            example: 5,
          },
      },
    },

    data: {
      type: "array",

        items: {
        $ref: "#/components/schemas/Skill",
        },
    },
  },
},

SkillDeleteResponse: {
  type: "object",

    properties: {
    success: {
      type: "boolean",
        example: true,
      },

    statusCode: {
      type: "integer",
        example: 200,
      },

    message: {
      type: "string",
        example: "Skill deleted successfully",
      },

    data: {
      $ref: "#/components/schemas/Skill",
      },
  },
},
};
export const skillsPaths = {
  "/skills": {
    get: {
      tags: ["Skills"],

      summary: "Get all skills",

      description:
        "Retrieve a paginated list of skills with support for searching, filtering, sorting, pagination, and field selection.",

      parameters: [
        {
          in: "query",
          name: "searchTerm",
          required: false,
          description:
            "Search by skill name or category.",
          schema: {
            type: "string",
            example: "React",
          },
        },

        {
          in: "query",
          name: "page",
          required: false,
          description: "Page number.",
          schema: {
            type: "integer",
            minimum: 1,
            default: 1,
            example: 1,
          },
        },

        {
          in: "query",
          name: "limit",
          required: false,
          description: "Number of records per page.",
          schema: {
            type: "integer",
            minimum: 1,
            maximum: 100,
            default: 10,
            example: 10,
          },
        },

        {
          in: "query",
          name: "sort",
          required: false,
          description:
            "Sort fields. Prefix with '-' for descending order.",
          schema: {
            type: "string",
            example: "-createdAt",
          },
        },

        {
          in: "query",
          name: "fields",
          required: false,
          description:
            "Comma-separated list of fields to include.",
          schema: {
            type: "string",
            example:
              "name,category,proficiency,image",
          },
        },

        {
          in: "query",
          name: "category",
          required: false,
          description: "Filter by skill category.",
          schema: {
            type: "string",
            enum: skillCategoryEnum,
            example: "Frontend",
          },
        },

        {
          in: "query",
          name: "isActive",
          required: false,
          description: "Filter active/inactive skills.",
          schema: {
            type: "boolean",
            example: true,
          },
        },
      ],

      responses: {
        200: {
          description: "Skills retrieved successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillsResponse",
              },

              examples: {
                success: {
                  summary: "Successful response",

                  value: {
                    success: true,

                    statusCode: 200,

                    message: "Skill retrieved successfully",

                    meta: {
                      page: 1,
                      limit: 10,
                      total: 18,
                      totalPage: 2,
                    },

                    data: [
                      {
                        _id: "685b0d6c7e5e8d1a9a9a9a9a",

                        name: "React",

                        slug: "react",

                        category: "Frontend",

                        proficiency: 95,

                        image: {
                          url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                          publicId: "portfolio/skills/react",
                        },

                        description:
                          "Building scalable user interfaces using React and TypeScript.",

                        sortOrder: 1,

                        isActive: true,

                        createdAt:
                          "2026-06-26T08:30:00.000Z",

                        updatedAt:
                          "2026-06-26T08:30:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        400: {
          description: "Invalid query parameters.",
        },

        500: {
          description: "Internal server error.",
        },
      },
    },
    post: {
      tags: ["Skills"],

      summary: "Create a new skill",

      description:
        "Creates a new skill. Skill names must be unique. A slug is automatically generated from the skill name.",

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
              $ref: "#/components/schemas/CreateSkillRequest",
            },

            examples: {
              frontendSkill: {
                summary: "Frontend Skill",

                value: {
                  name: "React",

                  category: "Frontend",

                  proficiency: 95,

                  image: {
                    url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                    publicId: "portfolio/skills/react",
                  },

                  description:
                    "Building scalable component-based user interfaces with React and TypeScript.",

                  sortOrder: 1,

                  isActive: true,
                },
              },

              backendSkill: {
                summary: "Backend Skill",

                value: {
                  name: "Node.js",

                  category: "Backend",

                  proficiency: 92,

                  image: {
                    url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nodejs.png",

                    publicId: "portfolio/skills/nodejs",
                  },

                  description:
                    "Developing scalable REST APIs using Express.js and TypeScript.",

                  sortOrder: 2,

                  isActive: true,
                },
              },
            },
          },
        },
      },

      responses: {
        201: {
          description: "Skill created successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillResponse",
              },

              examples: {
                success: {
                  summary: "Successful creation",

                  value: {
                    success: true,

                    statusCode: 201,

                    message: "Skill created successfully",

                    data: {
                      _id: "685b0d6c7e5e8d1a9a9a9a9a",

                      name: "React",

                      slug: "react",

                      category: "Frontend",

                      proficiency: 95,

                      image: {
                        url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                        publicId: "portfolio/skills/react",
                      },

                      description:
                        "Building scalable component-based user interfaces with React and TypeScript.",

                      sortOrder: 1,

                      isActive: true,

                      createdAt:
                        "2026-06-26T08:30:00.000Z",

                      updatedAt:
                        "2026-06-26T08:30:00.000Z",
                    },
                  },
                },
              },
            },
          },
        },

        400: {
          description: "Validation failed.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 400,

                message: "Validation Error",

                errorMessages: [
                  {
                    path: "name",

                    message: "Skill name is required",
                  },
                ],
              },
            },
          },
        },

        401: {
          description: "Authentication required.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 401,

                message: "Unauthorized",
              },
            },
          },
        },

        403: {
          description: "Access denied.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 403,

                message: "Forbidden",
              },
            },
          },
        },

        409: {
          description: "Skill already exists.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 409,

                message: "Skill already exists",
              },
            },
          },
        },

        500: {
          description: "Internal server error.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 500,

                message: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
  "/skills/active": {
    get: {
      tags: ["Skills"],

      summary: "Get active skills",

      description:
        "Retrieve all active skills sorted by category and sort order.",

      responses: {
        200: {
          description: "Active skills retrieved successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillsResponse",
              },

              examples: {
                success: {
                  summary: "Active skills",

                  value: {
                    success: true,

                    statusCode: 200,

                    message: "Skill retrieved successfully",

                    data: [
                      {
                        _id: "685b0d6c7e5e8d1a9a9a9a9a",

                        name: "React",

                        slug: "react",

                        category: "Frontend",

                        proficiency: 95,

                        image: {
                          url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                          publicId: "portfolio/skills/react",
                        },

                        description:
                          "Building scalable user interfaces using React and TypeScript.",

                        sortOrder: 1,

                        isActive: true,

                        createdAt:
                          "2026-06-26T08:30:00.000Z",

                        updatedAt:
                          "2026-06-26T08:30:00.000Z",
                      },

                      {
                        _id: "685b0d6c7e5e8d1a9a9a9a9b",

                        name: "Node.js",

                        slug: "node-js",

                        category: "Backend",

                        proficiency: 92,

                        image: {
                          url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nodejs.png",

                          publicId: "portfolio/skills/nodejs",
                        },

                        description:
                          "Building scalable REST APIs with Express and TypeScript.",

                        sortOrder: 2,

                        isActive: true,

                        createdAt:
                          "2026-06-26T08:30:00.000Z",

                        updatedAt:
                          "2026-06-26T08:30:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        500: {
          description: "Internal server error.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 500,

                message: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },

  "/skills/category/{category}": {
    get: {
      tags: ["Skills"],

      summary: "Get skills by category",

      description:
        "Retrieve all active skills belonging to a specific category.",

      parameters: [
        {
          in: "path",

          name: "category",

          required: true,

          description: "Skill category.",

          schema: {
            type: "string",

            enum: skillCategoryEnum,

            example: "Frontend",
          },
        },
      ],

      responses: {
        200: {
          description: "Skills retrieved successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillsResponse",
              },

              examples: {
                success: {
                  summary: "Frontend skills",

                  value: {
                    success: true,

                    statusCode: 200,

                    message: "Skill retrieved successfully",

                    data: [
                      {
                        _id: "685b0d6c7e5e8d1a9a9a9a9a",

                        name: "React",

                        slug: "react",

                        category: "Frontend",

                        proficiency: 95,

                        image: {
                          url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                          publicId: "portfolio/skills/react",
                        },

                        description:
                          "Building scalable user interfaces with React.",

                        sortOrder: 1,

                        isActive: true,

                        createdAt:
                          "2026-06-26T08:30:00.000Z",

                        updatedAt:
                          "2026-06-26T08:30:00.000Z",
                      },

                      {
                        _id: "685b0d6c7e5e8d1a9a9a9a9c",

                        name: "Next.js",

                        slug: "next-js",

                        category: "Frontend",

                        proficiency: 93,

                        image: {
                          url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nextjs.png",

                          publicId: "portfolio/skills/nextjs",
                        },

                        description:
                          "Developing production-grade React applications with Next.js.",

                        sortOrder: 2,

                        isActive: true,

                        createdAt:
                          "2026-06-26T08:30:00.000Z",

                        updatedAt:
                          "2026-06-26T08:30:00.000Z",
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        400: {
          description: "Invalid category.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 400,

                message: "Invalid skill category",
              },
            },
          },
        },

        404: {
          description: "No skills found.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 404,

                message: "Skill not found",
              },
            },
          },
        },

        500: {
          description: "Internal server error.",

          content: {
            "application/json": {
              example: {
                success: false,

                statusCode: 500,

                message: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
  "/skills/{id}": {
    get: {
      tags: ["Skills"],

      summary: "Get skill by ID",

      description:
        "Retrieve a single skill using its unique MongoDB ObjectId.",

      parameters: [
        {
          in: "path",

          name: "id",

          required: true,

          description: "MongoDB Skill ID.",

          schema: {
            type: "string",

            example: "685b0d6c7e5e8d1a9a9a9a9a",
          },
        },
      ],

      responses: {
        200: {
          description: "Skill retrieved successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillResponse",
              },

              examples: {
                success: {
                  value: {
                    success: true,

                    statusCode: 200,

                    message: "Skill retrieved successfully",

                    data: {
                      _id: "685b0d6c7e5e8d1a9a9a9a9a",

                      name: "React",

                      slug: "react",

                      category: "Frontend",

                      proficiency: 95,

                      image: {
                        url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                        publicId: "portfolio/skills/react",
                      },

                      description:
                        "Building scalable React applications.",

                      sortOrder: 1,

                      isActive: true,

                      createdAt: "2026-06-26T08:30:00.000Z",

                      updatedAt: "2026-06-26T08:30:00.000Z",
                    },
                  },
                },
              },
            },
          },
        },

        404: {
          description: "Skill not found.",
        },

        500: {
          description: "Internal server error.",
        },
      },
    },

    patch: {
      tags: ["Skills"],

      summary: "Update skill",

      description:
        "Update an existing skill. Only administrators are authorized to update skills.",

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

          description: "MongoDB Skill ID.",

          schema: {
            type: "string",

            example: "685b0d6c7e5e8d1a9a9a9a9a",
          },
        },
      ],

      requestBody: {
        required: true,

        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateSkillRequest",
            },

            examples: {
              updateSkill: {
                value: {
                  name: "Next.js",

                  category: "Frontend",

                  proficiency: 98,

                  image: {
                    url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/nextjs.png",

                    publicId: "portfolio/skills/nextjs",
                  },

                  description:
                    "Production-ready React framework for modern web applications.",

                  sortOrder: 2,

                  isActive: true,
                },
              },
            },
          },
        },
      },

      responses: {
        200: {
          description: "Skill updated successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillResponse",
              },
            },
          },
        },

        400: {
          description: "Validation failed.",
        },

        401: {
          description: "Unauthorized.",
        },

        403: {
          description: "Forbidden.",
        },

        404: {
          description: "Skill not found.",
        },

        409: {
          description: "Skill already exists.",
        },

        500: {
          description: "Internal server error.",
        },
      },
    },

    delete: {
      tags: ["Skills"],

      summary: "Delete skill",

      description:
        "Delete a skill by its MongoDB ObjectId. Only administrators are authorized to delete skills.",

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

          description: "MongoDB Skill ID.",

          schema: {
            type: "string",

            example: "685b0d6c7e5e8d1a9a9a9a9a",
          },
        },
      ],

      responses: {
        200: {
          description: "Skill deleted successfully.",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SkillDeleteResponse",
              },

              examples: {
                success: {
                  value: {
                    success: true,

                    statusCode: 200,

                    message: "Skill deleted successfully",

                    data: {
                      _id: "685b0d6c7e5e8d1a9a9a9a9a",

                      name: "React",

                      slug: "react",

                      category: "Frontend",

                      proficiency: 95,

                      image: {
                        url: "https://res.cloudinary.com/demo/image/upload/v1749800000/skills/react.png",

                        publicId: "portfolio/skills/react",
                      },

                      description:
                        "Building scalable React applications.",

                      sortOrder: 1,

                      isActive: true,

                      createdAt: "2026-06-26T08:30:00.000Z",

                      updatedAt: "2026-06-26T08:30:00.000Z",
                    },
                  },
                },
              },
            },
          },
        },

        401: {
          description: "Unauthorized.",
        },

        403: {
          description: "Forbidden.",
        },

        404: {
          description: "Skill not found.",
        },

        500: {
          description: "Internal server error.",
        },
      },
    },
  },
};
