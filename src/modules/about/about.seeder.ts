// src/modules/about/about.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { ABOUT_DEFAULT } from './about.constant.js';
import { About } from './about.model.js';

export const seedAbout = async (): Promise<void> => {
  const existingAbout = await About.findOne();

  if (existingAbout) {
    console.info('About section already exists');

    return;
  }

  await About.create({
    profileImage: {
      url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1/portfolio/profile.jpg',
      publicId: 'portfolio/profile',
    },

    images: [
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1/portfolio/about-1.jpg',
        publicId: 'portfolio/about-1',
      },
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1/portfolio/about-2.jpg',
        publicId: 'portfolio/about-2',
      },
      {
        url: 'https://res.cloudinary.com/your-cloud-name/image/upload/v1/portfolio/about-3.jpg',
        publicId: 'portfolio/about-3',
      },
    ],

    fullName: 'Bharani Karthikeyan',

    designation: 'Senior Software Engineer | Full Stack Developer',

    bio: 'Senior Full Stack Developer with 8+ years of experience designing and developing enterprise web and mobile applications. Skilled in React, Next.js, Node.js, Express.js, Laravel, Flutter, TypeScript, MongoDB, and MySQL. Experienced in building CMS, LMS, ERP, banking systems, REST APIs, payment gateway integrations, cloud-based applications, and scalable backend architectures. Passionate about creating secure, high-performance, and user-centric software solutions using modern technologies and best development practices.',

    email: 'bharani.developer@gmail.com',

    phone: '+91 9566935886',

    address: 'Pudukkottai, Tamil Nadu, India',

    resumeUrl: '/resume/bharani-karthikeyan-resume.pdf',

    yearsOfExperience: 8,

    stats: [
      {
        label: 'Years Experience',
        value: '8+',
      },
      {
        label: 'Projects Delivered',
        value: '16+',
      },
      {
        label: 'Technologies',
        value: '30+',
      },
      {
        label: 'Companies Worked',
        value: '3',
      },
    ],

    isActive: ABOUT_DEFAULT.IS_ACTIVE,
  });

  console.info('About section seeded successfully');
};

export const runAboutSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedAbout();

    console.info('About seeding completed');
  } catch (error) {
    console.error('About seeding failed:', error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('about.seeder')) {
  void runAboutSeeder(true);
}
