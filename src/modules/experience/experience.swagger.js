// src\modules\experience\experience.swagger.ts
export const experienceSchemas = {
    Experience: {
        type: "object",
        properties: {
            _id: {
                type: "string",
                example: "685b0d6c7e5e8d1a9a9a9a9a",
            },
            company: {
                type: "string",
                example: "OpenAI Technologies",
            },
            slug: {
                type: "string",
                example: "openai-technologies",
            },
            companyLogo: {
                type: "object",
                properties: {
                    url: {
                        type: "string",
                        example: "https://res.cloudinary.com/demo/image/upload/logo.png",
                    },
                    publicId: {
                        type: "string",
                        example: "experience/logo",
                    },
                },
            },
            position: {
                type: "string",
                example: "Full Stack Developer",
            },
            employmentType: {
                type: "string",
                enum: [
                    "Full Time",
                    "Part Time",
                    "Contract",
                    "Freelance",
                    "Internship",
                    "Apprenticeship",
                    "Temporary",
                ],
            },
            workMode: {
                type: "string",
                enum: ["Remote", "Hybrid", "Onsite"],
            },
            location: {
                type: "string",
                example: "Chennai, India",
            },
            startDate: {
                type: "string",
                format: "date",
                example: "2024-01-01",
            },
            endDate: {
                type: "string",
                format: "date",
                nullable: true,
                example: null,
            },
            isCurrent: {
                type: "boolean",
                example: true,
            },
            summary: {
                type: "string",
                example: "Developing scalable enterprise applications using modern web technologies.",
            },
            responsibilities: {
                type: "array",
                items: {
                    type: "string",
                },
                example: [
                    "Developed REST APIs",
                    "Built React dashboards",
                    "Implemented authentication",
                ],
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
                example: ["React", "Node.js", "TypeScript", "MongoDB"],
            },
            companyWebsite: {
                type: "string",
                example: "https://example.com",
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
    CreateExperienceRequest: {
        type: "object",
        required: [
            "company",
            "position",
            "employmentType",
            "workMode",
            "location",
            "startDate",
            "summary",
            "responsibilities",
            "technologies",
        ],
        properties: {
            company: {
                type: "string",
            },
            position: {
                type: "string",
            },
            employmentType: {
                type: "string",
            },
            workMode: {
                type: "string",
            },
            location: {
                type: "string",
            },
            startDate: {
                type: "string",
                format: "date",
            },
            endDate: {
                type: "string",
                format: "date",
                nullable: true,
            },
            isCurrent: {
                type: "boolean",
            },
            summary: {
                type: "string",
            },
            responsibilities: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            companyWebsite: {
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
    UpdateExperienceRequest: {
        type: "object",
        properties: {
            company: {
                type: "string",
            },
            position: {
                type: "string",
            },
            employmentType: {
                type: "string",
            },
            workMode: {
                type: "string",
            },
            location: {
                type: "string",
            },
            startDate: {
                type: "string",
            },
            endDate: {
                type: "string",
                nullable: true,
            },
            isCurrent: {
                type: "boolean",
            },
            summary: {
                type: "string",
            },
            responsibilities: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            companyWebsite: {
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
};
export const experiencePaths = {
    "/experience": {
        get: {
            tags: ["Experience"],
            summary: "Get all experiences",
            responses: {
                200: {
                    description: "Experiences retrieved successfully",
                },
            },
        },
        post: {
            tags: ["Experience"],
            summary: "Create experience",
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
                            $ref: "#/components/schemas/CreateExperienceRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Experience created successfully",
                },
            },
        },
    },
    "/experience/active": {
        get: {
            tags: ["Experience"],
            summary: "Get active experiences",
            responses: {
                200: {
                    description: "Active experiences retrieved successfully",
                },
            },
        },
    },
    "/experience/current": {
        get: {
            tags: ["Experience"],
            summary: "Get current experiences",
            responses: {
                200: {
                    description: "Current experiences retrieved successfully",
                },
            },
        },
    },
    "/experience/slug/{slug}": {
        get: {
            tags: ["Experience"],
            summary: "Get experience by slug",
            parameters: [
                {
                    in: "path",
                    name: "slug",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Experience retrieved successfully",
                },
            },
        },
    },
    "/experience/company/{company}": {
        get: {
            tags: ["Experience"],
            summary: "Get experiences by company",
            parameters: [
                {
                    in: "path",
                    name: "company",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Experiences retrieved successfully",
                },
            },
        },
    },
    "/experience/technology/{technology}": {
        get: {
            tags: ["Experience"],
            summary: "Get experiences by technology",
            parameters: [
                {
                    in: "path",
                    name: "technology",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Experiences retrieved successfully",
                },
            },
        },
    },
    "/experience/{id}": {
        get: {
            tags: ["Experience"],
            summary: "Get experience by id",
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
                    description: "Experience retrieved successfully",
                },
            },
        },
        patch: {
            tags: ["Experience"],
            summary: "Update experience",
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
                            $ref: "#/components/schemas/UpdateExperienceRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Experience updated successfully",
                },
            },
        },
        delete: {
            tags: ["Experience"],
            summary: "Delete experience",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Experience deleted successfully",
                },
            },
        },
    },
};
//# sourceMappingURL=experience.swagger.js.map