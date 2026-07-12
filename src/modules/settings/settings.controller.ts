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
import { SettingsService } from './settings.service.js';

// Types
import type { TCreateSettingsPayload, TUpdateSettingsPayload } from './settings.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/**
 * Returns a validated required string.
 */
const getRequiredString = (value: string | undefined, field: string): string => {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    throw new AppError(httpStatus.BAD_REQUEST, `${field} is required`);
  }

  return trimmedValue;
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

// No route params for singleton resource.

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createSettings = catchAsync<object, object, TCreateSettingsPayload>(
  async (req: Request<object, object, TCreateSettingsPayload>, res: Response) => {
    const result = await SettingsService.createSettings(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: MESSAGE.CREATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

const getSettings = catchAsync(async (_req: Request, res: Response) => {
  const result = await SettingsService.getSettings();

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

const updateSettings = catchAsync<object, object, TUpdateSettingsPayload>(
  async (req: Request<object, object, TUpdateSettingsPayload>, res: Response) => {
    const body = req.body;

    /**
     * Optional normalization.
     * Validation already guarantees correctness,
     * but trimming here keeps the controller
     * consistent with the rest of the project.
     */
    if (body.siteTitle) {
      body.siteTitle = getRequiredString(body.siteTitle, 'Site title');
    }

    if (body.siteDescription) {
      body.siteDescription = getRequiredString(body.siteDescription, 'Site description');
    }

    if (body.email) {
      body.email = getRequiredString(body.email, 'Email').toLowerCase();
    }

    if (body.phone) {
      body.phone = getRequiredString(body.phone, 'Phone');
    }

    if (body.address) {
      body.address = getRequiredString(body.address, 'Address');
    }

    const result = await SettingsService.updateSettings(body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: MESSAGE.UPDATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteSettings = catchAsync(async (_req: Request, res: Response) => {
  await SettingsService.deleteSettings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.DELETED,
    data: null,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

// No custom queries for this singleton module.

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

// No custom actions for this singleton module.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SettingsController = {
  createSettings,

  getSettings,

  updateSettings,

  deleteSettings,
} as const;
