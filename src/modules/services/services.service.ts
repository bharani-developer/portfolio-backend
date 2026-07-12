/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { SERVICES_MESSAGE, SERVICES_SEARCHABLE_FIELDS } from './services.constant.js';

import { Service } from './services.model.js';

import type {
  IService,
  TCreateServicePayload,
  TUpdateServicePayload,
  TServiceDocument,
} from './services.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const serviceBaseService = new BaseCrudService<IService>(Service, [
  ...SERVICES_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createService = async (payload: TCreateServicePayload): Promise<TServiceDocument> => {
  const title = payload.title.trim();

  const existingService = await Service.findOne({
    title,
  });

  if (existingService) {
    throw new AppError(httpStatus.CONFLICT, SERVICES_MESSAGE.ALREADY_EXISTS);
  }

  const servicePayload: Partial<IService> = {
    ...payload,

    title,

    slug: generateSlug(title),

    shortDescription: payload.shortDescription.trim(),

    description: payload.description.trim(),

    ...(payload.image && {
      image: {
        url: payload.image.url.trim(),
        publicId: payload.image.publicId.trim(),
      },
    }),

    ...(payload.price !== undefined && {
      price: payload.price,
    }),

    currency: payload.currency.trim().toUpperCase(),
  };

  return serviceBaseService.create(servicePayload);
};

/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getServices = async (query: Record<string, unknown>) => serviceBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getServiceById = async (id: string): Promise<TServiceDocument> =>
  serviceBaseService.getById(id);

/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateService = async (
  id: string,
  payload: TUpdateServicePayload,
): Promise<TServiceDocument> => {
  const existingService = await serviceBaseService.getById(id);

  const title = payload.title?.trim() ?? existingService.title;

  const duplicateService = await Service.findOne({
    title,
    _id: {
      $ne: existingService._id,
    },
  });

  if (duplicateService) {
    throw new AppError(httpStatus.CONFLICT, SERVICES_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<IService> = {
    ...payload,

    ...(payload.title && {
      title,

      slug: generateSlug(title),
    }),

    ...(payload.shortDescription && {
      shortDescription: payload.shortDescription.trim(),
    }),

    ...(payload.description && {
      description: payload.description.trim(),
    }),

    ...(payload.image && {
      image: {
        url: payload.image.url.trim(),
        publicId: payload.image.publicId.trim(),
      },
    }),

    ...(payload.price !== undefined && {
      price: payload.price,
    }),

    ...(payload.currency && {
      currency: payload.currency.trim().toUpperCase(),
    }),
  };

  return serviceBaseService.update(id, updatePayload);
};

/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteService = async (id: string): Promise<TServiceDocument> =>
  serviceBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active services.
 */
const getActiveServices = async () =>
  Service.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get service by slug.
 */
const getServiceBySlug = async (slug: string) => {
  const result = await Service.findOne({
    slug,
    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, SERVICES_MESSAGE.NOT_FOUND);
  }

  return result;
};
/**
 * Get latest services.
 */
const getLatestServices = async (limit = 5) =>
  Service.find({
    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .limit(limit)
    .lean();

/**
 * Get services ordered for portfolio display.
 */
const getServicesOrdered = async () =>
  Service.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      title: 1,
    })
    .lean();

/**
 * Get services ordered alphabetically.
 */
const getServicesAlphabetically = async () =>
  Service.find({
    isActive: true,
  })
    .sort({
      title: 1,
    })
    .lean();

/**
 * Get inactive services.
 */
const getInactiveServices = async () =>
  Service.find({
    isActive: false,
  })
    .sort({
      updatedAt: -1,
    })
    .lean();

/**
 * Get service statistics.
 */
const getServiceStats = async () => {
  const [total, active, inactive] = await Promise.all([
    serviceBaseService.count(),

    serviceBaseService.count({
      isActive: true,
    }),

    serviceBaseService.count({
      isActive: false,
    }),
  ]);

  return {
    total,

    active,

    inactive,
  };
};

/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const ServicesService = {
  createService,

  getServices,

  getServiceById,

  updateService,

  deleteService,

  getActiveServices,

  getInactiveServices,

  getLatestServices,

  getServicesOrdered,

  getServicesAlphabetically,

  getServiceBySlug,

  getServiceStats,
};
