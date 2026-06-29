// src\modules\education\education.service.ts
import httpStatus from "http-status";
import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";
import AppError from "../../utils/AppError.js";
import { EDUCATION_MESSAGE, EDUCATION_SEARCHABLE_FIELDS, } from "./education.constant.js";
import { Education } from "./education.model.js";
const baseService = new BaseCrudService(Education, [
    ...EDUCATION_SEARCHABLE_FIELDS,
]);
const createEducation = async (payload) => {
    if (!payload.institution?.trim()) {
        throw new AppError(httpStatus.BAD_REQUEST, "Institution is required");
    }
    if (!payload.degree?.trim()) {
        throw new AppError(httpStatus.BAD_REQUEST, "Degree is required");
    }
    const institution = payload.institution.trim();
    const degree = payload.degree.trim();
    const existingEducation = await Education.findOne({
        institution,
        degree,
    });
    if (existingEducation) {
        throw new AppError(httpStatus.CONFLICT, EDUCATION_MESSAGE.ALREADY_EXISTS);
    }
    const slug = generateSlug(`${institution}-${degree}`);
    const educationPayload = {
        ...payload,
        institution,
        degree,
        slug,
    };
    return baseService.create(educationPayload);
};
const getEducations = async (query) => {
    return baseService.getAll(query);
};
const getEducationById = async (id) => {
    return baseService.getById(id);
};
const updateEducation = async (id, payload) => {
    const existingEducation = await Education.findById(id);
    if (!existingEducation) {
        throw new AppError(httpStatus.NOT_FOUND, EDUCATION_MESSAGE.NOT_FOUND);
    }
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
    const updatePayload = {
        ...payload,
    };
    if (payload.institution || payload.degree) {
        updatePayload.slug = generateSlug(`${institution}-${degree}`);
    }
    return baseService.update(id, updatePayload);
};
const deleteEducation = async (id) => {
    return baseService.delete(id);
};
const getActiveEducations = async () => {
    return Education.find({
        isActive: true,
    })
        .sort({
        isCurrent: -1,
        startDate: -1,
        sortOrder: 1,
    })
        .lean();
};
const getCurrentEducations = async () => {
    return Education.find({
        isCurrent: true,
        isActive: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
const getEducationBySlug = async (slug) => {
    const result = await Education.findOne({
        slug,
        isActive: true,
    });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, EDUCATION_MESSAGE.NOT_FOUND);
    }
    return result;
};
const getEducationsByLevel = async (educationLevel) => {
    return Education.find({
        educationLevel,
        isActive: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
const getEducationsBySkill = async (skill) => {
    return Education.find({
        skills: {
            $in: [skill],
        },
        isActive: true,
    })
        .sort({
        startDate: -1,
    })
        .lean();
};
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
};
//# sourceMappingURL=education.service.js.map