// src\modules\certifications\certifications.swagger.ts
export const certificationsSchemas = {
    CertificationImage: {
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
    Certification: {
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
            issuer: {
                type: "string",
            },
            certificateImage: {
                $ref: "#/components/schemas/CertificationImage",
            },
            credentialId: {
                type: "string",
            },
            credentialUrl: {
                type: "string",
                format: "uri",
            },
            issueDate: {
                type: "string",
                format: "date-time",
            },
            expiryDate: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            neverExpires: {
                type: "boolean",
            },
            description: {
                type: "string",
            },
            skills: {
                type: "array",
                items: {
                    type: "string",
                },
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
    CreateCertificationRequest: {
        type: "object",
        required: ["title", "issuer", "issueDate"],
        properties: {
            title: {
                type: "string",
            },
            issuer: {
                type: "string",
            },
            certificateImage: {
                $ref: "#/components/schemas/CertificationImage",
            },
            credentialId: {
                type: "string",
            },
            credentialUrl: {
                type: "string",
                format: "uri",
            },
            issueDate: {
                type: "string",
                format: "date-time",
            },
            expiryDate: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            neverExpires: {
                type: "boolean",
            },
            description: {
                type: "string",
            },
            skills: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
        },
    },
    UpdateCertificationRequest: {
        type: "object",
        properties: {
            title: {
                type: "string",
            },
            issuer: {
                type: "string",
            },
            certificateImage: {
                $ref: "#/components/schemas/CertificationImage",
            },
            credentialId: {
                type: "string",
            },
            credentialUrl: {
                type: "string",
                format: "uri",
            },
            issueDate: {
                type: "string",
                format: "date-time",
            },
            expiryDate: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            neverExpires: {
                type: "boolean",
            },
            description: {
                type: "string",
            },
            skills: {
                type: "array",
                items: {
                    type: "string",
                },
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
export const certificationsPaths = {
    "/certifications": {
        get: {
            tags: ["Certifications"],
            summary: "Get all certifications",
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
                    description: "Certifications retrieved successfully",
                },
            },
        },
        post: {
            tags: ["Certifications"],
            summary: "Create certification",
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
                            $ref: "#/components/schemas/CreateCertificationRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Certification created successfully",
                },
            },
        },
    },
    "/certifications/{id}": {
        get: {
            tags: ["Certifications"],
            summary: "Get certification by id",
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
                    description: "Certification retrieved successfully",
                },
            },
        },
        patch: {
            tags: ["Certifications"],
            summary: "Update certification",
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
                            $ref: "#/components/schemas/UpdateCertificationRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Certification updated successfully",
                },
            },
        },
        delete: {
            tags: ["Certifications"],
            summary: "Delete certification",
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
                    description: "Certification deleted successfully",
                },
            },
        },
    },
    "/certifications/active": {
        get: {
            tags: ["Certifications"],
            summary: "Get active certifications",
        },
    },
    "/certifications/valid": {
        get: {
            tags: ["Certifications"],
            summary: "Get valid certifications",
        },
    },
    "/certifications/expired": {
        get: {
            tags: ["Certifications"],
            summary: "Get expired certifications",
        },
    },
    "/certifications/slug/{slug}": {
        get: {
            tags: ["Certifications"],
            summary: "Get certification by slug",
        },
    },
    "/certifications/issuer/{issuer}": {
        get: {
            tags: ["Certifications"],
            summary: "Get certifications by issuer",
        },
    },
    "/certifications/skill/{skill}": {
        get: {
            tags: ["Certifications"],
            summary: "Get certifications by skill",
        },
    },
};
//# sourceMappingURL=certifications.swagger.js.map