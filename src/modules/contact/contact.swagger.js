// src/modules/contact/contact.swagger.ts
export const contactSchemas = {
    Contact: {
        type: "object",
        properties: {
            _id: {
                type: "string",
                example: "685f0f8a4a0f8e7d5b4f1234",
            },
            name: {
                type: "string",
                example: "John Doe",
            },
            email: {
                type: "string",
                format: "email",
                example: "john.doe@example.com",
            },
            phone: {
                type: "string",
                nullable: true,
                example: "+91 9876543210",
            },
            company: {
                type: "string",
                nullable: true,
                example: "OpenAI",
            },
            subject: {
                type: "string",
                example: "Portfolio Project Inquiry",
            },
            message: {
                type: "string",
                example: "I would like to discuss a full-stack development project.",
            },
            status: {
                type: "string",
                enum: ["New", "In Progress", "Replied", "Closed"],
                example: "New",
            },
            priority: {
                type: "string",
                enum: ["Low", "Medium", "High", "Urgent"],
                example: "Medium",
            },
            source: {
                type: "string",
                enum: ["Website", "Email", "LinkedIn", "GitHub", "Referral", "Other"],
                example: "Website",
            },
            isRead: {
                type: "boolean",
                example: false,
            },
            isReplied: {
                type: "boolean",
                example: false,
            },
            repliedAt: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            notes: {
                type: "string",
                nullable: true,
                example: "Potential enterprise client.",
            },
            ipAddress: {
                type: "string",
                nullable: true,
                example: "192.168.1.1",
            },
            userAgent: {
                type: "string",
                nullable: true,
                example: "Mozilla/5.0",
            },
            sortOrder: {
                type: "integer",
                example: 0,
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
    CreateContactRequest: {
        type: "object",
        required: ["name", "email", "subject", "message"],
        properties: {
            name: {
                type: "string",
            },
            email: {
                type: "string",
                format: "email",
            },
            phone: {
                type: "string",
            },
            company: {
                type: "string",
            },
            subject: {
                type: "string",
            },
            message: {
                type: "string",
            },
            source: {
                type: "string",
                enum: ["Website", "Email", "LinkedIn", "GitHub", "Referral", "Other"],
            },
        },
    },
    UpdateContactRequest: {
        type: "object",
        properties: {
            name: {
                type: "string",
            },
            email: {
                type: "string",
                format: "email",
            },
            phone: {
                type: "string",
            },
            company: {
                type: "string",
            },
            subject: {
                type: "string",
            },
            message: {
                type: "string",
            },
            status: {
                type: "string",
                enum: ["New", "In Progress", "Replied", "Closed"],
            },
            priority: {
                type: "string",
                enum: ["Low", "Medium", "High", "Urgent"],
            },
            source: {
                type: "string",
                enum: ["Website", "Email", "LinkedIn", "GitHub", "Referral", "Other"],
            },
            isRead: {
                type: "boolean",
            },
            isReplied: {
                type: "boolean",
            },
            repliedAt: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            notes: {
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
export const contactPaths = {
    "/contact": {
        post: {
            tags: ["Contact"],
            summary: "Submit contact form",
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CreateContactRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Contact submitted successfully",
                },
            },
        },
        get: {
            tags: ["Contact"],
            summary: "Get all contacts",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Contacts retrieved successfully",
                },
            },
        },
    },
    "/contact/stats": {
        get: {
            tags: ["Contact"],
            summary: "Get contact statistics",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Statistics retrieved successfully",
                },
            },
        },
    },
    "/contact/active": {
        get: {
            tags: ["Contact"],
            summary: "Get active contacts",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Active contacts retrieved",
                },
            },
        },
    },
    "/contact/unread": {
        get: {
            tags: ["Contact"],
            summary: "Get unread contacts",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Unread contacts retrieved",
                },
            },
        },
    },
    "/contact/read": {
        get: {
            tags: ["Contact"],
            summary: "Get read contacts",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Read contacts retrieved",
                },
            },
        },
    },
    "/contact/replied": {
        get: {
            tags: ["Contact"],
            summary: "Get replied contacts",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            responses: {
                200: {
                    description: "Replied contacts retrieved",
                },
            },
        },
    },
    "/contact/{id}": {
        get: {
            tags: ["Contact"],
            summary: "Get contact by ID",
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
                    description: "Contact retrieved successfully",
                },
            },
        },
        patch: {
            tags: ["Contact"],
            summary: "Update contact",
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
                            $ref: "#/components/schemas/UpdateContactRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Contact updated successfully",
                },
            },
        },
        delete: {
            tags: ["Contact"],
            summary: "Delete contact",
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
                    description: "Contact deleted successfully",
                },
            },
        },
    },
    "/contact/{id}/read": {
        patch: {
            tags: ["Contact"],
            summary: "Mark contact as read",
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
                    description: "Contact marked as read",
                },
            },
        },
    },
    "/contact/{id}/replied": {
        patch: {
            tags: ["Contact"],
            summary: "Mark contact as replied",
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
                    description: "Contact marked as replied",
                },
            },
        },
    },
};
//# sourceMappingURL=contact.swagger.js.map