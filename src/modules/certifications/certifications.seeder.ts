// src/modules/certifications/certifications.seeder.ts

import mongoose from "mongoose";

import { connectDatabase } from "../../config/database.js";

import { generateSlug } from "../../shared/slug/index.js";

import { CERTIFICATION_DEFAULT } from "./certifications.constant.js";

import { Certification } from "./certifications.model.js";

export const seedCertifications = async (): Promise<void> => {
  const existingCount = await Certification.countDocuments();

  if (existingCount > 0) {
    console.info("Certifications already seeded.");

    return;
  }

  await Certification.insertMany([
    {
      title: "Diploma in AutoCAD, Java and C++",

      slug: generateSlug("Diploma in AutoCAD Java and C++"),

      issuer: "Professional Training Institute",

      credentialId: null,

      credentialUrl: "",

      issueDate: new Date("2013-05-15"),

      expiryDate: null,

      neverExpires: true,

      description:
        "Completed professional training in AutoCAD, Core Java, and C++ programming fundamentals.",

      skills: [
        "AutoCAD",
        "Java",
        "C++",
        "Programming",
      ],

      sortOrder: 1,

      isActive: CERTIFICATION_DEFAULT.IS_ACTIVE,
    },

    {
      title: "In-Plant & Corporate Training",

      slug: generateSlug(
        "In Plant Training Code Bind Technologies",
      ),

      issuer: "Code Bind Technologies, Chennai",

      credentialId: null,

      credentialUrl: "",

      issueDate: new Date("2015-02-20"),

      expiryDate: null,

      neverExpires: true,

      description:
        "Successfully completed in-plant and corporate training focused on software development practices and real-world application development.",

      skills: [
        "Software Development",
        "PHP",
        "Web Development",
      ],

      sortOrder: 2,

      isActive: CERTIFICATION_DEFAULT.IS_ACTIVE,
    },

    {
      title: "Networking - Switching & Routing",

      slug: generateSlug(
        "Basics Concept of Networking Switching Routing",
      ),

      issuer: "CMS IT Training Institute",

      credentialId: null,

      credentialUrl: "",

      issueDate: new Date("2014-08-10"),

      expiryDate: null,

      neverExpires: true,

      description:
        "Completed training covering networking fundamentals, switching, routing, and network infrastructure concepts.",

      skills: [
        "Networking",
        "Switching",
        "Routing",
        "Network Infrastructure",
      ],

      sortOrder: 3,

      isActive: CERTIFICATION_DEFAULT.IS_ACTIVE,
    },

    {
      title: "Android Application Development Training",

      slug: generateSlug(
        "Android Apps Development Training Gateway Finishing School",
      ),

      issuer: "Gateway Finishing School",

      credentialId: null,

      credentialUrl: "",

      issueDate: new Date("2016-03-15"),

      expiryDate: null,

      neverExpires: true,

      description:
        "Completed Android application development training covering mobile application fundamentals and Android development concepts.",

      skills: [
        "Android",
        "Mobile Development",
        "Java",
      ],

      sortOrder: 4,

      isActive: CERTIFICATION_DEFAULT.IS_ACTIVE,
    },
  ]);

  console.info("Certifications seeded successfully.");
};

export const runCertificationsSeeder = async (
  standalone = false,
): Promise<void> => {
  try {
    if (standalone) {
      await connectDatabase();
    }

    await seedCertifications();

    console.info("Certifications seeding completed.");
  } catch (error) {
    console.error("Failed to seed certifications.", error);

    throw error;
  } finally {
    if (standalone) {
      await mongoose.connection.close();
    }
  }
};

if (process.argv[1]?.includes("certifications.seeder")) {
  void runCertificationsSeeder(true);
}

export default seedCertifications;