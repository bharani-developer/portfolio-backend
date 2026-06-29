// src/modules/certifications/certifications.model.ts
import { Schema, model } from "mongoose";
import { imageSchema } from "../../shared/schemas/index.js";
import { CERTIFICATION_DEFAULT } from "./certifications.constant.js";
const certificationSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    issuer: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200,
    },
    certificateImage: {
        type: imageSchema,
    },
    credentialId: {
        type: String,
        trim: true,
        maxlength: 200,
    },
    credentialUrl: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    issueDate: {
        type: Date,
        required: true,
    },
    expiryDate: {
        type: Date,
        default: null,
    },
    neverExpires: {
        type: Boolean,
        default: CERTIFICATION_DEFAULT.NEVER_EXPIRES,
    },
    description: {
        type: String,
        trim: true,
        maxlength: 5000,
    },
    skills: {
        type: [String],
        default: [],
    },
    sortOrder: {
        type: Number,
        min: 0,
        default: CERTIFICATION_DEFAULT.SORT_ORDER,
    },
    isActive: {
        type: Boolean,
        default: CERTIFICATION_DEFAULT.IS_ACTIVE,
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
 * Issuer filtering
 */
certificationSchema.index({
    issuer: 1,
    isActive: 1,
});
/**
 * Active certifications ordering
 */
certificationSchema.index({
    isActive: 1,
    sortOrder: 1,
});
/**
 * Recently issued certifications
 */
certificationSchema.index({
    issueDate: -1,
});
/**
 * Expiration tracking
 */
certificationSchema.index({
    expiryDate: -1,
});
/**
 * Expiration status queries
 */
certificationSchema.index({
    neverExpires: 1,
    expiryDate: 1,
});
/**
 * Skill filtering
 */
certificationSchema.index({
    skills: 1,
});
/**
 * Full-text search
 */
certificationSchema.index({
    title: "text",
    issuer: "text",
    description: "text",
    skills: "text",
});
/**
 * Prevent duplicate certifications
 */
certificationSchema.index({
    title: 1,
    issuer: 1,
}, {
    unique: true,
});
/**
 * ============================================================================
 * Model
 * ============================================================================
 */
export const Certification = model("Certification", certificationSchema);
//# sourceMappingURL=certifications.model.js.map