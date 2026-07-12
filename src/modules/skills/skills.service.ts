// src/modules/skills/skills.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { BaseCrudService } from '../../shared/base/index.js';

import { SKILLS_MESSAGE, SKILLS_SEARCHABLE_FIELDS } from './skills.constant.js';

import { Skill } from './skills.model.js';

import type {
  ISkill,
  TCreateSkillPayload,
  TUpdateSkillPayload,
  TSkillDocument,
  TSkillCategory,
} from './skills.types.js';

import { AppError, generateSlug } from '../../shared/utils/index.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const skillBaseService = new BaseCrudService<ISkill>(Skill, [
  ...SKILLS_SEARCHABLE_FIELDS,
] as string[]);

/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createSkill = async (payload: TCreateSkillPayload): Promise<TSkillDocument> => {
  const name = payload.name.trim();

  const existingSkill = await Skill.findOne({
    name,
  });

  if (existingSkill) {
    throw new AppError(httpStatus.CONFLICT, SKILLS_MESSAGE.ALREADY_EXISTS);
  }

  const skillPayload: Partial<ISkill> = {
    ...payload,

    name,

    slug: generateSlug(name),

    ...(payload.description
      ? {
        description: payload.description.trim(),
      }
      : {}),
  };

  return skillBaseService.create(skillPayload);
};

/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getSkills = async (query: Record<string, unknown>) => skillBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getSkillById = async (id: string): Promise<TSkillDocument> => skillBaseService.getById(id);

/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateSkill = async (id: string, payload: TUpdateSkillPayload): Promise<TSkillDocument> => {
  const existingSkill = await skillBaseService.getById(id);

  const name = payload.name?.trim() ?? existingSkill.name;

  const duplicateSkill = await Skill.findOne({
    name,
    _id: {
      $ne: existingSkill._id,
    },
  });

  if (duplicateSkill) {
    throw new AppError(httpStatus.CONFLICT, SKILLS_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<ISkill> = {
    ...payload,

    ...(payload.name && {
      name,

      slug: generateSlug(name),
    }),

    ...(payload.description
      ? {
        description: payload.description.trim(),
      }
      : {}),
  };

  return skillBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteSkill = async (id: string): Promise<TSkillDocument> => skillBaseService.delete(id);

/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active skills.
 */
const getActiveSkills = async () =>
  Skill.find({
    isActive: true,
  })
    .sort({
      category: 1,
      sortOrder: 1,
      proficiency: -1,
    })
    .lean();

/**
 * Get skills by category.
 *
 * NOTE:
 * Using TSkillCategory fixes the Mongoose
 * strict query typing error.
 */
const getSkillsByCategory = async (category: TSkillCategory) =>
  Skill.find({
    category,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
      proficiency: -1,
      name: 1,
    })
    .lean();

/**
 * Get skills by minimum proficiency.
 */
const getSkillsByProficiency = async (minimumProficiency: number) =>
  Skill.find({
    proficiency: {
      $gte: minimumProficiency,
    },

    isActive: true,
  })
    .sort({
      proficiency: -1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get advanced skills.
 */
const getAdvancedSkills = async () =>
  Skill.find({
    proficiency: {
      $gte: 80,
    },

    isActive: true,
  })
    .sort({
      proficiency: -1,
      category: 1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get beginner skills.
 */
const getBeginnerSkills = async () =>
  Skill.find({
    proficiency: {
      $lt: 50,
    },

    isActive: true,
  })
    .sort({
      proficiency: 1,
      category: 1,
      sortOrder: 1,
    })
    .lean();
/**
 * Get expert skills.
 */
const getExpertSkills = async () =>
  Skill.find({
    proficiency: {
      $gte: 90,
    },

    isActive: true,
  })
    .sort({
      proficiency: -1,
      category: 1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get skills ordered by proficiency.
 */
const getSkillsOrderedByProficiency = async () =>
  Skill.find({
    isActive: true,
  })
    .sort({
      proficiency: -1,
      category: 1,
      sortOrder: 1,
    })
    .lean();

/**
 * Get skills ordered by category.
 */
const getSkillsGroupedByCategory = async () =>
  Skill.find({
    isActive: true,
  })
    .sort({
      category: 1,
      sortOrder: 1,
      name: 1,
    })
    .lean();

/**
 * Get skill statistics.
 */
const getSkillStats = async () => {
  const [total, active, categories, averageProficiencyResult] = await Promise.all([
    skillBaseService.count(),

    skillBaseService.count({
      isActive: true,
    }),

    Skill.distinct('category'),

    Skill.aggregate<{
      average: number;
    }>([
      {
        $match: {
          isActive: true,
        },
      },
      {
        $group: {
          _id: null,

          average: {
            $avg: '$proficiency',
          },
        },
      },
    ]),
  ]);

  const [averageStats] = averageProficiencyResult;

  return {
    total,

    active,

    categories: categories.length,

    averageProficiency: averageStats ? Number(averageStats.average.toFixed(2)) : 0,
  };
};
/* -------------------------------------------------------------------------- */
/*                                  9. Export                                 */
/* -------------------------------------------------------------------------- */

export const SkillsService = {
  createSkill,

  getSkills,

  getSkillById,

  updateSkill,

  deleteSkill,

  getActiveSkills,

  getSkillsByCategory,

  getSkillsByProficiency,

  getAdvancedSkills,

  getBeginnerSkills,

  getExpertSkills,

  getSkillsOrderedByProficiency,

  getSkillsGroupedByCategory,

  getSkillStats,
};
