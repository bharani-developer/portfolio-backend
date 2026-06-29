import type { ISkill } from "./skills.interface.js";
export declare const SkillsService: {
    createSkill: (payload: Partial<ISkill>) => Promise<import("mongoose").Document<unknown, {}, ISkill, {}, import("mongoose").DefaultSchemaOptions> & ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSkills: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, ISkill, {}, import("mongoose").DefaultSchemaOptions> & ISkill & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getSkillById: (id: string) => Promise<import("mongoose").Document<unknown, {}, ISkill, {}, import("mongoose").DefaultSchemaOptions> & ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateSkill: (id: string, payload: Partial<ISkill>) => Promise<import("mongoose").Document<unknown, {}, ISkill, {}, import("mongoose").DefaultSchemaOptions> & ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteSkill: (id: string) => Promise<import("mongoose").Document<unknown, {}, ISkill, {}, import("mongoose").DefaultSchemaOptions> & ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSkillsByCategory: (category: string) => Promise<(ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getActiveSkills: () => Promise<(ISkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=skills.service.d.ts.map