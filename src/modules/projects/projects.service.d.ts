import type { IProject, TCreateProjectPayload, TProjectCategory, TProjectStatus, TUpdateProjectPayload } from "./projects.interface.js";
export declare const ProjectService: {
    createProject: (payload: TCreateProjectPayload) => Promise<import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getProjects: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getProjectById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateProject: (id: string, payload: TUpdateProjectPayload) => Promise<import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteProject: (id: string) => Promise<import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getFeaturedProjects: () => Promise<(IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getProjectBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getProjectsByCategory: (category: TProjectCategory) => Promise<(IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getProjectsByTechnology: (technology: string) => Promise<(IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getProjectsByStatus: (status: TProjectStatus) => Promise<(IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getActiveProjects: () => Promise<(IProject & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=projects.service.d.ts.map