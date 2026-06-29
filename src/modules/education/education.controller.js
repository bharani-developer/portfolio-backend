// src\modules\education\education.controller.ts
import { MESSAGE, httpStatus } from "../../constants/index.js";
import AppError from "../../utils/AppError.js";
import { catchAsync, sendResponse } from "../../utils/index.js";
import { EducationService } from "./education.service.js";
const getRequiredParam = (value, field) => {
    if (typeof value !== "string" || value.trim() === "") {
        throw new AppError(httpStatus.BAD_REQUEST, `${field} is required`);
    }
    return value;
};
const createEducation = catchAsync(async (req, res) => {
    const result = await EducationService.createEducation(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: MESSAGE.CREATED,
        data: result,
    });
});
const getEducations = catchAsync(async (req, res) => {
    const result = await EducationService.getEducations(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        meta: result.meta,
        data: result.result,
    });
});
const getEducationById = catchAsync(async (req, res) => {
    const id = getRequiredParam(req.params.id, "Education ID");
    const result = await EducationService.getEducationById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const updateEducation = catchAsync(async (req, res) => {
    const id = getRequiredParam(req.params.id, "Education ID");
    const result = await EducationService.updateEducation(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.UPDATED,
        data: result,
    });
});
const deleteEducation = catchAsync(async (req, res) => {
    const id = getRequiredParam(req.params.id, "Education ID");
    const result = await EducationService.deleteEducation(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.DELETED,
        data: result,
    });
});
const getActiveEducations = catchAsync(async (_req, res) => {
    const result = await EducationService.getActiveEducations();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getCurrentEducations = catchAsync(async (_req, res) => {
    const result = await EducationService.getCurrentEducations();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getEducationBySlug = catchAsync(async (req, res) => {
    const slug = getRequiredParam(req.params.slug, "Slug");
    const result = await EducationService.getEducationBySlug(slug);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getEducationsByLevel = catchAsync(async (req, res) => {
    const level = getRequiredParam(req.params.level, "Education level");
    const result = await EducationService.getEducationsByLevel(level);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getEducationsBySkill = catchAsync(async (req, res) => {
    const skill = getRequiredParam(req.params.skill, "Skill");
    const result = await EducationService.getEducationsBySkill(skill);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
export const EducationController = {
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
//# sourceMappingURL=education.controller.js.map