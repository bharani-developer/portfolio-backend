// src/server.ts
import app from "./app.js";
import { connectDatabase, disconnectDatabase, env } from "./config/index.js";
import { logger } from "./shared/logger/index.js";
let server;
const bootstrap = async () => {
    try {
        /**
         * Database Connection
         */
        await connectDatabase();
        /**
         * HTTP Server
         */
        server = app.listen(env.PORT, () => {
            logger.info(`Server running on port ${env.PORT}`);
            logger.info(`Environment: ${env.NODE_ENV}`);
            logger.info(`API: http://localhost:${env.PORT}/api/v1`);
            logger.info(`Swagger: http://localhost:${env.PORT}/api-docs`);
        });
    }
    catch (error) {
        logger.fatal(error, "Application startup failed");
        process.exit(1);
    }
};
/**
 * Graceful Shutdown
 */
const gracefulShutdown = async (signal) => {
    logger.warn(`${signal} received. Starting graceful shutdown...`);
    try {
        if (server) {
            await new Promise((resolve, reject) => {
                server.close((error) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve();
                });
            });
        }
        await disconnectDatabase();
        logger.info("Application shutdown completed");
        process.exit(0);
    }
    catch (error) {
        logger.fatal(error, "Graceful shutdown failed");
        process.exit(1);
    }
};
/**
 * Process Events
 */
process.on("SIGINT", () => {
    void gracefulShutdown("SIGINT");
});
process.on("SIGTERM", () => {
    void gracefulShutdown("SIGTERM");
});
process.on("uncaughtException", (error) => {
    logger.fatal(error, "Uncaught Exception");
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    logger.fatal(reason, "Unhandled Promise Rejection");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
        return;
    }
    process.exit(1);
});
/**
 * Start Application
 */
void bootstrap();
//# sourceMappingURL=server.js.map