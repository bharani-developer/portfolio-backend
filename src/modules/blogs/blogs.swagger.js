// src/modules/blogs/blogs.swagger.ts
export const blogsSchemas = {
    BlogImage: {
        type: "object",
        properties: {
            url: {
                type: "string",
                format: "uri",
            },
            publicId: {
                type: "string",
            },
        },
        required: ["url", "publicId"],
    },
    Blog: {
        type: "object",
        properties: {
            _id: {
                type: "string",
            },
            title: {
                type: "string",
            },
            slug: {
                type: "string",
            },
            excerpt: {
                type: "string",
            },
            content: {
                type: "string",
            },
            featuredImage: {
                $ref: "#/components/schemas/BlogImage",
            },
            category: {
                type: "string",
            },
            tags: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            author: {
                type: "string",
            },
            status: {
                type: "string",
                enum: ["Draft", "Published", "Archived"],
            },
            readTime: {
                type: "integer",
            },
            viewCount: {
                type: "integer",
            },
            isFeatured: {
                type: "boolean",
            },
            isPublished: {
                type: "boolean",
            },
            publishedAt: {
                type: "string",
                format: "date-time",
                nullable: true,
            },
            seoTitle: {
                type: "string",
            },
            seoDescription: {
                type: "string",
            },
            seoKeywords: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            canonicalUrl: {
                type: "string",
                format: "uri",
            },
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
            createdAt: {
                type: "string",
                format: "date-time",
            },
            updatedAt: {
                type: "string",
                format: "date-time",
            },
        },
    },
    CreateBlogRequest: {
        type: "object",
        required: ["title", "excerpt", "content", "category", "author"],
        properties: {
            title: {
                type: "string",
            },
            excerpt: {
                type: "string",
            },
            content: {
                type: "string",
            },
            featuredImage: {
                $ref: "#/components/schemas/BlogImage",
            },
            category: {
                type: "string",
            },
            tags: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            author: {
                type: "string",
            },
            status: {
                type: "string",
            },
            readTime: {
                type: "integer",
            },
            isFeatured: {
                type: "boolean",
            },
            seoTitle: {
                type: "string",
            },
            seoDescription: {
                type: "string",
            },
            seoKeywords: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            canonicalUrl: {
                type: "string",
            },
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
        },
    },
    UpdateBlogRequest: {
        type: "object",
        properties: {
            title: {
                type: "string",
            },
            excerpt: {
                type: "string",
            },
            content: {
                type: "string",
            },
            featuredImage: {
                $ref: "#/components/schemas/BlogImage",
            },
            category: {
                type: "string",
            },
            tags: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            author: {
                type: "string",
            },
            status: {
                type: "string",
            },
            readTime: {
                type: "integer",
            },
            isFeatured: {
                type: "boolean",
            },
            isPublished: {
                type: "boolean",
            },
            publishedAt: {
                type: "string",
                format: "date-time",
            },
            seoTitle: {
                type: "string",
            },
            seoDescription: {
                type: "string",
            },
            seoKeywords: {
                type: "array",
                items: {
                    type: "string",
                },
            },
            canonicalUrl: {
                type: "string",
            },
            sortOrder: {
                type: "integer",
            },
            isActive: {
                type: "boolean",
            },
        },
    },
};
export const blogsPaths = {
    "/blogs": {
        get: {
            tags: ["Blogs"],
            summary: "Get all blogs",
            parameters: [
                {
                    in: "query",
                    name: "searchTerm",
                    schema: {
                        type: "string",
                    },
                },
                {
                    in: "query",
                    name: "page",
                    schema: {
                        type: "integer",
                    },
                },
                {
                    in: "query",
                    name: "limit",
                    schema: {
                        type: "integer",
                    },
                },
                {
                    in: "query",
                    name: "sortBy",
                    schema: {
                        type: "string",
                    },
                },
                {
                    in: "query",
                    name: "sortOrder",
                    schema: {
                        type: "string",
                        enum: ["asc", "desc"],
                    },
                },
            ],
            responses: {
                200: {
                    description: "Blogs retrieved successfully",
                },
            },
        },
        post: {
            tags: ["Blogs"],
            summary: "Create blog",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/CreateBlogRequest",
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: "Blog created successfully",
                },
            },
        },
    },
    "/blogs/{id}": {
        get: {
            tags: ["Blogs"],
            summary: "Get blog by ID",
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Blog retrieved successfully",
                },
            },
        },
        patch: {
            tags: ["Blogs"],
            summary: "Update blog",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/UpdateBlogRequest",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Blog updated successfully",
                },
            },
        },
        delete: {
            tags: ["Blogs"],
            summary: "Delete blog",
            security: [
                {
                    bearerAuth: [],
                },
            ],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
            responses: {
                200: {
                    description: "Blog deleted successfully",
                },
            },
        },
    },
    "/blogs/featured": {
        get: {
            tags: ["Blogs"],
            summary: "Get featured blogs",
        },
    },
    "/blogs/popular": {
        get: {
            tags: ["Blogs"],
            summary: "Get popular blogs",
        },
    },
    "/blogs/published": {
        get: {
            tags: ["Blogs"],
            summary: "Get published blogs",
        },
    },
    "/blogs/active": {
        get: {
            tags: ["Blogs"],
            summary: "Get active blogs",
        },
    },
    "/blogs/category/{category}": {
        get: {
            tags: ["Blogs"],
            summary: "Get blogs by category",
            parameters: [
                {
                    in: "path",
                    name: "category",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
    "/blogs/tag/{tag}": {
        get: {
            tags: ["Blogs"],
            summary: "Get blogs by tag",
            parameters: [
                {
                    in: "path",
                    name: "tag",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
    "/blogs/slug/{slug}": {
        get: {
            tags: ["Blogs"],
            summary: "Get blog by slug",
            parameters: [
                {
                    in: "path",
                    name: "slug",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
    "/blogs/slug/{slug}/view": {
        patch: {
            tags: ["Blogs"],
            summary: "Increment blog view count",
            parameters: [
                {
                    in: "path",
                    name: "slug",
                    required: true,
                    schema: {
                        type: "string",
                    },
                },
            ],
        },
    },
};
//# sourceMappingURL=blogs.swagger.js.map