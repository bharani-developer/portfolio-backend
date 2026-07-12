/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';
import { env } from '../../configs/env.js';

import { ROLE } from '../../constants/role.constants.js';

import { logger } from '../../shared/logger/logger.js';

import { User } from '../users/users.model.js';

import { AUTH_PROVIDER } from './auth.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Validate required environment variables.
 */
const validateEnvironment = (): void => {
  const requiredVariables = [
    'ADMIN_NAME',
    'ADMIN_EMAIL',
    'ADMIN_PASSWORD',
  ] as const;

  const missingVariables = requiredVariables.filter(
    (key) => !env[key]?.trim(),
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVariables.join(', ')}`,
    );
  }
};

/**
 * Normalize email.
 */
const normalizeEmail = (email: string): string =>
  email.trim().toLowerCase();

/* -------------------------------------------------------------------------- */
/*                               Admin Seeder                                 */
/* -------------------------------------------------------------------------- */

/**
 * Seed the default administrator.
 *
 * Safe to execute multiple times.
 */
export const seedAdminUser = async (): Promise<void> => {
  validateEnvironment();

  const email = normalizeEmail(env.ADMIN_EMAIL);

  const existingAdmin = await User.findOne({
    email,
  });

  if (existingAdmin) {
    logger.info(
      {
        email,
      },
      'Admin user already exists. Skipping seeding.',
    );

    return;
  }

  await User.create({
    name: env.ADMIN_NAME.trim(),
    email,
    password: env.ADMIN_PASSWORD,
    role: ROLE.ADMIN,
    authProvider: AUTH_PROVIDER.LOCAL,
    emailVerified: true,
    isActive: true,
    isDeleted: false,
  });

  logger.info(
    {
      email,
    },
    'Admin user created successfully.',
  );
};

/* -------------------------------------------------------------------------- */
/*                              Seeder Runner                                 */
/* -------------------------------------------------------------------------- */

/**
 * Run authentication seeders.
 *
 * @param standalone Whether the database connection should be managed here.
 */
export const runAuthSeeder = async (
  standalone = false,
): Promise<void> => {
  try {
    if (standalone) {
      logger.info('Connecting to database...');

      await connectDatabase();
    }

    logger.info('Starting authentication seeders...');

    await seedAdminUser();

    logger.info('Authentication seeding completed successfully.');
  } catch (error) {
    logger.error(
      {
        error,
      },
      'Authentication seeding failed.',
    );

    throw error;
  } finally {
    if (standalone) {
      logger.info('Closing database connection...');

      await mongoose.connection.close();

      logger.info('Database connection closed.');
    }
  }
};

/* -------------------------------------------------------------------------- */
/*                              Standalone Mode                               */
/* -------------------------------------------------------------------------- */

if (process.argv[1]?.includes('auth.seeder')) {
  void runAuthSeeder(true);
}