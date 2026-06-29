// src\modules\services\services.interface.ts

import type { HydratedDocument, Model } from "mongoose";

export interface IService {
  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  icon?: string;

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TServiceDocument = HydratedDocument<IService>;

export interface IServiceModel extends Model<IService> {}
