// src\modules\projects\projects.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

import type { PROJECT_CATEGORY, PROJECT_STATUS } from "./projects.constant.js";

export type TProjectCategory =
  (typeof PROJECT_CATEGORY)[keyof typeof PROJECT_CATEGORY];

export type TProjectStatus =
  (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];

export interface IProject {
  title: string;

  slug: string;

  shortDescription: string;

  description: string;

  thumbnail?: IImage;

  gallery: IImage[];

  technologies: string[];

  category: TProjectCategory;

  githubUrl?: string;

  liveUrl?: string;

  featured: boolean;

  status: TProjectStatus;

  startDate?: Date;

  endDate?: Date | null;

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TProjectDocument = HydratedDocument<IProject>;

export type TCreateProjectPayload = Omit<
  IProject,
  "slug" | "createdAt" | "updatedAt"
>;

export type TUpdateProjectPayload = Partial<
  Omit<IProject, "slug" | "createdAt" | "updatedAt">
>;

export interface IProjectModel extends Model<IProject> {}
