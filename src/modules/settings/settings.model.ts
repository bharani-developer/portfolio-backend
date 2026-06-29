// src\modules\settings\settings.model.ts

import { Schema, model } from "mongoose";

import type { ISettings } from "./settings.interface.js";

const imageSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },

    publicId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const socialLinksSchema = new Schema(
  {
    github: {
      type: String,
      trim: true,
    },

    linkedin: {
      type: String,
      trim: true,
    },

    twitter: {
      type: String,
      trim: true,
    },

    facebook: {
      type: String,
      trim: true,
    },

    instagram: {
      type: String,
      trim: true,
    },

    youtube: {
      type: String,
      trim: true,
    },

    leetcode: {
      type: String,
      trim: true,
    },

    hackerrank: {
      type: String,
      trim: true,
    },

    stackoverflow: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const seoSchema = new Schema(
  {
    metaTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    metaDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 300,
    },

    metaKeywords: {
      type: [String],
      default: [],
    },

    siteUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

const settingsSchema = new Schema<ISettings>(
  {
    siteTitle: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    siteDescription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    logo: imageSchema,

    favicon: imageSchema,

    socialLinks: {
      type: socialLinksSchema,
      default: {},
    },

    seo: {
      type: seoSchema,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

settingsSchema.index({
  email: 1,
});

export const Settings = model<ISettings>("Settings", settingsSchema);
