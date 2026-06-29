// src\shared\cloudinary\uploadToCloudinary.ts
import fs from "fs/promises";
import cloudinary from "../../config/cloudinary.js";
import { env } from "../../config/env.js";
export const uploadToCloudinary = async (filePath, folder) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            folder: folder || env.CLOUDINARY_FOLDER,
            resource_type: "auto",
        });
        await fs.unlink(filePath).catch(() => null);
        return {
            url: result.secure_url,
            publicId: result.public_id,
        };
    }
    catch (error) {
        await fs.unlink(filePath).catch(() => null);
        throw error;
    }
};
//# sourceMappingURL=uploadToCloudinary.js.map