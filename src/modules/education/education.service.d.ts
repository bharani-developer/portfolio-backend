import type { IEducation, TEducationLevel, TEducationDocument } from "./education.interface.js";
export declare const EducationService: {
    createEducation: (payload: Partial<IEducation>) => Promise<TEducationDocument>;
    getEducations: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IEducation, {}, import("mongoose").DefaultSchemaOptions> & IEducation & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getEducationById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IEducation, {}, import("mongoose").DefaultSchemaOptions> & IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateEducation: (id: string, payload: Partial<IEducation>) => Promise<import("mongoose").Document<unknown, {}, IEducation, {}, import("mongoose").DefaultSchemaOptions> & IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteEducation: (id: string) => Promise<import("mongoose").Document<unknown, {}, IEducation, {}, import("mongoose").DefaultSchemaOptions> & IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveEducations: () => Promise<(IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getCurrentEducations: () => Promise<(IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getEducationBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IEducation, {}, import("mongoose").DefaultSchemaOptions> & IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getEducationsByLevel: (educationLevel: TEducationLevel) => Promise<(IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getEducationsBySkill: (skill: string) => Promise<(IEducation & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=education.service.d.ts.map