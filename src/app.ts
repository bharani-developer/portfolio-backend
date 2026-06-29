// src\app.ts

import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { env } from "./config/env.js";
import { swaggerDocument } from "./docs/swagger.js";
import { globalErrorHandler, notFound } from "./middlewares/index.js";
import { v1Router } from "./routes/index.js";
const app = express();

/**
 * Security
 */
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

/**
 * CORS
 */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "http://192.168.1.5:3000",
      "http://localhost:5173",
    ], credentials: true,
  }),
);

/**
 * Performance
 */
app.use(compression());

/**
 * Cookies
 */
app.use(cookieParser());

/**
 * Body Parsers
 */
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

/**
 * Root Endpoint
 */
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API Running",
    environment: env.NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

/**
 * Health Check
 */
app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    timestamp: new Date().toISOString(),
  });
});

/**
 * Swagger JSON
 */
app.get("/api-docs/swagger.json", (_req, res) => {
  res.json(swaggerDocument);
});

/**
 * Swagger UI
 */
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true,
    customSiteTitle: "Portfolio Backend API",
  }),
);

/**
 * API Routes
 */
/**
 * API Routes
 */
app.use("/api/v1", v1Router);
/**
 * 404 Handler
 */
app.use(notFound);

/**
 * Global Error Handler
 */
app.use(globalErrorHandler);

export default app;
