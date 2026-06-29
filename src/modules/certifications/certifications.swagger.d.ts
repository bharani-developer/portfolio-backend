export declare const certificationsSchemas: {
    CertificationImage: {
        type: string;
        properties: {
            url: {
                type: string;
                format: string;
            };
            publicId: {
                type: string;
            };
        };
        required: string[];
    };
    Certification: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            title: {
                type: string;
            };
            slug: {
                type: string;
            };
            issuer: {
                type: string;
            };
            certificateImage: {
                $ref: string;
            };
            credentialId: {
                type: string;
            };
            credentialUrl: {
                type: string;
                format: string;
            };
            issueDate: {
                type: string;
                format: string;
            };
            expiryDate: {
                type: string;
                format: string;
                nullable: boolean;
            };
            neverExpires: {
                type: string;
            };
            description: {
                type: string;
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
            };
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
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
    CreateCertificationRequest: {
        type: string;
        required: string[];
        properties: {
            title: {
                type: string;
            };
            issuer: {
                type: string;
            };
            certificateImage: {
                $ref: string;
            };
            credentialId: {
                type: string;
            };
            credentialUrl: {
                type: string;
                format: string;
            };
            issueDate: {
                type: string;
                format: string;
            };
            expiryDate: {
                type: string;
                format: string;
                nullable: boolean;
            };
            neverExpires: {
                type: string;
            };
            description: {
                type: string;
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
            };
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
            };
        };
    };
    UpdateCertificationRequest: {
        type: string;
        properties: {
            title: {
                type: string;
            };
            issuer: {
                type: string;
            };
            certificateImage: {
                $ref: string;
            };
            credentialId: {
                type: string;
            };
            credentialUrl: {
                type: string;
                format: string;
            };
            issueDate: {
                type: string;
                format: string;
            };
            expiryDate: {
                type: string;
                format: string;
                nullable: boolean;
            };
            neverExpires: {
                type: string;
            };
            description: {
                type: string;
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
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
export declare const certificationsPaths: {
    "/certifications": {
        get: {
            tags: string[];
            summary: string;
            parameters: ({
                in: string;
                name: string;
                schema: {
                    type: string;
                    enum?: never;
                };
            } | {
                in: string;
                name: string;
                schema: {
                    type: string;
                    enum: string[];
                };
            })[];
            responses: {
                200: {
                    description: string;
                };
            };
        };
        post: {
            tags: string[];
            summary: string;
            security: {
                bearerAuth: never[];
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
                201: {
                    description: string;
                };
            };
        };
    };
    "/certifications/{id}": {
        get: {
            tags: string[];
            summary: string;
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
    "/certifications/active": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/certifications/valid": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/certifications/expired": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/certifications/slug/{slug}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/certifications/issuer/{issuer}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/certifications/skill/{skill}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
};
//# sourceMappingURL=certifications.swagger.d.ts.map