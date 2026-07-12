// src/modules/users/users.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import httpStatus from 'http-status';

import { ROLE, type TRole } from '../../constants/role.constants.js';

import { AUTH_PROVIDER } from '../../modules/auth/auth.constant.js';

import { BaseCrudService } from '../../shared/base/index.js';

import { AppError } from '../../shared/utils/index.js';

import type { IImage } from '../../shared/types/image.type.js';

import { USER_SEARCHABLE_FIELDS, USERS_MESSAGE } from './users.constant.js';

import { User } from './users.model.js';

import type { IUser, TCreateUserPayload, TUpdateUserPayload, TUserDocument } from './users.types.js';

/* -------------------------------------------------------------------------- */
/*                               Base Service                                 */
/* -------------------------------------------------------------------------- */

const usersBaseService = new BaseCrudService<IUser>(User, [...USER_SEARCHABLE_FIELDS]);

/* -------------------------------------------------------------------------- */
/*                               Helper Methods                               */
/* -------------------------------------------------------------------------- */

/**
 * Normalize email.
 */
const normalizeEmail = (email: string): string => email.trim().toLowerCase();

/**
 * Trim string.
 */
const normalizeString = (value: string): string => value.trim();

/**
 * Trim optional string.
 */
const normalizeOptionalString = (value?: string): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();

  return trimmed.length ? trimmed : undefined;
};

/* -------------------------------------------------------------------------- */
/*                              Validation Helpers                            */
/* -------------------------------------------------------------------------- */

/**
 * Ensure email exists.
 */
const requireEmail = (email?: string): string => {
  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Email is required');
  }

  return normalizeEmail(email);
};

/**
 * Ensure name exists.
 */
const requireName = (name?: string): string => {
  if (!name) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Name is required');
  }

  return normalizeString(name);
};

/**
 * Validate authentication payload.
 */
const validateProvider = (payload: TCreateUserPayload): void => {
  const provider = payload.authProvider ?? AUTH_PROVIDER.LOCAL;

  if (provider === AUTH_PROVIDER.LOCAL && !payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Password is required for LOCAL users');
  }

  if (provider === AUTH_PROVIDER.LOCAL && payload.googleId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Google ID is not allowed for LOCAL users');
  }

  if (provider === AUTH_PROVIDER.GOOGLE && !payload.googleId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Google ID is required for GOOGLE users');
  }

  if (provider === AUTH_PROVIDER.GOOGLE && payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Password is not allowed for GOOGLE users');
  }
};

/* -------------------------------------------------------------------------- */
/*                             Duplicate Validation                           */
/* -------------------------------------------------------------------------- */

/**
 * Ensure email is unique.
 */
const ensureUniqueEmail = async (email: string, excludeUserId?: string): Promise<void> => {
  const existingUser = await User.findOne({
    email,

    ...(excludeUserId && {
      _id: {
        $ne: excludeUserId,
      },
    }),
  });

  if (existingUser) {
    throw new AppError(httpStatus.CONFLICT, USERS_MESSAGE.EMAIL_ALREADY_EXISTS);
  }
};

/* -------------------------------------------------------------------------- */
/*                            Payload Normalizers                             */
/* -------------------------------------------------------------------------- */

/**
 * Normalize create payload.
 */
const prepareCreatePayload = (payload: TCreateUserPayload): TCreateUserPayload => {
  const normalized: TCreateUserPayload = {
    ...payload,

    name: requireName(payload.name),

    email: requireEmail(payload.email),
  };

  const password = normalizeOptionalString(payload.password);

  if (password !== undefined) {
    normalized.password = password;
  }

  const googleId = normalizeOptionalString(payload.googleId);

  if (googleId !== undefined) {
    normalized.googleId = googleId;
  }

  const givenName = normalizeOptionalString(payload.givenName);

  if (givenName !== undefined) {
    normalized.givenName = givenName;
  }

  const familyName = normalizeOptionalString(payload.familyName);

  if (familyName !== undefined) {
    normalized.familyName = familyName;
  }

  const locale = normalizeOptionalString(payload.locale);

  if (locale !== undefined) {
    normalized.locale = locale;
  }

  const hostedDomain = normalizeOptionalString(payload.hostedDomain);

  if (hostedDomain !== undefined) {
    normalized.hostedDomain = hostedDomain;
  }

  return normalized;
};

