// src/modules/contact/contact.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { Contact } from './contact.model.js';

import { CONTACT_PRIORITIES, CONTACT_SOURCES, CONTACT_STATUSES } from './contact.constant.js';

export const seedContact = async (): Promise<void> => {
  const existingCount = await Contact.countDocuments();

  if (existingCount > 0) {
    console.info('Contact messages already seeded.');

    return;
  }

  await Contact.insertMany([
    {
      name: 'Bharani Karthikeyan',

      email: 'bharani.developer@gmail.com',

      phone: '+91 9566935886',

      company: 'Shalom InfoTech Ltd.',

      subject: 'Portfolio Website Development',

      message: 'I would like to discuss a custom portfolio website project and get an estimate.',

      status: CONTACT_STATUSES[0],

      priority: CONTACT_PRIORITIES[1],

      source: CONTACT_SOURCES[0],

      isRead: false,

      isReplied: false,

      notes: 'Potential freelance client.',

      sortOrder: 1,

      isActive: true,
    },
  ]);

  console.info('Contact messages seeded successfully.');
};

export const runContactSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedContact();

    console.info('Contact seeding completed.');
  } catch (error) {
    console.error('Failed to seed contact messages.', error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('contact.seeder')) {
  void runContactSeeder(true);
}

export default seedContact;
