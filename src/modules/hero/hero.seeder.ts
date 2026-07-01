// src/modules/hero/hero.seeder.ts

import mongoose from "mongoose";

import { connectDatabase } from "../../config/database.js";
import { Hero } from "./hero.model.js";

export const seedHero = async (): Promise<void> => {
  const existingHero = await Hero.findOne();

  if (existingHero) {
    console.info("Hero section already exists");
    return;
  }

  await Hero.create({
    title: "Hi, I'm Bharani Karthikeyan",

    subtitle: "Senior Software Engineer | Full Stack Developer",

    description:
      "I build scalable web and mobile applications using React, Next.js, Node.js, Express.js, Laravel, Flutter, TypeScript, MongoDB, and MySQL. With 8+ years of experience delivering enterprise applications, I specialize in creating secure, high-performance, and user-focused digital solutions.",

    ctaButtonText: "View My Work",

    ctaButtonLink: "/projects",

    technologies: [
      // Frontend
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
      "Angular",

      // Backend
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "REST API",
      "JWT Authentication",

      // Database
      "MongoDB",
      "Mongoose",
      "MySQL",

      // Mobile
      "Flutter",
      "Dart",

      // Integrations & Cloud
      "Firebase",
      "Google Maps API",
      "Razorpay",
      "CCAvenue",
      "Zoho Inventory",
      "Cloudinary",

      // Dev Tools
      "Git",
      "GitHub",
      "Docker",
      "Swagger",
      "Postman",
      "VS Code",
    ],

    isActive: true,
  });

  console.info("Hero section seeded successfully");
};

export const runHeroSeeder = async (standalone = false): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedHero();

    console.info("Hero seeding completed");
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes("hero.seeder")) {
  void runHeroSeeder(true);
}
