// src\config\database.ts
import mongoose from "mongoose";
import { env } from "./env.js";
export const connectDatabase = async () => {
    try {
        await mongoose.connect(env.DATABASE_URL);
        console.log("MongoDB connected successfully");
        mongoose.connection.on("error", (error) => {
            console.error("MongoDB connection error:", error);
        });
        mongoose.connection.on("disconnected", () => {
            console.warn("MongoDB disconnected");
        });
        mongoose.connection.on("reconnected", () => {
            console.log("MongoDB reconnected");
        });
    }
    catch (error) {
        console.error("Failed to connect MongoDB:", error);
        process.exit(1);
    }
};
export const disconnectDatabase = async () => {
    try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    }
    catch (error) {
        console.error("Failed to close MongoDB connection:", error);
    }
};
//# sourceMappingURL=database.js.map