// src/modules/projects/projects.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import {
  PROJECT_CATEGORIES,
  PROJECT_DEFAULT,
  PROJECT_STATUS,
  PROJECT_STATUSES,
  PROJECT_VALIDATION,
} from './projects.constant.js';

import type { IProject, IProjectModel, TProjectDocument } from './projects.types.js';
import type { IImage } from '../../shared/types/image.type.js';
/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const projectSchema = new Schema<IProject, IProjectModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: PROJECT_VALIDATION.TITLE.MIN_LENGTH,
      maxlength: PROJECT_VALIDATION.TITLE.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: PROJECT_VALIDATION.SLUG.MAX_LENGTH,
    },

    shortDescription: {
      type: String,
      required: true,
      trim: true,
      minlength: PROJECT_VALIDATION.SHORT_DESCRIPTION.MIN_LENGTH,
      maxlength: PROJECT_VALIDATION.SHORT_DESCRIPTION.MAX_LENGTH,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minlength: PROJECT_VALIDATION.DESCRIPTION.MIN_LENGTH,
      maxlength: PROJECT_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    thumbnail: {
      type: imageSchema,
    },

    gallery: {
      type: [imageSchema],
      default: [],

      validate: [
        {
          validator(images: IImage[]) {
            return images.length <= PROJECT_VALIDATION.GALLERY.MAX_COUNT;
          },

          message: `Maximum ${PROJECT_VALIDATION.GALLERY.MAX_COUNT} gallery images are allowed.`,
        },

        {
          validator(images: IImage[]) {
            const publicIds = images.map((image: IImage) => image.publicId);

            return new Set(publicIds).size === publicIds.length;
          },

          message: 'Duplicate gallery image public IDs are not allowed.',
        },

        {
          validator(images: IImage[]) {
            const urls = images.map((image: IImage) => image.url);

            return new Set(urls).size === urls.length;
          },

          message: 'Duplicate gallery image URLs are not allowed.',
        },
      ],
    },

    technologies: {
      type: [String],
      default: [],

      validate: [
        {
          validator(technologies: string[]) {
            return (
              technologies.length > 0 &&
              technologies.length <= PROJECT_VALIDATION.TECHNOLOGIES.MAX_COUNT
            );
          },

          message: 'Project must contain between 1 and 100 technologies.',
        },

        {
          validator(technologies: string[]) {
            return technologies.every(
              (technology) =>
                technology.trim().length > 0 &&
                technology.length <= PROJECT_VALIDATION.TECHNOLOGIES.MAX_LENGTH,
            );
          },

          message: 'Invalid technology.',
        },

        {
          validator(technologies: string[]) {
            return new Set(technologies).size === technologies.length;
          },

          message: 'Duplicate technologies are not allowed.',
        },
      ],
    },

    category: {
      type: String,
      required: true,
      enum: PROJECT_CATEGORIES,
    },

    githubUrl: {
      type: String,
      trim: true,
      maxlength: PROJECT_VALIDATION.GITHUB_URL.MAX_LENGTH,
    },

    liveUrl: {
      type: String,
      trim: true,
      maxlength: PROJECT_VALIDATION.LIVE_URL.MAX_LENGTH,
    },

    featured: {
      type: Boolean,
      default: PROJECT_DEFAULT.FEATURED,
    },

    status: {
      type: String,
      required: true,
      enum: PROJECT_STATUSES,
      default: PROJECT_STATUS.PLANNING,
    },
    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
      default: null,
    },

    sortOrder: {
      type: Number,
      default: PROJECT_DEFAULT.SORT_ORDER,
      min: PROJECT_VALIDATION.SORT_ORDER.MIN,
      max: PROJECT_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: PROJECT_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,
    versionKey: false,

    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  },
);
/* -------------------------------------------------------------------------- */
/*                              4. Query Indexes                              */
/* -------------------------------------------------------------------------- */

/**
 * Unique slug lookup.
 */
projectSchema.index({
  slug: 1,
});

/**
 * Unique title lookup.
 */
projectSchema.index({
  title: 1,
});

/**
 * Category filtering.
 */
projectSchema.index({
  category: 1,
});

/**
 * Status filtering.
 */
projectSchema.index({
  status: 1,
});

