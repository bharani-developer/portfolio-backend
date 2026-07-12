// src/modules/certifications/certifications.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { Schema, model } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import { CERTIFICATION_DEFAULT, CERTIFICATION_VALIDATION } from './certifications.constant.js';

import type {
  ICertification,
  ICertificationModel,
  TCertificationDocument,
} from './certifications.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const certificationSchema = new Schema<ICertification, ICertificationModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: CERTIFICATION_VALIDATION.TITLE.MIN_LENGTH,
      maxlength: CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      maxlength: CERTIFICATION_VALIDATION.TITLE.MAX_LENGTH,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
      minlength: CERTIFICATION_VALIDATION.ISSUER.MIN_LENGTH,
      maxlength: CERTIFICATION_VALIDATION.ISSUER.MAX_LENGTH,
    },

    certificateImage: {
      type: imageSchema,
    },

    credentialId: {
      type: String,
      trim: true,
      maxlength: CERTIFICATION_VALIDATION.CREDENTIAL_ID.MAX_LENGTH,
    },

    credentialUrl: {
      type: String,
      trim: true,
      maxlength: CERTIFICATION_VALIDATION.CREDENTIAL_URL.MAX_LENGTH,
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
      maxlength: CERTIFICATION_VALIDATION.DESCRIPTION.MAX_LENGTH,
    },

    skills: {
      type: [String],
      default: [],

      validate: [
        {
          validator(skills: string[]) {
            return skills.length <= CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT;
          },
          message: `Maximum ${CERTIFICATION_VALIDATION.SKILLS.MAX_COUNT} skills are allowed.`,
        },

        {
          validator(skills: string[]) {
            return skills.every(
              (skill) =>
                skill.trim().length > 0 &&
                skill.length <= CERTIFICATION_VALIDATION.SKILLS.MAX_LENGTH,
            );
          },
          message: 'Each skill must be non-empty and within the maximum length.',
        },

        {
          validator(skills: string[]) {
            return new Set(skills).size === skills.length;
          },
          message: 'Duplicate skills are not allowed.',
        },
      ],
    },
    sortOrder: {
      type: Number,
      default: CERTIFICATION_DEFAULT.SORT_ORDER,
      min: CERTIFICATION_VALIDATION.SORT_ORDER.MIN,
      max: CERTIFICATION_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: CERTIFICATION_DEFAULT.IS_ACTIVE,
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
 * Issuer lookup.
 */
certificationSchema.index({
  issuer: 1,
});

/**
 * Active certifications.
 */
certificationSchema.index({
  isActive: 1,
});

/**
 * Never-expiring certifications.
 */
certificationSchema.index({
  neverExpires: 1,
});

/**
 * Portfolio ordering.
 */
certificationSchema.index({
  sortOrder: 1,
});

/**
 * Recently issued certifications.
 */
certificationSchema.index({
  issueDate: -1,
});

/**
 * Expiring certifications.
 */
certificationSchema.index({
  expiryDate: -1,
});

/**
 * Skill filtering.
 */
certificationSchema.index({
  skills: 1,
});

/**
 * Recently created.
 */
certificationSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
certificationSchema.index({
  updatedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Active certifications ordered for display.
 */
certificationSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/**
 * Certifications by issuer.
 */
certificationSchema.index({
  issuer: 1,
  isActive: 1,
});

/**
 * Certifications by issue date.
 */
certificationSchema.index({
  isActive: 1,
  issueDate: -1,
});

/**
 * Expiring certifications.
 */
certificationSchema.index({
  neverExpires: 1,
  expiryDate: 1,
});

/**
 * Duplicate certification protection.
 */
certificationSchema.index(
  {
    title: 1,
    issuer: 1,
  },
  {
    unique: true,
  },
);

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

certificationSchema.index({
  title: 'text',
  issuer: 'text',
  description: 'text',
  skills: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize certification data before saving.
 */
certificationSchema.pre('save', function (this: TCertificationDocument) {
  /**
   * Certifications marked as never expiring
   * should not have an expiry date.
   */
  if (this.neverExpires) {
    this.expiryDate = null;
  }

  /**
   * Normalize skills.
   */
  if (this.isModified('skills')) {
    this.skills = [...new Set(this.skills.map((skill: string) => skill.trim()))];
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the certification has expired.
 */
certificationSchema.virtual('isExpired').get(function (this: TCertificationDocument) {
  if (this.neverExpires || !this.expiryDate) {
    return false;
  }

  return this.expiryDate.getTime() < Date.now();
});

/**
 * Whether the certification is currently valid.
 */
certificationSchema.virtual('isValid').get(function (this: TCertificationDocument) {
  if (!this.isActive) {
    return false;
  }

  if (this.neverExpires || !this.expiryDate) {
    return true;
  }

  return this.expiryDate.getTime() >= Date.now();
});

/**
 * Number of skills associated with the certification.
 */
certificationSchema.virtual('skillCount').get(function (this: TCertificationDocument) {
  return this.skills.length;
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Certification = model<ICertification, ICertificationModel>(
  'Certification',
  certificationSchema,
);
