// src\middlewares\auth.middleware.ts
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { env } from "../config/env.js";
import AppError from "../utils/AppError.js";
const auth = (...requiredRoles) => (req, _res, next) => {
    try {
        const token = req.headers.authorization?.startsWith("Bearer ")
            ? req.headers.authorization.split(" ")[1]
            : null;
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, "Authentication token is required");
        }
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.user = decoded;
        if (requiredRoles.length > 0 && !requiredRoles.includes(decoded.role)) {
            throw new AppError(httpStatus.FORBIDDEN, "You do not have permission to access this resource");
        }
        next();
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return next(new AppError(httpStatus.UNAUTHORIZED, "Token has expired"));
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return next(new AppError(httpStatus.UNAUTHORIZED, "Invalid token"));
        }
        next(error);
    }
};
export default auth;
//# sourceMappingURL=auth.middleware.js.map