/**
 * Featured projects.
 */
projectSchema.index({
  featured: 1,
});

/**
 * Active projects.
 */
projectSchema.index({
  isActive: 1,
});

/**
 * Technology filtering.
 */
projectSchema.index({
  technologies: 1,
});

/**
 * Portfolio ordering.
 */
projectSchema.index({
  sortOrder: 1,
});

/**
 * Project timeline.
 */
projectSchema.index({
  startDate: -1,
});

/**
 * Project completion timeline.
 */
projectSchema.index({
  endDate: -1,
});

/**
 * Recently created projects.
 */
projectSchema.index({
  createdAt: -1,
});

/**
 * Recently updated projects.
 */
projectSchema.index({
  updatedAt: -1,
});
/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio display ordering.
 */
projectSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Featured projects.
 */
projectSchema.index({
  featured: 1,
  isActive: 1,
});

/**
 * Category listing.
 */
projectSchema.index({
  category: 1,
  isActive: 1,
});

/**
 * Status listing.
 */
projectSchema.index({
  status: 1,
  isActive: 1,
});

/**
 * Featured projects by category.
 */
projectSchema.index({
  category: 1,
  featured: 1,
  isActive: 1,
});

/**
 * Featured projects by status.
 */
projectSchema.index({
  status: 1,
  featured: 1,
  isActive: 1,
});

/**
 * Project timeline.
 */
projectSchema.index({
  startDate: -1,
  endDate: -1,
});

/**
 * Active timeline.
 */
projectSchema.index({
  isActive: 1,
  startDate: -1,
});

/**
 * Technology filtering.
 */
projectSchema.index({
  technologies: 1,
  isActive: 1,
});
/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio project search.
 */
projectSchema.index({
  title: 'text',
  shortDescription: 'text',
  description: 'text',
  technologies: 'text',
  category: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Validate project dates.
 */
projectSchema.pre('validate', function (this: TProjectDocument) {
  if (this.startDate && this.endDate && this.endDate < this.startDate) {
    this.invalidate('endDate', 'End date must be greater than or equal to the start date.');
  }
});

/**
 * Normalize technologies before saving.
 */
projectSchema.pre('save', function (this: TProjectDocument) {
  if (this.isModified('technologies')) {
    this.technologies = [
      ...new Set(this.technologies.map((technology: string) => technology.trim()).filter(Boolean)),
    ];
  }
});

/**
 * Normalize gallery before saving.
 */
projectSchema.pre('save', function (this: TProjectDocument) {
  if (this.isModified('gallery')) {
    const uniqueImages = new Map<string, (typeof this.gallery)[number]>();

    for (const image of this.gallery) {
      uniqueImages.set(image.publicId, image);
    }

    this.gallery = [...uniqueImages.values()];
  }
});
/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Total technologies used.
 */
projectSchema.virtual('technologyCount').get(function (this: TProjectDocument) {
  return this.technologies.length;
});

/**
 * Total gallery images.
 */
projectSchema.virtual('galleryImageCount').get(function (this: TProjectDocument) {
  return this.gallery.length;
});

/**
 * Whether the project has a live demo.
 */
projectSchema.virtual('hasLiveDemo').get(function (this: TProjectDocument) {
  return Boolean(this.liveUrl);
});

/**
 * Whether the project has a GitHub repository.
 */
projectSchema.virtual('hasGithubRepository').get(function (this: TProjectDocument) {
  return Boolean(this.githubUrl);
});

/**
 * Whether the project has started.
 */
projectSchema.virtual('hasStarted').get(function (this: TProjectDocument) {
  if (!this.startDate) {
    return false;
  }

  return this.startDate <= new Date();
});

/**
 * Whether the project has been completed.
 */
projectSchema.virtual('isCompleted').get(function (this: TProjectDocument) {
  return this.status === 'Completed';
});

/**
 * Whether the project is currently active.
 */
projectSchema.virtual('isOngoing').get(function (this: TProjectDocument) {
  return (
    this.startDate !== undefined &&
    (this.endDate === null || this.endDate === undefined) &&
    this.status !== 'Completed' &&
    this.status !== 'Archived'
  );
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Project = model<IProject, IProjectModel>('Project', projectSchema);
