// src/modules/projects/projects.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { generateSlug } from '../../shared/utils/generate-slug.js';

import { PROJECT_CATEGORY, PROJECT_DEFAULT, PROJECT_STATUS } from './projects.constant.js';

import { Project } from './projects.model.js';

export const seedProjects = async (): Promise<void> => {
  const existingCount = await Project.countDocuments();

  if (existingCount > 0) {
    console.info('Projects already seeded.');

    return;
  }

  await Project.insertMany([
    {
      title: 'TVECERT',

      slug: generateSlug('TVECERT'),

      shortDescription:
        'Online certification management system for ISO training and certification.',

      description:
        'Developed an enterprise Laravel-based certification platform allowing users to register for training, verify certificates, view training calendars, and complete online payments through multiple payment gateways.',

      technologies: [
        'Laravel',
        'PHP',
        'MySQL',
        'HTML',
        'CSS',
        'Bootstrap',
        'JavaScript',
        'jQuery',
        'CCAvenue',
      ],

      category: PROJECT_CATEGORY.WEB_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 1,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },

    {
      title: 'GK Milk',

      slug: generateSlug('GK Milk'),

      shortDescription: 'Cross-platform Flutter application for milk delivery.',

      description:
        'Developed customer and delivery applications with Google Maps, Firebase Cloud Messaging, Razorpay payment integration, and real-time order management.',

      technologies: ['Flutter', 'Laravel', 'MySQL', 'Google Maps', 'Firebase', 'Razorpay'],

      category: PROJECT_CATEGORY.MOBILE_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 2,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },

    {
      title: 'Easy Deal',

      slug: generateSlug('Easy Deal'),

      shortDescription: 'Service marketplace connecting customers, technicians, and shop owners.',

      description:
        'Developed Flutter mobile application allowing customers to discover nearby services, purchase products, and connect with technicians.',

      technologies: ['Flutter', 'Laravel', 'MySQL', 'Razorpay'],

      category: PROJECT_CATEGORY.MOBILE_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 3,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },

    {
      title: 'TANUVAS Poultry App',

      slug: generateSlug('TANUVAS Poultry App'),

      shortDescription:
        'Flutter application for Tamil Nadu Veterinary and Animal Sciences University.',

      description:
        'Mobile application helping farmers locate nearby veterinary services, hospitals, shops, and buy or sell poultry using Google Maps.',

      technologies: ['Flutter', 'Laravel', 'MySQL', 'Google Maps'],

      category: PROJECT_CATEGORY.MOBILE_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 4,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },

    {
      title: 'BECB Bank',

      slug: generateSlug('BECB Bank'),

      shortDescription: 'Administrative banking portal maintenance and enhancement.',

      description:
        "Maintained and enhanced the BHEL Employees' Co-Operative Bank administration portal by developing new modules, fixing production issues, and implementing client requirements.",

      technologies: ['Laravel', 'PHP', 'JavaScript', 'HTML', 'CSS', 'MySQL'],

      category: PROJECT_CATEGORY.WEB_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 5,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },

    {
      title: 'Rubin Glass Calculator',

      slug: generateSlug('Rubin Glass Calculator'),

      shortDescription: 'Glass quotation and invoice generation system.',

      description:
        'Built a web application to calculate glass specifications, generate quotations, calculate GST, create PDF invoices, and send them through email.',

      technologies: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'jQuery'],

      category: PROJECT_CATEGORY.WEB_APPLICATION,

      featured: true,

      status: PROJECT_STATUS.COMPLETED,

      gallery: [],

      sortOrder: 6,

      isActive: PROJECT_DEFAULT.IS_ACTIVE,
    },
  ]);

  console.info('Projects seeded successfully.');
};

export const runProjectsSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedProjects();

    console.info('Projects seeding completed.');
  } catch (error) {
    console.error('Failed to seed projects.', error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('projects.seeder')) {
  void runProjectsSeeder(true);
}

export default seedProjects;
