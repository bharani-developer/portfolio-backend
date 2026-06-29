import type { ISettings } from "./settings.interface.js";
export declare const SettingsService: {
    createSettings: (payload: ISettings) => Promise<import("mongoose").Document<unknown, {}, ISettings, {}, import("mongoose").DefaultSchemaOptions> & ISettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getSettings: () => Promise<import("mongoose").Document<unknown, {}, ISettings, {}, import("mongoose").DefaultSchemaOptions> & ISettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateSettings: (payload: Partial<ISettings>) => Promise<(import("mongoose").Document<unknown, {}, ISettings, {}, import("mongoose").DefaultSchemaOptions> & ISettings & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteSettings: () => Promise<null>;
};
//# sourceMappingURL=settings.service.d.ts.map