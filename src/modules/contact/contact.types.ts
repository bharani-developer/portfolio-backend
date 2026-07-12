// src/modules/contact/contact.type.ts

import type { HydratedDocument, Model } from 'mongoose';

import type { CONTACT_PRIORITY, CONTACT_SOURCE, CONTACT_STATUS } from './contact.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

export type TContactStatus = (typeof CONTACT_STATUS)[keyof typeof CONTACT_STATUS];

export type TContactPriority = (typeof CONTACT_PRIORITY)[keyof typeof CONTACT_PRIORITY];

export type TContactSource = (typeof CONTACT_SOURCE)[keyof typeof CONTACT_SOURCE];

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Contact message entity.
 */
export interface IContact {
  /**
   * Sender's full name.
   */
  name: string;

  /**
   * Sender's email address.
   */
  email: string;

  /**
   * Sender's phone number.
   */
  phone?: string;

  /**
   * Sender's company or organization.
   */
  company?: string;

  /**
   * Contact subject.
   */
  subject: string;

  /**
   * Contact message.
   */
  message: string;

  /**
   * Current message status.
   */
  status: TContactStatus;

  /**
   * Message priority.
   */
  priority: TContactPriority;

  /**
   * Source of the contact request.
   */
  source: TContactSource;

  /**
   * Indicates whether the message has been read.
   */
  isRead: boolean;

  /**
   * Indicates whether the sender has received a reply.
   */
  isReplied: boolean;

  /**
   * Reply timestamp.
   */
  repliedAt: Date | null;

  /**
   * Internal administrator notes.
   */
  notes?: string;

  /**
   * Sender IP address.
   */
  ipAddress?: string;

  /**
   * Sender browser user agent.
   */
  userAgent?: string;

  /**
   * Display order.
   */
  sortOrder: number;

  /**
   * Determines whether the contact message is active.
   */
  isActive: boolean;

  /**
   * Creation timestamp.
   */
  createdAt?: Date;

  /**
   * Last update timestamp.
   */
  updatedAt?: Date;
}

/* -------------------------------------------------------------------------- */
/*                             Mongoose Types                                 */
/* -------------------------------------------------------------------------- */

/**
 * Contact document.
 */
export type TContactDocument = HydratedDocument<IContact>;

/* -------------------------------------------------------------------------- */
/*                               Payload Types                                */
/* -------------------------------------------------------------------------- */

/**
 * Create contact payload.
 */
export type TCreateContactPayload = Omit<
  IContact,
  'status' | 'priority' | 'isRead' | 'isReplied' | 'repliedAt' | 'createdAt' | 'updatedAt'
>;

/**
 * Update contact payload.
 */
export type TUpdateContactPayload = Partial<Omit<IContact, 'createdAt' | 'updatedAt'>>;

/* -------------------------------------------------------------------------- */
/*                                Model Type                                  */
/* -------------------------------------------------------------------------- */

/**
 * Contact model.
 */
export type IContactModel = Model<IContact>;
