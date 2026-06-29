// src\modules\upload\upload.service.ts

import httpStatus from "http-status";

import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../../shared/cloudinary/index.js";

import AppError from "../../utils/AppError.js";

import { UPLOAD_MESSAGE } from "./upload.constant.js";

import type { IUploadResponse } from "./upload.interface.js";

const uploadImage = async (
  file: Express.Multer.File | undefined,
): Promise<IUploadResponse> => {
  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, UPLOAD_MESSAGE.FILE_REQUIRED);
  }

  const uploadedFile = await uploadToCloudinary(file.path);

  return {
    url: uploadedFile.url,
    publicId: uploadedFile.publicId,
  };
};

const deleteImage = async (publicId: string): Promise<void> => {
  if (!publicId?.trim()) {
    throw new AppError(httpStatus.BAD_REQUEST, "Public ID is required");
  }

  await deleteFromCloudinary(publicId);
};

export const UploadService = {
  uploadImage,
  deleteImage,
};
