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
import { UsersService } from './users.service.js';

// Types
import type { TRole } from '../../constants/role.constants.js';

import type { IImage } from '../../shared/types/image.type.js';

import type { TCreateUserPayload, TUpdateUserPayload } from './users.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

const getRequiredString = (value: unknown, fieldName: string): string => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new AppError(httpStatus.BAD_REQUEST, `${fieldName} is required`);
  }

  return value.trim();
};

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

type TUserParams = {
  id: string;
};

type TChangeRoleBody = {
  role: TRole;
};

type TResetPasswordBody = {
  password: string;
};

type TUpdateAvatarBody = {
  avatar: IImage;
};

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

/**
 * Create user.
 */
const createUser = catchAsync(
  async (req: Request<object, object, TCreateUserPayload>, res: Response) => {
    const result = await UsersService.createUser(req.body);

    sendResponse(res, {
      statusCode: httpStatus.CREATED,

      success: true,

      message: MESSAGE.CREATED,

      data: result,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

/**
 * Get users.
 */
const getUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UsersService.getUsers(req.query as Record<string, unknown>);

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

/**
 * Get user by id.
 */
const getUserById = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.getUserById(id);

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

/**
 * Update user.
 */
const updateUser = catchAsync(
  async (req: Request<TUserParams, object, TUpdateUserPayload>, res: Response) => {
    const id = getRequiredString(req.params.id, 'User ID');

    const result = await UsersService.updateUser(id, req.body);

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

/**
 * Delete user.
 */
const deleteUser = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.deleteUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

/**
 * Restore user.
 */
const restoreUser = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.restoreUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/**
 * Activate user.
 */
const activateUser = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.activateUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/**
 * Deactivate user.
 */
const deactivateUser = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.deactivateUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/**
 * Change user role.
 */
const changeUserRole = catchAsync(
  async (req: Request<TUserParams, object, TChangeRoleBody>, res: Response) => {
    const id = getRequiredString(req.params.id, 'User ID');

    const result = await UsersService.changeUserRole(id, req.body.role);

    sendResponse(res, {
      statusCode: httpStatus.OK,

      success: true,

      message: MESSAGE.UPDATED,

      data: result,
    });
  },
);

/**
 * Update user avatar.
 */
const updateAvatar = catchAsync(
  async (req: Request<TUserParams, object, TUpdateAvatarBody>, res: Response) => {
    const id = getRequiredString(req.params.id, 'User ID');

    const result = await UsersService.updateAvatar(id, req.body.avatar);

    sendResponse(res, {
      statusCode: httpStatus.OK,

      success: true,

      message: MESSAGE.UPDATED,

      data: result,
    });
  },
);
/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

/**
 * Remove user avatar.
 */
const removeAvatar = catchAsync(async (req: Request<TUserParams>, res: Response) => {
  const id = getRequiredString(req.params.id, 'User ID');

  const result = await UsersService.removeAvatar(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/**
 * Reset user password.
 */
const resetPassword = catchAsync(
  async (req: Request<TUserParams, object, TResetPasswordBody>, res: Response) => {
    const id = getRequiredString(req.params.id, 'User ID');

    await UsersService.resetPassword(id, req.body.password);

    sendResponse(res, {
      statusCode: httpStatus.OK,

      success: true,

      message: MESSAGE.UPDATED,

      data: null,
    });
  },
);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UsersController = {
  /* --------------------------------- CRUD --------------------------------- */

  createUser,

  getUsers,

  getUserById,

  updateUser,

  deleteUser,

  /* -------------------------- Account Management --------------------------- */

  restoreUser,

  activateUser,

  deactivateUser,

  changeUserRole,

  /* -------------------------------- Avatar -------------------------------- */

  updateAvatar,

  removeAvatar,

  /* ------------------------------- Password ------------------------------- */

  resetPassword,
} as const;
