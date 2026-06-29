export declare const heroSchemas: {
    HeroImage: {
        type: string;
        required: string[];
        properties: {
            url: {
                type: string;
                format: string;
                example: string;
            };
            publicId: {
                type: string;
                example: string;
            };
        };
    };
    Hero: {
        type: string;
        required: string[];
        properties: {
            _id: {
                type: string;
                example: string;
            };
            title: {
                type: string;
                example: string;
            };
            subtitle: {
                type: string;
                example: string;
            };
            description: {
                type: string;
                example: string;
            };
            profileImage: {
                $ref: string;
            };
            resumeUrl: {
                type: string;
                format: string;
                example: string;
            };
            ctaButtonText: {
                type: string;
                example: string;
            };
            ctaButtonLink: {
                type: string;
                format: string;
                example: string;
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
                example: string[];
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
    CreateHeroRequest: {
        type: string;
        required: string[];
        properties: {
            title: {
                type: string;
                maxLength: number;
                example: string;
            };
            subtitle: {
                type: string;
                maxLength: number;
                example: string;
            };
            description: {
                type: string;
                maxLength: number;
                example: string;
            };
            profileImage: {
                $ref: string;
            };
            resumeUrl: {
                type: string;
                format: string;
                example: string;
            };
            ctaButtonText: {
                type: string;
                maxLength: number;
                example: string;
            };
            ctaButtonLink: {
                type: string;
                format: string;
                maxLength: number;
                example: string;
            };
            technologies: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    maxLength: number;
                };
                example: string[];
            };
            isActive: {
                type: string;
                default: boolean;
            };
        };
    };
    UpdateHeroRequest: {
        type: string;
        properties: {
            title: {
                type: string;
                maxLength: number;
            };
            subtitle: {
                type: string;
                maxLength: number;
            };
            description: {
                type: string;
                maxLength: number;
            };
            profileImage: {
                $ref: string;
            };
            resumeUrl: {
                type: string;
                format: string;
            };
            ctaButtonText: {
                type: string;
                maxLength: number;
            };
            ctaButtonLink: {
                type: string;
                format: string;
                maxLength: number;
            };
            technologies: {
                type: string;
                maxItems: number;
                items: {
                    type: string;
                    maxLength: number;
                };
            };
            isActive: {
                type: string;
            };
        };
    };
    HeroResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
            data: {
                $ref: string;
            };
        };
    };
    DeleteHeroResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
            data: {
                type: string;
            };
        };
    };
    ValidationErrorResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
            errorSources: {
                type: string;
                items: {
                    type: string;
                    properties: {
                        path: {
                            type: string;
                            example: string;
                        };
                        message: {
                            type: string;
                            example: string;
                        };
                    };
                };
            };
        };
    };
    UnauthorizedResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
        };
    };
    ForbiddenResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
        };
    };
    NotFoundResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
        };
    };
};
export declare const heroPaths: {
    "/hero": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            responses: {
                200: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                404: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
        post: {
            tags: string[];
            summary: string;
            description: string;
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
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                401: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                403: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
        patch: {
            tags: string[];
            summary: string;
            description: string;
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
                200: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                401: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                403: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                404: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
        delete: {
            tags: string[];
            summary: string;
            description: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                401: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                403: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                404: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=hero.swagger.d.ts.map