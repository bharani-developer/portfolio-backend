import type { HydratedDocument, Model } from "mongoose";
type QueryParams = Record<string, unknown>;
type MongoFilter = Record<string, unknown>;
export declare class BaseCrudService<T extends object> {
    private readonly model;
    private readonly searchableFields;
    constructor(model: Model<T>, searchableFields?: string[]);
    create(payload: Partial<T>): Promise<HydratedDocument<T>>;
    getAll(query: QueryParams): Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: HydratedDocument<T>[];
    }>;
    getById(id: string): Promise<HydratedDocument<T>>;
    update(id: string, payload: Partial<T>): Promise<HydratedDocument<T>>;
    delete(id: string): Promise<HydratedDocument<T>>;
    exists(filter: MongoFilter): Promise<boolean>;
    count(filter?: MongoFilter): Promise<number>;
}
export {};
//# sourceMappingURL=baseCrud.service.d.ts.map