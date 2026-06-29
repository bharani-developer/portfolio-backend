// src/modules/projects/projects.model.ts
import { model, Schema } from "mongoose";
import { imageSchema } from "../../shared/schemas/index.js";
import { PROJECT_CATEGORIES, PROJECT_DEFAULT, PROJECT_STATUSES, } from "./projects.constant.js";
const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 10000,
    },
    thumbnail: {
        type: imageSchema,
    },
    gallery: {
        type: [imageSchema],
        default: [],
    },
    technologies: {
        type: [String],
        required: true,
        validate: {
            validator(value) {
                return Array.isArray(value) && value.length > 0;
            },
            message: "At least one technology is required",
        },
    },
    category: {
        type: String,
        required: true,
        enum: PROJECT_CATEGORIES,
    },
    githubUrl: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    liveUrl: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    featured: {
        type: Boolean,
        default: PROJECT_DEFAULT.FEATURED,
    },
    status: {
        type: String,
        required: true,
        enum: PROJECT_STATUSES,
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
        min: 0,
        default: PROJECT_DEFAULT.SORT_ORDER,
    },
    isActive: {
        type: Boolean,
        default: PROJECT_DEFAULT.IS_ACTIVE,
    },
}, {
    timestamps: true,
    versionKey: false,
});
/**
 * ============================================================================
 * Indexes
 * ============================================================================
 */
/**
 * Category filtering
 */
projectSchema.index({
    category: 1,
    isActive: 1,
});
/**
 * Status filtering
 */
projectSchema.index({
    status: 1,
    isActive: 1,
});
/**
 * Featured projects
 */
projectSchema.index({
    featured: 1,
    isActive: 1,
});
/**
 * Portfolio ordering
 */
projectSchema.index({
    isActive: 1,
    sortOrder: 1,
});
/**
 * Technology filtering
 */
projectSchema.index({
    technologies: 1,
});
/**
 * Recent projects
 */
projectSchema.index({
    createdAt: -1,
});
/**
 * Project timeline sorting
 */
projectSchema.index({
    startDate: -1,
    endDate: -1,
});
/**
 * Full-text search
 */
projectSchema.index({
    title: "text",
    shortDescription: "text",
    description: "text",
    technologies: "text",
});
/**
 * ============================================================================
 * Model
 * ============================================================================
 */
export const Project = model("Project", projectSchema);
//# sourceMappingURL=projects.model.js.map