// src\modules\services\services.service.ts
import httpStatus from "http-status";
import { BaseCrudService } from "../../shared/base/index.js";
import { generateSlug } from "../../shared/slug/index.js";
import AppError from "../../utils/AppError.js";
import { SERVICES_MESSAGE, SERVICES_SEARCHABLE_FIELDS, } from "./services.constant.js";
import { Service } from "./services.model.js";
const baseService = new BaseCrudService(Service, [
    ...SERVICES_SEARCHABLE_FIELDS,
]);
const createService = async (payload) => {
    const title = payload.title.trim();
    const existingService = await Service.findOne({
        title,
    });
    if (existingService) {
        throw new AppError(httpStatus.CONFLICT, SERVICES_MESSAGE.ALREADY_EXISTS);
    }
    const slug = generateSlug(title);
    return baseService.create({
        ...payload,
        title,
        slug,
    });
};
const getServices = async (query) => {
    return baseService.getAll(query);
};
const getServiceById = async (id) => {
    return baseService.getById(id);
};
const updateService = async (id, payload) => {
    const existingService = await Service.findById(id);
    if (!existingService) {
        throw new AppError(httpStatus.NOT_FOUND, SERVICES_MESSAGE.NOT_FOUND);
    }
    const title = payload.title?.trim() ?? existingService.title;
    const duplicateService = await Service.findOne({
        title,
        _id: {
            $ne: existingService._id,
        },
    });
    if (duplicateService) {
        throw new AppError(httpStatus.CONFLICT, SERVICES_MESSAGE.ALREADY_EXISTS);
    }
    const updatePayload = {
        ...payload,
    };
    if (payload.title) {
        updatePayload.title = title;
        updatePayload.slug = generateSlug(title);
    }
    return baseService.update(id, updatePayload);
};
const deleteService = async (id) => {
    return baseService.delete(id);
};
const getActiveServices = async () => {
    return Service.find({
        isActive: true,
    })
        .sort({
        sortOrder: 1,
    })
        .lean();
};
const getServiceBySlug = async (slug) => {
    const result = await Service.findOne({
        slug,
        isActive: true,
    });
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, SERVICES_MESSAGE.NOT_FOUND);
    }
    return result;
};
export const ServicesService = {
    createService,
    getServices,
    getServiceById,
    updateService,
    deleteService,
    getActiveServices,
    getServiceBySlug,
};
//# sourceMappingURL=services.service.js.map