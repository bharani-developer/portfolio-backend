export declare const experienceSchemas: {
    Experience: {
        type: string;
        properties: {
            _id: {
                type: string;
                example: string;
            };
            company: {
                type: string;
                example: string;
            };
            slug: {
                type: string;
                example: string;
            };
            companyLogo: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        example: string;
                    };
                    publicId: {
                        type: string;
                        example: string;
                    };
                };
            };
            position: {
                type: string;
                example: string;
            };
            employmentType: {
                type: string;
                enum: string[];
            };
            workMode: {
                type: string;
                enum: string[];
            };
            location: {
                type: string;
                example: string;
            };
            startDate: {
                type: string;
                format: string;
                example: string;
            };
            endDate: {
                type: string;
                format: string;
                nullable: boolean;
                example: null;
            };
            isCurrent: {
                type: string;
                example: boolean;
            };
            summary: {
                type: string;
                example: string;
            };
            responsibilities: {
                type: string;
                items: {
                    type: string;
                };
                example: string[];
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
                example: string[];
            };
            companyWebsite: {
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
    CreateExperienceRequest: {
        type: string;
        required: string[];
        properties: {
            company: {
                type: string;
            };
            position: {
                type: string;
            };
            employmentType: {
                type: string;
            };
            workMode: {
                type: string;
            };
            location: {
                type: string;
            };
            startDate: {
                type: string;
                format: string;
            };
            endDate: {
                type: string;
                format: string;
                nullable: boolean;
            };
            isCurrent: {
                type: string;
            };
            summary: {
                type: string;
            };
            responsibilities: {
                type: string;
                items: {
                    type: string;
                };
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
            };
            companyWebsite: {
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
    UpdateExperienceRequest: {
        type: string;
        properties: {
            company: {
                type: string;
            };
            position: {
                type: string;
            };
            employmentType: {
                type: string;
            };
            workMode: {
                type: string;
            };
            location: {
                type: string;
            };
            startDate: {
                type: string;
            };
            endDate: {
                type: string;
                nullable: boolean;
            };
            isCurrent: {
                type: string;
            };
            summary: {
                type: string;
            };
            responsibilities: {
                type: string;
                items: {
                    type: string;
                };
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
            };
            companyWebsite: {
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
export declare const experiencePaths: {
    "/experience": {
        get: {
            tags: string[];
            summary: string;
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
    "/experience/active": {
        get: {
            tags: string[];
            summary: string;
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/experience/current": {
        get: {
            tags: string[];
            summary: string;
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
    "/experience/slug/{slug}": {
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
    };
    "/experience/company/{company}": {
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
    };
    "/experience/technology/{technology}": {
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
    };
    "/experience/{id}": {
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
            responses: {
                200: {
                    description: string;
                };
            };
        };
    };
};
//# sourceMappingURL=experience.swagger.d.ts.map