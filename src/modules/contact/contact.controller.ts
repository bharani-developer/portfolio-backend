// src/modules/contact/contact.controller.ts

import { MESSAGE, httpStatus } from "../../constants/index.js";

import { catchAsync, sendResponse } from "../../utils/index.js";

import AppError from "../../utils/AppError.js";

import { CONTACT_PRIORITIES, CONTACT_STATUSES } from "./contact.constant.js";

import { ContactService } from "./contact.service.js";

import type { TContactPriority, TContactStatus } from "./contact.interface.js";

type TIdParams = {
  id: string;
};

type TStatusParams = {
  status: string;
};

type TPriorityParams = {
  priority: string;
};

const createContact = catchAsync(async (req, res) => {
  const result = await ContactService.createContact(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: MESSAGE.CREATED,
    data: result,
  });
});

const getContacts = catchAsync(async (req, res) => {
  const result = await ContactService.getContacts(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    meta: result.meta,
    data: result.result,
  });
});

const getContactById = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await ContactService.getContactById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const updateContact = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await ContactService.updateContact(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.UPDATED,
    data: result,
  });
});

const deleteContact = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await ContactService.deleteContact(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.DELETED,
    data: result,
  });
});

const getActiveContacts = catchAsync(async (_req, res) => {
  const result = await ContactService.getActiveContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getUnreadContacts = catchAsync(async (_req, res) => {
  const result = await ContactService.getUnreadContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getReadContacts = catchAsync(async (_req, res) => {
  const result = await ContactService.getReadContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getRepliedContacts = catchAsync(async (_req, res) => {
  const result = await ContactService.getRepliedContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getContactsByStatus = catchAsync(async (req, res) => {
  const status = req.params.status as TContactStatus;

  if (!CONTACT_STATUSES.includes(status)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid contact status");
  }

  const result = await ContactService.getContactsByStatus(status);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const getContactsByPriority = catchAsync(async (req, res) => {
  const priority = req.params.priority as TContactPriority;

  if (!CONTACT_PRIORITIES.includes(priority)) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid contact priority");
  }

  const result = await ContactService.getContactsByPriority(priority);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const markAsRead = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await ContactService.markAsRead(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact marked as read",
    data: result,
  });
});

const markAsReplied = catchAsync(async (req, res) => {
  const id = req.params.id as string;

  const result = await ContactService.markAsReplied(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact marked as replied",
    data: result,
  });
});
const getContactStats = catchAsync(async (_req, res) => {
  const result = await ContactService.getContactStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

export const ContactController = {
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
