// src/modules/certifications/certifications.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import {
  CERTIFICATION_MESSAGE,
  CERTIFICATION_SEARCHABLE_FIELDS,
} from './certifications.constant.js';

import { Certification } from './certifications.model.js';

import type {
  ICertification,
  TCreateCertificationPayload,
  TUpdateCertificationPayload,
} from './certifications.types.js';

import { AppError } from '../../shared/utils/index.js';
import { generateSlug } from '../../shared/utils/generate-slug.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const certificationBaseService = new BaseCrudService<ICertification>(Certification, [
  ...CERTIFICATION_SEARCHABLE_FIELDS,
] as string[]);
/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createCertification = async (payload: TCreateCertificationPayload) => {
  const title = payload.title.trim();

  const issuer = payload.issuer.trim();

  const existingCertification = await Certification.findOne({
    title,
    issuer,
  });

  if (existingCertification) {
    throw new AppError(httpStatus.CONFLICT, CERTIFICATION_MESSAGE.ALREADY_EXISTS);
  }

  const certificationPayload: TCreateCertificationPayload & {
    slug: string;
  } = {
    ...payload,

    title,

    issuer,

    slug: generateSlug(`${title}-${issuer}`),
  };

  return certificationBaseService.create(certificationPayload);
};
/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getCertifications = async (query: Record<string, unknown>) =>
  certificationBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getCertificationById = async (id: string) => certificationBaseService.getById(id);
/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateCertification = async (id: string, payload: TUpdateCertificationPayload) => {
  const existingCertification = await certificationBaseService.getById(id);

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
    throw new AppError(httpStatus.CONFLICT, CERTIFICATION_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<ICertification> = {
    ...payload,

    ...(payload.title && {
      title,
    }),

    ...(payload.issuer && {
      issuer,
    }),

    ...(payload.title || payload.issuer
      ? {
        slug: generateSlug(`${title}-${issuer}`),
      }
      : {}),
  };

  return certificationBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteCertification = async (id: string) => certificationBaseService.delete(id);
/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active certifications.
 */
const getActiveCertifications = async () =>
  Certification.find({
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      issueDate: -1,
    })
    .lean();

/**
 * Get certification by slug.
 */
const getCertificationBySlug = async (slug: string) => {
  const normalizedSlug = slug.trim().toLowerCase();

  const result = await Certification.findOne({
    slug: normalizedSlug,

    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, CERTIFICATION_MESSAGE.NOT_FOUND);
  }

  return result;
};

/**
 * Get certifications by skill.
 */
const getCertificationsBySkill = async (skill: string) =>
  Certification.find({
    skills: skill.trim(),

    isActive: true,
  })
    .sort({
      issueDate: -1,
    })
    .lean();
/**
 * Get expired certifications.
 */
const getExpiredCertifications = async () => {
  const today = new Date();

  return Certification.find({
    isActive: true,

    neverExpires: false,

    expiryDate: {
      $lt: today,
    },
  })
    .sort({
      expiryDate: -1,
    })
    .lean();
};

/**
 * Get valid certifications.
 */
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

/**
 * Get certifications by issuer.
 */
const getCertificationsByIssuer = async (issuer: string) =>
  Certification.find({
    issuer: issuer.trim(),

    isActive: true,
  })
    .sort({
      issueDate: -1,
    })
    .lean();
/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const CertificationService = Object.freeze({
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
});
