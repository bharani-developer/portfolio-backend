// src\docs\swagger.config.ts

import { env } from '../configs/env.js';

import { authPaths, authSchemas } from '../modules/auth/auth.swagger.js';

import { heroPaths, heroSchemas } from '../modules/hero/hero.swagger.js';

import { aboutPaths, aboutSchemas } from '../modules/about/about.swagger.js';

import { servicesPaths, servicesSchemas } from '../modules/services/services.swagger.js';

import { skillsPaths, skillsSchemas } from '../modules/skills/skills.swagger.js';

import { experiencePaths, experienceSchemas } from '../modules/experience/experience.swagger.js';

import { educationPaths, educationSchemas } from '../modules/education/education.swagger.js';

import {
  certificationsPaths,
  certificationsSchemas,
} from '../modules/certifications/certifications.swagger.js';

import { projectPaths, projectSchemas } from '../modules/projects/projects.swagger.js';

import { blogsPaths, blogsSchemas } from '../modules/blogs/blogs.swagger.js';

import {
  testimonialsPaths,
  testimonialsSchemas,
} from '../modules/testimonials/testimonials.swagger.js';

import { contactPaths, contactSchemas } from '../modules/contact/contact.swagger.js';

import { settingsPaths, settingsSchemas } from '../modules/settings/settings.swagger.js';

import { uploadPaths, uploadSchemas } from '../modules/upload/upload.swagger.js';

import { dashboardPaths, dashboardSchemas } from '../modules/dashboard/dashboard.swagger.js';

export const swaggerDocument = {
  openapi: '3.1.0',

  info: {
    title: 'Portfolio Backend API',
    version: '1.0.0',
    description: 'REST API documentation for Portfolio Backend',
  },

  servers: [
    {
      url: `${env.DEVELOPMENT_URL}/api/v1`,
      description: 'Development Server',
    },
    {
      url: `${env.PRODUCTION_URL}/api/v1`,
      description: 'Production Server',
    },
  ],

  tags: [
    {
      name: 'Auth',
      description: 'Authentication APIs',
    },
    {
      name: 'Hero',
      description: 'Hero section APIs',
    },
    {
      name: 'About',
      description: 'About section APIs',
    },
    {
      name: 'Services',
      description: 'Services APIs',
    },
    {
      name: 'Skills',
      description: 'Skills APIs',
    },
    {
      name: 'Experience',
      description: 'Experience APIs',
    },
    {
      name: 'Education',
      description: 'Education APIs',
    },
    {
      name: 'Certifications',
      description: 'Certification APIs',
    },
    {
      name: 'Projects',
      description: 'Project APIs',
    },
    {
      name: 'Blogs',
      description: 'Blog APIs',
    },
    {
      name: 'Testimonials',
      description: 'Testimonial APIs',
    },
    {
      name: 'Contact',
      description: 'Contact APIs',
    },
    {
      name: 'Settings',
      description: 'Portfolio Settings APIs',
    },
    {
      name: 'Upload',
      description: 'Media Upload APIs',
    },
    {
      name: 'Dashboard',
      description: 'Admin Dashboard APIs',
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },

    schemas: {
      ...authSchemas,
      ...heroSchemas,
      ...aboutSchemas,
      ...servicesSchemas,
      ...skillsSchemas,
      ...experienceSchemas,
      ...educationSchemas,
      ...certificationsSchemas,
      ...projectSchemas,
      ...blogsSchemas,
      ...testimonialsSchemas,
      ...contactSchemas,
      ...settingsSchemas,
      ...uploadSchemas,
      ...dashboardSchemas,
    },
  },

  paths: {
    ...authPaths,
    ...heroPaths,
    ...aboutPaths,
    ...servicesPaths,
    ...skillsPaths,
    ...experiencePaths,
    ...educationPaths,
    ...certificationsPaths,
    ...projectPaths,
    ...blogsPaths,
    ...testimonialsPaths,
    ...contactPaths,
    ...settingsPaths,
    ...uploadPaths,
    ...dashboardPaths,
  },
} as const;
