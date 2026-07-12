// src/modules/about/about.controller.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Shared
import { catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { ABOUT_MESSAGE } from './about.constant.js';
import { AboutService } from './about.service.js';

// Types
import type { TCreateAboutPayload, TUpdateAboutPayload } from './about.types.js';

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createAbout = catchAsync(
  async (req: Request<object, object, TCreateAboutPayload>, res: Response) => {
    const result = await AboutService.createAbout(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: ABOUT_MESSAGE.CREATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                    Get                                     */
/* -------------------------------------------------------------------------- */

const getAbout = catchAsync(async (_req: Request, res: Response) => {
  const result = await AboutService.getAbout();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ABOUT_MESSAGE.RETRIEVED,
    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateAbout = catchAsync(
  async (req: Request<object, object, TUpdateAboutPayload>, res: Response) => {
    const result = await AboutService.updateAbout(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: ABOUT_MESSAGE.UPDATED,
      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteAbout = catchAsync(async (_req: Request, res: Response) => {
  await AboutService.deleteAbout();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ABOUT_MESSAGE.DELETED,
    data: null,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutController = {
  createAbout,

  getAbout,

  updateAbout,

  deleteAbout,
} as const;
