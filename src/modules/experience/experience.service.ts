// src/modules/experience/experience.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { EXPERIENCE_MESSAGE, EXPERIENCE_SEARCHABLE_FIELDS } from './experience.constant.js';

import { Experience } from './experience.model.js';

import type {
  IExperience,
  TCreateExperiencePayload,
  TUpdateExperiencePayload,
  TExperienceDocument,
} from './experience.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const experienceBaseService = new BaseCrudService<IExperience>(Experience, [
  ...EXPERIENCE_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createExperience = async (
  payload: TCreateExperiencePayload,
): Promise<TExperienceDocument> => {
  const company = payload.company.trim();

  const position = payload.position.trim();

  const existingExperience = await Experience.findOne({
    company,
    position,
  });

  if (existingExperience) {
    throw new AppError(httpStatus.CONFLICT, EXPERIENCE_MESSAGE.ALREADY_EXISTS);
  }

  const experiencePayload: Partial<IExperience> = {
    ...payload,

    company,

    position,

    location: payload.location.trim(),

    summary: payload.summary.trim(),

    slug: generateSlug(`${company}-${position}`),

    ...(payload.companyWebsite
      ? {
        companyWebsite: payload.companyWebsite.trim(),
      }
      : {}),
  };

  return experienceBaseService.create(experiencePayload);
};
/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getExperiences = async (query: Record<string, unknown>) =>
  experienceBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getExperienceById = async (id: string): Promise<TExperienceDocument> =>
  experienceBaseService.getById(id);
/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateExperience = async (
  id: string,
  payload: TUpdateExperiencePayload,
): Promise<TExperienceDocument> => {
  const existingExperience = await experienceBaseService.getById(id);

  const company = payload.company?.trim() ?? existingExperience.company;

  const position = payload.position?.trim() ?? existingExperience.position;

  const duplicateExperience = await Experience.findOne({
    company,
    position,
    _id: {
      $ne: existingExperience._id,
    },
  });

  if (duplicateExperience) {
    throw new AppError(httpStatus.CONFLICT, EXPERIENCE_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<IExperience> = {
    ...payload,

    ...(payload.company && {
      company,
    }),

    ...(payload.position && {
      position,
    }),

    ...(payload.location && {
      location: payload.location.trim(),
    }),

    ...(payload.summary && {
      summary: payload.summary.trim(),
    }),

    ...(payload.companyWebsite && {
      companyWebsite: payload.companyWebsite.trim(),
    }),

    ...(payload.company || payload.position
      ? {
        slug: generateSlug(`${company}-${position}`),
      }
      : {}),
  };

  return experienceBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteExperience = async (id: string): Promise<TExperienceDocument> =>
  experienceBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active experiences.
 */
const getActiveExperiences = async () =>
  Experience.find({
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get current experiences.
 */
const getCurrentExperiences = async () =>
  Experience.find({
    isCurrent: true,
    isActive: true,
  })
    .sort({
      startDate: -1,
    })
    .lean();

/**
 * Get experience by slug.
 */
const getExperienceBySlug = async (slug: string) => {
  const result = await Experience.findOne({
    slug,
    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, EXPERIENCE_MESSAGE.NOT_FOUND);
  }

  return result;
};
/**
 * Get experiences by company.
 */
const getExperiencesByCompany = async (company: string) =>
  Experience.find({
    company: company.trim(),
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
    })
    .lean();

/**
 * Get experiences by technology.
 */
const getExperiencesByTechnology = async (technology: string) =>
  Experience.find({
    technologies: {
      $in: [technology.trim()],
    },
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
    })
    .lean();

/**
 * Get experiences by employment type.
 */
const getExperiencesByEmploymentType = async (employmentType: IExperience['employmentType']) =>
  Experience.find({
    employmentType,
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
    })
    .lean();

/**
 * Get experiences by work mode.
 */
const getExperiencesByWorkMode = async (workMode: IExperience['workMode']) =>
  Experience.find({
    workMode,
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
    })
    .lean();

/**
 * Get experience statistics.
 */
const getExperienceStats = async () => {
  const [total, active, current] = await Promise.all([
    experienceBaseService.count(),

    experienceBaseService.count({
      isActive: true,
    }),

    experienceBaseService.count({
      isCurrent: true,
    }),
  ]);

  return {
    total,
    active,
    current,
  };
};

/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const ExperienceService = {
  createExperience,

  getExperiences,

  getExperienceById,

  updateExperience,

  deleteExperience,

  getActiveExperiences,

  getCurrentExperiences,

  getExperienceBySlug,

  getExperiencesByCompany,

  getExperiencesByTechnology,

  getExperiencesByEmploymentType,

  getExperiencesByWorkMode,

  getExperienceStats,
};
