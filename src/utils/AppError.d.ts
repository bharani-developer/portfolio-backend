declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(statusCode: number, message: string, stack?: string);
}
export default AppError;
//# sourceMappingURL=AppError.d.ts.map