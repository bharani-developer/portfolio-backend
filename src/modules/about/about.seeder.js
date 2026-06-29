// src/modules/about/about.seeder.ts
import mongoose from "mongoose";
import { connectDatabase } from "../../config/database.js";
import { About } from "./about.model.js";
export const seedAbout = async () => {
    const existingAbout = await About.findOne();
    if (existingAbout) {
        console.info("About section already exists");
        return;
    }
    await About.create({
        fullName: "Bharani Karthikeyan",
        designation: "Senior Software Engineer | Full Stack Developer",
        bio: "Senior Full Stack Developer with 8+ years of experience designing and developing enterprise web and mobile applications. Skilled in React, Next.js, Node.js, Express.js, Laravel, Flutter, TypeScript, MongoDB, and MySQL. Experienced in building CMS, LMS, ERP, banking systems, REST APIs, payment gateway integrations, cloud-based applications, and scalable backend architectures. Passionate about creating secure, high-performance, and user-centric software solutions using modern technologies and best development practices.",
        email: "bharani.developer@gmail.com",
        phone: "+91 9566935886",
        address: "Pudukkottai, Tamil Nadu, India",
        resumeUrl: "/resume/bharani-karthikeyan-resume.pdf",
        yearsOfExperience: 8,
        stats: [
            {
                label: "Years Experience",
                value: "8+",
            },
            {
                label: "Projects Delivered",
                value: "16+",
            },
            {
                label: "Technologies",
                value: "30+",
            },
            {
                label: "Companies Worked",
                value: "3",
            },
        ],
        isActive: true,
    });
    console.info("About section seeded successfully");
};
export const runAboutSeeder = async (standalone = false) => {
    try {
        if (standalone) {
            await connectDatabase();
        }
        await seedAbout();
        console.info("About seeding completed");
    }
    finally {
        if (standalone) {
            await mongoose.connection.close();
        }
    }
};
if (process.argv[1]?.includes("about.seeder")) {
    void runAboutSeeder(true);
}
//# sourceMappingURL=about.seeder.js.map