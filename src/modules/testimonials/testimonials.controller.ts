// src\modules\testimonials\testimonials.controller.ts

import { MESSAGE, httpStatus } from "../../constants/index.js";

import { catchAsync, sendResponse } from "../../utils/index.js";

import { TestimonialService } from "./testimonials.service.js";

const createTestimonial = catchAsync(async (req, res) => {
  const result = await TestimonialService.createTestimonial(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

const getTestimonials = catchAsync(async (req, res) => {
  const result = await TestimonialService.getTestimonials(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});

const getTestimonialById = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await TestimonialService.getTestimonialById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const updateTestimonial = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await TestimonialService.updateTestimonial(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

const deleteTestimonial = catchAsync(async (req, res) => {
  const id = String(req.params.id);

  const result = await TestimonialService.deleteTestimonial(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});

const getActiveTestimonials = catchAsync(async (_req, res) => {
  const result = await TestimonialService.getActiveTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getFeaturedTestimonials = catchAsync(async (_req, res) => {
  const result = await TestimonialService.getFeaturedTestimonials();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByRating = catchAsync(async (req, res) => {
  const rating = Number(req.params.rating) as 1 | 2 | 3 | 4 | 5;

  const result = await TestimonialService.getTestimonialsByRating(rating);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByClientType = catchAsync(async (req, res) => {
  const clientType = String(req.params.clientType) as never;

  const result =
    await TestimonialService.getTestimonialsByClientType(clientType);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getTestimonialsByProject = catchAsync(async (req, res) => {
  const projectName = String(req.params.projectName);

  const result = await TestimonialService.getTestimonialsByProject(projectName);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getAverageRating = catchAsync(async (_req, res) => {
  const result = await TestimonialService.getAverageRating();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

export const TestimonialController = {
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
