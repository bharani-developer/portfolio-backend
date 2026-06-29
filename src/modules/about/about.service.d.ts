import type { IAbout } from "./about.interface.js";
export declare const AboutService: {
    createAbout: (payload: Partial<IAbout>) => Promise<import("mongoose").Document<unknown, {}, IAbout, {}, import("mongoose").DefaultSchemaOptions> & IAbout & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAbout: () => Promise<import("mongoose").Document<unknown, {}, IAbout, {}, import("mongoose").DefaultSchemaOptions> & IAbout & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateAbout: (payload: Partial<IAbout>) => Promise<import("mongoose").Document<unknown, {}, IAbout, {}, import("mongoose").DefaultSchemaOptions> & IAbout & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteAbout: () => Promise<void>;
};
//# sourceMappingURL=about.service.d.ts.map