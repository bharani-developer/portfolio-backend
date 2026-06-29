// src\modules\about\about.swagger.ts
export const aboutSchemas = {
    AboutStat: {
        type: "object",
        required: ["label", "value"],
        properties: {
            label: {
                type: "string",
                example: "Projects",
            },
            value: {
                type: "string",
                example: "25+",
            },
        },
    },
    About: {
        type: "object",
        required: ["fullName", "designation", "bio", "isActive"],
        properties: {
            _id: {
                type: "string",
                example: "685b0d6c7e5e8d1a9a9a9a9a",
            },
            profileImage: {
                $ref: "#/components/schemas/Image",
            },
            fullName: {
                type: "string",
                example: "Bharani",
            },
            designation: {
                type: "string",
                example: "Full Stack Developer",
            },
            bio: {
                type: "string",
                example: "Passionate Full Stack Developer specializing in modern web and mobile applications.",
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
            resumeUrl: {
                type: "string",
                format: "uri",
                example: "https://example.com/resume.pdf",
            },
            yearsOfExperience: {
                type: "number",
                example: 3,
            },
            stats: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/AboutStat",
                },
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
    CreateAboutRequest: {
        type: "object",
        required: ["fullName", "designation", "bio"],
        properties: {
            profileImage: {
                $ref: "#/components/schemas/Image",
            },
            fullName: {
                type: "string",
            },
            designation: {
                type: "string",
            },
            bio: {
                type: "string",
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
            resumeUrl: {
                type: "string",
                format: "uri",
            },
            yearsOfExperience: {
                type: "number",
            },
            stats: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/AboutStat",
                },
            },
            isActive: {
                type: "boolean",
                default: true,
            },
        },
    },
    UpdateAboutRequest: {
        type: "object",
        properties: {
            profileImage: {
                $ref: "#/components/schemas/Image",
            },
            fullName: {
                type: "string",
            },
            designation: {
                type: "string",
            },
            bio: {
                type: "string",
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
            resumeUrl: {
                type: "string",
                format: "uri",
            },
            yearsOfExperience: {
                type: "number",
            },
            stats: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/AboutStat",
                },
            },
            isActive: {
                type: "boolean",
            },
        },
    },
    AboutResponse: {
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
                $ref: "#/components/schemas/About",
            },
        },
    },
    AboutDeleteResponse: {
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
                type: "null",
                example: null,
            },
        },
    },
};
export const aboutPaths = {
    "/about": {
        get: {
            tags: ["About"],
            summary: "Get about section",
            description: "Retrieve portfolio about section.",
            responses: {
                200: {
                    description: "About section retrieved successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AboutResponse",
                            },
                        },
                    },
                },
                404: {
                    description: "About section not found",
                },
            },
        },
        post: {
            tags: ["About"],
            summary: "Create about section",
            description: "Create portfolio about section. Only one document can exist.",
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
                            $ref: "#/components/schemas/CreateAboutRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "About section created successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AboutResponse",
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
                    description: "About section already exists",
                },
            },
        },
        patch: {
            tags: ["About"],
            summary: "Update about section",
            description: "Update portfolio about section.",
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
                            $ref: "#/components/schemas/UpdateAboutRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "About section updated successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AboutResponse",
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
                    description: "About section not found",
                },
            },
        },
        delete: {
            tags: ["About"],
            summary: "Delete about section",
            description: "Delete portfolio about section.",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "About section deleted successfully",
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/AboutDeleteResponse",
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
                    description: "About section not found",
                },
            },
        },
    },
};
//# sourceMappingURL=about.swagger.js.map