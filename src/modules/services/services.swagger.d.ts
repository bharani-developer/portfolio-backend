export declare const servicesSchemas: {
    Service: {
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
            slug: {
                type: string;
                example: string;
            };
            shortDescription: {
                type: string;
                example: string;
            };
            description: {
                type: string;
                example: string;
            };
            icon: {
                type: string;
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
    CreateServiceRequest: {
        type: string;
        required: string[];
        properties: {
            title: {
                type: string;
                example: string;
            };
            shortDescription: {
                type: string;
                example: string;
            };
            description: {
                type: string;
                example: string;
            };
            icon: {
                type: string;
                example: string;
            };
            sortOrder: {
                type: string;
                example: number;
            };
            isActive: {
                type: string;
                default: boolean;
            };
        };
    };
    UpdateServiceRequest: {
        type: string;
        properties: {
            title: {
                type: string;
                example: string;
            };
            shortDescription: {
                type: string;
            };
            description: {
                type: string;
            };
            icon: {
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
    ServiceResponse: {
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
    ServicesResponse: {
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
            meta: {
                type: string;
                properties: {
                    page: {
                        type: string;
                        example: number;
                    };
                    limit: {
                        type: string;
                        example: number;
                    };
                    total: {
                        type: string;
                        example: number;
                    };
                    totalPage: {
                        type: string;
                        example: number;
                    };
                };
            };
            data: {
                type: string;
                items: {
                    $ref: string;
                };
            };
        };
    };
    ServiceDeleteResponse: {
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
};
export declare const servicesPaths: {
    "/services": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            parameters: {
                in: string;
                name: string;
                schema: {
                    type: string;
                };
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
                };
                403: {
                    description: string;
                };
                409: {
                    description: string;
                };
            };
        };
    };
    "/services/{id}": {
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
                };
                403: {
                    description: string;
                };
                404: {
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
                };
                403: {
                    description: string;
                };
                404: {
                    description: string;
                };
            };
        };
    };
};
//# sourceMappingURL=services.swagger.d.ts.map