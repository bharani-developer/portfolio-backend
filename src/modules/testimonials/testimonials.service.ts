// src\modules\testimonials\testimonials.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";

import AppError from "../../utils/AppError.js";

import {
  TESTIMONIAL_MESSAGE,
  TESTIMONIAL_SEARCHABLE_FIELDS,
} from "./testimonials.constant.js";

import { Testimonial } from "./testimonials.model.js";

import type {
  ITestimonial,
  TCreateTestimonialPayload,
  TUpdateTestimonialPayload,
} from "./testimonials.interface.js";

const baseService = new BaseCrudService<ITestimonial>(Testimonial, [
  ...TESTIMONIAL_SEARCHABLE_FIELDS,
]);

const createTestimonial = async (payload: TCreateTestimonialPayload) => {
  const clientName = payload.clientName.trim();

  const review = payload.review.trim();

  const existingTestimonial = await Testimonial.findOne({
    clientName,
    review,
  });

  if (existingTestimonial) {
    throw new AppError(httpStatus.CONFLICT, TESTIMONIAL_MESSAGE.ALREADY_EXISTS);
  }

  return baseService.create({
    ...payload,
    clientName,
    review,
  });
};

const getTestimonials = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getTestimonialById = async (id: string) => {
  return baseService.getById(id);
};

const updateTestimonial = async (
  id: string,
  payload: TUpdateTestimonialPayload,
) => {
  const existingTestimonial = await Testimonial.findById(id);

  if (!existingTestimonial) {
    throw new AppError(httpStatus.NOT_FOUND, TESTIMONIAL_MESSAGE.NOT_FOUND);
  }

  const clientName =
    payload.clientName?.trim() ?? existingTestimonial.clientName;

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

  return baseService.update(id, {
    ...payload,
    clientName,
    review,
  });
};

const deleteTestimonial = async (id: string) => {
  return baseService.delete(id);
};

const getActiveTestimonials = async () => {
  return Testimonial.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      createdAt: -1,
    })
    .lean();
};

const getFeaturedTestimonials = async () => {
  return Testimonial.find({
    isFeatured: true,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      rating: -1,
    })
    .lean();
};

const getTestimonialsByRating = async (rating: ITestimonial["rating"]) => {
  return Testimonial.find({
    rating,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
    })
    .lean();
};

const getTestimonialsByClientType = async (
  clientType: ITestimonial["clientType"],
) => {
  return Testimonial.find({
    clientType,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
    })
    .lean();
};

const getTestimonialsByProject = async (projectName: string) => {
  return Testimonial.find({
    projectName,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
    })
    .lean();
};

const getAverageRating = async () => {
  const result = await Testimonial.aggregate([
    {
      $match: {
        isActive: true,
      },
    },
    {
      $group: {
        _id: null,
        averageRating: {
          $avg: "$rating",
        },
        totalTestimonials: {
          $sum: 1,
        },
      },
    },
  ]);

  return (
    result[0] ?? {
      averageRating: 0,
      totalTestimonials: 0,
    }
  );
};

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

  getAverageRating,
};
