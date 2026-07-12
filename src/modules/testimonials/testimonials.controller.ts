// src/modules/testimonials/testimonials.controller.ts

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
import { TestimonialService } from './testimonials.service.js';

// Types
import type {
  TCreateTestimonialPayload,
  TUpdateTestimonialPayload,
  TTestimonialClientType,
  TTestimonialRating,
} from './testimonials.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const getRequiredParam = (value: string | string[] | undefined, name: string): string => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value.trim();
};

const getRequiredNumberParam = (value: string | string[] | undefined, name: string): number => {
  const param = getRequiredParam(value, name);

  const number = Number(param);

  if (Number.isNaN(number)) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} must be a valid number`);
  }

  return number;
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

type TIdParams = {
  id: string;
};

type TRatingParams = {
  rating: string;
};

type TClientTypeParams = {
  clientType: string;
};

type TProjectParams = {
  projectName: string;
};

type TCompanyParams = {
  clientCompany: string;
};

type TClientParams = {
  clientName: string;
};

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createTestimonial = catchAsync(
  async (req: Request<object, object, TCreateTestimonialPayload>, res: Response) => {
    const result = await TestimonialService.createTestimonial(req.body);

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

const getTestimonials = catchAsync(async (req: Request, res: Response) => {
  const result = await TestimonialService.getTestimonials(req.query);

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

const getTestimonialById = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Testimonial ID');

  const result = await TestimonialService.getTestimonialById(id);

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

const updateTestimonial = catchAsync(
  async (req: Request<TIdParams, object, TUpdateTestimonialPayload>, res: Response) => {
    const id = getRequiredParam(req.params.id, 'Testimonial ID');

    const result = await TestimonialService.updateTestimonial(id, req.body);

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

const deleteTestimonial = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Testimonial ID');

  const result = await TestimonialService.deleteTestimonial(id);

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

const getActiveTestimonials = catchAsync(async (_req: Request, res: Response) => {
  const result = await TestimonialService.getActiveTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getFeaturedTestimonials = catchAsync(async (_req: Request, res: Response) => {
  const result = await TestimonialService.getFeaturedTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByRating = catchAsync(async (req: Request<TRatingParams>, res: Response) => {
  const rating = getRequiredNumberParam(req.params.rating, 'Rating') as TTestimonialRating;

  const result = await TestimonialService.getTestimonialsByRating(rating);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByClientType = catchAsync(
  async (req: Request<TClientTypeParams>, res: Response) => {
    const clientType = getRequiredParam(
      req.params.clientType,
      'Client Type',
    ) as TTestimonialClientType;

    const result = await TestimonialService.getTestimonialsByClientType(clientType);

    sendResponse(res, {
      statusCode: httpStatus.OK,

      success: true,

      message: MESSAGE.RETRIEVED,

      data: result,
    });
  },
);

const getTestimonialsByProject = catchAsync(async (req: Request<TProjectParams>, res: Response) => {
  const projectName = getRequiredParam(req.params.projectName, 'Project Name');

  const result = await TestimonialService.getTestimonialsByProject(projectName);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByCompany = catchAsync(async (req: Request<TCompanyParams>, res: Response) => {
  const clientCompany = getRequiredParam(req.params.clientCompany, 'Client Company');

  const result = await TestimonialService.getTestimonialsByCompany(clientCompany);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByClient = catchAsync(async (req: Request<TClientParams>, res: Response) => {
  const clientName = getRequiredParam(req.params.clientName, 'Client Name');

  const result = await TestimonialService.getTestimonialsByClient(clientName);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getAverageRating = catchAsync(async (_req: Request, res: Response) => {
  const result = await TestimonialService.getAverageRating();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await TestimonialService.getTestimonialStats();

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

export const TestimonialController = {
  createTestimonial,

  getTestimonials,

  getTestimonialById,

  updateTestimonial,

  deleteTestimonial,

  /* --------------------------- Custom Queries --------------------------- */

  getActiveTestimonials,

  getFeaturedTestimonials,

  getTestimonialsByRating,

  getTestimonialsByClientType,

  getTestimonialsByProject,

  getTestimonialsByCompany,

  getTestimonialsByClient,

  getAverageRating,

  getTestimonialStats,
} as const;
