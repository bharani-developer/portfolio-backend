// src\modules\services\services.controller.ts

import httpStatus from "http-status";

import { MESSAGE } from "../../constants/message.constant.js";

import AppError from "../../utils/AppError.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { ServicesService } from "./services.service.js";

const createService = catchAsync(async (req, res) => {
  const result = await ServicesService.createService(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

const getServices = catchAsync(async (req, res) => {
  const result = await ServicesService.getServices(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});

const getServiceById = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Service ID is required");
  }

  const result = await ServicesService.getServiceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Service ID is required");
  }

  const result = await ServicesService.updateService(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Service ID is required");
  }

  const result = await ServicesService.deleteService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});

export const ServicesController = {
  createService,

  getServices,

  getServiceById,

  updateService,

  deleteService,
};
