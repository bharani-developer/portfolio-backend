// src/modules/education/education.controller.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Constants
import { MESSAGE } from '../../constants/index.js';

// Shared
import { AppError, catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { EducationService } from './education.service.js';

// Types
import type {
  TEducationLevel,
  TEducationType,
  TCreateEducationPayload,
  TUpdateEducationPayload,
} from './education.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Ensures a required route parameter exists.
 */
const getParam = (value: string | string[] | undefined, name: string): string => {
  if (!value || Array.isArray(value)) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value.trim();
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

// No additional helper types.

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

/**
 * Create a new education record.
 */
const createEducation = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateEducationPayload = req.body;

  const result = await EducationService.createEducation(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

/**
 * Get all education records.
 */
const getEducations = catchAsync(async (req: Request, res: Response) => {
  const result = await EducationService.getEducations(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});
/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

/**
 * Get education by ID.
 */
const getEducationById = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Education ID');

  const result = await EducationService.getEducationById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education by slug.
 */
const getEducationBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = getParam(req.params.slug, 'Slug');

  const result = await EducationService.getEducationBySlug(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

/**
 * Update an education record.
 */
const updateEducation = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Education ID');

  const payload: TUpdateEducationPayload = req.body;

  const result = await EducationService.updateEducation(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

/**
 * Delete an education record.
 */
const deleteEducation = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Education ID');

  const result = await EducationService.deleteEducation(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

/**
 * Get all active education records.
 */
const getActiveEducations = catchAsync(async (_req: Request, res: Response) => {
  const result = await EducationService.getActiveEducations();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get current education records.
 */
const getCurrentEducations = catchAsync(async (_req: Request, res: Response) => {
  const result = await EducationService.getCurrentEducations();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education records by level.
 */
const getEducationsByLevel = catchAsync(async (req: Request, res: Response) => {
  const educationLevel = getParam(req.params.level, 'Education level') as TEducationLevel;

  const result = await EducationService.getEducationsByLevel(educationLevel);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education records by skill.
 */
const getEducationsBySkill = catchAsync(async (req: Request, res: Response) => {
  const skill = getParam(req.params.skill, 'Skill');

  const result = await EducationService.getEducationsBySkill(skill);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education records by education type.
 */
const getEducationsByType = catchAsync(async (req: Request, res: Response) => {
  const educationType = getParam(req.params.type, 'Education type') as TEducationType;

  const result = await EducationService.getEducationsByType(educationType);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education records by institution.
 */
const getEducationsByInstitution = catchAsync(async (req: Request, res: Response) => {
  const institution = getParam(req.params.institution, 'Institution');

  const result = await EducationService.getEducationsByInstitution(institution);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/**
 * Get education statistics.
 */
const getEducationStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await EducationService.getEducationStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

// No custom actions.
/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const EducationController = {
  createEducation,

  getEducations,

  getEducationById,

  getEducationBySlug,

  updateEducation,

  deleteEducation,

  getActiveEducations,

  getCurrentEducations,

  getEducationsByLevel,

  getEducationsBySkill,

  getEducationsByType,

  getEducationsByInstitution,

  getEducationStats,
} as const;
