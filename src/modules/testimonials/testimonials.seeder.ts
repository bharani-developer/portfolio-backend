// src/modules/testimonials/testimonials.seeder.ts

import mongoose from "mongoose";

import { connectDatabase } from "../../config/database.js";

import {
  TESTIMONIAL_CLIENT_TYPE,
  TESTIMONIAL_DEFAULT,
} from "./testimonials.constant.js";

import { Testimonial } from "./testimonials.model.js";

export const seedTestimonials = async (): Promise<void> => {
  const existingCount = await Testimonial.countDocuments();

  if (existingCount > 0) {
    console.info("Testimonials already seeded.");

    return;
  }

  await Testimonial.insertMany([
    {
      clientName: "Pending Verification",

      clientPosition: "Former Manager",

      clientCompany: "Sirahu Technologies Pvt. Ltd.",

      projectName: "Enterprise Web Applications",

      review:
        "Placeholder testimonial. Replace this with an actual recommendation from your former manager or colleague.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.COMPANY,

      isFeatured: true,

      sortOrder: 1,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },

    {
      clientName: "Pending Verification",

      clientPosition: "Project Manager",

      clientCompany: "Argick Software Ltd.",

      projectName: "Learning Management System",

      review:
        "Placeholder testimonial. Replace this with a genuine recommendation received from your project manager or client.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.COMPANY,

      isFeatured: true,

      sortOrder: 2,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },

    {
      clientName: "Pending Verification",

      clientPosition: "Technical Lead",

      clientCompany: "Shalom InfoTech Ltd.",

      projectName: "Enterprise Web & Mobile Applications",

      review:
        "Placeholder testimonial. Replace this with a genuine testimonial from your technical lead, manager, or customer.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.COMPANY,

      isFeatured: true,

      sortOrder: 3,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },

    {
      clientName: "Pending Verification",

      clientPosition: "Freelance Client",

      clientCompany: "Freelance Project",

      projectName: "Custom Software Development",

      review:
        "Placeholder testimonial. Replace this with real feedback received from a freelance client after obtaining permission.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.FREELANCER,

      isFeatured: false,

      sortOrder: 4,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },

    {
      clientName: "Pending Verification",

      clientPosition: "LinkedIn Recommendation",

      clientCompany: "Professional Network",

      projectName: "Professional Recommendation",

      review:
        "Placeholder testimonial. Replace this with an actual LinkedIn recommendation after obtaining permission from the author.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.ORGANIZATION,

      isFeatured: false,

      sortOrder: 5,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },

    {
      clientName: "Pending Verification",

      clientPosition: "Client",

      clientCompany: "Email Appreciation",

      projectName: "Completed Project",

      review:
        "Placeholder testimonial. Replace this with a real appreciation email or customer feedback after obtaining permission.",

      rating: 5,

      clientType: TESTIMONIAL_CLIENT_TYPE.INDIVIDUAL,

      isFeatured: false,

      sortOrder: 6,

      isActive: TESTIMONIAL_DEFAULT.IS_ACTIVE,
    },
  ]);

  console.info("Testimonials seeded successfully.");
};

export const runTestimonialsSeeder = async (
  standalone = false,
): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedTestimonials();

    console.info("Testimonials seeding completed.");
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes("testimonials.seeder")) {
  void runTestimonialsSeeder(true);
}

export default seedTestimonials;