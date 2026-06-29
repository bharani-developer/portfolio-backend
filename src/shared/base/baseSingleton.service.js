// src\shared\base\baseSingleton.service.ts
import httpStatus from "http-status";
import AppError from "../../utils/AppError.js";
export class BaseSingletonService {
    model;
    modelName;
    constructor(model, modelName) {
        this.model = model;
        this.modelName = modelName;
    }
    async create(payload) {
        const existingDocument = await this.model.findOne();
        if (existingDocument) {
            throw new AppError(httpStatus.CONFLICT, `${this.modelName} already exists`);
        }
        return this.model.create(payload);
    }
    async get() {
        const result = await this.model.findOne();
        if (!result) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
        }
        return result;
    }
    async update(payload) {
        const existingDocument = await this.model.findOne();
        if (!existingDocument) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
        }
        const result = await this.model.findByIdAndUpdate(existingDocument._id, payload, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
        }
        return result;
    }
    async delete() {
        const existingDocument = await this.model.findOne();
        if (!existingDocument) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
        }
        await this.model.findByIdAndDelete(existingDocument._id);
    }
    async exists() {
        const result = await this.model.exists({});
        return Boolean(result);
    }
}
//# sourceMappingURL=baseSingleton.service.js.map