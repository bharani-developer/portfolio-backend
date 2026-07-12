//  src/modules/users/users.constant.ts
/**
 * Users module constants.
 *
 * Structure:
 * 1. Messages
 * 2. Default Values
 * 3. Status
 * 4. Categories
 * 5. Priorities
 * 6. Types
 * 7. Searchable Fields
 * 8. Filterable Fields
 * 9. Sort Fields
 * 10. Select Fields
 * 11. Validation
 */

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */

export const USERS_MESSAGE = {
  CREATED: 'User created successfully',

  RETRIEVED: 'User retrieved successfully',

  UPDATED: 'User updated successfully',

  DELETED: 'User deleted successfully',

  NOT_FOUND: 'User not found',

  ALREADY_EXISTS: 'User already exists',

  EMAIL_ALREADY_EXISTS: 'Email already exists',

  ACCOUNT_INACTIVE: 'User account is inactive',

  ACCOUNT_DELETED: 'User account has been deleted',

  PROFILE_UPDATED: 'Profile updated successfully',

  AVATAR_UPDATED: 'Profile picture updated successfully',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const USERS_DEFAULT = {
  IS_ACTIVE: true,

  IS_DELETED: false,

  EMAIL_VERIFIED: false,
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

export const USER_STATUS = {
  ACTIVE: 'ACTIVE',

  INACTIVE: 'INACTIVE',

  DELETED: 'DELETED',
} as const;

export type TUserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

// Not applicable.

/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

// Not applicable.

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

// Not applicable.

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

export const USER_SEARCHABLE_FIELDS = ['name', 'email', 'givenName', 'familyName'] as const;

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

export const USER_FILTERABLE_FIELDS = [
  'role',

  'authProvider',

  'isActive',

  'emailVerified',
] as const;

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

export const USER_SORT_FIELDS = [
  'name',

  'email',

  'role',

  'createdAt',

  'updatedAt',

  'lastLoginAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

export const USER_SELECT_FIELDS = [
  'name',

  'email',

  'role',

  'authProvider',

  'avatar',

  'emailVerified',

  'isActive',

  'lastLoginAt',

  'createdAt',

  'updatedAt',
] as const;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const USER_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,

    MAX_LENGTH: 100,
  },

  EMAIL: {
    MAX_LENGTH: 255,
  },

  PASSWORD: {
    MIN_LENGTH: 6,

    MAX_LENGTH: 100,
  },

  GIVEN_NAME: {
    MAX_LENGTH: 100,
  },

  FAMILY_NAME: {
    MAX_LENGTH: 100,
  },

  LOCALE: {
    MAX_LENGTH: 20,
  },

  HOSTED_DOMAIN: {
    MAX_LENGTH: 255,
  },
  AVATAR: {
    PUBLIC_ID_MAX_LENGTH: 1024,
    URL_MAX_LENGTH: 2048,
  },
} as const;
