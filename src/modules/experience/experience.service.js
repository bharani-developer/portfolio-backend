// src\modules\experience\experience.service.ts
import httpStatus from "http-status";
import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";
import AppError from "../../utils/AppError.js";
import { EXPERIENCE_MESSAGE, EXPERIENCE_SEARCHABLE_FIELDS, } from "./experience.constant.js";
import { Experience } from "./experience.model.js";
const baseService = new BaseCrudService(Experience, [
    ...EXPERIENCE_SEARCHABLE_FIELDS,
]);
const createExperience = async (payload) => {
    if (!payload.company) {
        throw new AppError(httpStatus.BAD_REQUEST, "Company is required");
    }
    if (!payload.position) {
        throw new AppError(httpStatus.BAD_REQUEST, "Position is required");
    }
    const company = payload.company;
    const position = payload.position;
    const existingExperience = await Experience.findOne({
        company,
        position,
    });
    if (existingExperience) {
        throw new AppError(httpStatus.CONFLICT, EXPERIENCE_MESSAGE.ALREADY_EXISTS);
    }
    payload.slug = generateSlug(company);
    return baseService.create(payload);
};
const getExperiences = async (query) => {
    return baseService.getAll(query);
};
const getExperienceById = async (id) => {
    return baseService.getById(id);
};
const updateExperience = async (id, payload) => {
    const existingExperience = await Experience.findById(id);
    if (!existingExperience) {
        throw new AppError(httpStatus.NOT_FOUND, EXPERIENCE_MESSAGE.NOT_FOUND);
    }
    if (payload.company) {
        const company = payload.company;
        const position = payload.position ?? existingExperience.position;
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
        payload.slug = generateSlug(company);
    }
    return baseService.update(id, payload);
};
const deleteExperience = async (id) => {
    return baseService.delete(id);
};
const getActiveExperiences = async () => {
    return Experience.find({
        isActive: true,
    })
        .sort({
        isCurrent: -1,
        startDate: -1,
        sortOrder: 1,
    })
        .lean();
};
const getCurrentExperiences = async () => {
    return Experience.find({
        isActive: true,
        isCurrent: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
const getExperiencesByTechnology = async (technology) => {
    return Experience.find({
        technologies: technology,
        isActive: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
const getExperiencesByCompany = async (company) => {
    return Experience.find({
        company,
        isActive: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
const getExperienceBySlug = async (slug) => {
    const result = await Experience.findOne({
        slug,
        isActive: true,
    });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, EXPERIENCE_MESSAGE.NOT_FOUND);
    }
    return result;
};
export const ExperienceService = {
    createExperience,
    getExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience,
    getActiveExperiences,
    getCurrentExperiences,
    getExperiencesByTechnology,
    getExperiencesByCompany,
    getExperienceBySlug,
};
//# sourceMappingURL=experience.service.js.map