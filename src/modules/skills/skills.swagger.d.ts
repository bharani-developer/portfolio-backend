export declare const skillsSchemas: {
    Image: {
        type: string;
        required: string[];
        properties: {
            url: {
                type: string;
                format: string;
                maxLength: 500;
                example: string;
            };
            publicId: {
                type: string;
                maxLength: 255;
                example: string;
            };
        };
    };
    Skill: {
        type: string;
        required: string[];
        properties: {
            _id: {
                type: string;
                example: string;
            };
            name: {
                type: string;
                minLength: 2;
                maxLength: 100;
                example: string;
            };
            slug: {
                type: string;
                example: string;
            };
            category: {
                type: string;
                enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                example: string;
            };
            proficiency: {
                type: string;
                minimum: 0;
                maximum: 100;
                default: 50;
                example: number;
            };
            image: {
                allOf: {
                    $ref: string;
                }[];
                nullable: boolean;
            };
            description: {
                type: string;
                maxLength: 1000;
                example: string;
            };
            sortOrder: {
                type: string;
                minimum: 0;
                maximum: 9999;
                default: 0;
                example: number;
            };
            isActive: {
                type: string;
                default: true;
                example: boolean;
            };
            createdAt: {
                type: string;
                format: string;
                example: string;
            };
            updatedAt: {
                type: string;
                format: string;
                example: string;
            };
        };
    };
    CreateSkillRequest: {
        type: string;
        required: string[];
        properties: {
            name: {
                type: string;
                minLength: 2;
                maxLength: 100;
                example: string;
            };
            category: {
                type: string;
                enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                example: string;
            };
            proficiency: {
                type: string;
                minimum: 0;
                maximum: 100;
                default: 50;
                example: number;
            };
            image: {
                allOf: {
                    $ref: string;
                }[];
            };
            description: {
                type: string;
                maxLength: 1000;
                example: string;
            };
            sortOrder: {
                type: string;
                minimum: 0;
                maximum: 9999;
                default: 0;
                example: number;
            };
            isActive: {
                type: string;
                default: true;
                example: boolean;
            };
        };
    };
    UpdateSkillRequest: {
        type: string;
        properties: {
            name: {
                type: string;
                minLength: 2;
                maxLength: 100;
                example: string;
            };
            category: {
                type: string;
                enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                example: string;
            };
            proficiency: {
                type: string;
                minimum: 0;
                maximum: 100;
                example: number;
            };
            image: {
                allOf: {
                    $ref: string;
                }[];
            };
            description: {
                type: string;
                maxLength: 1000;
                example: string;
            };
            sortOrder: {
                type: string;
                minimum: 0;
                maximum: 9999;
                example: number;
            };
            isActive: {
                type: string;
                example: boolean;
            };
        };
    };
    SkillResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            statusCode: {
                type: string;
                example: number;
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
    SkillsResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            statusCode: {
                type: string;
                example: number;
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
    SkillDeleteResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            statusCode: {
                type: string;
                example: number;
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
export declare const skillsPaths: {
    "/skills": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            parameters: ({
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: string;
                    minimum?: never;
                    default?: never;
                    maximum?: never;
                    enum?: never;
                };
            } | {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    minimum: number;
                    default: number;
                    example: number;
                    maximum?: never;
                    enum?: never;
                };
            } | {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    minimum: number;
                    maximum: number;
                    default: number;
                    example: number;
                    enum?: never;
                };
            } | {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                    example: string;
                    minimum?: never;
                    default?: never;
                    maximum?: never;
                };
            } | {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: boolean;
                    minimum?: never;
                    default?: never;
                    maximum?: never;
                    enum?: never;
                };
            })[];
            responses: {
                200: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                            examples: {
                                success: {
                                    summary: string;
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        meta: {
                                            page: number;
                                            limit: number;
                                            total: number;
                                            totalPage: number;
                                        };
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        }[];
                                    };
                                };
                            };
                        };
                    };
                };
                400: {
                    description: string;
                };
                500: {
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
                        examples: {
                            frontendSkill: {
                                summary: string;
                                value: {
                                    name: string;
                                    category: string;
                                    proficiency: number;
                                    image: {
                                        url: string;
                                        publicId: string;
                                    };
                                    description: string;
                                    sortOrder: number;
                                    isActive: boolean;
                                };
                            };
                            backendSkill: {
                                summary: string;
                                value: {
                                    name: string;
                                    category: string;
                                    proficiency: number;
                                    image: {
                                        url: string;
                                        publicId: string;
                                    };
                                    description: string;
                                    sortOrder: number;
                                    isActive: boolean;
                                };
                            };
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
                            examples: {
                                success: {
                                    summary: string;
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                                errorMessages: {
                                    path: string;
                                    message: string;
                                }[];
                            };
                        };
                    };
                };
                401: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
                403: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
                409: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
                500: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "/skills/active": {
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
                            examples: {
                                success: {
                                    summary: string;
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        }[];
                                    };
                                };
                            };
                        };
                    };
                };
                500: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "/skills/category/{category}": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            parameters: {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                    example: string;
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
                            examples: {
                                success: {
                                    summary: string;
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        }[];
                                    };
                                };
                            };
                        };
                    };
                };
                400: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
                404: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
                500: {
                    description: string;
                    content: {
                        "application/json": {
                            example: {
                                success: boolean;
                                statusCode: number;
                                message: string;
                            };
                        };
                    };
                };
            };
        };
    };
    "/skills/{id}": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            parameters: {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: string;
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
                            examples: {
                                success: {
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                404: {
                    description: string;
                };
                500: {
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
            parameters: {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            $ref: string;
                        };
                        examples: {
                            updateSkill: {
                                value: {
                                    name: string;
                                    category: string;
                                    proficiency: number;
                                    image: {
                                        url: string;
                                        publicId: string;
                                    };
                                    description: string;
                                    sortOrder: number;
                                    isActive: boolean;
                                };
                            };
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
                409: {
                    description: string;
                };
                500: {
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
            parameters: {
                in: string;
                name: string;
                required: boolean;
                description: string;
                schema: {
                    type: string;
                    example: string;
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
                            examples: {
                                success: {
                                    value: {
                                        success: boolean;
                                        statusCode: number;
                                        message: string;
                                        data: {
                                            _id: string;
                                            name: string;
                                            slug: string;
                                            category: string;
                                            proficiency: number;
                                            image: {
                                                url: string;
                                                publicId: string;
                                            };
                                            description: string;
                                            sortOrder: number;
                                            isActive: boolean;
                                            createdAt: string;
                                            updatedAt: string;
                                        };
                                    };
                                };
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
                500: {
                    description: string;
                };
            };
        };
    };
};
//# sourceMappingURL=skills.swagger.d.ts.map