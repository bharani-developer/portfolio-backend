// src/modules/hero/hero.controller.ts

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
import { catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { HeroService } from './hero.service.js';

// Types
import type { TCreateHeroPayload, TUpdateHeroPayload } from './hero.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

// No helper functions required for singleton controller.

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

// No helper types required.

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createHero = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateHeroPayload = req.body;

  const result = await HeroService.createHero(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

const getHero = catchAsync(async (_req: Request, res: Response) => {
  const result = await HeroService.getHero();

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

const updateHero = catchAsync(async (req: Request, res: Response) => {
  const payload: TUpdateHeroPayload = req.body;
  const result = await HeroService.updateHero(payload);

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

const deleteHero = catchAsync(async (_req: Request, res: Response) => {
  await HeroService.deleteHero();

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

// No custom queries.

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

// No custom actions.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const HeroController = {
  createHero,

  getHero,

  updateHero,

  deleteHero,
} as const;
