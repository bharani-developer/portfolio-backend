// src/modules/skills/skills.model.ts

import { model, Schema } from "mongoose";

import { imageSchema } from "../../shared/schemas/image.schema.js";

import { SKILLS_CATEGORIES, SKILLS_DEFAULT, SKILLS_VALIDATION } from "./skills.constant.js";

import type { ISkill, ISkillModel } from "./skills.interface.js";

const skillsSchema = new Schema<ISkill, ISkillModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: SKILLS_VALIDATION.NAME.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },

    category: {
      type: String,
      required: true,
      enum: SKILLS_CATEGORIES,
      trim: true,
      index: true,
    },

    proficiency: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
      default: SKILLS_DEFAULT.PROFICIENCY,
    },

    image: {
      type: imageSchema,
      required: false,
      default: undefined,
    },

    description: {
      type: String,
      trim: true,
      maxlength: SKILLS_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    sortOrder: {
      type: Number,
      required: true,
      min: 0,
      default: SKILLS_DEFAULT.SORT_ORDER,
      index: true,
    },

    isActive: {
      type: Boolean,
      required: true,
      default: SKILLS_DEFAULT.IS_ACTIVE,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

/* -------------------------------------------------------------------------- */
/*                              Performance Indexes                           */
/* -------------------------------------------------------------------------- */

skillsSchema.index({
  category: 1,
  isActive: 1,
});

skillsSchema.index({
  sortOrder: 1,
  isActive: 1,
});

skillsSchema.index({
  name: 1,
});

/* -------------------------------------------------------------------------- */
/*                                  Model                                     */
/* -------------------------------------------------------------------------- */

export const Skill = model<ISkill, ISkillModel>(
  "Skill",
  skillsSchema,
);