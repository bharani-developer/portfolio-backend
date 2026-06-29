// src\modules\skills\skills.controller.ts

import httpStatus from "http-status";

import { SKILLS_MESSAGE } from "./skills.constant.js";

import AppError from "../../utils/AppError.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { SkillsService } from "./skills.service.js";

const getRequiredParam = (
  value: string | string[] | undefined,
  name: string,
): string => {
  if (typeof value !== "string" || !value.trim()) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value;
};

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillsService.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: SKILLS_MESSAGE.CREATED,
    data: result,
  });
});

const getSkills = catchAsync(async (req, res) => {
  const result = await SkillsService.getSkills(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    meta: result.meta,
    data: result.result,
  });
});

const getSkillById = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Skill ID");

  const result = await SkillsService.getSkillById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

const getSkillsByCategory = catchAsync(async (req, res) => {
  const category = getRequiredParam(req.params.category, "Category");

  const result = await SkillsService.getSkillsByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

const getActiveSkills = catchAsync(async (_req, res) => {
  const result = await SkillsService.getActiveSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Skill ID");

  const result = await SkillsService.updateSkill(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.UPDATED,
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, "Skill ID");

  const result = await SkillsService.deleteSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.DELETED,
    data: result,
  });
});

export const SkillsController = {
  createSkill,

  getSkills,

  getSkillById,

  getSkillsByCategory,

  getActiveSkills,

  updateSkill,

  deleteSkill,
};
