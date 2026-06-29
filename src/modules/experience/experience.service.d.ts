import type { IExperience } from "./experience.interface.js";
export declare const ExperienceService: {
    createExperience: (payload: Partial<IExperience>) => Promise<import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getExperiences: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getExperienceById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateExperience: (id: string, payload: Partial<IExperience>) => Promise<import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteExperience: (id: string) => Promise<import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveExperiences: () => Promise<(IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getCurrentExperiences: () => Promise<(IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getExperiencesByTechnology: (technology: string) => Promise<(IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getExperiencesByCompany: (company: string) => Promise<(IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getExperienceBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IExperience, {}, import("mongoose").DefaultSchemaOptions> & IExperience & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
};
//# sourceMappingURL=experience.service.d.ts.map