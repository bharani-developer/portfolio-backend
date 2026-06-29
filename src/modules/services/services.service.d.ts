import type { IService } from "./services.interface.js";
type TCreateServicePayload = Omit<IService, "slug" | "createdAt" | "updatedAt">;
type TUpdateServicePayload = Partial<Omit<IService, "slug" | "createdAt" | "updatedAt">>;
export declare const ServicesService: {
    createService: (payload: TCreateServicePayload) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getServices: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getServiceById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateService: (id: string, payload: TUpdateServicePayload) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteService: (id: string) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveServices: () => Promise<(IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getServiceBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, IService, {}, import("mongoose").DefaultSchemaOptions> & IService & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
};
export {};
//# sourceMappingURL=services.service.d.ts.map