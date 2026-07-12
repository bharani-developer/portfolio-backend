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
import { ServicesService } from './services.service.js';

// Types
import type { TCreateServicePayload, TUpdateServicePayload } from './services.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns a validated required route parameter.
 */
const getRequiredParam = (value: string | undefined, field: string): string => {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    throw new AppError(httpStatus.BAD_REQUEST, `${field} is required`);
  }

  return trimmedValue;
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

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createService = catchAsync<object, object, TCreateServicePayload>(
  async (req, res: Response) => {
    const result = await ServicesService.createService(req.body);

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

const getServices = catchAsync(async (req, res: Response) => {
  const result = await ServicesService.getServices(req.query);

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

const getServiceById = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Service ID');

  const result = await ServicesService.getServiceById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getServiceBySlug = catchAsync(async (req: Request<TSlugParams>, res: Response) => {
  const slug = getRequiredParam(req.params.slug, 'Service slug');

  const result = await ServicesService.getServiceBySlug(slug);

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

const updateService = catchAsync<TIdParams, object, TUpdateServicePayload>(
  async (req: Request<TIdParams, object, TUpdateServicePayload>, res: Response) => {
    const id = getRequiredParam(req.params.id, 'Service ID');

    const result = await ServicesService.updateService(id, req.body);

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

const deleteService = catchAsync(async (req: Request<TIdParams>, res: Response) => {
  const id = getRequiredParam(req.params.id, 'Service ID');

  const result = await ServicesService.deleteService(id);

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
 * Get all active services.
 */
const getActiveServices = catchAsync(async (_req: Request, res: Response) => {
  const result = await ServicesService.getActiveServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

/**
 * Get all inactive services.
 */
const getInactiveServices = catchAsync(async (_req: Request, res: Response) => {
  const result = await ServicesService.getInactiveServices();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

/**
 * Get latest services.
 */
const getLatestServices = catchAsync(async (req: Request, res: Response) => {
  const limitParam = req.query.limit;

  const limit = typeof limitParam === 'string' ? Number(limitParam) : undefined;

  const result = await ServicesService.getLatestServices(limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});
/**
 * Get services ordered for portfolio display.
 */
const getServicesOrdered = catchAsync(async (_req: Request, res: Response) => {
  const result = await ServicesService.getServicesOrdered();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

/**
 * Get services ordered alphabetically.
 */
const getServicesAlphabetically = catchAsync(async (_req: Request, res: Response) => {
  const result = await ServicesService.getServicesAlphabetically();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

/**
 * Get service statistics.
 */
const getServiceStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await ServicesService.getServiceStats();

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

export const ServicesController = {
  createService,

  getServices,

  getServiceById,

  getServiceBySlug,

  updateService,

  deleteService,

  getActiveServices,

  getInactiveServices,

  getLatestServices,

  getServicesOrdered,

  getServicesAlphabetically,

  getServiceStats,
} as const;
