// src/routes/v1.ts

import { Router } from 'express';

import { ROUTES } from './route.constants.js';

// Auth
import { AuthRoutes } from '../modules/auth/auth.routes.js';

// Core Portfolio
import { HeroRoutes } from '../modules/hero/hero.routes.js';
import { AboutRoutes } from '../modules/about/about.routes.js';
import { ServicesRoutes } from '../modules/services/services.routes.js';
import { SkillsRoutes } from '../modules/skills/skills.routes.js';
import { ExperienceRoutes } from '../modules/experience/experience.routes.js';
import { EducationRoutes } from '../modules/education/education.routes.js';
import { CertificationsRoutes } from '../modules/certifications/certifications.routes.js';
import { ProjectsRoutes } from '../modules/projects/projects.routes.js';
import { TestimonialsRoutes } from '../modules/testimonials/testimonials.routes.js';
import { BlogsRoutes } from '../modules/blogs/blogs.routes.js';
import { ContactRoutes } from '../modules/contact/contact.routes.js';
import { SettingsRoutes } from '../modules/settings/settings.routes.js';
import { UploadRoutes } from '../modules/upload/upload.routes.js';
import { DashboardRoutes } from '../modules/dashboard/dashboard.routes.js';

const v1Router = Router();

/**
 * Authentication
 */
v1Router.use(ROUTES.AUTH, AuthRoutes);

/**
 * Portfolio Content
 */
v1Router.use(ROUTES.HERO, HeroRoutes);

v1Router.use(ROUTES.ABOUT, AboutRoutes);

v1Router.use(ROUTES.SERVICES, ServicesRoutes);

v1Router.use(ROUTES.SKILLS, SkillsRoutes);

v1Router.use(ROUTES.EXPERIENCE, ExperienceRoutes);

v1Router.use(ROUTES.EDUCATION, EducationRoutes);

v1Router.use(ROUTES.CERTIFICATIONS, CertificationsRoutes);

v1Router.use(ROUTES.PROJECTS, ProjectsRoutes);

v1Router.use(ROUTES.TESTIMONIALS, TestimonialsRoutes);

v1Router.use(ROUTES.BLOGS, BlogsRoutes);

v1Router.use(ROUTES.CONTACT, ContactRoutes);

v1Router.use(ROUTES.SETTINGS, SettingsRoutes);

v1Router.use(ROUTES.UPLOAD, UploadRoutes);

v1Router.use(ROUTES.DASHBOARD, DashboardRoutes);

export default v1Router;
