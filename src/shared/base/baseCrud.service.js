// src\shared\base\baseCrud.service.ts
import httpStatus from "http-status";
import mongoose from "mongoose";
import AppError from "../../utils/AppError.js";
import { QueryBuilder } from "../query-builder/queryBuilder.js";
export class BaseCrudService {
    model;
    searchableFields;
    constructor(model, searchableFields = []) {
        this.model = model;
        this.searchableFields = searchableFields;
    }
    async create(payload) {
        return this.model.create(payload);
    }
    async getAll(query) {
        const queryBuilder = new QueryBuilder(this.model.find(), query)
            .search(this.searchableFields)
            .filter()
            .sort()
            .paginate()
            .fields();
        const result = await queryBuilder.modelQuery;
        const meta = await queryBuilder.countTotal();
        return {
            meta,
            result: result,
        };
    }
    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError(httpStatus.BAD_REQUEST, "Invalid ID");
        }
        const result = await this.model.findById(id);
        if (!result) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.model.modelName} not found`);
        }
        return result;
    }
    async update(id, payload) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError(httpStatus.BAD_REQUEST, "Invalid ID");
        }
        const result = await this.model.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        });
        if (!result) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.model.modelName} not found`);
        }
        return result;
    }
    async delete(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new AppError(httpStatus.BAD_REQUEST, "Invalid ID");
        }
        const result = await this.model.findByIdAndDelete(id);
        if (!result) {
            throw new AppError(httpStatus.NOT_FOUND, `${this.model.modelName} not found`);
        }
        return result;
    }
    async exists(filter) {
        const result = await this.model.exists(filter);
        return Boolean(result);
    }
    async count(filter = {}) {
        return this.model.countDocuments(filter);
    }
}
//# sourceMappingURL=baseCrud.service.js.map