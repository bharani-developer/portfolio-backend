// src/modules/about/about.model.ts

import { model, Schema } from "mongoose";

import type { IImage } from "../../interfaces/index.js";

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

    images: {
      type: [imageSchema],
      required: [true, "At least one image is required"],

      validate: [
        {
          validator(images: IImage[]) {
            return Array.isArray(images) && images.length > 0;
          },
          message: "At least one image is required",
        },

        {
          validator(images: IImage[]) {
            return images.length <= 20;
          },
          message: "Maximum 20 images are allowed",
        },

        {
          validator(images: IImage[]) {
            const publicIds = images.map((image) => image.publicId);

            return new Set(publicIds).size === publicIds.length;
          },
          message: "Duplicate image public IDs are not allowed",
        },

        {
          validator(images: IImage[]) {
            const urls = images.map((image) => image.url);

            return new Set(urls).size === urls.length;
          },
          message: "Duplicate image URLs are not allowed",
        },
      ],
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

      validate: {
        validator(stats: IAbout["stats"]) {
          return !stats || stats.length <= 20;
        },
        message: "Maximum 20 stats are allowed",
      },
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
