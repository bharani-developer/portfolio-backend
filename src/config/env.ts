// src/config/env.ts

import dotenv from "dotenv";

dotenv.config();

const requiredEnvVariables = [
  "DATABASE_URL",

  "JWT_SECRET",
  "JWT_EXPIRES_IN",

  "JWT_REFRESH_SECRET",
  "JWT_REFRESH_EXPIRES_IN",

  "BCRYPT_SALT_ROUNDS",

  "CORS_ORIGIN",

  "CLOUDINARY_CLOUD_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
  "CLOUDINARY_FOLDER",

  "ADMIN_NAME",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD",

  "GOOGLE_CLIENT_ID",
] as const;

for (const key of requiredEnvVariables) {
  const value = process.env[key];

  if (!value || value.trim() === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const bcryptSaltRounds = Number(process.env.BCRYPT_SALT_ROUNDS);

if (Number.isNaN(bcryptSaltRounds) || bcryptSaltRounds < 4) {
  throw new Error("BCRYPT_SALT_ROUNDS must be a valid number");
}

export const env = {
  NODE_ENV: process.env.NODE_ENV?.trim() ?? "development",

  PORT: Number(process.env.PORT) || 5000,

  DATABASE_URL: process.env.DATABASE_URL!.trim(),

  JWT_SECRET: process.env.JWT_SECRET!.trim(),

  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN!.trim(),

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!.trim(),

  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN!.trim(),

  BCRYPT_SALT_ROUNDS: bcryptSaltRounds,

  CORS_ORIGIN: process.env.CORS_ORIGIN!.trim(),

  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!.trim(),

  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!.trim(),

  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET!.trim(),

  CLOUDINARY_FOLDER: process.env.CLOUDINARY_FOLDER!.trim(),

  ADMIN_NAME: process.env.ADMIN_NAME!.trim(),

  ADMIN_EMAIL: process.env.ADMIN_EMAIL!.trim(),

  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD!.trim(),

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!.trim(),
} as const;

export type Env = typeof env;
