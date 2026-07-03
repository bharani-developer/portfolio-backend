// src/config/env.ts

import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = [
  // Application
  "DEVELOPMENT__URL",
  "PRODUCTION__URL",

  // Database
  "DATABASE_URL",

  // JWT Authentication
  "JWT_SECRET",
  "JWT_EXPIRES_IN",
  "JWT_REFRESH_SECRET",
  "JWT_REFRESH_EXPIRES_IN",

  // Security
  "BCRYPT_SALT_ROUNDS",

  // CORS
  "CORS_ORIGIN",

  // Cloudinary
  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "CLOUDINARY_FOLDER",

  // Admin Seeder
  "ADMIN_NAME",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD",

  // Google OAuth
  "GOOGLE_CLIENT_ID",
] as const;

for (const key of requiredEnvVariables) {
  const value = process.env[key];

  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const port = Number(process.env.PORT ?? 5000);

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error("PORT must be a valid port number");
}

const bcryptSaltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);

if (!Number.isInteger(bcryptSaltRounds) || bcryptSaltRounds < 4) {
  throw new Error(
    "BCRYPT_SALT_ROUNDS must be an integer greater than or equal to 4"
  );
}

const nodeEnv =
  process.env.NODE_ENV?.trim() === "production"
    ? "production"
    : "development";

const developmentUrl = process.env.DEVELOPMENT__URL!.trim().replace(/\/$/, "");

const productionUrl = process.env.PRODUCTION__URL!.trim().replace(/\/$/, "");

export const env = {
  // Application
  NODE_ENV: nodeEnv,

  PORT: port,

  DEVELOPMENT_URL: developmentUrl,

  PRODUCTION_URL: productionUrl,

  APP_URL: nodeEnv === "production" ? productionUrl : developmentUrl,

  // Database
  DATABASE_URL: process.env.DATABASE_URL!.trim(),

  // JWT Authentication
  JWT_SECRET: process.env.JWT_SECRET!.trim(),

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!.trim(),

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!.trim(),

  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!.trim(),

  // Security
  BCRYPT_SALT_ROUNDS: bcryptSaltRounds,

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN!.split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean),

  // Cloudinary
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!.trim(),

  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!.trim(),

  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!.trim(),

  CLOUDINARY_FOLDER: process.env.CLOUDINARY_FOLDER!.trim(),

  // Admin Seeder
  ADMIN_NAME: process.env.ADMIN_NAME!.trim(),

  ADMIN_EMAIL: process.env.ADMIN_EMAIL!.trim(),

  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!.trim(),

  // Google OAuth
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!.trim(),
} as const;

export type Env = typeof env;