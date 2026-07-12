// src/modules/settings/settings.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { Settings } from './settings.model.js';

export const seedSettings = async (): Promise<void> => {
  const existingSettings = await Settings.findOne();

  if (existingSettings) {
    console.info('Settings already seeded.');

    return;
  }

  await Settings.create({
    siteTitle: 'Bharani Karthikeyan | Senior Software Engineer',

    siteDescription:
      'Senior Software Engineer | Full Stack Developer specializing in React, Next.js, Node.js, Express.js, Laravel, Flutter, TypeScript, MongoDB, and MySQL.',

    email: 'bharani.developer@gmail.com',

    phone: '+91 9566935886',

    address: 'Pudukkottai, Tamil Nadu, India',

    socialLinks: {
      github: '',

      linkedin: '',

      twitter: '',

      facebook: '',

      instagram: '',

      youtube: '',

      leetcode: '',

      hackerrank: '',

      stackoverflow: '',
    },

    seo: {
      metaTitle: 'Bharani Karthikeyan | Senior Software Engineer',

      metaDescription:
        'Portfolio of Bharani Karthikeyan, Senior Software Engineer and Full Stack Developer specializing in React, Next.js, Node.js, Express.js, Laravel, Flutter, TypeScript, MongoDB, and MySQL.',

      metaKeywords: [
        'Bharani Karthikeyan',
        'Senior Software Engineer',
        'Full Stack Developer',
        'React',
        'Next.js',
        'Node.js',
        'Express.js',
        'Laravel',
        'Flutter',
        'TypeScript',
        'MongoDB',
        'MySQL',
        'Portfolio',
      ],

      siteUrl: 'https://example.com',
    },
  });

  console.info('Settings seeded successfully.');
};

export const runSettingsSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedSettings();

    console.info('Settings seeding completed.');
  } catch (error) {
    console.error('Failed to seed settings.', error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('settings.seeder')) {
  void runSettingsSeeder(true);
}

export default seedSettings;
