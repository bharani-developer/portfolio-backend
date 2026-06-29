// src/modules/contact/contact.service.ts

import httpStatus from "http-status";

import { BaseCrudService } from "../../shared/base/index.js";

import AppError from "../../utils/AppError.js";

import {
  CONTACT_MESSAGE,
  CONTACT_PRIORITY,
  CONTACT_SEARCHABLE_FIELDS,
  CONTACT_STATUS,
} from "./contact.constant.js";

import { Contact } from "./contact.model.js";

import type {
  IContact,
  TContactPriority,
  TContactStatus,
  TCreateContactPayload,
  TUpdateContactPayload,
} from "./contact.interface.js";

const baseService = new BaseCrudService<IContact>(Contact, [
  ...CONTACT_SEARCHABLE_FIELDS,
]);

const createContact = async (payload: TCreateContactPayload) => {
  const email = payload.email.trim().toLowerCase();

  const subject = payload.subject.trim();

  const message = payload.message.trim();

  const contactPayload: Partial<IContact> = {
    ...payload,

    email,

    subject,

    message,

    status: CONTACT_STATUS.NEW,

    priority: CONTACT_PRIORITY.MEDIUM,

    isRead: false,

    isReplied: false,

    repliedAt: null,
  };

  return baseService.create(contactPayload);
};

const getContacts = async (query: Record<string, unknown>) => {
  return baseService.getAll(query);
};

const getContactById = async (id: string) => {
  return baseService.getById(id);
};

const updateContact = async (id: string, payload: TUpdateContactPayload) => {
  const existingContact = await Contact.findById(id);

  if (!existingContact) {
    throw new AppError(httpStatus.NOT_FOUND, CONTACT_MESSAGE.NOT_FOUND);
  }

  const updatePayload: Partial<IContact> = {
    ...payload,
  };

  if (payload.isReplied === true && !payload.repliedAt) {
    updatePayload.repliedAt = new Date();
  }

  if (payload.status === CONTACT_STATUS.REPLIED) {
    updatePayload.isRead = true;

    updatePayload.isReplied = true;

    updatePayload.repliedAt = payload.repliedAt ?? new Date();
  }

  return baseService.update(id, updatePayload);
};

const deleteContact = async (id: string) => {
  return baseService.delete(id);
};

const getActiveContacts = async () => {
  return Contact.find({
    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

const getUnreadContacts = async () => {
  return Contact.find({
    isRead: false,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

const getReadContacts = async () => {
  return Contact.find({
    isRead: true,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

const getRepliedContacts = async () => {
  return Contact.find({
    isReplied: true,

    isActive: true,
  })
    .sort({
      repliedAt: -1,
    })
    .lean();
};

const getContactsByStatus = async (status: TContactStatus) => {
  return Contact.find({
    status,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

const getContactsByPriority = async (priority: TContactPriority) => {
  return Contact.find({
    priority,

    isActive: true,
  })
    .sort({
      createdAt: -1,
    })
    .lean();
};

const markAsRead = async (id: string) => {
  const contact = await Contact.findById(id);

  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, CONTACT_MESSAGE.NOT_FOUND);
  }

  return Contact.findByIdAndUpdate(
    id,
    {
      isRead: true,
    },
    {
      new: true,
      runValidators: true,
    },
  );
};

const markAsReplied = async (id: string) => {
  const contact = await Contact.findById(id);

  if (!contact) {
    throw new AppError(httpStatus.NOT_FOUND, CONTACT_MESSAGE.NOT_FOUND);
  }

  return Contact.findByIdAndUpdate(
    id,
    {
      status: CONTACT_STATUS.REPLIED,

      isRead: true,

      isReplied: true,

      repliedAt: new Date(),
    },
    {
      new: true,
      runValidators: true,
    },
  );
};

const getContactStats = async () => {
  const [total, unread, read, replied, active] = await Promise.all([
    Contact.countDocuments(),

    Contact.countDocuments({
      isRead: false,
    }),

    Contact.countDocuments({
      isRead: true,
    }),

    Contact.countDocuments({
      isReplied: true,
    }),

    Contact.countDocuments({
      isActive: true,
    }),
  ]);

  return {
    total,

    unread,

    read,

    replied,

    active,
  };
};

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
