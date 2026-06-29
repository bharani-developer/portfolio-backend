export declare const blogsSchemas: {
    BlogImage: {
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
    Blog: {
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
            excerpt: {
                type: string;
            };
            content: {
                type: string;
            };
            featuredImage: {
                $ref: string;
            };
            category: {
                type: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
            };
            author: {
                type: string;
            };
            status: {
                type: string;
                enum: string[];
            };
            readTime: {
                type: string;
            };
            viewCount: {
                type: string;
            };
            isFeatured: {
                type: string;
            };
            isPublished: {
                type: string;
            };
            publishedAt: {
                type: string;
                format: string;
                nullable: boolean;
            };
            seoTitle: {
                type: string;
            };
            seoDescription: {
                type: string;
            };
            seoKeywords: {
                type: string;
                items: {
                    type: string;
                };
            };
            canonicalUrl: {
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
    CreateBlogRequest: {
        type: string;
        required: string[];
        properties: {
            title: {
                type: string;
            };
            excerpt: {
                type: string;
            };
            content: {
                type: string;
            };
            featuredImage: {
                $ref: string;
            };
            category: {
                type: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
            };
            author: {
                type: string;
            };
            status: {
                type: string;
            };
            readTime: {
                type: string;
            };
            isFeatured: {
                type: string;
            };
            seoTitle: {
                type: string;
            };
            seoDescription: {
                type: string;
            };
            seoKeywords: {
                type: string;
                items: {
                    type: string;
                };
            };
            canonicalUrl: {
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
    UpdateBlogRequest: {
        type: string;
        properties: {
            title: {
                type: string;
            };
            excerpt: {
                type: string;
            };
            content: {
                type: string;
            };
            featuredImage: {
                $ref: string;
            };
            category: {
                type: string;
            };
            tags: {
                type: string;
                items: {
                    type: string;
                };
            };
            author: {
                type: string;
            };
            status: {
                type: string;
            };
            readTime: {
                type: string;
            };
            isFeatured: {
                type: string;
            };
            isPublished: {
                type: string;
            };
            publishedAt: {
                type: string;
                format: string;
            };
            seoTitle: {
                type: string;
            };
            seoDescription: {
                type: string;
            };
            seoKeywords: {
                type: string;
                items: {
                    type: string;
                };
            };
            canonicalUrl: {
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
export declare const blogsPaths: {
    "/blogs": {
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
    "/blogs/{id}": {
        get: {
            tags: string[];
            summary: string;
            parameters: {
                name: string;
                in: string;
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
                name: string;
                in: string;
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
                name: string;
                in: string;
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
    "/blogs/featured": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/blogs/popular": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/blogs/published": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/blogs/active": {
        get: {
            tags: string[];
            summary: string;
        };
    };
    "/blogs/category/{category}": {
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
    "/blogs/tag/{tag}": {
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
    "/blogs/slug/{slug}": {
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
    "/blogs/slug/{slug}/view": {
        patch: {
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
//# sourceMappingURL=blogs.swagger.d.ts.map