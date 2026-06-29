export const dashboardSchemas = {
  DashboardOverview: {
    type: "object",

    properties: {
      projects: {
        type: "number",
        example: 12,
      },

      blogs: {
        type: "number",
        example: 25,
      },

      services: {
        type: "number",
        example: 8,
      },

      skills: {
        type: "number",
        example: 35,
      },

      experiences: {
        type: "number",
        example: 6,
      },

      educations: {
        type: "number",
        example: 3,
      },

      certifications: {
        type: "number",
        example: 15,
      },

      testimonials: {
        type: "number",
        example: 10,
      },

      contacts: {
        type: "number",
        example: 50,
      },
    },
  },

  DashboardProjects: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 12,
      },

      active: {
        type: "number",
        example: 10,
      },

      featured: {
        type: "number",
        example: 4,
      },
    },
  },

  DashboardBlogs: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 25,
      },

      published: {
        type: "number",
        example: 18,
      },

      featured: {
        type: "number",
        example: 6,
      },
    },
  },

  DashboardServices: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 8,
      },

      active: {
        type: "number",
        example: 8,
      },
    },
  },

  DashboardSkills: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 35,
      },

      active: {
        type: "number",
        example: 32,
      },
    },
  },

  DashboardExperiences: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 6,
      },

      current: {
        type: "number",
        example: 1,
      },
    },
  },

  DashboardEducations: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 3,
      },

      current: {
        type: "number",
        example: 1,
      },
    },
  },

  DashboardCertifications: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 15,
      },

      active: {
        type: "number",
        example: 15,
      },
    },
  },

  DashboardTestimonials: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 10,
      },

      featured: {
        type: "number",
        example: 5,
      },
    },
  },

  DashboardContacts: {
    type: "object",

    properties: {
      total: {
        type: "number",
        example: 50,
      },

      unread: {
        type: "number",
        example: 12,
      },

      replied: {
        type: "number",
        example: 30,
      },
    },
  },

  DashboardConfiguration: {
    type: "object",

    properties: {
      heroConfigured: {
        type: "boolean",
        example: true,
      },

      settingsConfigured: {
        type: "boolean",
        example: true,
      },
    },
  },

  DashboardRecentProject: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      title: {
        type: "string",
      },

      slug: {
        type: "string",
      },

      category: {
        type: "string",
      },

      featured: {
        type: "boolean",
      },

      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  DashboardRecentBlog: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      title: {
        type: "string",
      },

      slug: {
        type: "string",
      },

      category: {
        type: "string",
      },

      isPublished: {
        type: "boolean",
      },

      isFeatured: {
        type: "boolean",
      },

      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  DashboardRecentContact: {
    type: "object",

    properties: {
      _id: {
        type: "string",
      },

      name: {
        type: "string",
      },

      email: {
        type: "string",
      },

      subject: {
        type: "string",
      },

      status: {
        type: "string",
      },

      priority: {
        type: "string",
      },

      isRead: {
        type: "boolean",
      },

      createdAt: {
        type: "string",
        format: "date-time",
      },
    },
  },

  DashboardResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Dashboard statistics retrieved successfully",
      },

      data: {
        type: "object",

        properties: {
          overview: {
            $ref: "#/components/schemas/DashboardOverview",
          },

          projects: {
            $ref: "#/components/schemas/DashboardProjects",
          },

          blogs: {
            $ref: "#/components/schemas/DashboardBlogs",
          },

          services: {
            $ref: "#/components/schemas/DashboardServices",
          },

          skills: {
            $ref: "#/components/schemas/DashboardSkills",
          },

          experiences: {
            $ref: "#/components/schemas/DashboardExperiences",
          },

          educations: {
            $ref: "#/components/schemas/DashboardEducations",
          },

          certifications: {
            $ref: "#/components/schemas/DashboardCertifications",
          },

          testimonials: {
            $ref: "#/components/schemas/DashboardTestimonials",
          },

          contacts: {
            $ref: "#/components/schemas/DashboardContacts",
          },

          configuration: {
            $ref: "#/components/schemas/DashboardConfiguration",
          },

          recent: {
            type: "object",

            properties: {
              projects: {
                type: "array",

                items: {
                  $ref: "#/components/schemas/DashboardRecentProject",
                },
              },

              blogs: {
                type: "array",

                items: {
                  $ref: "#/components/schemas/DashboardRecentBlog",
                },
              },

              contacts: {
                type: "array",

                items: {
                  $ref: "#/components/schemas/DashboardRecentContact",
                },
              },
            },
          },
        },
      },
    },
  },

  DashboardUnauthorizedResponse: {
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

export const dashboardPaths = {
  "/dashboard": {
    get: {
      tags: ["Dashboard"],

      summary: "Get Dashboard Statistics",

      description:
        "Retrieve portfolio dashboard analytics, counts, recent activities and configuration status.",

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: "Dashboard statistics retrieved successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DashboardResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/DashboardUnauthorizedResponse",
              },
            },
          },
        },
      },
    },
  },
};
