export interface IPaginationOptions {
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
}
export interface IPaginationResult {
    page: number;
    limit: number;
    skip: number;
    sortCondition: Record<string, 1 | -1>;
}
export declare const calculatePagination: (options: IPaginationOptions) => IPaginationResult;
//# sourceMappingURL=pagination.d.ts.map