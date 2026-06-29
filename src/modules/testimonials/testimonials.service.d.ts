import type { ITestimonial, TCreateTestimonialPayload, TUpdateTestimonialPayload } from "./testimonials.interface.js";
export declare const TestimonialService: {
    createTestimonial: (payload: TCreateTestimonialPayload) => Promise<import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getTestimonials: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getTestimonialById: (id: string) => Promise<import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateTestimonial: (id: string, payload: TUpdateTestimonialPayload) => Promise<import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteTestimonial: (id: string) => Promise<import("mongoose").Document<unknown, {}, ITestimonial, {}, import("mongoose").DefaultSchemaOptions> & ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveTestimonials: () => Promise<(ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getFeaturedTestimonials: () => Promise<(ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTestimonialsByRating: (rating: ITestimonial["rating"]) => Promise<(ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTestimonialsByClientType: (clientType: ITestimonial["clientType"]) => Promise<(ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getTestimonialsByProject: (projectName: string) => Promise<(ITestimonial & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getAverageRating: () => Promise<any>;
};
//# sourceMappingURL=testimonials.service.d.ts.map