// src/modules/hero/hero.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/image.schema.js";

import { HERO_DEFAULT } from "./hero.constant.js";

import type { IHero, IHeroModel } from "./hero.interface.js";

const heroSchema = new Schema<IHero, IHeroModel>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: 150,
    },

    subtitle: {
      type: String,
      required: [true, "Subtitle is required"],
      trim: true,
      maxlength: 200,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 1000,
    },

    profileImage: {
      type: imageSchema,
    },

    resumeUrl: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    ctaButtonText: {
      type: String,
      trim: true,
      maxlength: 100,
    },

    ctaButtonLink: {
      type: String,
      trim: true,
      maxlength: 255,
    },

    technologies: {
      type: [String],
      default: [],
      validate: {
        validator(technologies: string[]) {
          const normalized = technologies.map((technology) =>
            technology.trim().toLowerCase()
          );

          return normalized.length === new Set(normalized).size;
        },
        message: "Duplicate technologies are not allowed",
      },
    },

    isActive: {
      type: Boolean,
      required: true,
      default: HERO_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

heroSchema.index({
  isActive: 1,
});

heroSchema.pre("save", async function () {
  if (this.technologies?.length > 0) {
    this.technologies = this.technologies.map((technology) =>
      technology.trim()
    );
  }
});

export const Hero = model<IHero, IHeroModel>(
  "Hero",
  heroSchema
);