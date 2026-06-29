// src\modules\services\services.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";

import AppError from "../../utils/AppError.js";

import {
  SERVICES_MESSAGE,
  SERVICES_SEARCHABLE_FIELDS,
} from "./services.constant.js";

import { Service } from "./services.model.js";

import type { IService } from "./services.interface.js";

type TCreateServicePayload = Omit<IService, "slug" | "createdAt" | "updatedAt">;

type TUpdateServicePayload = Partial<
  Omit<IService, "slug" | "createdAt" | "updatedAt">
>;

const baseService = new BaseCrudService<IService>(Service, [
  ...SERVICES_SEARCHABLE_FIELDS,
] as string[]);

const createService = async (payload: TCreateServicePayload) => {
  const title = payload.title.trim();

  const existingService = await Service.findOne({
    title,
  });

  if (existingService) {
    throw new AppError(httpStatus.CONFLICT, SERVICES_MESSAGE.ALREADY_EXISTS);
  }

  const slug = generateSlug(title);

  return baseService.create({
    ...payload,
    title,
    slug,
  });
};

const getServices = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getServiceById = async (id: string) => {
  return baseService.getById(id);
};

const updateService = async (id: string, payload: TUpdateServicePayload) => {
  const existingService = await Service.findById(id);

  if (!existingService) {
    throw new AppError(httpStatus.NOT_FOUND, SERVICES_MESSAGE.NOT_FOUND);
  }

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
  };

  if (payload.title) {
    updatePayload.title = title;

    updatePayload.slug = generateSlug(title);
  }

  return baseService.update(id, updatePayload);
};

const deleteService = async (id: string) => {
  return baseService.delete(id);
};

const getActiveServices = async () => {
  return Service.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
    })
    .lean();
};

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

export const ServicesService = {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
  getActiveServices,
  getServiceBySlug,
};
