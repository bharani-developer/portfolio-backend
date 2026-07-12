// src/modules/skills/skills.controller.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { SKILLS_MESSAGE } from './skills.constant.js';
import { SkillsService } from './skills.service.js';

import type { TCreateSkillPayload, TUpdateSkillPayload, TSkillCategory } from './skills.types.js';

import { AppError, catchAsync, sendResponse } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                              2. Helper Methods                             */
/* -------------------------------------------------------------------------- */

const getRequiredParam = (value: string | string[] | undefined, name: string): string => {
  if (typeof value !== 'string' || !value.trim()) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value.trim();
};

/* -------------------------------------------------------------------------- */
/*                               3. Create Skill                              */
/* -------------------------------------------------------------------------- */

const createSkill = catchAsync(async (req, res) => {
  const payload = req.body as TCreateSkillPayload;

  const result = await SkillsService.createSkill(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: SKILLS_MESSAGE.CREATED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                4. Get Skills                               */
/* -------------------------------------------------------------------------- */

const getSkills = catchAsync(async (req, res) => {
  const result = await SkillsService.getSkills(req.query as Record<string, unknown>);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    meta: result.meta,
    data: result.result,
  });
});

/* -------------------------------------------------------------------------- */
/*                              5. Get Skill By Id                            */
/* -------------------------------------------------------------------------- */

const getSkillById = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, 'Skill ID');

  const result = await SkillsService.getSkillById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                           6. Get Skills By Category                        */
/* -------------------------------------------------------------------------- */

const getSkillsByCategory = catchAsync(async (req, res) => {
  const category = getRequiredParam(req.params.category, 'Category') as TSkillCategory;

  const result = await SkillsService.getSkillsByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                             7. Get Active Skills                           */
/* -------------------------------------------------------------------------- */

const getActiveSkills = catchAsync(async (_req, res) => {
  const result = await SkillsService.getActiveSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.RETRIEVED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               8. Update Skill                              */
/* -------------------------------------------------------------------------- */

const updateSkill = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, 'Skill ID');

  const payload = req.body as TUpdateSkillPayload;

  const result = await SkillsService.updateSkill(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.UPDATED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               9. Delete Skill                              */
/* -------------------------------------------------------------------------- */

const deleteSkill = catchAsync(async (req, res) => {
  const id = getRequiredParam(req.params.id, 'Skill ID');

  const result = await SkillsService.deleteSkill(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: SKILLS_MESSAGE.DELETED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                 10. Export                                 */
/* -------------------------------------------------------------------------- */

export const SkillsController = {
  createSkill,

  getSkills,

  getSkillById,

  getSkillsByCategory,

  getActiveSkills,

  updateSkill,

  deleteSkill,
};
