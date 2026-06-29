// src\modules\upload\upload.service.ts
import httpStatus from "http-status";
import { deleteFromCloudinary, uploadToCloudinary, } from "../../shared/cloudinary/index.js";
import AppError from "../../utils/AppError.js";
import { UPLOAD_MESSAGE } from "./upload.constant.js";
const uploadImage = async (file) => {
    if (!file) {
        throw new AppError(httpStatus.BAD_REQUEST, UPLOAD_MESSAGE.FILE_REQUIRED);
    }
    const uploadedFile = await uploadToCloudinary(file.path);
    return {
        url: uploadedFile.url,
        publicId: uploadedFile.publicId,
    };
};
const deleteImage = async (publicId) => {
    if (!publicId?.trim()) {
        throw new AppError(httpStatus.BAD_REQUEST, "Public ID is required");
    }
    await deleteFromCloudinary(publicId);
};
export const UploadService = {
    uploadImage,
    deleteImage,
};
//# sourceMappingURL=upload.service.js.map