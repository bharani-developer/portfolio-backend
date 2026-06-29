// src\modules\certifications\certifications.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";

import AppError from "../../utils/AppError.js";

import {
  CERTIFICATION_MESSAGE,
  CERTIFICATION_SEARCHABLE_FIELDS,
} from "./certifications.constant.js";

import { Certification } from "./certifications.model.js";

import type {
  ICertification,
  TCreateCertificationPayload,
  TUpdateCertificationPayload,
} from "./certifications.interface.js";

const baseService = new BaseCrudService<ICertification>(Certification, [
  ...CERTIFICATION_SEARCHABLE_FIELDS,
] as string[]);

const createCertification = async (payload: TCreateCertificationPayload) => {
  const title = payload.title.trim();

  const issuer = payload.issuer.trim();

  const existingCertification = await Certification.findOne({
    title,
    issuer,
  });

  if (existingCertification) {
    throw new AppError(
      httpStatus.CONFLICT,
      CERTIFICATION_MESSAGE.ALREADY_EXISTS,
    );
  }

  const slug = generateSlug(`${title}-${issuer}`);

  const certificationPayload = {
    ...payload,

    title,

    issuer,

    slug,
  };

  return baseService.create(certificationPayload);
};

const getCertifications = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getCertificationById = async (id: string) => {
  return baseService.getById(id);
};

const updateCertification = async (
  id: string,
  payload: TUpdateCertificationPayload,
) => {
  const existingCertification = await Certification.findById(id);

  if (!existingCertification) {
    throw new AppError(httpStatus.NOT_FOUND, CERTIFICATION_MESSAGE.NOT_FOUND);
  }

  const title = payload.title?.trim() ?? existingCertification.title;

  const issuer = payload.issuer?.trim() ?? existingCertification.issuer;

  const duplicateCertification = await Certification.findOne({
    title,
    issuer,

    _id: {
      $ne: existingCertification._id,
    },
  });

  if (duplicateCertification) {
    throw new AppError(
      httpStatus.CONFLICT,
      CERTIFICATION_MESSAGE.ALREADY_EXISTS,
    );
  }

  const updatePayload: Partial<ICertification> = {
    ...payload,

    ...(payload.title || payload.issuer
      ? {
          slug: generateSlug(`${title}-${issuer}`),
        }
      : {}),
  };

  return baseService.update(id, updatePayload);

  return baseService.update(id, updatePayload);
};

const deleteCertification = async (id: string) => {
  return baseService.delete(id);
};

const getActiveCertifications = async () => {
  return Certification.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      issueDate: -1,
    })
    .lean();
};

const getCertificationBySlug = async (slug: string) => {
  const result = await Certification.findOne({
    slug,
    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, CERTIFICATION_MESSAGE.NOT_FOUND);
  }

  return result;
};

const getCertificationsBySkill = async (skill: string) => {
  return Certification.find({
    skills: {
      $in: [skill],
    },

    isActive: true,
  })
    .sort({
      issueDate: -1,
    })
    .lean();
};

const getExpiredCertifications = async () => {
  const today = new Date();

  return Certification.find({
    neverExpires: false,

    expiryDate: {
      $lt: today,
    },

    isActive: true,
  })
    .sort({
      expiryDate: -1,
    })
    .lean();
};

const getValidCertifications = async () => {
  const today = new Date();

  return Certification.find({
    isActive: true,

    $or: [
      {
        neverExpires: true,
      },

      {
        expiryDate: {
          $gte: today,
        },
      },
    ],
  })
    .sort({
      sortOrder: 1,
      issueDate: -1,
    })
    .lean();
};

const getCertificationsByIssuer = async (issuer: string) => {
  return Certification.find({
    issuer,

    isActive: true,
  })
    .sort({
      issueDate: -1,
    })
    .lean();
};

export const CertificationService = {
  createCertification,

  getCertifications,

  getCertificationById,

  updateCertification,

  deleteCertification,

  getActiveCertifications,

  getCertificationBySlug,

  getCertificationsBySkill,

  getExpiredCertifications,

  getValidCertifications,

  getCertificationsByIssuer,
};
