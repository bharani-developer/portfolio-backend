export declare const aboutSchemas: {
    AboutStat: {
        type: string;
        required: string[];
        properties: {
            label: {
                type: string;
                example: string;
            };
            value: {
                type: string;
                example: string;
            };
        };
    };
    About: {
        type: string;
        required: string[];
        properties: {
            _id: {
                type: string;
                example: string;
            };
            profileImage: {
                $ref: string;
            };
            fullName: {
                type: string;
                example: string;
            };
            designation: {
                type: string;
                example: string;
            };
            bio: {
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
                example: string;
            };
            address: {
                type: string;
                example: string;
            };
            resumeUrl: {
                type: string;
                format: string;
                example: string;
            };
            yearsOfExperience: {
                type: string;
                example: number;
            };
            stats: {
                type: string;
                items: {
                    $ref: string;
                };
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
    CreateAboutRequest: {
        type: string;
        required: string[];
        properties: {
            profileImage: {
                $ref: string;
            };
            fullName: {
                type: string;
            };
            designation: {
                type: string;
            };
            bio: {
                type: string;
            };
            email: {
                type: string;
                format: string;
            };
            phone: {
                type: string;
            };
            address: {
                type: string;
            };
            resumeUrl: {
                type: string;
                format: string;
            };
            yearsOfExperience: {
                type: string;
            };
            stats: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            isActive: {
                type: string;
                default: boolean;
            };
        };
    };
    UpdateAboutRequest: {
        type: string;
        properties: {
            profileImage: {
                $ref: string;
            };
            fullName: {
                type: string;
            };
            designation: {
                type: string;
            };
            bio: {
                type: string;
            };
            email: {
                type: string;
                format: string;
            };
            phone: {
                type: string;
            };
            address: {
                type: string;
            };
            resumeUrl: {
                type: string;
                format: string;
            };
            yearsOfExperience: {
                type: string;
            };
            stats: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            isActive: {
                type: string;
            };
        };
    };
    AboutResponse: {
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
    AboutDeleteResponse: {
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
                example: null;
            };
        };
    };
};
export declare const aboutPaths: {
    "/about": {
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
//# sourceMappingURL=about.swagger.d.ts.map