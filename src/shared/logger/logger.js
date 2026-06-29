// src\shared\logger\logger.ts
import pino from "pino";
import { env } from "../../config/env.js";
const loggerOptions = {
    level: env.NODE_ENV === "production" ? "info" : "debug",
    base: {
        service: "portfolio-backend",
    },
    timestamp: pino.stdTimeFunctions.isoTime,
};
if (env.NODE_ENV !== "production") {
    loggerOptions.transport = {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
            singleLine: true,
        },
    };
}
export const logger = pino(loggerOptions);
//# sourceMappingURL=logger.js.map