// src\modules\about\about.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/index.js";

import type { IAbout, IAboutModel } from "./about.interface.js";

const aboutStatsSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    value: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
  },
  {
    _id: false,
  },
);

const aboutSchema = new Schema<IAbout, IAboutModel>(
  {
    profileImage: {
      type: imageSchema,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    bio: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
      maxlength: 30,
    },

    address: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    resumeUrl: {
      type: String,
      trim: true,
    },

    yearsOfExperience: {
      type: Number,
      min: 0,
      max: 100,
    },

    stats: {
      type: [aboutStatsSchema],
      default: [],
    },

    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const About = model<IAbout, IAboutModel>("About", aboutSchema);
