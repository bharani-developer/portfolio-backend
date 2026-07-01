// src/modules/skills/skills.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

export interface ISkill {
  name: string;

  slug: string;

  category: string;

  proficiency: number;

  image?: IImage;

  description?: string;

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TSkillDocument = HydratedDocument<ISkill>;

export interface ISkillModel extends Model<ISkill> {}
