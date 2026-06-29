import type { HydratedDocument, Model } from "mongoose";
export declare class BaseSingletonService<T extends object> {
    private readonly model;
    private readonly modelName;
    constructor(model: Model<T>, modelName: string);
    create(payload: Partial<T>): Promise<HydratedDocument<T>>;
    get(): Promise<HydratedDocument<T>>;
    update(payload: Partial<T>): Promise<HydratedDocument<T>>;
    delete(): Promise<void>;
    exists(): Promise<boolean>;
}
//# sourceMappingURL=baseSingleton.service.d.ts.map