/**
 * Normalize update payload.
 */
const prepareUpdatePayload = (payload: TUpdateUserPayload): TUpdateUserPayload => {
  const normalized: TUpdateUserPayload = {};

  if (payload.name !== undefined) {
    normalized.name = normalizeString(payload.name);
  }

  if (payload.email !== undefined) {
    normalized.email = normalizeEmail(payload.email);
  }

  if (payload.password !== undefined) {
    const password = normalizeOptionalString(payload.password);

    if (password !== undefined) {
      normalized.password = password;
    }
  }

  if (payload.googleId !== undefined) {
    const googleId = normalizeOptionalString(payload.googleId);

    if (googleId !== undefined) {
      normalized.googleId = googleId;
    }
  }

  if (payload.givenName !== undefined) {
    const givenName = normalizeOptionalString(payload.givenName);

    if (givenName !== undefined) {
      normalized.givenName = givenName;
    }
  }

  if (payload.familyName !== undefined) {
    const familyName = normalizeOptionalString(payload.familyName);

    if (familyName !== undefined) {
      normalized.familyName = familyName;
    }
  }

  if (payload.locale !== undefined) {
    const locale = normalizeOptionalString(payload.locale);

    if (locale !== undefined) {
      normalized.locale = locale;
    }
  }

  if (payload.hostedDomain !== undefined) {
    const hostedDomain = normalizeOptionalString(payload.hostedDomain);

    if (hostedDomain !== undefined) {
      normalized.hostedDomain = hostedDomain;
    }
  }

  if (payload.role !== undefined) {
    normalized.role = payload.role;
  }

  if (payload.authProvider !== undefined) {
    normalized.authProvider = payload.authProvider;
  }

  if (payload.avatar !== undefined) {
    normalized.avatar = payload.avatar;
  }

  if (payload.emailVerified !== undefined) {
    normalized.emailVerified = payload.emailVerified;
  }

  if (payload.isDeleted !== undefined) {
    normalized.isDeleted = payload.isDeleted;
  }

  if (payload.isActive !== undefined) {
    normalized.isActive = payload.isActive;
  }

  if (payload.lastLoginAt !== undefined) {
    normalized.lastLoginAt = payload.lastLoginAt;
  }

  return normalized;
};
/* -------------------------------------------------------------------------- */
/*                               Shared Guards                                */
/* -------------------------------------------------------------------------- */

/**
 * Ensure user exists and is not deleted.
 */
const ensureActiveUser = async (id: string): Promise<TUserDocument> => {
  const user = await usersBaseService.getById(id);

  if (user.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, USERS_MESSAGE.ACCOUNT_DELETED);
  }

  return user;
};

/**
 * Ensure at least one administrator remains.
 */
const ensureAdminExists = async (): Promise<void> => {
  const totalAdmins = await User.countDocuments({
    role: ROLE.ADMIN,
    isDeleted: false,
    isActive: true,
  });

  if (totalAdmins <= 1) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'At least one administrator account must remain active',
    );
  }
};
/* -------------------------------------------------------------------------- */
/*                                Create User                                 */
/* -------------------------------------------------------------------------- */

/**
 * Create a new user.
 */
const createUser = async (payload: TCreateUserPayload): Promise<TUserDocument> => {
  validateProvider(payload);

  const normalizedPayload = prepareCreatePayload(payload);

  const email = requireEmail(normalizedPayload.email);

  await ensureUniqueEmail(email);

  const user = await usersBaseService.create({
    ...normalizedPayload,
    email,
  });

  return user;
};

