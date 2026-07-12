// src/modules/upload/upload.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { deleteFromCloudinary, uploadToCloudinary } from '../../shared/cloudinary/index.js';

import { AppError } from '../../shared/utils/index.js';

import { buildUploadFolder, UPLOAD_MESSAGE } from './upload.constant.js';

import type { IUploadResponse, TUploadFolder } from './upload.types.js';

/* -------------------------------------------------------------------------- */
/*                                   Upload                                   */
/* -------------------------------------------------------------------------- */

/**
 * Upload an image to Cloudinary.
 */
const uploadImage = async (
  file: Express.Multer.File | undefined,
  folder: TUploadFolder,
): Promise<IUploadResponse> => {
  if (!file) {
    throw new AppError(httpStatus.BAD_REQUEST, UPLOAD_MESSAGE.FILE_REQUIRED);
  }

  const uploadedFile = await uploadToCloudinary(file.path, buildUploadFolder(folder));

  return {
    url: uploadedFile.url,

    publicId: uploadedFile.publicId,
  };
};

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

/**
 * Delete an image from Cloudinary.
 */
const deleteImage = async (publicId: string): Promise<void> => {
  const normalizedPublicId = publicId.trim();

  if (!normalizedPublicId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Public ID is required');
  }

  await deleteFromCloudinary(normalizedPublicId);
};

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UploadService = Object.freeze({
  uploadImage,

  deleteImage,
});
