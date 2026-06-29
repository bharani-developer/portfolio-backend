import type { IBlog, TCreateBlogPayload, TUpdateBlogPayload } from "./blogs.interface.js";
export declare const BlogService: {
    createBlog: (payload: TCreateBlogPayload) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getBlogs: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getBlogById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateBlog: (id: string, payload: TUpdateBlogPayload) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteBlog: (id: string) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveBlogs: () => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getPublishedBlogs: () => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getFeaturedBlogs: () => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getBlogBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    incrementViewCount: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IBlog, {}, import("mongoose").DefaultSchemaOptions> & IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getBlogsByCategory: (category: IBlog["category"]) => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getBlogsByTag: (tag: string) => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getPopularBlogs: (limit?: number) => Promise<(IBlog & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=blogs.service.d.ts.map