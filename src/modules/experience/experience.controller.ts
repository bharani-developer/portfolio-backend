// src\modules\experience\experience.controller.ts

import httpStatus from "http-status";

import { MESSAGE } from "../../constants/message.constant.js";

import AppError from "../../utils/AppError.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { ExperienceService } from "./experience.service.js";

const getRequiredParam = (
  value: string | string[] | undefined,
  name: string,
): string => {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value;
};

const createExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: MESSAGE.CREATED,
    data: result,
  });
});

const getExperiences = catchAsync(async (req, res) => {
  const result = await ExperienceService.getExperiences(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    meta: result.meta,
    data: result.result,
  });
});

const getExperienceById = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Experience ID");

  const result = await ExperienceService.getExperienceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getExperienceBySlug = catchAsync(async (req, res) => {
  const slug = getRequiredParam(req.params.slug, "Slug");

  const result = await ExperienceService.getExperienceBySlug(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getActiveExperiences = catchAsync(async (_req, res) => {
  const result = await ExperienceService.getActiveExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getCurrentExperiences = catchAsync(async (_req, res) => {
  const result = await ExperienceService.getCurrentExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getExperiencesByTechnology = catchAsync(async (req, res) => {
  const technology = getRequiredParam(req.params.technology, "Technology");

  const result = await ExperienceService.getExperiencesByTechnology(technology);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getExperiencesByCompany = catchAsync(async (req, res) => {
  const company = getRequiredParam(req.params.company, "Company");

  const result = await ExperienceService.getExperiencesByCompany(company);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Experience ID");

  const result = await ExperienceService.updateExperience(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.UPDATED,
    data: result,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Experience ID");

  const result = await ExperienceService.deleteExperience(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.DELETED,
    data: result,
  });
});

export const ExperienceController = {
  createExperience,

  getExperiences,

  getExperienceById,

  getExperienceBySlug,

  getActiveExperiences,

  getCurrentExperiences,

  getExperiencesByTechnology,

  getExperiencesByCompany,

  updateExperience,

  deleteExperience,
};
