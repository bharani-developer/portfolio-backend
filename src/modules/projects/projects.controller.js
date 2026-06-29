// src\modules\projects\projects.controller.ts
import { MESSAGE, httpStatus } from "../../constants/index.js";
import AppError from "../../utils/AppError.js";
import { catchAsync, sendResponse } from "../../utils/index.js";
import { ProjectService } from "./projects.service.js";
const getParam = (value, name) => {
    if (!value || Array.isArray(value)) {
        throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
    }
    return value;
};
const createProject = catchAsync(async (req, res) => {
    const result = await ProjectService.createProject(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: MESSAGE.CREATED,
        data: result,
    });
});
const getProjects = catchAsync(async (req, res) => {
    const result = await ProjectService.getProjects(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        meta: result.meta,
        data: result.result,
    });
});
const getProjectById = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Project ID");
    const result = await ProjectService.getProjectById(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const updateProject = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Project ID");
    const result = await ProjectService.updateProject(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.UPDATED,
        data: result,
    });
});
const deleteProject = catchAsync(async (req, res) => {
    const id = getParam(req.params.id, "Project ID");
    const result = await ProjectService.deleteProject(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.DELETED,
        data: result,
    });
});
const getFeaturedProjects = catchAsync(async (_req, res) => {
    const result = await ProjectService.getFeaturedProjects();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getActiveProjects = catchAsync(async (_req, res) => {
    const result = await ProjectService.getActiveProjects();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getProjectBySlug = catchAsync(async (req, res) => {
    const slug = getParam(req.params.slug, "Slug");
    const result = await ProjectService.getProjectBySlug(slug);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getProjectsByCategory = catchAsync(async (req, res) => {
    const category = getParam(req.params.category, "Category");
    const result = await ProjectService.getProjectsByCategory(category);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getProjectsByTechnology = catchAsync(async (req, res) => {
    const technology = getParam(req.params.technology, "Technology");
    const result = await ProjectService.getProjectsByTechnology(technology);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const getProjectsByStatus = catchAsync(async (req, res) => {
    const status = getParam(req.params.status, "Status");
    const result = await ProjectService.getProjectsByStatus(status);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
export const ProjectController = {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject,
    getFeaturedProjects,
    getActiveProjects,
    getProjectBySlug,
    getProjectsByCategory,
    getProjectsByTechnology,
    getProjectsByStatus,
};
//# sourceMappingURL=projects.controller.js.map