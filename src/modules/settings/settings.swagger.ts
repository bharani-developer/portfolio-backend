export const settingsSchemas = {
  SettingsImage: {
    type: "object",

    required: ["url", "publicId"],

    properties: {
      url: {
        type: "string",
        format: "uri",
        example: "https://res.cloudinary.com/demo/image/upload/logo.png",
      },

      publicId: {
        type: "string",
        example: "portfolio/logo",
      },
    },
  },

  SettingsSocialLinks: {
    type: "object",

    properties: {
      github: {
        type: "string",
        format: "uri",
        example: "https://github.com/bharani",
      },

      linkedin: {
        type: "string",
        format: "uri",
        example: "https://linkedin.com/in/bharani",
      },

      twitter: {
        type: "string",
        format: "uri",
      },

      facebook: {
        type: "string",
        format: "uri",
      },

      instagram: {
        type: "string",
        format: "uri",
      },

      youtube: {
        type: "string",
        format: "uri",
      },

      leetcode: {
        type: "string",
        format: "uri",
      },

      hackerrank: {
        type: "string",
        format: "uri",
      },

      stackoverflow: {
        type: "string",
        format: "uri",
      },
    },
  },

  SettingsSeo: {
    type: "object",

    required: ["metaTitle", "metaDescription", "siteUrl"],

    properties: {
      metaTitle: {
        type: "string",
        maxLength: 100,
        example: "Bharani Portfolio",
      },

      metaDescription: {
        type: "string",
        maxLength: 300,
        example: "Full Stack Developer Portfolio Website",
      },

      metaKeywords: {
        type: "array",

        items: {
          type: "string",
        },

        example: ["full stack developer", "react", "nodejs", "typescript"],
      },

      siteUrl: {
        type: "string",
        format: "uri",
        example: "https://bharani.dev",
      },
    },
  },

  Settings: {
    type: "object",

    required: [
      "siteTitle",
      "siteDescription",
      "email",
      "phone",
      "address",
      "socialLinks",
      "seo",
    ],

    properties: {
      _id: {
        type: "string",
        example: "684cf7e1f2d4ab2e6d8d1234",
      },

      siteTitle: {
        type: "string",
        maxLength: 100,
        example: "Bharani Portfolio",
      },

      siteDescription: {
        type: "string",
        maxLength: 500,
        example: "Professional Full Stack Developer Portfolio",
      },

      email: {
        type: "string",
        format: "email",
        example: "bharani@example.com",
      },

      phone: {
        type: "string",
        example: "+91 9876543210",
      },

      address: {
        type: "string",
        example: "Tamil Nadu, India",
      },

      logo: {
        $ref: "#/components/schemas/SettingsImage",
      },

      favicon: {
        $ref: "#/components/schemas/SettingsImage",
      },

      socialLinks: {
        $ref: "#/components/schemas/SettingsSocialLinks",
      },

      seo: {
        $ref: "#/components/schemas/SettingsSeo",
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

  CreateSettingsRequest: {
    type: "object",

    required: [
      "siteTitle",
      "siteDescription",
      "email",
      "phone",
      "address",
      "seo",
    ],

    properties: {
      siteTitle: {
        type: "string",
        maxLength: 100,
      },

      siteDescription: {
        type: "string",
        maxLength: 500,
      },

      email: {
        type: "string",
        format: "email",
      },

      phone: {
        type: "string",
      },

      address: {
        type: "string",
      },

      logo: {
        $ref: "#/components/schemas/SettingsImage",
      },

      favicon: {
        $ref: "#/components/schemas/SettingsImage",
      },

      socialLinks: {
        $ref: "#/components/schemas/SettingsSocialLinks",
      },

      seo: {
        $ref: "#/components/schemas/SettingsSeo",
      },
    },
  },

  UpdateSettingsRequest: {
    type: "object",

    properties: {
      siteTitle: {
        type: "string",
        maxLength: 100,
      },

      siteDescription: {
        type: "string",
        maxLength: 500,
      },

      email: {
        type: "string",
        format: "email",
      },

      phone: {
        type: "string",
      },

      address: {
        type: "string",
      },

      logo: {
        $ref: "#/components/schemas/SettingsImage",
      },

      favicon: {
        $ref: "#/components/schemas/SettingsImage",
      },

      socialLinks: {
        $ref: "#/components/schemas/SettingsSocialLinks",
      },

      seo: {
        $ref: "#/components/schemas/SettingsSeo",
      },
    },
  },

  SettingsResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Settings retrieved successfully",
      },

      data: {
        $ref: "#/components/schemas/Settings",
      },
    },
  },

  SettingsDeleteResponse: {
    type: "object",

    properties: {
      success: {
        type: "boolean",
        example: true,
      },

      message: {
        type: "string",
        example: "Settings deleted successfully",
      },

      data: {
        type: "null",
      },
    },
  },

  SettingsUnauthorizedResponse: {
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

export const settingsPaths = {
  "/settings": {
    get: {
      tags: ["Settings"],

      summary: "Get Portfolio Settings",

      description: "Retrieve portfolio website settings.",

      responses: {
        200: {
          description: "Settings retrieved successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SettingsResponse",
              },
            },
          },
        },

        404: {
          description: "Settings not found",
        },
      },
    },

    post: {
      tags: ["Settings"],

      summary: "Create Settings",

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
              $ref: "#/components/schemas/CreateSettingsRequest",
            },
          },
        },
      },

      responses: {
        201: {
          description: "Settings created successfully",
        },

        401: {
          description: "Unauthorized",
        },

        409: {
          description: "Settings already exist",
        },
      },
    },

    patch: {
      tags: ["Settings"],

      summary: "Update Settings",

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
              $ref: "#/components/schemas/UpdateSettingsRequest",
            },
          },
        },
      },

      responses: {
        200: {
          description: "Settings updated successfully",
        },

        401: {
          description: "Unauthorized",
        },

        404: {
          description: "Settings not found",
        },
      },
    },

    delete: {
      tags: ["Settings"],

      summary: "Delete Settings",

      security: [
        {
          bearerAuth: [],
        },
      ],

      responses: {
        200: {
          description: "Settings deleted successfully",

          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SettingsDeleteResponse",
              },
            },
          },
        },

        401: {
          description: "Unauthorized",
        },

        404: {
          description: "Settings not found",
        },
      },
    },
  },
};
