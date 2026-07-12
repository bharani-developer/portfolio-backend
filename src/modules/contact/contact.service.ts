// src/modules/contact/contact.service.ts

/* -------------------------------------------------------------------------- */
/*                                 1. Imports                                 */
/* -------------------------------------------------------------------------- */

import { BaseCrudService } from '../../shared/base/index.js';

import { CONTACT_PRIORITY, CONTACT_SEARCHABLE_FIELDS, CONTACT_STATUS } from './contact.constant.js';

import { Contact } from './contact.model.js';

import type {
  IContact,
  TContactPriority,
  TContactStatus,
  TCreateContactPayload,
  TUpdateContactPayload,
} from './contact.types.js';

/* -------------------------------------------------------------------------- */
/*                               2. Base Service                              */
/* -------------------------------------------------------------------------- */

const contactBaseService = new BaseCrudService<IContact>(Contact, [
  ...CONTACT_SEARCHABLE_FIELDS,
] as string[]);
/* -------------------------------------------------------------------------- */
/*                                  3. Create                                 */
/* -------------------------------------------------------------------------- */

const createContact = async (payload: TCreateContactPayload) => {
  const contactPayload: Partial<IContact> = {
    ...payload,

    name: payload.name.trim(),

    email: payload.email.trim().toLowerCase(),

    subject: payload.subject.trim(),

    message: payload.message.trim(),

    status: CONTACT_STATUS.NEW,

    priority: CONTACT_PRIORITY.MEDIUM,

    isRead: false,

    isReplied: false,

    repliedAt: null,

    ...(payload.phone && {
      phone: payload.phone.trim(),
    }),

    ...(payload.company && {
      company: payload.company.trim(),
    }),
  };

  return contactBaseService.create(contactPayload);
};
/* -------------------------------------------------------------------------- */
/*                                 4. Get All                                 */
/* -------------------------------------------------------------------------- */

const getContacts = async (query: Record<string, unknown>) => contactBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                                5. Get By Id                                */
/* -------------------------------------------------------------------------- */

const getContactById = async (id: string) => contactBaseService.getById(id);
/* -------------------------------------------------------------------------- */
/*                                  6. Update                                 */
/* -------------------------------------------------------------------------- */

const updateContact = async (id: string, payload: TUpdateContactPayload) => {
  await contactBaseService.getById(id);

  const updatePayload: Partial<IContact> = {
    ...payload,

    ...(payload.name && {
      name: payload.name.trim(),
    }),

    ...(payload.email && {
      email: payload.email.trim().toLowerCase(),
    }),

    ...(payload.phone && {
      phone: payload.phone.trim(),
    }),

    ...(payload.company && {
      company: payload.company.trim(),
    }),

    ...(payload.subject && {
      subject: payload.subject.trim(),
    }),

    ...(payload.message && {
      message: payload.message.trim(),
    }),
  };

  /**
   * Automatically set reply date when
   * marking a contact as replied.
   */
  if (payload.isReplied === true && !payload.repliedAt) {
    updatePayload.repliedAt = new Date();
  }

  /**
   * Keep replied status synchronized.
   */
  if (payload.status === CONTACT_STATUS.REPLIED) {
    updatePayload.isRead = true;

    updatePayload.isReplied = true;

    updatePayload.repliedAt = payload.repliedAt ?? new Date();
  }

  return contactBaseService.update(id, updatePayload);
};
/* -------------------------------------------------------------------------- */
/*                                  7. Delete                                 */
/* -------------------------------------------------------------------------- */

const deleteContact = async (id: string) => contactBaseService.delete(id);
/* -------------------------------------------------------------------------- */
/*                              8. Custom Queries                             */
/* -------------------------------------------------------------------------- */

/**
 * Get all active contact messages.
 */
const getActiveContacts = async () =>
  Contact.find({
    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();

/**
 * Get unread contact messages.
 */
const getUnreadContacts = async () =>
  Contact.find({
    isActive: true,

    isRead: false,
  })
    .sort({
      createdAt: -1,
    })
    .lean();

/**
 * Get read contact messages.
 */
const getReadContacts = async () =>
  Contact.find({
    isActive: true,

    isRead: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();

/**
 * Get replied contact messages.
 */
const getRepliedContacts = async () =>
  Contact.find({
    isActive: true,

    isReplied: true,
  })
    .sort({
      repliedAt: -1,
    })
    .lean();
/**
 * Get contacts by status.
 */
const getContactsByStatus = async (status: TContactStatus) =>
  Contact.find({
    status,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();

/**
 * Get contacts by priority.
 */
const getContactsByPriority = async (priority: TContactPriority) =>
  Contact.find({
    priority,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();

/**
 * Mark a contact message as read.
 */
const markAsRead = async (id: string) => {
  await contactBaseService.getById(id);

  return contactBaseService.update(id, {
    isRead: true,
  });
};

/**
 * Mark a contact message as replied.
 */
const markAsReplied = async (id: string) => {
  await contactBaseService.getById(id);

  return contactBaseService.update(id, {
    status: CONTACT_STATUS.REPLIED,

    isRead: true,

    isReplied: true,

    repliedAt: new Date(),
  });
};

/**
 * Get contact statistics.
 */
const getContactStats = async () => {
  const [total, active, unread, read, replied] = await Promise.all([
    contactBaseService.count(),

    contactBaseService.count({
      isActive: true,
    }),

    contactBaseService.count({
      isRead: false,
    }),

    contactBaseService.count({
      isRead: true,
    }),

    contactBaseService.count({
      isReplied: true,
    }),
  ]);

  return {
    total,

    active,

    unread,

    read,

    replied,
  };
};
/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ContactService = {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,

  getActiveContacts,
  getUnreadContacts,
  getReadContacts,
  getRepliedContacts,

  getContactsByStatus,
  getContactsByPriority,

  markAsRead,
  markAsReplied,

  getContactStats,
};
