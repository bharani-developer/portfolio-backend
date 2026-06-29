// src\modules\upload\upload.controller.ts

import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { UPLOAD_MESSAGE } from "./upload.constant.js";
import { UploadService } from "./upload.service.js";

const uploadImage = catchAsync(async (req, res) => {
  const result = await UploadService.uploadImage(req.file);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: UPLOAD_MESSAGE.FILE_UPLOADED,
    data: result,
  });
});

const deleteImage = catchAsync(async (req, res) => {
  const { publicId } = req.body;

  await UploadService.deleteImage(publicId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: UPLOAD_MESSAGE.FILE_DELETED,
    data: null,
  });
});

export const UploadController = {
  uploadImage,
  deleteImage,
};