/* -------------------------------------------------------------------------- */
/*                               Get All Users                                */
/* -------------------------------------------------------------------------- */

/**
 * Get users.
 */
const getUsers = async (query: Record<string, unknown>) => usersBaseService.getAll(query);

/* -------------------------------------------------------------------------- */
/*                               Get User By ID                               */
/* -------------------------------------------------------------------------- */

/**
 * Get user by id.
 */
const getUserById = async (id: string): Promise<TUserDocument> => ensureActiveUser(id);

/* -------------------------------------------------------------------------- */
/*                                Update User                                 */
/* -------------------------------------------------------------------------- */

/**
 * Update user.
 */
const updateUser = async (id: string, payload: TUpdateUserPayload): Promise<TUserDocument> => {
  await ensureActiveUser(id);

  const normalizedPayload = prepareUpdatePayload(payload);

  if (normalizedPayload.email) {
    await ensureUniqueEmail(normalizedPayload.email, id);
  }

  /**
   * LOCAL account validation.
   */
  if (normalizedPayload.authProvider === AUTH_PROVIDER.LOCAL && normalizedPayload.googleId) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Google ID is only allowed for GOOGLE users');
  }

  /**
   * GOOGLE account validation.
   */
  if (normalizedPayload.authProvider === AUTH_PROVIDER.GOOGLE && normalizedPayload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Password cannot be set for GOOGLE users');
  }

  const updatedUser = await usersBaseService.update(id, normalizedPayload);

  return updatedUser;
};

/* -------------------------------------------------------------------------- */
/*                               Delete User                                  */
/* -------------------------------------------------------------------------- */

/**
 * Soft delete user.
 */
const deleteUser = async (id: string): Promise<TUserDocument> => {
  const user = await ensureActiveUser(id);

  if (user.role === ROLE.ADMIN) {
    await ensureAdminExists();
  }

  return usersBaseService.update(id, {
    isDeleted: true,
    isActive: false,
  });
};
/* -------------------------------------------------------------------------- */
/*                               Restore User                                 */
/* -------------------------------------------------------------------------- */

/**
 * Restore a soft-deleted user.
 */
const restoreUser = async (id: string): Promise<TUserDocument> => {
  const user = await User.findById(id);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, USERS_MESSAGE.NOT_FOUND);
  }

  if (!user.isDeleted) {
    return user;
  }

  if (await usersBaseService.exists({ email: user.email })) {
    const activeUser = await User.findOne({
      email: user.email,
      isDeleted: false,
      _id: {
        $ne: user._id,
      },
    });

    if (activeUser) {
      throw new AppError(httpStatus.CONFLICT, USERS_MESSAGE.EMAIL_ALREADY_EXISTS);
    }
  }

  user.isDeleted = false;
  user.isActive = true;

  await user.save();

  return user;
};

/* -------------------------------------------------------------------------- */
/*                              Activate User                                 */
/* -------------------------------------------------------------------------- */

/**
 * Activate user account.
 */
const activateUser = async (id: string): Promise<TUserDocument> => {
  const user = await ensureActiveUser(id);

  if (user.isActive) {
    return user;
  }

  return usersBaseService.update(id, {
    isActive: true,
  });
};

/* -------------------------------------------------------------------------- */
/*                             Deactivate User                                */
/* -------------------------------------------------------------------------- */

/**
 * Deactivate user account.
 */
const deactivateUser = async (id: string): Promise<TUserDocument> => {
  const user = await ensureActiveUser(id);

  if (!user.isActive) {
    return user;
  }

  /**
   * Never deactivate the last administrator.
   */
  if (user.role === ROLE.ADMIN) {
    await ensureAdminExists();
  }

  return usersBaseService.update(id, {
    isActive: false,
  });
};

/* -------------------------------------------------------------------------- */
/*                             Change User Role                               */
/* -------------------------------------------------------------------------- */

/**
 * Change user role.
 */
