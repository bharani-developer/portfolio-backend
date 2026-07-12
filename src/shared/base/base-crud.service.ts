// src/shared/base/base-crud.service.ts

import httpStatus from 'http-status';
import mongoose, { type HydratedDocument, type Model } from 'mongoose';

import { QueryBuilder } from '../query-builder/query-builder.js';

import { AppError } from '../utils/index.js';

type QueryParams = Record<string, unknown>;

type MongoFilter = Record<string, unknown>;

export class BaseCrudService<T extends object> {
  constructor(
    private readonly model: Model<T>,
    private readonly searchableFields: string[] = [],
  ) {}

  async create(payload: Partial<T>): Promise<HydratedDocument<T>> {
    return this.model.create(payload);
  }

  async getAll(query: QueryParams): Promise<{
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
    result: HydratedDocument<T>[];
  }> {
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
      result: result as HydratedDocument<T>[],
    };
  }

  async getById(id: string): Promise<HydratedDocument<T>> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Invalid ID');
    }

    const result = await this.model.findById(id);

    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.model.modelName} not found`);
    }

    return result;
  }

  async update(id: string, payload: Partial<T>): Promise<HydratedDocument<T>> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Invalid ID');
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

  async delete(id: string): Promise<HydratedDocument<T>> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Invalid ID');
    }

    const result = await this.model.findByIdAndDelete(id);

    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.model.modelName} not found`);
    }

    return result;
  }

  async exists(filter: MongoFilter): Promise<boolean> {
    const result = await this.model.exists(filter);

    return Boolean(result);
  }

  async count(filter: MongoFilter = {}): Promise<number> {
    return this.model.countDocuments(filter);
  }
}
