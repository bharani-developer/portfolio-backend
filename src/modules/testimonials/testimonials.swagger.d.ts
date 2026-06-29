export declare const testimonialsSchemas: {
    TestimonialImage: {
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
    Testimonial: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            clientName: {
                type: string;
            };
            clientPosition: {
                type: string;
            };
            clientCompany: {
                type: string;
            };
            clientImage: {
                $ref: string;
            };
            clientWebsite: {
                type: string;
                format: string;
            };
            projectName: {
                type: string;
            };
            review: {
                type: string;
            };
            rating: {
                type: string;
                minimum: number;
                maximum: number;
            };
            clientType: {
                type: string;
                enum: string[];
            };
            isFeatured: {
                type: string;
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
    CreateTestimonialRequest: {
        type: string;
        required: string[];
        properties: {
            clientName: {
                type: string;
            };
            clientPosition: {
                type: string;
            };
            clientCompany: {
                type: string;
            };
            clientImage: {
                $ref: string;
            };
            clientWebsite: {
                type: string;
                format: string;
            };
            projectName: {
                type: string;
            };
            review: {
                type: string;
            };
            rating: {
                type: string;
                minimum: number;
                maximum: number;
            };
            clientType: {
                type: string;
                enum: string[];
            };
            isFeatured: {
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
    UpdateTestimonialRequest: {
        type: string;
        properties: {
            clientName: {
                type: string;
            };
            clientPosition: {
                type: string;
            };
            clientCompany: {
                type: string;
            };
            clientImage: {
                $ref: string;
            };
            clientWebsite: {
                type: string;
                format: string;
            };
            projectName: {
                type: string;
            };
            review: {
                type: string;
            };
            rating: {
                type: string;
                minimum: number;
                maximum: number;
            };
            clientType: {
                type: string;
                enum: string[];
            };
            isFeatured: {
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
    AverageRatingResponse: {
        type: string;
        properties: {
            averageRating: {
                type: string;
            };
            totalTestimonials: {
                type: string;
            };
        };
    };
};
export declare const testimonialsPaths: {
    "/testimonials": {
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
    "/testimonials/{id}": {
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
    "/testimonials/featured": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/testimonials/active": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/testimonials/average-rating": {
        get: {
            tags: string[];
            summary: string;
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
    };
    "/testimonials/rating/{rating}": {
        get: {
            tags: string[];
            summary: string;
            parameters: {
                in: string;
                name: string;
                required: boolean;
                schema: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
            }[];
        };
    };
    "/testimonials/client-type/{clientType}": {
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
    "/testimonials/project/{projectName}": {
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
//# sourceMappingURL=testimonials.swagger.d.ts.map