const changeUserRole = async (id: string, role: TRole): Promise<TUserDocument> => {
  const user = await ensureActiveUser(id);

  if (user.role === role) {
    return user;
  }

  /**
   * Prevent removing the final administrator.
   */
  if (user.role === ROLE.ADMIN && role !== ROLE.ADMIN) {
    await ensureAdminExists();
  }

  return usersBaseService.update(id, {
    role,
  });
};

/* -------------------------------------------------------------------------- */
/*                             Update User Status                             */
/* -------------------------------------------------------------------------- */

/**
 * Update active status.
 */
const updateStatus = async (id: string, isActive: boolean): Promise<TUserDocument> =>
  isActive ? activateUser(id) : deactivateUser(id);
/* -------------------------------------------------------------------------- */
/*                               Update Avatar                                */
/* -------------------------------------------------------------------------- */

/**
 * Update user avatar.
 */
const updateAvatar = async (id: string, avatar: IImage): Promise<TUserDocument> => {
  await ensureActiveUser(id);

  return usersBaseService.update(id, {
    avatar,
  });
};

/* -------------------------------------------------------------------------- */
/*                               Remove Avatar                                */
/* -------------------------------------------------------------------------- */

/**
 * Remove user avatar.
 */
const removeAvatar = async (id: string): Promise<TUserDocument> => {
  await ensureActiveUser(id);

  const user = await User.findByIdAndUpdate(
    id,
    {
      $unset: {
        avatar: 1,
      },
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, USERS_MESSAGE.NOT_FOUND);
  }

  return user;
};

/* -------------------------------------------------------------------------- */
/*                              Reset Password                                */
/* -------------------------------------------------------------------------- */

/**
 * Reset LOCAL user password.
 */
const resetPassword = async (id: string, newPassword: string): Promise<TUserDocument> => {
  const user = await ensureActiveUser(id);

  if (user.authProvider === AUTH_PROVIDER.GOOGLE) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Google accounts do not support password reset');
  }

  return usersBaseService.update(id, {
    password: newPassword.trim(),
  });
};

/* -------------------------------------------------------------------------- */
/*                           Update Last Login                                */
/* -------------------------------------------------------------------------- */

/**
 * Update user's last login timestamp.
 */
const updateLastLogin = async (id: string): Promise<void> => {
  await User.findByIdAndUpdate(id, {
    lastLoginAt: new Date(),
  });
};

/* -------------------------------------------------------------------------- */
/*                            Utility Functions                               */
/* -------------------------------------------------------------------------- */

/**
 * Check if an email already exists.
 */
const existsByEmail = async (email: string): Promise<boolean> =>
  usersBaseService.exists({
    email: normalizeEmail(email),
  });

/**
 * Check if a Google account exists.
 */
const existsByGoogleId = async (googleId: string): Promise<boolean> =>
  usersBaseService.exists({
    googleId: googleId.trim(),
  });

/**
 * Count active users.
 */
const countActiveUsers = async (): Promise<number> =>
  usersBaseService.count({
    isDeleted: false,
    isActive: true,
  });

/**
 * Count administrator accounts.
 */
const countAdmins = async (): Promise<number> =>
  usersBaseService.count({
    role: ROLE.ADMIN,
    isDeleted: false,
  });

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UsersService = Object.freeze({
  /* -------------------------------- CRUD -------------------------------- */

  createUser,

  getUsers,

  getUserById,

  updateUser,

  deleteUser,

  /* -------------------------- Account Management ------------------------- */

  restoreUser,

  activateUser,

  deactivateUser,

  updateStatus,

  changeUserRole,

  /* ------------------------------- Avatar ------------------------------- */

  updateAvatar,

  removeAvatar,

  /* ------------------------------ Password ------------------------------ */

  resetPassword,

  /* ------------------------------ Utilities ----------------------------- */

  updateLastLogin,

  existsByEmail,

  existsByGoogleId,

  countActiveUsers,

  countAdmins,
});
