// src\modules\skills\skills.service.ts

import httpStatus from "http-status";

import AppError from "../../utils/AppError.js";

import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";

import { SKILLS_MESSAGE, SKILLS_SEARCHABLE_FIELDS } from "./skills.constant.js";

import { Skill } from "./skills.model.js";

import type { ISkill } from "./skills.interface.js";

const baseService = new BaseCrudService<ISkill>(Skill, [
  ...SKILLS_SEARCHABLE_FIELDS,
]);

const createSkill = async (payload: Partial<ISkill>) => {
  if (!payload.name) {
    throw new AppError(httpStatus.BAD_REQUEST, "Skill name is required");
  }

  const existingSkill = await Skill.exists({
    name: payload.name,
  });

  if (existingSkill) {
    throw new AppError(httpStatus.CONFLICT, SKILLS_MESSAGE.ALREADY_EXISTS);
  }

  payload.slug = generateSlug(payload.name);

  return baseService.create(payload);
};

const getSkills = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getSkillById = async (id: string) => {
  return baseService.getById(id);
};

const updateSkill = async (id: string, payload: Partial<ISkill>) => {
  const existingSkill = await Skill.findById(id);

  if (!existingSkill) {
    throw new AppError(httpStatus.NOT_FOUND, SKILLS_MESSAGE.NOT_FOUND);
  }

  if (payload.name) {
    const duplicateSkill = await Skill.findOne({
      name: payload.name,
      _id: {
        $ne: existingSkill._id,
      },
    });

    if (duplicateSkill) {
      throw new AppError(httpStatus.CONFLICT, SKILLS_MESSAGE.ALREADY_EXISTS);
    }

    payload.slug = generateSlug(payload.name);
  }

  return baseService.update(id, payload);
};

const deleteSkill = async (id: string) => {
  return baseService.delete(id);
};

const getSkillsByCategory = async (category: string) => {
  return Skill.find({
    category,
    isActive: true,
  })
    .sort({
      sortOrder: 1,
    })
    .lean();
};

const getActiveSkills = async () => {
  return Skill.find({
    isActive: true,
  })
    .sort({
      category: 1,
      sortOrder: 1,
    })
    .lean();
};

export const SkillsService = {
  createSkill,

  getSkills,

  getSkillById,

  updateSkill,

  deleteSkill,

  getSkillsByCategory,

  getActiveSkills,
};
