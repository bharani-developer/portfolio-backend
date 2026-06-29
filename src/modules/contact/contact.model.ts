// src/modules/contact/contact.model.ts

import { model, Schema } from "mongoose";

import {
  CONTACT_DEFAULT,
  CONTACT_PRIORITY,
  CONTACT_PRIORITIES,
  CONTACT_SOURCE,
  CONTACT_SOURCES,
  CONTACT_STATUS,
  CONTACT_STATUSES,
} from "./contact.constant.js";

import type { IContact, IContactModel } from "./contact.interface.js";

const contactSchema = new Schema<IContact, IContactModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 255,
    },

    phone: {
      type: String,
      trim: true,
      maxlength: 25,
    },

    company: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 200,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 5000,
    },

    status: {
      type: String,
      enum: [...CONTACT_STATUSES],
      default: CONTACT_STATUS.NEW,
      required: true,
    },

    priority: {
      type: String,
      enum: [...CONTACT_PRIORITIES],
      default: CONTACT_PRIORITY.MEDIUM,
      required: true,
    },

    source: {
      type: String,
      enum: [...CONTACT_SOURCES],
      default: CONTACT_SOURCE.WEBSITE,
      required: true,
    },

    isRead: {
      type: Boolean,
      default: CONTACT_DEFAULT.IS_READ,
    },

    isReplied: {
      type: Boolean,
      default: CONTACT_DEFAULT.IS_REPLIED,
    },

    repliedAt: {
      type: Date,
      default: null,
    },

    notes: {
      type: String,
      trim: true,
      maxlength: 3000,
    },

    ipAddress: {
      type: String,
      trim: true,
    },

    userAgent: {
      type: String,
      trim: true,
    },

    sortOrder: {
      type: Number,
      min: 0,
      default: CONTACT_DEFAULT.SORT_ORDER,
    },

    isActive: {
      type: Boolean,
      default: CONTACT_DEFAULT.IS_ACTIVE,
    },
  },
  {
    timestamps: true,

    versionKey: false,
  },
);

/**
 * Query indexes
 */

contactSchema.index({
  email: 1,
});

contactSchema.index({
  status: 1,
});

contactSchema.index({
  priority: 1,
});

contactSchema.index({
  source: 1,
});

contactSchema.index({
  isRead: 1,
});

contactSchema.index({
  isReplied: 1,
});

contactSchema.index({
  isActive: 1,
});

contactSchema.index({
  createdAt: -1,
});

contactSchema.index({
  updatedAt: -1,
});

/**
 * Full-text search
 */

contactSchema.index({
  name: "text",
  email: "text",
  company: "text",
  subject: "text",
  message: "text",
});

/**
 * Model
 */

export const Contact = model<IContact, IContactModel>("Contact", contactSchema);
