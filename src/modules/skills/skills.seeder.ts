// src/modules/skills/skills.seeder.ts

import { SKILLS_CATEGORY } from './skills.constant.js';
import { Skill } from './skills.model.js';

import type { ISkill } from './skills.types.js';
import { connectDatabase } from '../../configs/index.js';
import mongoose from 'mongoose';
import { generateSlug } from '../../shared/utils/index.js';

type SkillSeed = Omit<ISkill, 'slug' | 'isActive' | 'createdAt' | 'updatedAt'>;

const skills: SkillSeed[] = [
  // Frontend
  {
    name: 'HTML5',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 98,
    description: 'Semantic HTML5, accessibility, SEO-friendly markup.',
    sortOrder: 1,
  },
  {
    name: 'CSS3',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 96,
    description: 'Modern CSS, Flexbox, Grid and responsive layouts.',
    sortOrder: 2,
  },
  {
    name: 'JavaScript',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 95,
    description: 'Modern ES6+ JavaScript development.',
    sortOrder: 3,
  },
  {
    name: 'TypeScript',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 93,
    description: 'Type-safe JavaScript applications.',
    sortOrder: 4,
  },
  {
    name: 'React',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 94,
    description: 'Modern React application development.',
    sortOrder: 5,
  },
  {
    name: 'Next.js',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 92,
    description: 'Production-grade React framework.',
    sortOrder: 6,
  },
  {
    name: 'Tailwind CSS',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 95,
    description: 'Utility-first CSS framework.',
    sortOrder: 7,
  },
  {
    name: 'Bootstrap',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 92,
    description: 'Responsive UI framework.',
    sortOrder: 8,
  },
  {
    name: 'jQuery',
    category: SKILLS_CATEGORY.FRONTEND,
    proficiency: 90,
    description: 'DOM manipulation library.',
    sortOrder: 9,
  },

  // Backend
  {
    name: 'Node.js',
    category: SKILLS_CATEGORY.BACKEND,
    proficiency: 92,
    description: 'Backend runtime.',
    sortOrder: 11,
  },
  {
    name: 'Express.js',
    category: SKILLS_CATEGORY.BACKEND,
    proficiency: 93,
    description: 'REST API development.',
    sortOrder: 12,
  },
  {
    name: 'PHP',
    category: SKILLS_CATEGORY.BACKEND,
    proficiency: 92,
    description: 'Server-side scripting.',
    sortOrder: 13,
  },
  {
    name: 'Laravel',
    category: SKILLS_CATEGORY.BACKEND,
    proficiency: 93,
    description: 'Modern PHP framework.',
    sortOrder: 14,
  },

  // API Integration
  {
    name: 'REST API',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 94,
    description: 'RESTful API architecture.',
    sortOrder: 18,
  },
  {
    name: 'JWT Authentication',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 91,
    description: 'Secure authentication using JSON Web Tokens.',
    sortOrder: 19,
  },
  {
    name: 'Razorpay',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 92,
    description: 'Payment gateway integration.',
    sortOrder: 20,
  },
  {
    name: 'CCAvenue',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 90,
    description: 'Online payment gateway integration.',
    sortOrder: 21,
  },
  {
    name: 'Zoho Inventory',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 90,
    description: 'Inventory API integration.',
    sortOrder: 22,
  },
  {
    name: 'Zoho Books',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 88,
    description: 'Accounting API integration.',
    sortOrder: 23,
  },
  {
    name: 'Microsoft Teams API',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 88,
    description: 'Microsoft Teams integration and automation.',
    sortOrder: 24,
  },
  {
    name: 'Vonage (Nexmo)',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 90,
    description: 'Voice and SMS API integration.',
    sortOrder: 25,
  },
  {
    name: 'SugarCRM',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 86,
    description: 'CRM integration.',
    sortOrder: 26,
  },
  {
    name: 'Google Maps API',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 92,
    description: 'Location services and map integration.',
    sortOrder: 27,
  },
  {
    name: 'Firebase Cloud Messaging',
    category: SKILLS_CATEGORY.API_INTEGRATION,
    proficiency: 90,
    description: 'Push notification integration.',
    sortOrder: 28,
  },

  // Database
  {
    name: 'MongoDB',
    category: SKILLS_CATEGORY.DATABASE,
    proficiency: 93,
    description: 'NoSQL database.',
    sortOrder: 29,
  },
  {
    name: 'MySQL',
    category: SKILLS_CATEGORY.DATABASE,
    proficiency: 94,
    description: 'Relational database.',
    sortOrder: 30,
  },
  {
    name: 'SQLite',
    category: SKILLS_CATEGORY.DATABASE,
    proficiency: 90,
    description: 'Embedded database.',
    sortOrder: 31,
  },

  // Mobile
  {
    name: 'Flutter',
    category: SKILLS_CATEGORY.MOBILE,
    proficiency: 90,
    description: 'Cross-platform mobile apps.',
    sortOrder: 32,
  },
  {
    name: 'Dart',
    category: SKILLS_CATEGORY.MOBILE,
    proficiency: 88,
    description: 'Flutter programming language.',
    sortOrder: 33,
  },

  // DevOps
  {
    name: 'Git',
    category: SKILLS_CATEGORY.DEVOPS,
    proficiency: 95,
    description: 'Version control.',
    sortOrder: 34,
  },
  {
    name: 'GitHub',
    category: SKILLS_CATEGORY.DEVOPS,
    proficiency: 94,
    description: 'Repository hosting.',
    sortOrder: 35,
  },
  {
    name: 'Docker',
    category: SKILLS_CATEGORY.DEVOPS,
    proficiency: 80,
    description: 'Containerization.',
    sortOrder: 36,
  },

  // Cloud
  {
    name: 'Vercel',
    category: SKILLS_CATEGORY.CLOUD,
    proficiency: 90,
    description: 'Frontend deployment.',
    sortOrder: 37,
  },
  {
    name: 'Render',
    category: SKILLS_CATEGORY.CLOUD,
    proficiency: 88,
    description: 'Backend deployment.',
    sortOrder: 38,
  },
  {
    name: 'Cloudinary',
    category: SKILLS_CATEGORY.CLOUD,
    proficiency: 90,
    description: 'Media management.',
    sortOrder: 39,
  },

  // Tools
  {
    name: 'VS Code',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 98,
    description: 'Code editor.',
    sortOrder: 40,
  },
  {
    name: 'Postman',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 95,
    description: 'API testing.',
    sortOrder: 41,
  },
  {
    name: 'Swagger',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 91,
    description: 'API documentation.',
    sortOrder: 42,
  },
  {
    name: 'npm',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 95,
    description: 'Node package manager.',
    sortOrder: 43,
  },
  {
    name: 'Composer',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 92,
    description: 'PHP dependency manager.',
    sortOrder: 44,
  },
  {
    name: 'Chrome DevTools',
    category: SKILLS_CATEGORY.TOOLS,
    proficiency: 96,
    description: 'Browser developer tools.',
    sortOrder: 45,
  },
];
export const seedSkills = async (): Promise<void> => {
  try {
    console.info('Seeding skills...');

    for (const skill of skills) {
      const exists = await Skill.exists({
        name: skill.name,
      });

      if (exists) {
        continue;
      }

      const payload: Partial<ISkill> = {
        ...skill,

        slug: generateSlug(skill.name),

        isActive: true,
      };

      await Skill.create(payload);
    }

    console.info('Skills seeded successfully.');
  } catch (error) {
    console.error('Failed to seed skills.', error);

    throw error;
  }
};

export const runSkillsSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedSkills();

    console.info('Skills seeding completed.');
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes('skills.seeder')) {
  void runSkillsSeeder(true);
}

export default seedSkills;
