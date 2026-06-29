export declare const projectSchemas: {
    ProjectImage: {
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
    Project: {
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
            shortDescription: {
                type: string;
            };
            description: {
                type: string;
            };
            thumbnail: {
                $ref: string;
            };
            gallery: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
            };
            category: {
                type: string;
            };
            githubUrl: {
                type: string;
                format: string;
            };
            liveUrl: {
                type: string;
                format: string;
            };
            featured: {
                type: string;
            };
            status: {
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
    CreateProjectRequest: {
        type: string;
        required: string[];
        properties: {
            title: {
                type: string;
            };
            shortDescription: {
                type: string;
            };
            description: {
                type: string;
            };
            thumbnail: {
                $ref: string;
            };
            gallery: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
            };
            category: {
                type: string;
            };
            githubUrl: {
                type: string;
                format: string;
            };
            liveUrl: {
                type: string;
                format: string;
            };
            featured: {
                type: string;
            };
            status: {
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
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
            };
        };
    };
    UpdateProjectRequest: {
        type: string;
        properties: {
            title: {
                type: string;
            };
            shortDescription: {
                type: string;
            };
            description: {
                type: string;
            };
            thumbnail: {
                $ref: string;
            };
            gallery: {
                type: string;
                items: {
                    $ref: string;
                };
            };
            technologies: {
                type: string;
                items: {
                    type: string;
                };
            };
            category: {
                type: string;
            };
            githubUrl: {
                type: string;
                format: string;
            };
            liveUrl: {
                type: string;
                format: string;
            };
            featured: {
                type: string;
            };
            status: {
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
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
            };
        };
    };
};
export declare const projectPaths: {
    "/projects": {
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
    "/projects/{id}": {
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
    "/projects/featured": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/projects/active": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/projects/slug/{slug}": {
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
        };
    };
    "/projects/category/{category}": {
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
        };
    };
    "/projects/technology/{technology}": {
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
        };
    };
    "/projects/status/{status}": {
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
        };
    };
};
//# sourceMappingURL=projects.swagger.d.ts.map