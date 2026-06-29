import type { ICertification, TCreateCertificationPayload, TUpdateCertificationPayload } from "./certifications.interface.js";
export declare const CertificationService: {
    createCertification: (payload: TCreateCertificationPayload) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getCertifications: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getCertificationById: (id: string) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateCertification: (id: string, payload: TUpdateCertificationPayload) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteCertification: (id: string) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveCertifications: () => Promise<(ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getCertificationBySlug: (slug: string) => Promise<import("mongoose").Document<unknown, {}, ICertification, {}, import("mongoose").DefaultSchemaOptions> & ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getCertificationsBySkill: (skill: string) => Promise<(ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getExpiredCertifications: () => Promise<(ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getValidCertifications: () => Promise<(ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getCertificationsByIssuer: (issuer: string) => Promise<(ICertification & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=certifications.service.d.ts.map