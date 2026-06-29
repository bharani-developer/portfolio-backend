// src\modules\about\about.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

export interface IAboutStats {
  label: string;
  value: string;
}

export interface IAbout {
  profileImage?: IImage;

  fullName: string;

  designation: string;

  bio: string;

  email?: string;

  phone?: string;

  address?: string;

  resumeUrl?: string;

  yearsOfExperience?: number;

  stats?: IAboutStats[];

  isActive: boolean;
}

export type TAboutDocument = HydratedDocument<IAbout>;

export interface IAboutModel extends Model<IAbout> {}
