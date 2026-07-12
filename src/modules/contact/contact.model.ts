// src/modules/contact/contact.model.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { model, Schema } from 'mongoose';

import {
  CONTACT_DEFAULT,
  CONTACT_PRIORITIES,
  CONTACT_SOURCES,
  CONTACT_STATUSES,
  CONTACT_VALIDATION,
} from './contact.constant.js';

import type { IContact, IContactModel, TContactDocument } from './contact.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Sub Schemas                               */
/* -------------------------------------------------------------------------- */

// No sub schemas for this module.

/* -------------------------------------------------------------------------- */
/*                               3. Main Schema                               */
/* -------------------------------------------------------------------------- */

const contactSchema = new Schema<IContact, IContactModel>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: CONTACT_VALIDATION.NAME.MIN_LENGTH,
      maxlength: CONTACT_VALIDATION.NAME.MAX_LENGTH,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: CONTACT_VALIDATION.EMAIL.MAX_LENGTH,
    },

    phone: {
      type: String,
      trim: true,
      minlength: CONTACT_VALIDATION.PHONE.MIN_LENGTH,
      maxlength: CONTACT_VALIDATION.PHONE.MAX_LENGTH,
    },

    company: {
      type: String,
      trim: true,
      maxlength: CONTACT_VALIDATION.COMPANY.MAX_LENGTH,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
      minlength: CONTACT_VALIDATION.SUBJECT.MIN_LENGTH,
      maxlength: CONTACT_VALIDATION.SUBJECT.MAX_LENGTH,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: CONTACT_VALIDATION.MESSAGE.MIN_LENGTH,
      maxlength: CONTACT_VALIDATION.MESSAGE.MAX_LENGTH,
    },

    status: {
      type: String,
      required: true,
      enum: CONTACT_STATUSES,
      default: CONTACT_DEFAULT.STATUS,
    },

    priority: {
      type: String,
      required: true,
      enum: CONTACT_PRIORITIES,
      default: CONTACT_DEFAULT.PRIORITY,
    },

    source: {
      type: String,
      required: true,
      enum: CONTACT_SOURCES,
      default: CONTACT_DEFAULT.SOURCE,
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
      maxlength: CONTACT_VALIDATION.NOTES.MAX_LENGTH,
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
      default: CONTACT_DEFAULT.SORT_ORDER,
      min: CONTACT_VALIDATION.SORT_ORDER.MIN,
      max: CONTACT_VALIDATION.SORT_ORDER.MAX,
    },

    isActive: {
      type: Boolean,
      default: CONTACT_DEFAULT.IS_ACTIVE,
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
contactSchema.index({
  email: 1,
});

/**
 * Status filtering.
 */
contactSchema.index({
  status: 1,
});

/**
 * Priority filtering.
 */
contactSchema.index({
  priority: 1,
});

/**
 * Source filtering.
 */
contactSchema.index({
  source: 1,
});

/**
 * Read status filtering.
 */
contactSchema.index({
  isRead: 1,
});

/**
 * Reply status filtering.
 */
contactSchema.index({
  isReplied: 1,
});

/**
 * Active messages.
 */
contactSchema.index({
  isActive: 1,
});

/**
 * Display ordering.
 */
contactSchema.index({
  sortOrder: 1,
});

/**
 * Recently created.
 */
contactSchema.index({
  createdAt: -1,
});

/**
 * Recently updated.
 */
contactSchema.index({
  updatedAt: -1,
});

/**
 * Reply date.
 */
contactSchema.index({
  repliedAt: -1,
});

/* -------------------------------------------------------------------------- */
/*                            5. Compound Indexes                             */
/* -------------------------------------------------------------------------- */

/**
 * Inbox.
 */
contactSchema.index({
  isActive: 1,
  status: 1,
  createdAt: -1,
});

/**
 * Unread messages.
 */
contactSchema.index({
  isRead: 1,
  isActive: 1,
  createdAt: -1,
});

/**
 * Replied messages.
 */
contactSchema.index({
  isReplied: 1,
  repliedAt: -1,
});

/**
 * Priority queue.
 */
contactSchema.index({
  priority: 1,
  status: 1,
  createdAt: -1,
});

/**
 * Source analytics.
 */
contactSchema.index({
  source: 1,
  createdAt: -1,
});

/**
 * Portfolio ordering.
 */
contactSchema.index({
  isActive: 1,
  sortOrder: 1,
});

/* -------------------------------------------------------------------------- */
/*                           6. Full Text Search                              */
/* -------------------------------------------------------------------------- */

contactSchema.index({
  name: 'text',
  email: 'text',
  company: 'text',
  subject: 'text',
  message: 'text',
  notes: 'text',
});
/* -------------------------------------------------------------------------- */
/*                               7. Middleware                                */
/* -------------------------------------------------------------------------- */

/**
 * Normalize contact data before saving.
 */
contactSchema.pre('save', function (this: TContactDocument) {
  if (this.isModified('email')) {
    this.email = this.email.trim().toLowerCase();
  }

  if (this.isModified('isReplied')) {
    if (this.isReplied && !this.repliedAt) {
      this.repliedAt = new Date();
    }

    if (!this.isReplied) {
      this.repliedAt = null;
    }
  }
});

/* -------------------------------------------------------------------------- */
/*                                8. Virtuals                                 */
/* -------------------------------------------------------------------------- */

/**
 * Whether the contact has been responded to.
 */
contactSchema.virtual('hasReply').get(function (this: TContactDocument) {
  return this.isReplied;
});

/**
 * Whether the message is open.
 */
contactSchema.virtual('isOpen').get(function (this: TContactDocument) {
  return this.status === 'New' || this.status === 'In Progress';
});

/**
 * Whether the message requires attention.
 */
contactSchema.virtual('needsAttention').get(function (this: TContactDocument) {
  return (
    this.isActive && !this.isReplied && (this.priority === 'High' || this.priority === 'Urgent')
  );
});

/* -------------------------------------------------------------------------- */
/*                               9. Model Export                              */
/* -------------------------------------------------------------------------- */

export const Contact = model<IContact, IContactModel>('Contact', contactSchema);
