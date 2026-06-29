// src/modules/skills/skills.seeder.ts
import { generateSlug } from "../../shared/slug/index.js";
import { SKILLS_CATEGORY } from "./skills.constant.js";
import { Skill } from "./skills.model.js";
import { connectDatabase } from "../../config/index.js";
import mongoose from "mongoose";
const skills = [
    {
        name: "HTML5",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 98,
        description: "Semantic HTML5, accessibility, SEO-friendly markup.",
        sortOrder: 1,
    },
    {
        name: "CSS3",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 96,
        description: "Modern CSS, Flexbox, Grid and responsive layouts.",
        sortOrder: 2,
    },
    {
        name: "JavaScript",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 95,
        description: "Modern ES6+ JavaScript development.",
        sortOrder: 3,
    },
    {
        name: "TypeScript",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 93,
        description: "Type-safe JavaScript applications.",
        sortOrder: 4,
    },
    {
        name: "React",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 94,
        description: "Modern React application development.",
        sortOrder: 5,
    },
    {
        name: "Next.js",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 92,
        description: "Production-grade React framework.",
        sortOrder: 6,
    },
    {
        name: "Tailwind CSS",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 95,
        description: "Utility-first CSS framework.",
        sortOrder: 7,
    },
    {
        name: "Bootstrap",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 92,
        description: "Responsive UI framework.",
        sortOrder: 8,
    },
    {
        name: "jQuery",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 90,
        description: "DOM manipulation library.",
        sortOrder: 9,
    },
    {
        name: "Node.js",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 92,
        description: "Backend runtime.",
        sortOrder: 10,
    },
    {
        name: "Express.js",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 93,
        description: "REST API development.",
        sortOrder: 11,
    },
    {
        name: "PHP",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 92,
        description: "Server-side scripting.",
        sortOrder: 12,
    },
    {
        name: "Laravel",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 93,
        description: "Modern PHP framework.",
        sortOrder: 13,
    },
    {
        name: "REST API",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 94,
        description: "RESTful API architecture.",
        sortOrder: 14,
    },
    {
        name: "JWT Authentication",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 91,
        description: "Secure authentication.",
        sortOrder: 15,
    },
    {
        name: "MongoDB",
        category: SKILLS_CATEGORY.DATABASE,
        proficiency: 93,
        description: "NoSQL database.",
        sortOrder: 16,
    },
    {
        name: "MySQL",
        category: SKILLS_CATEGORY.DATABASE,
        proficiency: 94,
        description: "Relational database.",
        sortOrder: 17,
    },
    {
        name: "SQLite",
        category: SKILLS_CATEGORY.DATABASE,
        proficiency: 90,
        description: "Embedded database.",
        sortOrder: 18,
    },
    {
        name: "Flutter",
        category: SKILLS_CATEGORY.MOBILE,
        proficiency: 90,
        description: "Cross-platform mobile apps.",
        sortOrder: 19,
    },
    {
        name: "Dart",
        category: SKILLS_CATEGORY.MOBILE,
        proficiency: 88,
        description: "Flutter programming language.",
        sortOrder: 20,
    },
    {
        name: "Git",
        category: SKILLS_CATEGORY.DEVOPS,
        proficiency: 95,
        description: "Version control.",
        sortOrder: 21,
    },
    {
        name: "GitHub",
        category: SKILLS_CATEGORY.DEVOPS,
        proficiency: 94,
        description: "Repository hosting.",
        sortOrder: 22,
    },
    {
        name: "Docker",
        category: SKILLS_CATEGORY.DEVOPS,
        proficiency: 80,
        description: "Containerization.",
        sortOrder: 23,
    },
    {
        name: "Vercel",
        category: SKILLS_CATEGORY.CLOUD,
        proficiency: 90,
        description: "Frontend deployment.",
        sortOrder: 24,
    },
    {
        name: "Render",
        category: SKILLS_CATEGORY.CLOUD,
        proficiency: 88,
        description: "Backend deployment.",
        sortOrder: 25,
    },
    {
        name: "Cloudinary",
        category: SKILLS_CATEGORY.CLOUD,
        proficiency: 90,
        description: "Media management.",
        sortOrder: 26,
    },
    {
        name: "VS Code",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 98,
        description: "Code editor.",
        sortOrder: 27,
    },
    {
        name: "Postman",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 95,
        description: "API testing.",
        sortOrder: 28,
    },
    {
        name: "Swagger",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 91,
        description: "API documentation.",
        sortOrder: 29,
    },
    {
        name: "npm",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 95,
        description: "Package manager.",
        sortOrder: 30,
    },
    {
        name: "Composer",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 92,
        description: "PHP dependency manager.",
        sortOrder: 31,
    },
    {
        name: "Chrome DevTools",
        category: SKILLS_CATEGORY.TOOLS,
        proficiency: 96,
        description: "Browser developer tools.",
        sortOrder: 32,
    },
    {
        name: "Angular",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 82,
        description: "Angular application development.",
        sortOrder: 33,
    },
    {
        name: "MEAN Stack",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 84,
        description: "MongoDB, Express, Angular and Node.js development.",
        sortOrder: 34,
    },
    {
        name: "Google Maps API",
        category: SKILLS_CATEGORY.CLOUD,
        proficiency: 92,
        description: "Location services and map integration.",
        sortOrder: 35,
    },
    {
        name: "Firebase Cloud Messaging",
        category: SKILLS_CATEGORY.CLOUD,
        proficiency: 90,
        description: "Push notification integration.",
        sortOrder: 36,
    },
    {
        name: "Razorpay",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 92,
        description: "Payment gateway integration.",
        sortOrder: 37,
    },
    {
        name: "CCAvenue",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 90,
        description: "Online payment gateway integration.",
        sortOrder: 38,
    },
    {
        name: "Zoho Inventory",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 90,
        description: "Inventory API integration.",
        sortOrder: 39,
    },
    {
        name: "Zoho Books",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 88,
        description: "Accounting API integration.",
        sortOrder: 40,
    },
    {
        name: "Microsoft Teams API",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 88,
        description: "Teams integration and automation.",
        sortOrder: 41,
    },
    {
        name: "Vonage (Nexmo)",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 90,
        description: "Voice and SMS API integration.",
        sortOrder: 42,
    },
    {
        name: "SugarCRM",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 86,
        description: "CRM integration.",
        sortOrder: 43,
    },
    {
        name: "Java",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 78,
        description: "Core Java programming.",
        sortOrder: 44,
    },
    {
        name: "C++",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 75,
        description: "Object-oriented programming.",
        sortOrder: 45,
    },
    {
        name: "TypeScript",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 92,
        description: "Developing scalable, type-safe web applications using modern TypeScript.",
        sortOrder: 4,
    },
    {
        name: "React",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 94,
        description: "Building reusable, high-performance user interfaces with React.",
        sortOrder: 5,
    },
    {
        name: "Next.js",
        category: SKILLS_CATEGORY.FRONTEND,
        proficiency: 92,
        description: "Developing SEO-friendly, server-rendered and static web applications using Next.js.",
        sortOrder: 6,
    },
    {
        name: "Node.js",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 92,
        description: "Building scalable backend services and REST APIs using Node.js.",
        sortOrder: 11,
    },
    {
        name: "Express.js",
        category: SKILLS_CATEGORY.BACKEND,
        proficiency: 92,
        description: "Developing RESTful APIs and backend applications using Express.js.",
        sortOrder: 12,
    },
    {
        name: "MongoDB",
        category: SKILLS_CATEGORY.DATABASE,
        proficiency: 92,
        description: "Designing scalable NoSQL databases with MongoDB and Mongoose.",
        sortOrder: 17,
    },
];
export const seedSkills = async () => {
    try {
        console.info("Seeding skills...");
        for (const skill of skills) {
            const exists = await Skill.exists({
                name: skill.name,
            });
            if (exists) {
                continue;
            }
            const payload = {
                ...skill,
                slug: generateSlug(skill.name),
                isActive: true,
            };
            await Skill.create(payload);
        }
        console.info("Skills seeded successfully.");
    }
    catch (error) {
        console.error("Failed to seed skills.", error);
        throw error;
    }
};
export const runSkillsSeeder = async (standalone = false) => {
    try {
        if (standalone) {
            await connectDatabase();
        }
        await seedSkills();
        console.info("Skills seeding completed.");
    }
    finally {
        if (standalone) {
            await mongoose.connection.close();
        }
    }
};
if (process.argv[1]?.includes("skills.seeder")) {
    void runSkillsSeeder(true);
}
export default seedSkills;
//# sourceMappingURL=skills.seeder.js.map