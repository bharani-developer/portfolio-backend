// src/modules/testimonials/testimonials.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { TESTIMONIAL_MESSAGE, TESTIMONIAL_SEARCHABLE_FIELDS } from './testimonials.constant.js';

import { Testimonial } from './testimonials.model.js';

import type {
  ITestimonial,
  TCreateTestimonialPayload,
  TUpdateTestimonialPayload,
  TTestimonialDocument,
  TTestimonialClientType,
  TTestimonialRating,
} from './testimonials.types.js';

import { AppError } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const testimonialBaseService = new BaseCrudService<ITestimonial>(Testimonial, [
  ...TESTIMONIAL_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createTestimonial = async (
  payload: TCreateTestimonialPayload,
): Promise<TTestimonialDocument> => {
  const clientName = payload.clientName.trim();

  const review = payload.review.trim();

  const existingTestimonial = await Testimonial.findOne({
    clientName,
    review,
  });

  if (existingTestimonial) {
    throw new AppError(httpStatus.CONFLICT, TESTIMONIAL_MESSAGE.ALREADY_EXISTS);
  }

  const testimonialPayload: Partial<ITestimonial> = {
    ...payload,

    clientName,

    review,

    ...(payload.clientPosition
      ? {
        clientPosition: payload.clientPosition.trim(),
      }
      : {}),

    ...(payload.clientCompany
      ? {
        clientCompany: payload.clientCompany.trim(),
      }
      : {}),

    ...(payload.clientWebsite
      ? {
        clientWebsite: payload.clientWebsite.trim(),
      }
      : {}),

    ...(payload.projectName
      ? {
        projectName: payload.projectName.trim(),
      }
      : {}),
  };

  return testimonialBaseService.create(testimonialPayload);
};

/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getTestimonials = async (query: Record<string, unknown>) =>
  testimonialBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getTestimonialById = async (id: string): Promise<TTestimonialDocument> =>
  testimonialBaseService.getById(id);

/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateTestimonial = async (
  id: string,
  payload: TUpdateTestimonialPayload,
): Promise<TTestimonialDocument> => {
  const existingTestimonial = await testimonialBaseService.getById(id);

  const clientName = payload.clientName?.trim() ?? existingTestimonial.clientName;

  const review = payload.review?.trim() ?? existingTestimonial.review;

  const duplicateTestimonial = await Testimonial.findOne({
    clientName,
    review,
    _id: {
      $ne: existingTestimonial._id,
    },
  });

  if (duplicateTestimonial) {
    throw new AppError(httpStatus.CONFLICT, TESTIMONIAL_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<ITestimonial> = {
    ...payload,

    ...(payload.clientName && {
      clientName,
    }),

    ...(payload.review && {
      review,
    }),

    ...(payload.clientPosition && {
      clientPosition: payload.clientPosition.trim(),
    }),

    ...(payload.clientCompany && {
      clientCompany: payload.clientCompany.trim(),
    }),

    ...(payload.clientWebsite && {
      clientWebsite: payload.clientWebsite.trim(),
    }),

    ...(payload.projectName && {
      projectName: payload.projectName.trim(),
    }),
  };

  return testimonialBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteTestimonial = async (id: string): Promise<TTestimonialDocument> =>
  testimonialBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active testimonials.
 */
const getActiveTestimonials = async () =>
  Testimonial.find({
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get featured testimonials.
 */
const getFeaturedTestimonials = async () =>
  Testimonial.find({
    isActive: true,
    isFeatured: true,
  })
    .sort({
      sortOrder: 1,
      rating: -1,
      createdAt: -1,
    })
    .lean();

/**
 * Get testimonials by rating.
 */
const getTestimonialsByRating = async (rating: TTestimonialRating) =>
  Testimonial.find({
    rating,
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get testimonials by client type.
 */
const getTestimonialsByClientType = async (clientType: TTestimonialClientType) =>
  Testimonial.find({
    clientType,
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get testimonials by project.
 */
const getTestimonialsByProject = async (projectName: string) =>
  Testimonial.find({
    projectName: projectName.trim(),
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get testimonials by company.
 */
const getTestimonialsByCompany = async (clientCompany: string) =>
  Testimonial.find({
    clientCompany: clientCompany.trim(),
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();
/**
 * Get testimonials by client name.
 */
const getTestimonialsByClient = async (clientName: string) =>
  Testimonial.find({
    clientName: clientName.trim(),
    isActive: true,
  })
    .sort({
      isFeatured: -1,
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();

/**
 * Get average testimonial rating.
 */
const getAverageRating = async () => {
  const [result] = await Testimonial.aggregate<{
    averageRating: number;
    totalTestimonials: number;
  }>([
    {
      $match: {
        isActive: true,
      },
    },
    {
      $group: {
        _id: null,

        averageRating: {
          $avg: '$rating',
        },

        totalTestimonials: {
          $sum: 1,
        },
      },
    },
    {
      $project: {
        _id: 0,

        averageRating: {
          $round: ['$averageRating', 2],
        },

        totalTestimonials: 1,
      },
    },
  ]);

  return (
    result ?? {
      averageRating: 0,
      totalTestimonials: 0,
    }
  );
};

/**
 * Get testimonial statistics.
 */
const getTestimonialStats = async () => {
  const [total, active, featured, averageRating] = await Promise.all([
    testimonialBaseService.count(),

    testimonialBaseService.count({
      isActive: true,
    }),

    testimonialBaseService.count({
      isFeatured: true,
      isActive: true,
    }),

    getAverageRating(),
  ]);

  return {
    total,

    active,

    featured,

    averageRating: averageRating.averageRating,

    totalRatings: averageRating.totalTestimonials,
  };
};
/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const TestimonialService = {
  createTestimonial,

  getTestimonials,

  getTestimonialById,

  updateTestimonial,

  deleteTestimonial,

  getActiveTestimonials,

  getFeaturedTestimonials,

  getTestimonialsByRating,

  getTestimonialsByClientType,

  getTestimonialsByProject,

  getTestimonialsByCompany,

  getTestimonialsByClient,

  getAverageRating,

  getTestimonialStats,
};
