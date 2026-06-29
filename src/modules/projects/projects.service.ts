// src\modules\projects\projects.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";

import AppError from "../../utils/AppError.js";

import {
  PROJECT_MESSAGE,
  PROJECT_SEARCHABLE_FIELDS,
} from "./projects.constant.js";

import { Project } from "./projects.model.js";

import type {
  IProject,
  TCreateProjectPayload,
  TProjectCategory,
  TProjectStatus,
  TUpdateProjectPayload,
} from "./projects.interface.js";

const baseService = new BaseCrudService<IProject>(Project, [
  ...PROJECT_SEARCHABLE_FIELDS,
] as string[]);

const createProject = async (payload: TCreateProjectPayload) => {
  const title = payload.title.trim();

  const existingProject = await Project.findOne({
    title,
  });

  if (existingProject) {
    throw new AppError(httpStatus.CONFLICT, PROJECT_MESSAGE.ALREADY_EXISTS);
  }

  const slug = generateSlug(title);

  const projectPayload = {
    ...payload,

    title,

    slug,
  };

  return baseService.create(projectPayload);
};

const getProjects = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getProjectById = async (id: string) => {
  return baseService.getById(id);
};

const updateProject = async (id: string, payload: TUpdateProjectPayload) => {
  const existingProject = await Project.findById(id);

  if (!existingProject) {
    throw new AppError(httpStatus.NOT_FOUND, PROJECT_MESSAGE.NOT_FOUND);
  }

  const title = payload.title?.trim() ?? existingProject.title;

  const duplicateProject = await Project.findOne({
    title,

    _id: {
      $ne: existingProject._id,
    },
  });

  if (duplicateProject) {
    throw new AppError(httpStatus.CONFLICT, PROJECT_MESSAGE.ALREADY_EXISTS);
  }

  const updatePayload: Partial<IProject> = {
    ...payload,
  };

  if (payload.title) {
    updatePayload.slug = generateSlug(title);
  }

  return baseService.update(id, updatePayload);
};

const deleteProject = async (id: string) => {
  return baseService.delete(id);
};

const getFeaturedProjects = async () => {
  return Project.find({
    featured: true,

    isActive: true,
  })
    .sort({
      sortOrder: 1,

      createdAt: -1,
    })
    .lean();
};

const getProjectBySlug = async (slug: string) => {
  const result = await Project.findOne({
    slug,

    isActive: true,
  });

  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, PROJECT_MESSAGE.NOT_FOUND);
  }

  return result;
};

const getProjectsByCategory = async (category: TProjectCategory) => {
  return Project.find({
    category,

    isActive: true,
  })
    .sort({
      sortOrder: 1,

      createdAt: -1,
    })
    .lean();
};

const getProjectsByTechnology = async (technology: string) => {
  return Project.find({
    technologies: {
      $in: [technology],
    },

    isActive: true,
  })
    .sort({
      sortOrder: 1,

      createdAt: -1,
    })
    .lean();
};

const getProjectsByStatus = async (status: TProjectStatus) => {
  return Project.find({
    status,

    isActive: true,
  })
    .sort({
      sortOrder: 1,

      createdAt: -1,
    })
    .lean();
};

const getActiveProjects = async () => {
  return Project.find({
    isActive: true,
  })
    .sort({
      featured: -1,

      sortOrder: 1,

      createdAt: -1,
    })
    .lean();
};

export const ProjectService = {
  createProject,

  getProjects,

  getProjectById,

  updateProject,

  deleteProject,

  getFeaturedProjects,

  getProjectBySlug,

  getProjectsByCategory,

  getProjectsByTechnology,

  getProjectsByStatus,

  getActiveProjects,
};
