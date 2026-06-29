export declare const uploadSchemas: {
    UploadResponse: {
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
    UploadImageSuccessResponse: {
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
    DeleteImageRequest: {
        type: string;
        required: string[];
        properties: {
            publicId: {
                type: string;
                example: string;
            };
        };
    };
    DeleteImageResponse: {
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
    UploadValidationError: {
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
    UploadUnauthorizedResponse: {
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
export declare const uploadPaths: {
    "/upload/image": {
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
                    "multipart/form-data": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                file: {
                                    type: string;
                                    format: string;
                                    description: string;
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
            };
        };
        delete: {
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
                404: {
                    description: string;
                };
            };
        };
    };
};
//# sourceMappingURL=upload.swagger.d.ts.map