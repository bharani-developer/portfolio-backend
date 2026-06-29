// src\modules\education\education.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

import type {
  EDUCATION_LEVEL,
  EDUCATION_TYPE,
  GRADE_TYPE,
} from "./education.constant.js";

export type TEducationLevel =
  (typeof EDUCATION_LEVEL)[keyof typeof EDUCATION_LEVEL];

export type TEducationType =
  (typeof EDUCATION_TYPE)[keyof typeof EDUCATION_TYPE];

export type TGradeType = (typeof GRADE_TYPE)[keyof typeof GRADE_TYPE];

export interface IEducation {
  institution: string;

  slug: string;

  institutionLogo?: IImage;

  degree: string;

  fieldOfStudy: string;

  educationLevel: TEducationLevel;

  educationType: TEducationType;

  location: string;

  startDate: Date;

  endDate: Date | null;

  isCurrent: boolean;

  gradeType: TGradeType;

  grade?: string;

  description?: string;

  achievements: string[];

  skills: string[];

  institutionWebsite?: string;

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TEducationDocument = HydratedDocument<IEducation>;

export type TCreateEducationPayload = Omit<
  IEducation,
  "slug" | "createdAt" | "updatedAt"
>;

export type TUpdateEducationPayload = Partial<
  Omit<IEducation, "slug" | "createdAt" | "updatedAt">
>;

export interface IEducationModel extends Model<IEducation> {}
