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
import { ExperienceService } from './experience.service.js';

// Types
import type {
  TCreateExperiencePayload,
  TEmploymentType,
  TUpdateExperiencePayload,
  TWorkMode,
} from './experience.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const getParam = (value: string | string[] | undefined, name: string): string => {
  if (!value || Array.isArray(value)) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value;
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

// No helper types.

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateExperiencePayload = req.body;

  const result = await ExperienceService.createExperience(payload);

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

const getExperiences = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceService.getExperiences(req.query);

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

const getExperienceById = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Experience ID');

  const result = await ExperienceService.getExperienceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExperienceBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = getParam(req.params.slug, 'Slug');

  const result = await ExperienceService.getExperienceBySlug(slug);

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

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Experience ID');

  const payload: TUpdateExperiencePayload = req.body;

  const result = await ExperienceService.updateExperience(id, payload);

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

const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Experience ID');

  const result = await ExperienceService.deleteExperience(id);

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

const getActiveExperiences = catchAsync(async (_req: Request, res: Response) => {
  const result = await ExperienceService.getActiveExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getCurrentExperiences = catchAsync(async (_req: Request, res: Response) => {
  const result = await ExperienceService.getCurrentExperiences();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExperiencesByCompany = catchAsync(async (req: Request, res: Response) => {
  const company = getParam(req.params.company, 'Company');

  const result = await ExperienceService.getExperiencesByCompany(company);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExperiencesByTechnology = catchAsync(async (req: Request, res: Response) => {
  const technology = getParam(req.params.technology, 'Technology');

  const result = await ExperienceService.getExperiencesByTechnology(technology);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExperiencesByEmploymentType = catchAsync(async (req: Request, res: Response) => {
  const employmentType = getParam(req.params.employmentType, 'Employment type') as TEmploymentType;

  const result = await ExperienceService.getExperiencesByEmploymentType(employmentType);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExperiencesByWorkMode = catchAsync(async (req: Request, res: Response) => {
  const workMode = getParam(req.params.workMode, 'Work mode') as TWorkMode;

  const result = await ExperienceService.getExperiencesByWorkMode(workMode);

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

const getExperienceStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await ExperienceService.getExperienceStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ExperienceController = {
  createExperience,

  getExperiences,

  getExperienceById,

  getExperienceBySlug,

  updateExperience,

  deleteExperience,

  getActiveExperiences,

  getCurrentExperiences,

  getExperiencesByCompany,

  getExperiencesByTechnology,

  getExperiencesByEmploymentType,

  getExperiencesByWorkMode,

  getExperienceStats,
} as const;
