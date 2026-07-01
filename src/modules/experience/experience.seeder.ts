// src/modules/experience/experience.seeder.ts

import mongoose from "mongoose";

import { connectDatabase } from "../../config/database.js";

import { generateSlug } from "../../shared/slug/index.js";

import { EMPLOYMENT_TYPE, WORK_MODE } from "./experience.constant.js";

import { Experience } from "./experience.model.js";

export const seedExperience = async (): Promise<void> => {
  const totalExperiences = await Experience.countDocuments();

  if (totalExperiences > 0) {
    console.info("Experience already seeded.");

    return;
  }

  await Experience.insertMany([
    {
      company: "Sirahu Technologies Private Limited",

      slug: generateSlug("Sirahu Technologies Private Limited"),

      position: "Junior Engineer",

      employmentType: EMPLOYMENT_TYPE.FULL_TIME,

      workMode: WORK_MODE.ONSITE,

      location: "Chennai, Tamil Nadu, India",

      startDate: new Date("2017-01-01"),

      endDate: new Date("2018-12-31"),

      isCurrent: false,

      summary:
        "Worked as a Junior Engineer developing web applications, Chrome extensions, APIs, and enterprise solutions using PHP, Laravel, Angular, JavaScript, HTML, CSS, and MySQL.",

      responsibilities: [
        "Developed backend applications using PHP and Laravel",
        "Built frontend applications using Angular",
        "Developed Chrome Extensions",
        "Integrated Facebook Workplace API",
        "Integrated Vonage (Nexmo) Text and Voice APIs",
        "Worked with Google Hangout Chat Bot",
        "Worked with SugarCRM integration",
        "Maintained enterprise web applications",
      ],

      technologies: [
        "PHP",
        "Laravel",
        "Angular",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "Chrome Extension",
        "Google Hangout API",
        "Facebook Workplace API",
        "Vonage (Nexmo)",
        "SugarCRM",
      ],

      sortOrder: 1,

      isActive: true,
    },

    {
      company: "Argick Software Ltd",

      slug: generateSlug("Argick Software Ltd"),

      position: "Junior Engineer",

      employmentType: EMPLOYMENT_TYPE.FULL_TIME,

      workMode: WORK_MODE.REMOTE,

      location: "Chennai, Tamil Nadu, India",

      startDate: new Date("2018-01-01"),

      endDate: new Date("2020-12-31"),

      isCurrent: false,

      summary:
        "Developed enterprise web applications and Learning Management Systems (LMS) using Laravel, PHP, MySQL, JavaScript, HTML, and CSS.",

      responsibilities: [
        "Developed Laravel web applications",
        "Built Learning Management System (LMS)",
        "Worked with Laravel Blade",
        "Created Controllers, Models and Migrations",
        "Maintained existing applications",
        "Fixed production issues",
        "Implemented client enhancements",
      ],

      technologies: [
        "PHP",
        "Laravel",
        "Laravel Blade",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
      ],

      sortOrder: 2,

      isActive: true,
    },

    {
      company: "Shalom InfoTech Ltd.",

      slug: generateSlug("Shalom InfoTech Ltd."),

      position: "Senior Engineer",

      employmentType: EMPLOYMENT_TYPE.FULL_TIME,

      workMode: WORK_MODE.HYBRID,

      location: "Chennai, Tamil Nadu, India",

      startDate: new Date("2021-01-01"),

      endDate: new Date("2024-12-31"),

      isCurrent: false,

      summary:
        "Worked as a Senior Engineer building enterprise web and mobile applications using Laravel, Flutter, JavaScript, MySQL, payment gateway integrations, Firebase, Google Maps, and third-party APIs.",

      responsibilities: [
        "Developed enterprise Laravel applications",
        "Built Android and iOS applications using Flutter",
        "Integrated CCAvenue payment gateway",
        "Integrated Razorpay payment gateway",
        "Integrated Google Maps API",
        "Implemented Firebase Cloud Messaging",
        "Integrated ZOHO Inventory APIs",
        "Maintained and enhanced enterprise applications",
      ],

      technologies: [
        "Flutter",
        "Laravel",
        "PHP",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "HTML",
        "CSS",
        "MySQL",
        "Firebase",
        "Google Maps",
        "Razorpay",
        "CCAvenue",
        "ZOHO Inventory",
      ],

      sortOrder: 3,

      isActive: true,
    },
  ]);

  console.info("Experience seeded successfully.");
};

export const runExperienceSeeder = async (
  standalone = false,
): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedExperience();

    console.info("Experience seeding completed.");
  } catch (error) {
    console.error("Failed to seed experience.", error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes("experience.seeder")) {
  void runExperienceSeeder(true);
}

export default seedExperience;
