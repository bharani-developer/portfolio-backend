// src\shared\cloudinary\deleteFromCloudinary.ts
import cloudinary from "../../config/cloudinary.js";
export const deleteFromCloudinary = async (publicId) => {
    if (!publicId) {
        return;
    }
    try {
        await cloudinary.uploader.destroy(publicId, {
            resource_type: "image",
        });
    }
    catch (error) {
        console.error(`Failed to delete Cloudinary asset: ${publicId}`, error);
        throw error;
    }
};
//# sourceMappingURL=deleteFromCloudinary.js.map