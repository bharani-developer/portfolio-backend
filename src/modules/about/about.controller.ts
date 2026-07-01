// src/modules/about/about.controller.ts

import type { Request, Response } from "express";

import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { ABOUT_MESSAGE } from "./about.constant.js";
import type {
  TCreateAboutPayload,
  TUpdateAboutPayload,
} from "./about.interface.js";
import { AboutService } from "./about.service.js";

/* -------------------------------------------------------------------------- */
/*                               Create About                                 */
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
/*                                Get About                                   */
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
/*                              Update About                                  */
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
/*                              Delete About                                  */
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
