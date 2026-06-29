// src\modules\certifications\certifications.interface.ts

import type { HydratedDocument, Model } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

export interface ICertification {
  title: string;

  slug: string;

  issuer: string;

  certificateImage?: IImage;

  credentialId?: string;

  credentialUrl?: string;

  issueDate: Date;

  expiryDate: Date | null;

  neverExpires: boolean;

  description?: string;

  skills: string[];

  sortOrder: number;

  isActive: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}

export type TCertificationDocument = HydratedDocument<ICertification>;

export type TCreateCertificationPayload = Omit<
  ICertification,
  "slug" | "createdAt" | "updatedAt"
>;

export type TUpdateCertificationPayload = Partial<
  Omit<ICertification, "slug" | "createdAt" | "updatedAt">
>;

export interface ICertificationModel extends Model<ICertification> {}
