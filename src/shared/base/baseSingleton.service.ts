// src\shared\base\baseSingleton.service.ts

import httpStatus from "http-status";

import AppError from "../../utils/AppError.js";

import type { HydratedDocument, Model } from "mongoose";

export class BaseSingletonService<T extends object> {
  constructor(
    private readonly model: Model<T>,
    private readonly modelName: string,
  ) {}

  async create(payload: Partial<T>): Promise<HydratedDocument<T>> {
    const existingDocument = await this.model.findOne();

    if (existingDocument) {
      throw new AppError(
        httpStatus.CONFLICT,
        `${this.modelName} already exists`,
      );
    }

    return this.model.create(payload);
  }

  async get(): Promise<HydratedDocument<T>> {
    const result = await this.model.findOne();

    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
    }

    return result;
  }

  async update(payload: Partial<T>): Promise<HydratedDocument<T>> {
    const existingDocument = await this.model.findOne();

    if (!existingDocument) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
    }

    const result = await this.model.findByIdAndUpdate(
      existingDocument._id,
      payload,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
    }

    return result;
  }

  async delete(): Promise<void> {
    const existingDocument = await this.model.findOne();

    if (!existingDocument) {
      throw new AppError(httpStatus.NOT_FOUND, `${this.modelName} not found`);
    }

    await this.model.findByIdAndDelete(existingDocument._id);
  }

  async exists(): Promise<boolean> {
    const result = await this.model.exists({});

    return Boolean(result);
  }
}
