// src\middlewares\notFound.ts
import httpStatus from "http-status";
const notFound = (req, res, _next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: `Route not found: ${req.originalUrl}`,
        errorSources: [
            {
                path: req.originalUrl,
                message: "API endpoint does not exist",
            },
        ],
    });
};
export default notFound;
//# sourceMappingURL=notFound.js.map