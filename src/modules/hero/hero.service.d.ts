import type { IHero } from "./hero.interface.js";
export declare const HeroService: Readonly<{
    createHero: (payload: Partial<IHero>) => Promise<import("mongoose").Document<unknown, {}, IHero, {}, import("mongoose").DefaultSchemaOptions> & IHero & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getHero: () => Promise<import("mongoose").Document<unknown, {}, IHero, {}, import("mongoose").DefaultSchemaOptions> & IHero & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateHero: (payload: Partial<IHero>) => Promise<import("mongoose").Document<unknown, {}, IHero, {}, import("mongoose").DefaultSchemaOptions> & IHero & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteHero: () => Promise<void>;
}>;
//# sourceMappingURL=hero.service.d.ts.map