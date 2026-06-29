// src\utils\AppError.ts
class AppError extends Error {
    statusCode;
    isOperational;
    constructor(statusCode, message, stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map