// src/modules/services/services.model.ts
import { model, Schema } from "mongoose";
import { SERVICES_DEFAULT } from "./services.constant.js";
const servicesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    shortDescription: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 3000,
    },
    icon: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    sortOrder: {
        type: Number,
        required: true,
        min: 0,
        default: SERVICES_DEFAULT.SORT_ORDER,
    },
    isActive: {
        type: Boolean,
        required: true,
        default: SERVICES_DEFAULT.IS_ACTIVE,
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
 * Slug
 *
 * unique: true already creates a unique index.
 * Do NOT create another schema.index({ slug: 1 }).
 */
/**
 * Active services sorted by order
 *
 * Used by:
 * - GET /services
 * - GET /services/active
 */
servicesSchema.index({
    isActive: 1,
    sortOrder: 1,
});
/**
 * Title lookups
 */
servicesSchema.index({
    title: 1,
});
/**
 * Recent services
 */
servicesSchema.index({
    createdAt: -1,
});
/**
 * Full-text search
 */
servicesSchema.index({
    title: "text",
    shortDescription: "text",
    description: "text",
});
/**
 * ============================================================================
 * Model
 * ============================================================================
 */
export const Service = model("Service", servicesSchema);
//# sourceMappingURL=services.model.js.map