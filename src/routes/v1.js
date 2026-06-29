// src/routes/v1.ts
import { Router } from "express";
import { ROUTES } from "./route.constant.js";
// Auth
import { AuthRoutes } from "../modules/auth/auth.route.js";
// Core Portfolio
import { HeroRoutes } from "../modules/hero/hero.route.js";
import { AboutRoutes } from "../modules/about/about.route.js";
import { ServicesRoutes } from "../modules/services/services.route.js";
import { SkillsRoutes } from "../modules/skills/skills.route.js";
import { ExperienceRoutes } from "../modules/experience/experience.route.js";
import { EducationRoutes } from "../modules/education/education.route.js";
import { CertificationsRoutes } from "../modules/certifications/certifications.route.js";
import { ProjectsRoutes } from "../modules/projects/projects.route.js";
import { TestimonialsRoutes } from "../modules/testimonials/testimonials.route.js";
import { BlogsRoutes } from "../modules/blogs/blogs.route.js";
import { ContactRoutes } from "../modules/contact/contact.route.js";
import { SettingsRoutes } from "../modules/settings/settings.route.js";
import { UploadRoutes } from "../modules/upload/upload.route.js";
import { DashboardRoutes } from "../modules/dashboard/dashboard.route.js";
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
//# sourceMappingURL=v1.js.map