// src/modules/education/education.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { EDUCATION_MESSAGE, EDUCATION_SEARCHABLE_FIELDS } from './education.constant.js';

import { Education } from './education.model.js';

import type {
  IEducation,
  TEducationDocument,
  TEducationLevel,
  TCreateEducationPayload,
  TUpdateEducationPayload,
} from './education.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const educationBaseService = new BaseCrudService<IEducation>(Education, [
  ...EDUCATION_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createEducation = async (payload: TCreateEducationPayload): Promise<TEducationDocument> => {
  const institution = payload.institution.trim();

  const degree = payload.degree.trim();

  const existingEducation = await Education.findOne({
    institution,
    degree,
  });

  if (existingEducation) {
    throw new AppError(httpStatus.CONFLICT, EDUCATION_MESSAGE.ALREADY_EXISTS);
  }

  const educationPayload: Partial<IEducation> = {
    ...payload,

    institution,

    degree,

    fieldOfStudy: payload.fieldOfStudy.trim(),

    location: payload.location.trim(),

    ...(payload.grade !== undefined && {
      grade: payload.grade.trim(),
    }),

    ...(payload.description !== undefined && {
      description: payload.description.trim(),
    }),

    ...(payload.institutionWebsite !== undefined && {
      institutionWebsite: payload.institutionWebsite.trim(),
    }),

    slug: generateSlug(`${institution}-${degree}`),
  };

  return educationBaseService.create(educationPayload);
};
/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getEducations = async (query: Record<string, unknown>) => educationBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getEducationById = async (id: string) => educationBaseService.getById(id);
/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateEducation = async (id: string, payload: TUpdateEducationPayload) => {
  const existingEducation = await educationBaseService.getById(id);

  const institution = payload.institution?.trim() ?? existingEducation.institution;

  const degree = payload.degree?.trim() ?? existingEducation.degree;

  const duplicateEducation = await Education.findOne({
    institution,
    degree,

    _id: {
      $ne: existingEducation._id,
    },
  });

  if (duplicateEducation) {
    throw new AppError(httpStatus.CONFLICT, EDUCATION_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<IEducation> = {
    ...payload,

    ...(payload.institution !== undefined && {
      institution,
    }),

    ...(payload.degree !== undefined && {
      degree,
    }),

    ...(payload.fieldOfStudy !== undefined && {
      fieldOfStudy: payload.fieldOfStudy.trim(),
    }),

    ...(payload.location !== undefined && {
      location: payload.location.trim(),
    }),

    ...(payload.grade !== undefined && {
      grade: payload.grade.trim(),
    }),

    ...(payload.description !== undefined && {
      description: payload.description.trim(),
    }),

    ...(payload.institutionWebsite !== undefined && {
      institutionWebsite: payload.institutionWebsite.trim(),
    }),

    ...((payload.institution !== undefined || payload.degree !== undefined) && {
      slug: generateSlug(`${institution}-${degree}`),
    }),
  };

  return educationBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteEducation = async (id: string) => educationBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active education records.
 */
const getActiveEducations = async () =>
  Education.find({
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get current education records.
 */
const getCurrentEducations = async () =>
  Education.find({
    isCurrent: true,
    isActive: true,
  })
    .sort({
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get education by slug.
 */
const getEducationBySlug = async (slug: string) => {
  const result = await Education.findOne({
    slug,
    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, EDUCATION_MESSAGE.NOT_FOUND);
  }

  return result;
};

/**
 * Get education records by level.
 */
const getEducationsByLevel = async (educationLevel: TEducationLevel) =>
  Education.find({
    educationLevel,
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
      sortOrder: 1,
    })
    .lean();
/**
 * Get education records by skill.
 */
const getEducationsBySkill = async (skill: string) =>
  Education.find({
    skills: skill,
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get education records by education type.
 */
const getEducationsByType = async (educationType: IEducation['educationType']) =>
  Education.find({
    educationType,
    isActive: true,
  })
    .sort({
      isCurrent: -1,
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get education records by institution.
 */
const getEducationsByInstitution = async (institution: string) =>
  Education.find({
    institution: institution.trim(),
    isActive: true,
  })
    .sort({
      startDate: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get education statistics.
 */
const getEducationStats = async () => {
  const [total, active, current] = await Promise.all([
    educationBaseService.count(),

    educationBaseService.count({
      isActive: true,
    }),

    educationBaseService.count({
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

export const EducationService = {
  createEducation,

  getEducations,

  getEducationById,

  updateEducation,

  deleteEducation,

  getActiveEducations,

  getCurrentEducations,

  getEducationBySlug,

  getEducationsByLevel,

  getEducationsBySkill,

  getEducationsByType,

  getEducationsByInstitution,

  getEducationStats,
} as const;
