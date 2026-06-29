export declare const educationSchemas: {
    EducationImage: {
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
    Education: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            institution: {
                type: string;
            };
            slug: {
                type: string;
            };
            institutionLogo: {
                $ref: string;
            };
            degree: {
                type: string;
            };
            fieldOfStudy: {
                type: string;
            };
            educationLevel: {
                type: string;
                enum: string[];
            };
            educationType: {
                type: string;
                enum: string[];
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
            gradeType: {
                type: string;
                enum: string[];
            };
            grade: {
                type: string;
            };
            description: {
                type: string;
            };
            achievements: {
                type: string;
                items: {
                    type: string;
                };
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
            };
            institutionWebsite: {
                type: string;
                format: string;
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
    CreateEducationRequest: {
        type: string;
        required: string[];
        properties: {
            institution: {
                type: string;
            };
            degree: {
                type: string;
            };
            fieldOfStudy: {
                type: string;
            };
            institutionLogo: {
                $ref: string;
            };
            educationLevel: {
                type: string;
            };
            educationType: {
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
            gradeType: {
                type: string;
            };
            grade: {
                type: string;
            };
            description: {
                type: string;
            };
            achievements: {
                type: string;
                items: {
                    type: string;
                };
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
            };
            institutionWebsite: {
                type: string;
                format: string;
            };
            sortOrder: {
                type: string;
            };
            isActive: {
                type: string;
            };
        };
    };
    UpdateEducationRequest: {
        type: string;
        properties: {
            institution: {
                type: string;
            };
            degree: {
                type: string;
            };
            fieldOfStudy: {
                type: string;
            };
            institutionLogo: {
                $ref: string;
            };
            educationLevel: {
                type: string;
            };
            educationType: {
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
            gradeType: {
                type: string;
            };
            grade: {
                type: string;
            };
            description: {
                type: string;
            };
            achievements: {
                type: string;
                items: {
                    type: string;
                };
            };
            skills: {
                type: string;
                items: {
                    type: string;
                };
            };
            institutionWebsite: {
                type: string;
                format: string;
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
export declare const educationPaths: {
    "/education": {
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
    "/education/{id}": {
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
    "/education/active": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/education/current": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/education/slug/{slug}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/education/level/{level}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/education/skill/{skill}": {
        get: {
            tags: string[];
            summary: string;
        };
    };
};
//# sourceMappingURL=education.swagger.d.ts.map