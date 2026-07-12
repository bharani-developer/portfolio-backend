// src/modules/upload/upload.controller.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Shared
import { AppError, catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { UPLOAD_FOLDERS, UPLOAD_MESSAGE } from './upload.constant.js';

import { UploadService } from './upload.service.js';

// Types
import type { TUploadFolder } from './upload.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const getRequiredString = (value: unknown, fieldName: string): string => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, `${fieldName} is required`);
  }

  return value.trim();
};

const getUploadFolder = (value: unknown): TUploadFolder => {
  const folder = getRequiredString(value, 'Folder');

  if (!UPLOAD_FOLDERS.includes(folder as TUploadFolder)) {
    throw new AppError(httpStatus.BAD_REQUEST, UPLOAD_MESSAGE.INVALID_FOLDER);
  }

  return folder as TUploadFolder;
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

type TUploadParams = {
  folder: TUploadFolder;
};

type TDeleteImageBody = {
  publicId: string;
};

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

/**
 * Upload image.
 */
const uploadImage = catchAsync(async (req: Request<TUploadParams>, res: Response) => {
  const folder = getUploadFolder(req.params.folder);

  const result = await UploadService.uploadImage(req.file, folder);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: UPLOAD_MESSAGE.FILE_UPLOADED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

/**
 * Delete image from Cloudinary.
 */
const deleteImage = catchAsync(
  async (req: Request<object, object, TDeleteImageBody>, res: Response) => {
    const publicId = getRequiredString(req.body.publicId, 'Public ID');

    await UploadService.deleteImage(publicId);

    sendResponse(res, {
      statusCode: httpStatus.OK,

      success: true,

      message: UPLOAD_MESSAGE.FILE_DELETED,

      data: null,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UploadController = {
  uploadImage,

  deleteImage,
} as const;
