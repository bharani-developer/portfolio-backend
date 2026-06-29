// src\modules\certifications\certifications.controller.ts
import { MESSAGE, httpStatus } from "../../constants/index.js";
import { catchAsync, sendResponse } from "../../utils/index.js";
import AppError from "../../utils/AppError.js";
import { CertificationService } from "./certifications.service.js";
const getParam = (value, name) => {
    if (!value || Array.isArray(value)) {
        throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
    }
    return value;
};
const createCertification = catchAsync(async (req, res) => {
    const result = await CertificationService.createCertification(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: MESSAGE.CREATED,
        data: result,
    });
});
const getCertifications = catchAsync(async (req, res) => {
    const result = await CertificationService.getCertifications(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        meta: result.meta,
        data: result.result,
    });
});
const getCertificationById = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Certification ID");
    const result = await CertificationService.getCertificationById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const updateCertification = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Certification ID");
    const result = await CertificationService.updateCertification(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.UPDATED,
        data: result,
    });
});
const deleteCertification = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Certification ID");
    const result = await CertificationService.deleteCertification(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.DELETED,
        data: result,
    });
});
const getActiveCertifications = catchAsync(async (_req, res) => {
    const result = await CertificationService.getActiveCertifications();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getCertificationBySlug = catchAsync(async (req, res) => {
    const slug = getParam(req.params.slug, "Slug");
    const result = await CertificationService.getCertificationBySlug(slug);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getCertificationsBySkill = catchAsync(async (req, res) => {
    const skill = getParam(req.params.skill, "Skill");
    const result = await CertificationService.getCertificationsBySkill(skill);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getExpiredCertifications = catchAsync(async (_req, res) => {
    const result = await CertificationService.getExpiredCertifications();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getValidCertifications = catchAsync(async (_req, res) => {
    const result = await CertificationService.getValidCertifications();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getCertificationsByIssuer = catchAsync(async (req, res) => {
    const issuer = getParam(req.params.issuer, "Issuer");
    const result = await CertificationService.getCertificationsByIssuer(issuer);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
export const CertificationController = {
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
};
//# sourceMappingURL=certifications.controller.js.map