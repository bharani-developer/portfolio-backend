export declare const contactSchemas: {
    Contact: {
        type: string;
        properties: {
            _id: {
                type: string;
                example: string;
            };
            name: {
                type: string;
                example: string;
            };
            email: {
                type: string;
                format: string;
                example: string;
            };
            phone: {
                type: string;
                nullable: boolean;
                example: string;
            };
            company: {
                type: string;
                nullable: boolean;
                example: string;
            };
            subject: {
                type: string;
                example: string;
            };
            message: {
                type: string;
                example: string;
            };
            status: {
                type: string;
                enum: string[];
                example: string;
            };
            priority: {
                type: string;
                enum: string[];
                example: string;
            };
            source: {
                type: string;
                enum: string[];
                example: string;
            };
            isRead: {
                type: string;
                example: boolean;
            };
            isReplied: {
                type: string;
                example: boolean;
            };
            repliedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            notes: {
                type: string;
                nullable: boolean;
                example: string;
            };
            ipAddress: {
                type: string;
                nullable: boolean;
                example: string;
            };
            userAgent: {
                type: string;
                nullable: boolean;
                example: string;
            };
            sortOrder: {
                type: string;
                example: number;
            };
            isActive: {
                type: string;
                example: boolean;
            };
            createdAt: {
                type: string;
                format: string;
            };
            updatedAt: {
                type: string;
                format: string;
            };
        };
    };
    CreateContactRequest: {
        type: string;
        required: string[];
        properties: {
            name: {
                type: string;
            };
            email: {
                type: string;
                format: string;
            };
            phone: {
                type: string;
            };
            company: {
                type: string;
            };
            subject: {
                type: string;
            };
            message: {
                type: string;
            };
            source: {
                type: string;
                enum: string[];
            };
        };
    };
    UpdateContactRequest: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            email: {
                type: string;
                format: string;
            };
            phone: {
                type: string;
            };
            company: {
                type: string;
            };
            subject: {
                type: string;
            };
            message: {
                type: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            priority: {
                type: string;
                enum: string[];
            };
            source: {
                type: string;
                enum: string[];
            };
            isRead: {
                type: string;
            };
            isReplied: {
                type: string;
            };
            repliedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            notes: {
                type: string;
            };
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
            };
        };
    };
};
export declare const contactPaths: {
    "/contact": {
        post: {
            tags: string[];
            summary: string;
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            $ref: string;
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
            };
        };
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/stats": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/active": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/unread": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/read": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/replied": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/{id}": {
        get: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
        patch: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            $ref: string;
                        };
                    };
                };
            };
            responses: {
                200: {
                    description: string;
                };
            };
        };
        delete: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/{id}/read": {
        patch: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/contact/{id}/replied": {
        patch: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
            }[];
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
};
//# sourceMappingURL=contact.swagger.d.ts.map