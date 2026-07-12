// src/modules/education/education.seeder.ts

import mongoose from 'mongoose';

import { connectDatabase } from '../../configs/database.config.js';

import { generateSlug } from '../../shared/utils/generate-slug.js';

import {
  EDUCATION_DEFAULT,
  EDUCATION_LEVEL,
  EDUCATION_TYPE,
  GRADE_TYPE,
} from './education.constant.js';

import { Education } from './education.model.js';

export const seedEducation = async (): Promise<void> => {
  const existingCount = await Education.countDocuments();

  if (existingCount > 0) {
    console.info('Education already seeded.');

    return;
  }

  await Education.insertMany([
    {
      institution: 'Sri Kulabathi Balaih Higher Secondary School',

      slug: generateSlug('Nursery School'),

      degree: 'Pre-Primary Education',

      fieldOfStudy: 'Early Childhood Education',

      educationLevel: EDUCATION_LEVEL.OTHER,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('1998-06-01'),

      endDate: new Date('2000-03-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PASS,

      grade: 'Completed',

      description:
        'Completed pre-primary education and developed foundational learning, communication, and social skills.',

      achievements: [],

      skills: [],

      sortOrder: 1,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },

    {
      institution: 'Sri Kulabathi Balaih Higher Secondary School',

      slug: generateSlug('Primary School'),

      degree: 'Primary Education',

      fieldOfStudy: 'General Education',

      educationLevel: EDUCATION_LEVEL.OTHER,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('2000-06-01'),

      endDate: new Date('2005-03-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PASS,

      grade: 'Completed',

      description:
        'Completed primary education with emphasis on mathematics, science, language, and general studies.',

      achievements: [],

      skills: [],

      sortOrder: 2,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },

    {
      institution: 'Sri Kulabathi Balaih Higher Secondary School',

      slug: generateSlug('Middle School'),

      degree: 'Middle School Education',

      fieldOfStudy: 'General Education',

      educationLevel: EDUCATION_LEVEL.OTHER,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('2005-06-01'),

      endDate: new Date('2008-03-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PASS,

      grade: 'Completed',

      description:
        'Completed middle school education with strong academic performance and participation in school activities.',

      achievements: [],

      skills: [],

      sortOrder: 3,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },

    {
      institution: 'Sri Kulabathi Balaih Higher Secondary School',

      slug: generateSlug('Sri Kulabathi Balaih Higher Secondary School SSLC'),

      degree: 'Secondary School Leaving Certificate (SSLC)',

      fieldOfStudy: 'Secondary Education',

      educationLevel: EDUCATION_LEVEL.SECONDARY,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('2008-06-01'),

      endDate: new Date('2010-03-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PERCENTAGE,

      grade: 'Completed',

      description: 'Completed secondary school education with a strong academic foundation.',

      achievements: [],

      skills: [],

      sortOrder: 4,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },

    {
      institution: 'Sri Kulabathi Balaih Higher Secondary School',

      slug: generateSlug('Sri Kulabathi Balaih Higher Secondary School HSC'),

      degree: 'Higher Secondary Certificate (HSC)',

      fieldOfStudy: 'Computer Science',

      educationLevel: EDUCATION_LEVEL.HIGHER_SECONDARY,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('2010-06-01'),

      endDate: new Date('2012-03-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PERCENTAGE,

      grade: 'Completed',

      description: 'Completed Higher Secondary education with Computer Science and Mathematics.',

      achievements: [],

      skills: ['Computer Science', 'Mathematics'],

      sortOrder: 5,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },

    {
      institution: 'Sudharsan Engineering College',

      slug: generateSlug('Sudharsan Engineering College Bachelor of Engineering'),

      degree: 'Bachelor of Engineering',

      fieldOfStudy: 'Computer Science and Engineering',

      educationLevel: EDUCATION_LEVEL.BACHELORS,

      educationType: EDUCATION_TYPE.FULL_TIME,

      location: 'Pudukkottai, Tamil Nadu, India',

      startDate: new Date('2012-06-01'),

      endDate: new Date('2016-05-31'),

      isCurrent: false,

      gradeType: GRADE_TYPE.PERCENTAGE,

      grade: 'First Class',

      description:
        'Studied Computer Science and Engineering with focus on software engineering, programming, databases, operating systems, networking, web technologies, and software development.',

      achievements: [
        'Won Academic Proficiency Award multiple times during UG',
        'Active NSS Member',
        'Active Rotary Club Member',
      ],

      skills: ['C++', 'Java', 'PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],

      sortOrder: 6,

      isActive: EDUCATION_DEFAULT.IS_ACTIVE,
    },
  ]);

  console.info('Education seeded successfully.');
};

export const runEducationSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedEducation();

    console.info('Education seeding completed.');
  } catch (error) {
    console.error('Failed to seed education.', error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('education.seeder')) {
  void runEducationSeeder(true);
}

export default seedEducation;
