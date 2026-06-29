// src\modules\hero\hero.controller.ts

import httpStatus from "http-status";

import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";

import { MESSAGE } from "../../constants/message.constant.js";

import { HeroService } from "./hero.service.js";

const createHero = catchAsync(async (req, res) => {
  const result = await HeroService.createHero(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: MESSAGE.CREATED,
    data: result,
  });
});

const getHero = catchAsync(async (_req, res) => {
  const result = await HeroService.getHero();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.RETRIEVED,
    data: result,
  });
});

const updateHero = catchAsync(async (req, res) => {
  const result = await HeroService.updateHero(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.UPDATED,
    data: result,
  });
});

const deleteHero = catchAsync(async (_req, res) => {
  await HeroService.deleteHero();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: MESSAGE.DELETED,
    data: null,
  });
});

export const HeroController = {
  createHero,

  getHero,

  updateHero,

  deleteHero,
};
