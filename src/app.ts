// src/app.ts

import compression from "compression";
import cookieParser from "cookie-parser";
import cors, { type CorsOptions } from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { env } from "./config/env.js";
import { swaggerDocument } from "./docs/swagger.js";
import {
  globalErrorHandler,
  notFound,
} from "./middlewares/index.js";
import { v1Router } from "./routes/index.js";

const app = express();

/* -------------------------------------------------------------------------- */
/*                               Allowed Origins                              */
/* -------------------------------------------------------------------------- */

const allowedOrigins = env.CORS_ORIGIN.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

/* -------------------------------------------------------------------------- */
/*                                Security                                    */
/* -------------------------------------------------------------------------- */

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/* -------------------------------------------------------------------------- */
/*                                   CORS                                     */
/* -------------------------------------------------------------------------- */

const corsOptions: CorsOptions = {
  origin(origin, callback) {
    /**
     * Allow:
     * - Server-to-server requests
     * - Swagger
     * - Postman
     * - Curl
     */
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(
      new Error(`CORS Error: Origin '${origin}' is not allowed.`),
    );
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],

  exposedHeaders: [
    "Content-Disposition",
  ],
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

/* -------------------------------------------------------------------------- */
/*                               Performance                                  */
/* -------------------------------------------------------------------------- */

app.use(compression());

/* -------------------------------------------------------------------------- */
/*                                  Cookies                                   */
/* -------------------------------------------------------------------------- */

app.use(cookieParser());

/* -------------------------------------------------------------------------- */
/*                               Body Parsers                                 */
/* -------------------------------------------------------------------------- */

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  }),
);

/* -------------------------------------------------------------------------- */
/*                               Root Endpoint                                */
/* -------------------------------------------------------------------------- */

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API Running",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

/* -------------------------------------------------------------------------- */
/*                               Health Check                                 */
/* -------------------------------------------------------------------------- */

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

/* -------------------------------------------------------------------------- */
/*                               Swagger JSON                                 */
/* -------------------------------------------------------------------------- */

app.get("/api-docs/swagger.json", (_req, res) => {
  res.json(swaggerDocument);
});

/* -------------------------------------------------------------------------- */
/*                                Swagger UI                                  */
/* -------------------------------------------------------------------------- */

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
    customSiteTitle: "Portfolio Backend API",
  }),
);

/* -------------------------------------------------------------------------- */
/*                                API Routes                                  */
/* -------------------------------------------------------------------------- */

app.use("/api/v1", v1Router);

/* -------------------------------------------------------------------------- */
/*                               404 Handler                                  */
/* -------------------------------------------------------------------------- */

app.use(notFound);

/* -------------------------------------------------------------------------- */
/*                           Global Error Handler                             */
/* -------------------------------------------------------------------------- */

app.use(globalErrorHandler);

export default app;