// src\modules\education\education.swagger.ts

export const educationSchemas = {
  EducationImage: {
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

  Education: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      institution: {
        type: "string",
      },

      slug: {
        type: "string",
      },

      institutionLogo: {
        $ref: "#/components/schemas/EducationImage",
      },

      degree: {
        type: "string",
      },

      fieldOfStudy: {
        type: "string",
      },

      educationLevel: {
        type: "string",
        enum: [
          "Doctorate",
          "Masters",
          "Bachelors",
          "Diploma",
          "Higher Secondary",
          "Secondary",
          "Certification",
          "Other",
        ],
      },

      educationType: {
        type: "string",
        enum: ["Full Time", "Part Time", "Distance", "Online"],
      },

      location: {
        type: "string",
      },

      startDate: {
        type: "string",
        format: "date-time",
      },

      endDate: {
        type: "string",
        format: "date-time",
        nullable: true,
      },

      isCurrent: {
        type: "boolean",
      },

      gradeType: {
        type: "string",
        enum: ["CGPA", "GPA", "Percentage", "Division", "Pass"],
      },

      grade: {
        type: "string",
      },

      description: {
        type: "string",
      },

      achievements: {
        type: "array",

        items: {
          type: "string",
        },
      },

      skills: {
        type: "array",

        items: {
          type: "string",
        },
      },

      institutionWebsite: {
        type: "string",
        format: "uri",
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

  CreateEducationRequest: {
    type: "object",

    required: [
      "institution",
      "degree",
      "fieldOfStudy",
      "educationLevel",
      "educationType",
      "location",
      "startDate",
      "gradeType",
    ],

    properties: {
      institution: {
        type: "string",
      },

      degree: {
        type: "string",
      },

      fieldOfStudy: {
        type: "string",
      },

      institutionLogo: {
        $ref: "#/components/schemas/EducationImage",
      },

      educationLevel: {
        type: "string",
      },

      educationType: {
        type: "string",
      },

      location: {
        type: "string",
      },

      startDate: {
        type: "string",
        format: "date-time",
      },

      endDate: {
        type: "string",
        format: "date-time",
        nullable: true,
      },

      isCurrent: {
        type: "boolean",
      },

      gradeType: {
        type: "string",
      },

      grade: {
        type: "string",
      },

      description: {
        type: "string",
      },

      achievements: {
        type: "array",

        items: {
          type: "string",
        },
      },

      skills: {
        type: "array",

        items: {
          type: "string",
        },
      },

      institutionWebsite: {
        type: "string",
        format: "uri",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
      },
    },
  },

  UpdateEducationRequest: {
    type: "object",

    properties: {
      institution: {
        type: "string",
      },

      degree: {
        type: "string",
      },

      fieldOfStudy: {
        type: "string",
      },

      institutionLogo: {
        $ref: "#/components/schemas/EducationImage",
      },

      educationLevel: {
        type: "string",
      },

      educationType: {
        type: "string",
      },

      location: {
        type: "string",
      },

      startDate: {
        type: "string",
        format: "date-time",
      },

      endDate: {
        type: "string",
        format: "date-time",
        nullable: true,
      },

      isCurrent: {
        type: "boolean",
      },

      gradeType: {
        type: "string",
      },

      grade: {
        type: "string",
      },

      description: {
        type: "string",
      },

      achievements: {
        type: "array",

        items: {
          type: "string",
        },
      },

      skills: {
        type: "array",

        items: {
          type: "string",
        },
      },

      institutionWebsite: {
        type: "string",
        format: "uri",
      },

      sortOrder: {
        type: "integer",
      },

      isActive: {
        type: "boolean",
      },
    },
  },
};

export const educationPaths = {
  "/education": {
    get: {
      tags: ["Education"],

      summary: "Get all educations",

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
          description: "Educations retrieved successfully",
        },
      },
    },

    post: {
      tags: ["Education"],

      summary: "Create education",

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
              $ref: "#/components/schemas/CreateEducationRequest",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Education created successfully",
        },
      },
    },
  },

  "/education/{id}": {
    get: {
      tags: ["Education"],

      summary: "Get education by id",

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
          description: "Education retrieved successfully",
        },
      },
    },

    patch: {
      tags: ["Education"],

      summary: "Update education",

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
              $ref: "#/components/schemas/UpdateEducationRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "Education updated successfully",
        },
      },
    },

    delete: {
      tags: ["Education"],

      summary: "Delete education",

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
          description: "Education deleted successfully",
        },
      },
    },
  },

  "/education/active": {
    get: {
      tags: ["Education"],

      summary: "Get active educations",
    },
  },

  "/education/current": {
    get: {
      tags: ["Education"],

      summary: "Get current educations",
    },
  },

  "/education/slug/{slug}": {
    get: {
      tags: ["Education"],

      summary: "Get education by slug",
    },
  },

  "/education/level/{level}": {
    get: {
      tags: ["Education"],

      summary: "Get educations by level",
    },
  },

  "/education/skill/{skill}": {
    get: {
      tags: ["Education"],

      summary: "Get educations by skill",
    },
  },
};
