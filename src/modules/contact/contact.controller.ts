// src/modules/contact/contact.controller.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Constants
import { MESSAGE } from '../../constants/index.js';

// Shared
import { AppError, catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { ContactService } from './contact.service.js';

// Types
import type {
  TCreateContactPayload,
  TUpdateContactPayload,
  TContactPriority,
  TContactStatus,
} from './contact.types.js';

import { CONTACT_PRIORITIES, CONTACT_STATUSES } from './contact.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Safely extract a required route parameter.
 */
const getParam = (value: string | string[] | undefined, name: string): string => {
  if (!value || Array.isArray(value)) {
    throw new AppError(httpStatus.BAD_REQUEST, `${name} is required`);
  }

  return value;
};

/**
 * Validate contact status.
 */
const getStatus = (value: string | string[] | undefined): TContactStatus => {
  const status = getParam(value, 'Contact status');

  if (!CONTACT_STATUSES.includes(status as TContactStatus)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid contact status');
  }

  return status as TContactStatus;
};

/**
 * Validate contact priority.
 */
const getPriority = (value: string | string[] | undefined): TContactPriority => {
  const priority = getParam(value, 'Contact priority');

  if (!CONTACT_PRIORITIES.includes(priority as TContactPriority)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid contact priority');
  }

  return priority as TContactPriority;
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

// No helper types required.

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createContact = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateContactPayload = req.body;

  const result = await ContactService.createContact(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

const getContacts = catchAsync(async (req: Request, res: Response) => {
  const result = await ContactService.getContacts(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});
/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

const getContactById = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Contact ID');

  const result = await ContactService.getContactById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateContact = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Contact ID');

  const payload: TUpdateContactPayload = req.body;

  const result = await ContactService.updateContact(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteContact = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Contact ID');

  const result = await ContactService.deleteContact(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

const getActiveContacts = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContactService.getActiveContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getUnreadContacts = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContactService.getUnreadContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getReadContacts = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContactService.getReadContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getRepliedContacts = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContactService.getRepliedContacts();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getContactsByStatus = catchAsync(async (req: Request, res: Response) => {
  const status = getStatus(req.params.status);

  const result = await ContactService.getContactsByStatus(status);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getContactsByPriority = catchAsync(async (req: Request, res: Response) => {
  const priority = getPriority(req.params.priority);

  const result = await ContactService.getContactsByPriority(priority);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getContactStats = catchAsync(async (_req: Request, res: Response) => {
  const result = await ContactService.getContactStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Contact ID');

  const result = await ContactService.markAsRead(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

const markAsReplied = catchAsync(async (req: Request, res: Response) => {
  const id = getParam(req.params.id, 'Contact ID');

  const result = await ContactService.markAsReplied(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

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

  getContactStats,

  markAsRead,

  markAsReplied,
} as const;
