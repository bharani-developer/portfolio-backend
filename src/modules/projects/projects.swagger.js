// src\modules\projects\projects.swagger.ts
export const projectSchemas = {
    ProjectImage: {
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
    Project: {
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
            shortDescription: {
                type: "string",
            },
            description: {
                type: "string",
            },
            thumbnail: {
                $ref: "#/components/schemas/ProjectImage",
            },
            gallery: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ProjectImage",
                },
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            category: {
                type: "string",
            },
            githubUrl: {
                type: "string",
                format: "uri",
            },
            liveUrl: {
                type: "string",
                format: "uri",
            },
            featured: {
                type: "boolean",
            },
            status: {
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
    CreateProjectRequest: {
        type: "object",
        required: [
            "title",
            "shortDescription",
            "description",
            "technologies",
            "category",
            "status",
        ],
        properties: {
            title: {
                type: "string",
            },
            shortDescription: {
                type: "string",
            },
            description: {
                type: "string",
            },
            thumbnail: {
                $ref: "#/components/schemas/ProjectImage",
            },
            gallery: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ProjectImage",
                },
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            category: {
                type: "string",
            },
            githubUrl: {
                type: "string",
                format: "uri",
            },
            liveUrl: {
                type: "string",
                format: "uri",
            },
            featured: {
                type: "boolean",
            },
            status: {
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
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
        },
    },
    UpdateProjectRequest: {
        type: "object",
        properties: {
            title: {
                type: "string",
            },
            shortDescription: {
                type: "string",
            },
            description: {
                type: "string",
            },
            thumbnail: {
                $ref: "#/components/schemas/ProjectImage",
            },
            gallery: {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ProjectImage",
                },
            },
            technologies: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            category: {
                type: "string",
            },
            githubUrl: {
                type: "string",
                format: "uri",
            },
            liveUrl: {
                type: "string",
                format: "uri",
            },
            featured: {
                type: "boolean",
            },
            status: {
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
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
        },
    },
};
export const projectPaths = {
    "/projects": {
        get: {
            tags: ["Projects"],
            summary: "Get all projects",
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
                    description: "Projects retrieved successfully",
                },
            },
        },
        post: {
            tags: ["Projects"],
            summary: "Create project",
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
                            $ref: "#/components/schemas/CreateProjectRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Project created successfully",
                },
            },
        },
    },
    "/projects/{id}": {
        get: {
            tags: ["Projects"],
            summary: "Get project by ID",
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
                    description: "Project retrieved successfully",
                },
            },
        },
        patch: {
            tags: ["Projects"],
            summary: "Update project",
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
                            $ref: "#/components/schemas/UpdateProjectRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Project updated successfully",
                },
            },
        },
        delete: {
            tags: ["Projects"],
            summary: "Delete project",
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
                    description: "Project deleted successfully",
                },
            },
        },
    },
    "/projects/featured": {
        get: {
            tags: ["Projects"],
            summary: "Get featured projects",
        },
    },
    "/projects/active": {
        get: {
            tags: ["Projects"],
            summary: "Get active projects",
        },
    },
    "/projects/slug/{slug}": {
        get: {
            tags: ["Projects"],
            summary: "Get project by slug",
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
        },
    },
    "/projects/category/{category}": {
        get: {
            tags: ["Projects"],
            summary: "Get projects by category",
            parameters: [
                {
                    in: "path",
                    name: "category",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
    "/projects/technology/{technology}": {
        get: {
            tags: ["Projects"],
            summary: "Get projects by technology",
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
        },
    },
    "/projects/status/{status}": {
        get: {
            tags: ["Projects"],
            summary: "Get projects by status",
            parameters: [
                {
                    in: "path",
                    name: "status",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
};
//# sourceMappingURL=projects.swagger.js.map