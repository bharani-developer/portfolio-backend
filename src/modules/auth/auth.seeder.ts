// src/modules/auth/auth.seeder.ts

import mongoose from "mongoose";

import { connectDatabase } from "../../config/database.js";
import { env } from "../../config/env.js";

import { ROLE } from "../../constants/role.constant.js";

import { logger } from "../../shared/logger/logger.js";

import { User } from "./auth.model.js";

export const seedAdminUser = async (): Promise<void> => {
  const existingAdmin = await User.findOne({
    email: env.ADMIN_EMAIL,
  });

  if (existingAdmin) {
    logger.info("Admin user already exists.");

    return;
  }

  await User.create({
    name: env.ADMIN_NAME,
    email: env.ADMIN_EMAIL,
    password: env.ADMIN_PASSWORD,
    role: ROLE.ADMIN,
  });

  logger.info("Admin user seeded successfully.");
};

export const runAuthSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedAdminUser();

    logger.info("Auth seeding completed.");
  } catch (error) {
    logger.error(
      {
        error,
      },
      "Failed to seed admin user.",
    );

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes("auth.seeder")) {
  void runAuthSeeder(true);
}
