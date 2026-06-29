// src\modules\projects\projects.service.ts
import httpStatus from "http-status";
import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";
import AppError from "../../utils/AppError.js";
import { PROJECT_MESSAGE, PROJECT_SEARCHABLE_FIELDS, } from "./projects.constant.js";
import { Project } from "./projects.model.js";
const baseService = new BaseCrudService(Project, [
    ...PROJECT_SEARCHABLE_FIELDS,
]);
const createProject = async (payload) => {
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
const getProjects = async (query) => {
    return baseService.getAll(query);
};
const getProjectById = async (id) => {
    return baseService.getById(id);
};
const updateProject = async (id, payload) => {
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
    const updatePayload = {
        ...payload,
    };
    if (payload.title) {
        updatePayload.slug = generateSlug(title);
    }
    return baseService.update(id, updatePayload);
};
const deleteProject = async (id) => {
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
const getProjectBySlug = async (slug) => {
    const result = await Project.findOne({
        slug,
        isActive: true,
    });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, PROJECT_MESSAGE.NOT_FOUND);
    }
    return result;
};
const getProjectsByCategory = async (category) => {
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
const getProjectsByTechnology = async (technology) => {
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
const getProjectsByStatus = async (status) => {
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
//# sourceMappingURL=projects.service.js.map