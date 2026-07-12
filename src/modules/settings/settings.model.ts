/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import { imageSchema } from '../../shared/schemas/index.js';

import { SETTINGS_DEFAULT, SETTINGS_VALIDATION } from './settings.constant.js';

import type {
  ISeoSettings,
  ISettings,
  ISettingsModel,
  ISocialLinks,
  TSettingsDocument,
} from './settings.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

/**
 * Social links schema.
 */
const socialLinksSchema = new Schema<ISocialLinks>(
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
    versionKey: false,
  },
);

/**
 * SEO schema.
 */
const seoSchema = new Schema<ISeoSettings>(
  {
    metaTitle: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.SEO.META_TITLE.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.SEO.META_TITLE.MAX_LENGTH,
    },

    metaDescription: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.SEO.META_DESCRIPTION.MAX_LENGTH,
    },

    metaKeywords: {
      type: [String] as unknown as StringConstructor[],
      default: [],
    },

    siteUrl: {
      type: String,
      required: true,
      trim: true,
      maxlength: SETTINGS_VALIDATION.SEO.SITE_URL.MAX_LENGTH,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const settingsSchema = new Schema<ISettings, ISettingsModel>(
  {
    siteTitle: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.SITE_TITLE.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.SITE_TITLE.MAX_LENGTH,
    },

    siteDescription: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.SITE_DESCRIPTION.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.SITE_DESCRIPTION.MAX_LENGTH,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: SETTINGS_VALIDATION.EMAIL.MAX_LENGTH,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.PHONE.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.PHONE.MAX_LENGTH,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      minlength: SETTINGS_VALIDATION.ADDRESS.MIN_LENGTH,
      maxlength: SETTINGS_VALIDATION.ADDRESS.MAX_LENGTH,
    },

    logo: {
      type: imageSchema,
    },

    favicon: {
      type: imageSchema,
    },

    socialLinks: {
      type: socialLinksSchema,
      default: SETTINGS_DEFAULT.SOCIAL_LINKS,
    },

    seo: {
      type: seoSchema,
      required: true,
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
 * Email lookup.
 */
settingsSchema.index({
  email: 1,
});

/**
 * Active settings lookup.
 *
 * Only one settings document should normally exist.
 */
settingsSchema.index({
  isActive: 1,
});

/**
 * Created date.
 */
settingsSchema.index({
  createdAt: -1,
});

/**
 * Updated date.
 */
settingsSchema.index({
  updatedAt: -1,
});
/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Active settings.
 *
 * Useful if multiple settings documents are ever supported
 * (multi-tenant, white-label, etc.).
 */
settingsSchema.index({
  isActive: 1,
  updatedAt: -1,
});

/**
 * Active settings ordered by creation date.
 */
settingsSchema.index({
  isActive: 1,
  createdAt: -1,
});

/**
 * Contact information lookup.
 */
settingsSchema.index({
  email: 1,
  phone: 1,
});

/**
 * Contact information for active settings.
 */
settingsSchema.index({
  isActive: 1,
  email: 1,
});

/**
 * SEO site URL lookup.
 */
settingsSchema.index({
  'seo.siteUrl': 1,
});
/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

/**
 * Portfolio settings search.
 *
 * Useful for:
 * - Admin search
 * - Global settings lookup
 * - CMS search
 */
settingsSchema.index({
  siteTitle: 'text',
  siteDescription: 'text',
  address: 'text',
  email: 'text',
  phone: 'text',
  'seo.metaTitle': 'text',
  'seo.metaDescription': 'text',
  'seo.metaKeywords': 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize settings before validation.
 */
settingsSchema.pre('validate', function (this: TSettingsDocument) {
  this.siteTitle = this.siteTitle.trim();
  this.siteDescription = this.siteDescription.trim();
  this.email = this.email.trim().toLowerCase();
  this.phone = this.phone.trim();
  this.address = this.address.trim();
});

/**
 * Normalize social links.
 */
settingsSchema.pre('save', function (this: TSettingsDocument) {
  const links = this.socialLinks;

  if (!links) {
    return;
  }

  Object.keys(links).forEach((key) => {
    const value = links[key as keyof typeof links];

    if (typeof value === 'string') {
      links[key as keyof typeof links] = value.trim() as never;
    }
  });
});

/**
 * Normalize SEO settings.
 */
settingsSchema.pre('save', function (this: TSettingsDocument) {
  if (!this.seo) {
    return;
  }

  this.seo.metaTitle = this.seo.metaTitle.trim();

  this.seo.metaDescription = this.seo.metaDescription.trim();

  this.seo.siteUrl = this.seo.siteUrl.trim();

  this.seo.metaKeywords = [
    ...new Set(this.seo.metaKeywords.map((keyword: string) => keyword.trim()).filter(Boolean)),
  ];
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the settings contain a logo.
 */
settingsSchema.virtual('hasLogo').get(function (this: TSettingsDocument) {
  return Boolean(this.logo?.url);
});

/**
 * Whether the settings contain a favicon.
 */
settingsSchema.virtual('hasFavicon').get(function (this: TSettingsDocument) {
  return Boolean(this.favicon?.url);
});

/**
 * Whether SEO has been configured.
 */
settingsSchema.virtual('hasSeo').get(function (this: TSettingsDocument) {
  return Boolean(this.seo.metaTitle && this.seo.metaDescription && this.seo.siteUrl);
});

/**
 * Number of configured SEO keywords.
 */
settingsSchema.virtual('seoKeywordCount').get(function (this: TSettingsDocument) {
  return this.seo.metaKeywords.length;
});

/**
 * Number of configured social links.
 */
settingsSchema.virtual('socialLinkCount').get(function (this: TSettingsDocument) {
  return Object.values(this.socialLinks).filter(
    (value) => typeof value === 'string' && value.trim().length > 0,
  ).length;
});

/**
 * Whether at least one social link exists.
 */
settingsSchema.virtual('hasSocialLinks').get(function (this: TSettingsDocument) {
  return Object.values(this.socialLinks).some(
    (value) => typeof value === 'string' && value.trim().length > 0,
  );
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Settings = model<ISettings, ISettingsModel>('Settings', settingsSchema);
