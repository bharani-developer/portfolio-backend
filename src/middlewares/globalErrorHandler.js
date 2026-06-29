// src\middlewares\globalErrorHandler.ts
import { Error as MongooseError } from "mongoose";
import jwt from "jsonwebtoken";
import { ZodError } from "zod";
import { env } from "../config/env.js";
import AppError from "../utils/AppError.js";
const globalErrorHandler = (error, _req, res, _next) => {
    let statusCode = 500;
    let message = "Something went wrong";
    let errorSources = [];
    // App Error
    if (error instanceof AppError) {
        statusCode = error.statusCode;
        message = error.message;
    }
    // Zod Validation Error
    else if (error instanceof ZodError) {
        statusCode = 400;
        message = "Validation error";
        errorSources = error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
        }));
    }
    // Mongoose Validation Error
    else if (error instanceof MongooseError.ValidationError) {
        statusCode = 400;
        message = "Validation error";
        errorSources = Object.values(error.errors).map((err) => ({
            path: err.path,
            message: err.message,
        }));
    }
    // Invalid MongoDB ObjectId
    else if (error instanceof MongooseError.CastError) {
        statusCode = 400;
        message = "Invalid ID";
        errorSources = [
            {
                path: error.path,
                message: `Invalid value: ${String(error.value)}`,
            },
        ];
    }
    // MongoDB Duplicate Key
    else if (typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === 11000) {
        statusCode = 409;
        const duplicateError = error;
        const field = Object.keys(duplicateError.keyPattern ?? {})[0] ?? "field";
        message = `${field} already exists`;
        errorSources = [
            {
                path: field,
                message,
            },
        ];
    }
    // Expired JWT
    else if (error instanceof jwt.TokenExpiredError) {
        statusCode = 401;
        message = "Token has expired";
    }
    // Invalid JWT
    else if (error instanceof jwt.JsonWebTokenError) {
        statusCode = 401;
        message = "Invalid token";
    }
    // Generic Error
    else if (error instanceof Error) {
        message = error.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        ...(env.NODE_ENV === "development" && {
            stack: error instanceof Error ? error.stack : undefined,
        }),
    });
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map