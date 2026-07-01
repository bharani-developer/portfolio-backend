import { ROLE, type TRole } from "../../constants/role.constant.js";

import { Blog } from "../blogs/blogs.model.js";
import { Certification } from "../certifications/certifications.model.js";
import { Contact } from "../contact/contact.model.js";
import { Education } from "../education/education.model.js";
import { Experience } from "../experience/experience.model.js";
import { Hero } from "../hero/hero.model.js";
import { Project } from "../projects/projects.model.js";
import { Service } from "../services/services.model.js";
import { Settings } from "../settings/settings.model.js";
import { Skill } from "../skills/skills.model.js";
import { Testimonial } from "../testimonials/testimonials.model.js";

const getDashboardStats = async (role: TRole) => {
  const isAdmin = role === ROLE.ADMIN;

  const [
    totalProjects,
    activeProjects,
    featuredProjects,

    totalBlogs,
    publishedBlogs,
    featuredBlogs,

    totalServices,
    activeServices,

    totalSkills,
    activeSkills,

    totalExperiences,
    currentExperiences,

    totalEducations,
    currentEducations,

    totalCertifications,
    activeCertifications,

    totalTestimonials,
    featuredTestimonials,

    totalContacts,
    unreadContacts,
    repliedContacts,

    heroExists,
    settingsExists,

    recentProjects,
    recentBlogs,
    recentContacts,
  ] = await Promise.all([
    Project.countDocuments(),
    Project.countDocuments({
      isActive: true,
    }),
    Project.countDocuments({
      featured: true,
    }),

    Blog.countDocuments(),
    Blog.countDocuments({
      isPublished: true,
    }),
    Blog.countDocuments({
      isFeatured: true,
    }),

    Service.countDocuments(),
    Service.countDocuments({
      isActive: true,
    }),

    Skill.countDocuments(),
    Skill.countDocuments({
      isActive: true,
    }),

    Experience.countDocuments(),
    Experience.countDocuments({
      isCurrent: true,
    }),

    Education.countDocuments(),
    Education.countDocuments({
      isCurrent: true,
    }),

    Certification.countDocuments(),
    Certification.countDocuments({
      isActive: true,
    }),

    Testimonial.countDocuments(),
    Testimonial.countDocuments({
      isFeatured: true,
    }),

    Contact.countDocuments(),
    Contact.countDocuments({
      isRead: false,
    }),
    Contact.countDocuments({
      isReplied: true,
    }),

    Hero.exists({}),
    Settings.exists({}),

    Project.find()
      .select("title slug category featured createdAt")
      .sort({
        createdAt: -1,
      })
      .limit(5)
      .lean(),

    Blog.find()
      .select("title slug category isPublished isFeatured createdAt")
      .sort({
        createdAt: -1,
      })
      .limit(5)
      .lean(),

    Contact.find()
      .select("name email subject status priority isRead createdAt")
      .sort({
        createdAt: -1,
      })
      .limit(5)
      .lean(),
  ]);

  const dashboard = {
    overview: {
      projects: totalProjects,
      blogs: totalBlogs,
      services: totalServices,
      skills: totalSkills,
      experiences: totalExperiences,
      educations: totalEducations,
      certifications: totalCertifications,
      testimonials: totalTestimonials,
    },

    projects: {
      total: totalProjects,
      active: activeProjects,
      featured: featuredProjects,
    },

    blogs: {
      total: totalBlogs,
      published: publishedBlogs,
      featured: featuredBlogs,
    },

    services: {
      total: totalServices,
      active: activeServices,
    },

    skills: {
      total: totalSkills,
      active: activeSkills,
    },

    experiences: {
      total: totalExperiences,
      current: currentExperiences,
    },

    educations: {
      total: totalEducations,
      current: currentEducations,
    },

    certifications: {
      total: totalCertifications,
      active: activeCertifications,
    },

    testimonials: {
      total: totalTestimonials,
      featured: featuredTestimonials,
    },

    configuration: {
      heroConfigured: Boolean(heroExists),
      settingsConfigured: Boolean(settingsExists),
    },

    recent: {
      projects: recentProjects,
      blogs: recentBlogs,
    },
  };

  if (!isAdmin) {
    return dashboard;
  }

  return {
    ...dashboard,

    overview: {
      ...dashboard.overview,
      contacts: totalContacts,
    },

    contacts: {
      total: totalContacts,
      unread: unreadContacts,
      replied: repliedContacts,
    },

    recent: {
      ...dashboard.recent,
      contacts: recentContacts,
    },
  };
};

export const DashboardService = {
  getDashboardStats,
};
