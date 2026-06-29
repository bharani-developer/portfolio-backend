// src/modules/services/services.seeder.ts
import mongoose from "mongoose";
import { connectDatabase } from "../../config/database.js";
import { generateSlug } from "../../shared/slug/index.js";
import { Service } from "./services.model.js";
export const seedServices = async () => {
    const totalServices = await Service.countDocuments();
    if (totalServices > 0) {
        console.info("Services already seeded.");
        return;
    }
    await Service.insertMany([
        {
            title: "Web Development",
            slug: generateSlug("Web Development"),
            shortDescription: "Modern and scalable web applications.",
            description: "Building responsive, scalable, and high-performance web applications using React, TypeScript, Node.js, Express.js, Laravel, MongoDB, and MySQL.",
            icon: "code",
            sortOrder: 1,
            isActive: true,
        },
        {
            title: "Mobile App Development",
            slug: generateSlug("Mobile App Development"),
            shortDescription: "Cross-platform mobile applications.",
            description: "Developing Android and iOS applications using Flutter with clean architecture, Firebase integration, Google Maps, payment gateways, and modern development practices.",
            icon: "smartphone",
            sortOrder: 2,
            isActive: true,
        },
        {
            title: "Backend Development",
            slug: generateSlug("Backend Development"),
            shortDescription: "Robust APIs and server-side solutions.",
            description: "Designing secure, scalable, and maintainable REST APIs using Node.js, Express.js, Laravel, TypeScript, MongoDB, MySQL, JWT Authentication, and third-party integrations.",
            icon: "server",
            sortOrder: 3,
            isActive: true,
        },
        {
            title: "Database Design",
            slug: generateSlug("Database Design"),
            shortDescription: "Efficient database architecture.",
            description: "Designing optimized MySQL and MongoDB database structures with proper indexing, validation, migrations, relationships, and performance tuning.",
            icon: "database",
            sortOrder: 4,
            isActive: true,
        },
    ]);
    console.info("Services seeded successfully.");
};
export const runServicesSeeder = async (standalone = false) => {
    try {
        if (standalone) {
            await connectDatabase();
        }
        await seedServices();
        console.info("Services seeding completed.");
    }
    catch (error) {
        console.error("Failed to seed services.", error);
        throw error;
    }
    finally {
        if (standalone) {
            await mongoose.connection.close();
        }
    }
};
if (process.argv[1]?.includes("services.seeder")) {
    void runServicesSeeder(true);
}
export default seedServices;
//# sourceMappingURL=services.seeder.js.map