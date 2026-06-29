// src/seeders/index.ts

import { seedAdminUser } from "../modules/auth/auth.seeder.js";

import { seedSettings } from "../modules/settings/settings.seeder.js";

import { seedHero } from "../modules/hero/hero.seeder.js";
import { seedAbout } from "../modules/about/about.seeder.js";

import { seedServices } from "../modules/services/services.seeder.js";
import { seedSkills } from "../modules/skills/skills.seeder.js";

import { seedExperience } from "../modules/experience/experience.seeder.js";
import { seedEducation } from "../modules/education/education.seeder.js";
import { seedCertifications } from "../modules/certifications/certifications.seeder.js";

import { seedProjects } from "../modules/projects/projects.seeder.js";
import { seedTestimonials } from "../modules/testimonials/testimonials.seeder.js";

import { seedBlogs } from "../modules/blogs/blogs.seeder.js";

import { seedContact } from "../modules/contact/contact.seeder.js";

import { logger } from "../shared/logger/index.js";

export const runSeeders = async (): Promise<void> => {
  logger.info("Starting database seeders from...");

  /**
   * Core System
   */
  await seedAdminUser();
  await seedSettings();

  /**
   * Singleton Portfolio Content
   */
  await seedHero();
  await seedAbout();

  /**
   * Portfolio Collections
   */
  await seedServices();
  await seedSkills();

  await seedExperience();
  await seedEducation();
  await seedCertifications();

  await seedProjects();
  await seedTestimonials();

  await seedBlogs();

  /**
   * Contact
   */
  await seedContact();

  logger.info("All seeders completed successfully.");
};
