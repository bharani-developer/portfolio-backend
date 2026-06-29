// src\modules\settings\settings.controller.ts

import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { SETTINGS_MESSAGE } from "./settings.constant.js";
import { SettingsService } from "./settings.service.js";

const createSettings = catchAsync(async (req, res) => {
  const result = await SettingsService.createSettings(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: SETTINGS_MESSAGE.CREATED,
    data: result,
  });
});

const getSettings = catchAsync(async (_req, res) => {
  const result = await SettingsService.getSettings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SETTINGS_MESSAGE.RETRIEVED,
    data: result,
  });
});

const updateSettings = catchAsync(async (req, res) => {
  const result = await SettingsService.updateSettings(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SETTINGS_MESSAGE.UPDATED,
    data: result,
  });
});

const deleteSettings = catchAsync(async (_req, res) => {
  await SettingsService.deleteSettings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SETTINGS_MESSAGE.DELETED,
    data: null,
  });
});

export const SettingsController = {
  createSettings,
  getSettings,
  updateSettings,
  deleteSettings,
};
