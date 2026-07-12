/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Constants
import { MESSAGE } from '../../constants/index.js';

import { PROJECT_CATEGORIES, PROJECT_STATUSES } from './projects.constant.js';

// Shared
import { AppError, catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { ProjectService } from './projects.service.js';

// Types
import type {
  TCreateProjectPayload,
  TProjectCategory,
  TProjectStatus,
  TUpdateProjectPayload,
} from './projects.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns a validated required route parameter.
 */
const getRequiredParam = (value: string | string[] | undefined, field: string): string => {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new AppError(httpStatus.BAD_REQUEST, `${field} is required`);
  }

  return value.trim();
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

type TIdParams = {
  id: string;
};

type TSlugParams = {
  slug: string;
};

type TCategoryParams = {
  category: string;
};

type TTechnologyParams = {
  technology: string;
};

type TStatusParams = {
  status: string;
};

type TDateParams = {
  date: string;
};

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createProject = catchAsync(
  async (req: Request<object, object, TCreateProjectPayload>, res: Response) => {
    const result = await ProjectService.createProject(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: MESSAGE.CREATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

const getProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectService.getProjects(req.query as Record<string, unknown>);

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

const getProjectById = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Project ID');

  const result = await ProjectService.getProjectById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectBySlug = catchAsync(async (req: Request<TSlugParams>, res: Response) => {
  const slug = getRequiredParam(req.params.slug, 'Project slug');

  const result = await ProjectService.getProjectBySlug(slug);

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

const updateProject = catchAsync(
  async (req: Request<TIdParams, object, TUpdateProjectPayload>, res: Response) => {
    const id = getRequiredParam(req.params.id, 'Project ID');

    const result = await ProjectService.updateProject(id, req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: MESSAGE.UPDATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteProject = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Project ID');

  const result = await ProjectService.deleteProject(id);

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

const getActiveProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getActiveProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getFeaturedProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getFeaturedProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectsByCategory = catchAsync(async (req: Request<TCategoryParams>, res: Response) => {
  const category = getRequiredParam(req.params.category, 'Project category') as TProjectCategory;

  if (!PROJECT_CATEGORIES.includes(category)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid project category');
  }

  const result = await ProjectService.getProjectsByCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectsByTechnology = catchAsync(
  async (req: Request<TTechnologyParams>, res: Response) => {
    const technology = getRequiredParam(req.params.technology, 'Technology');

    const result = await ProjectService.getProjectsByTechnology(technology);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: MESSAGE.RETRIEVED,
      data: result,
    });
  },
);

const getProjectsByStatus = catchAsync(async (req: Request<TStatusParams>, res: Response) => {
  const status = getRequiredParam(req.params.status, 'Project status') as TProjectStatus;

  if (!PROJECT_STATUSES.includes(status)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid project status');
  }

  const result = await ProjectService.getProjectsByStatus(status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});
const getLatestProjects = catchAsync(async (req: Request, res: Response) => {
  const limit = req.query.limit !== undefined ? Number(req.query.limit) : undefined;

  if (limit !== undefined && (!Number.isInteger(limit) || limit <= 0)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Limit must be a positive integer');
  }

  const result = await ProjectService.getLatestProjects(limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectsOrdered = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getProjectsOrdered();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getOngoingProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getOngoingProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getCompletedProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getCompletedProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getArchivedProjects = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getArchivedProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectsByDate = catchAsync(async (req: Request<TDateParams>, res: Response) => {
  const dateString = getRequiredParam(req.params.date, 'Start date');

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid start date');
  }

  const result = await ProjectService.getProjectsByDate(date);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getProjectStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await ProjectService.getProjectStats();

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

export const ProjectController = {
  createProject,

  getProjects,

  getProjectById,

  getProjectBySlug,

  updateProject,

  deleteProject,

  getActiveProjects,

  getFeaturedProjects,

  getProjectsByCategory,

  getProjectsByTechnology,

  getProjectsByStatus,

  getLatestProjects,

  getProjectsOrdered,

  getOngoingProjects,

  getCompletedProjects,

  getArchivedProjects,

  getProjectsByDate,

  getProjectStats,
} as const;
