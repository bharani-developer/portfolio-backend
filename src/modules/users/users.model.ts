//  src/modules/users/users.model.ts
/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import bcrypt from 'bcrypt';
import { Schema, model, type Aggregate, type Query } from 'mongoose';
import { env } from '../../configs/env.js';

import { ROLE } from '../../constants/role.constants.js';

import { AUTH_PROVIDER } from '../../modules/auth/auth.constant.js';

import type { IUser, IUserModel } from './users.types.js';

/* -------------------------------------------------------------------------- */
/*                                Sub Schemas                                 */
/* -------------------------------------------------------------------------- */

const avatarSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },

    publicId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  },
);

/* -------------------------------------------------------------------------- */
/*                                Main Schema                                 */
/* -------------------------------------------------------------------------- */

const userSchema = new Schema<IUser, IUserModel>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [255, 'Email cannot exceed 255 characters'],
    },

    password: {
      type: String,
      select: false,
      minlength: [6, 'Password must be at least 6 characters'],
      maxlength: [100, 'Password cannot exceed 100 characters'],
    },

    role: {
      type: String,
      enum: Object.values(ROLE),
      required: true,
      default: ROLE.VIEWER,
    },

    authProvider: {
      type: String,
      enum: Object.values(AUTH_PROVIDER),
      required: true,
      default: AUTH_PROVIDER.LOCAL,
    },

    googleId: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    avatar: {
      type: avatarSchema,
      default: undefined,
    },

    emailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },

    givenName: {
      type: String,
      trim: true,
      maxlength: [100, 'Given name cannot exceed 100 characters'],
    },

    familyName: {
      type: String,
      trim: true,
      maxlength: [100, 'Family name cannot exceed 100 characters'],
    },

    locale: {
      type: String,
      trim: true,
      maxlength: [20, 'Locale cannot exceed 20 characters'],
    },

    hostedDomain: {
      type: String,
      trim: true,
      maxlength: [255, 'Hosted domain cannot exceed 255 characters'],
    },

    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },

    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,

    versionKey: false,

    toJSON: {
      virtuals: true,
    },

    toObject: {
      virtuals: true,
    },
  },
);
/* -------------------------------------------------------------------------- */
/*                              Query Indexes                                 */
/* -------------------------------------------------------------------------- */

/**
 * Email lookup.
 */
userSchema.index(
  {
    email: 1,
  },
  {
    unique: true,
    name: 'idx_user_email',
  },
);

/**
 * Google account lookup.
 */
userSchema.index(
  {
    googleId: 1,
  },
  {
    sparse: true,
    name: 'idx_user_google_id',
  },
);

/**
 * Role filtering.
 */
userSchema.index(
  {
    role: 1,
  },
  {
    name: 'idx_user_role',
  },
);

/**
 * Authentication provider filtering.
 */
userSchema.index(
  {
    authProvider: 1,
  },
  {
    name: 'idx_user_auth_provider',
  },
);

/**
 * Active users.
 */
userSchema.index(
  {
    isActive: 1,
  },
  {
    name: 'idx_user_is_active',
  },
);

/**
 * Soft deleted users.
 */
userSchema.index(
  {
    isDeleted: 1,
  },
  {
    name: 'idx_user_is_deleted',
  },
);

/**
 * Email verification.
 */
userSchema.index(
  {
    emailVerified: 1,
  },
  {
    name: 'idx_user_email_verified',
  },
);

/**
 * Recently created users.
 */
userSchema.index(
  {
    createdAt: -1,
  },
  {
    name: 'idx_user_created_at',
  },
);

/**
 * Recently updated users.
 */
userSchema.index(
  {
    updatedAt: -1,
  },
  {
    name: 'idx_user_updated_at',
  },
);

/**
 * Recently logged in users.
 */
userSchema.index(
  {
    lastLoginAt: -1,
  },
  {
    name: 'idx_user_last_login',
  },
);

/* -------------------------------------------------------------------------- */
/*                            Compound Indexes                                */
/* -------------------------------------------------------------------------- */

/**
 * Active non-deleted users.
 */
userSchema.index(
  {
    isDeleted: 1,
    isActive: 1,
  },
  {
    name: 'idx_user_active',
  },
);

/**
 * Dashboard listing.
 */
userSchema.index(
  {
    isDeleted: 1,
    updatedAt: -1,
  },
  {
    name: 'idx_user_dashboard',
  },
);

/**
 * Role filtering.
 */
userSchema.index(
  {
    role: 1,
    isActive: 1,
  },
  {
    name: 'idx_user_role_active',
  },
);

/**
 * Provider filtering.
 */
userSchema.index(
  {
    authProvider: 1,
    isDeleted: 1,
  },
  {
    name: 'idx_user_provider',
  },
);

/**
 * Admin panel listing.
 */
userSchema.index(
  {
    role: 1,
    isDeleted: 1,
    isActive: 1,
  },
  {
    name: 'idx_user_admin',
  },
);

/**
 * Email lookup with status.
 */
userSchema.index(
  {
    email: 1,
    isDeleted: 1,
  },
  {
    name: 'idx_user_email_deleted',
  },
);

/**
 * Provider + Google ID.
 */
userSchema.index(
  {
    authProvider: 1,
    googleId: 1,
  },
  {
    sparse: true,
    name: 'idx_user_google_provider',
  },
);

/* -------------------------------------------------------------------------- */
/*                              Full Text Search                              */
/* -------------------------------------------------------------------------- */

userSchema.index(
  {
    name: 'text',
    email: 'text',
    givenName: 'text',
    familyName: 'text',
  },
  {
    name: 'idx_user_text_search',
    weights: {
      name: 10,
      email: 8,
      givenName: 5,
      familyName: 5,
    },
  },
);
/* -------------------------------------------------------------------------- */
/*                                Middleware                                  */
/* -------------------------------------------------------------------------- */

/**
 * Normalize email before validation.
 */
userSchema.pre('validate', function () {
  if (this.isModified('email') && this.email) {
    this.email = this.email.trim().toLowerCase();
  }
});
/**
 * Trim string fields.
 */
userSchema.pre('save', function () {
  if (this.isModified('name')) {
    this.name = this.name.trim();
  }

  if (this.isModified('givenName') && this.givenName) {
    this.givenName = this.givenName.trim();
  }

  if (this.isModified('familyName') && this.familyName) {
    this.familyName = this.familyName.trim();
  }

  if (this.isModified('locale') && this.locale) {
    this.locale = this.locale.trim();
  }

  if (this.isModified('hostedDomain') && this.hostedDomain) {
    this.hostedDomain = this.hostedDomain.trim();
  }
});

/**
 * Hash password for LOCAL accounts only.
 */
userSchema.pre('save', async function () {
  if (this.authProvider !== AUTH_PROVIDER.LOCAL || !this.isModified('password') || !this.password) {
    return;
  }

  this.password = await bcrypt.hash(this.password, env.BCRYPT_SALT_ROUNDS);
});

/**
 * Exclude soft-deleted users from all find operations.
 */
userSchema.pre(/^find/, function (this: Query<unknown, IUser>) {
  this.where({
    isDeleted: false,
  });
});

/**
 * Exclude soft-deleted users from aggregation pipelines.
 */
userSchema.pre('aggregate', function (this: Aggregate<unknown[]>) {
  this.pipeline().unshift({
    $match: {
      isDeleted: false,
    },
  });
});

/**
 * Keep email normalized on update queries.
 */
/**
 * Normalize update payload.
 */
const normalizeUpdateMiddleware = async function (this: Query<unknown, IUser>): Promise<void> {
  const update = this.getUpdate();

  if (!update || typeof update !== 'object') {
    return;
  }

  const normalizeEmail = (value: unknown) =>
    typeof value === 'string' ? value.trim().toLowerCase() : value;

  const normalizeString = (value: unknown) => (typeof value === 'string' ? value.trim() : value);

  const hashPassword = async (value: unknown) => {
    if (typeof value !== 'string') {
      return value;
    }

    return bcrypt.hash(value.trim(), env.BCRYPT_SALT_ROUNDS);
  };

  const data = update as Record<string, unknown>;

  if ('email' in data) {
    data.email = normalizeEmail(data.email);
  }

  if ('name' in data) {
    data.name = normalizeString(data.name);
  }

  if ('givenName' in data) {
    data.givenName = normalizeString(data.givenName);
  }

  if ('familyName' in data) {
    data.familyName = normalizeString(data.familyName);
  }

  if ('locale' in data) {
    data.locale = normalizeString(data.locale);
  }

  if ('hostedDomain' in data) {
    data.hostedDomain = normalizeString(data.hostedDomain);
  }

  if ('password' in data) {
    data.password = await hashPassword(data.password);
  }

  if ('$set' in data && data.$set && typeof data.$set === 'object') {
    const set = data.$set as Record<string, unknown>;

    if ('email' in set) {
      set.email = normalizeEmail(set.email);
    }

    if ('name' in set) {
      set.name = normalizeString(set.name);
    }

    if ('givenName' in set) {
      set.givenName = normalizeString(set.givenName);
    }

    if ('familyName' in set) {
      set.familyName = normalizeString(set.familyName);
    }

    if ('locale' in set) {
      set.locale = normalizeString(set.locale);
    }

    if ('hostedDomain' in set) {
      set.hostedDomain = normalizeString(set.hostedDomain);
    }

    if ('password' in set) {
      set.password = await hashPassword(set.password);
    }
  }
};

userSchema.pre('findOneAndUpdate', normalizeUpdateMiddleware);

userSchema.pre('updateOne', normalizeUpdateMiddleware);

userSchema.pre('updateMany', normalizeUpdateMiddleware);
/* -------------------------------------------------------------------------- */
/*                                  Virtuals                                  */
/* -------------------------------------------------------------------------- */

/**
 * Whether the user authenticated using Google.
 */
userSchema.virtual('isGoogleUser').get(function () {
  return this.authProvider === AUTH_PROVIDER.GOOGLE;
});

/**
 * Whether the user authenticated using email/password.
 */
userSchema.virtual('isLocalUser').get(function () {
  return this.authProvider === AUTH_PROVIDER.LOCAL;
});

/**
 * Whether the user has a profile avatar.
 */
userSchema.virtual('hasAvatar').get(function () {
  return Boolean(this.avatar?.url);
});

/**
 * User full display name.
 *
 * Preference:
 * 1. Name
 * 2. Given + Family Name
 * 3. Email
 */
userSchema.virtual('displayName').get(function () {
  if (this.name?.trim()) {
    return this.name;
  }

  const fullName = [this.givenName, this.familyName].filter(Boolean).join(' ').trim();

  if (fullName) {
    return fullName;
  }

  return this.email;
});

/**
 * User initials.
 *
 * Examples:
 * John Doe -> JD
 * Bharani -> B
 */
userSchema.virtual('initials').get(function () {
  if (this.name) {
    const initials = this.name
      .trim()
      .split(/\s+/)
      .map((word: string) => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    if (initials) {
      return initials;
    }
  }

  if (this.givenName || this.familyName) {
    return [this.givenName?.charAt(0), this.familyName?.charAt(0)]
      .filter(Boolean)
      .join('')
      .toUpperCase();
  }

  return this.email.charAt(0).toUpperCase();
});

/**
 * Whether this account can login using password.
 */
userSchema.virtual('canLoginWithPassword').get(function () {
  return this.authProvider === AUTH_PROVIDER.LOCAL && Boolean(this.password);
});

/**
 * Whether this account can login using Google.
 */
userSchema.virtual('canLoginWithGoogle').get(function () {
  return this.authProvider === AUTH_PROVIDER.GOOGLE;
});

/**
 * Whether the account is available for login.
 */
userSchema.virtual('isAvailable').get(function () {
  return this.isActive && !this.isDeleted;
});

/**
 * Whether the email is verified.
 */
userSchema.virtual('isEmailVerified').get(function () {
  return this.emailVerified;
});

/**
 * Last login timestamp in milliseconds.
 */
userSchema.virtual('lastLoginTimestamp').get(function () {
  return this.lastLoginAt ? this.lastLoginAt.getTime() : null;
});

/**
 * User account age in days.
 */
userSchema.virtual('accountAgeInDays').get(function () {
  if (!this.createdAt) {
    return 0;
  }

  const diff = Date.now() - this.createdAt.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
});

/**
 * Whether the account has ever logged in.
 */
userSchema.virtual('hasLoggedIn').get(function () {
  return this.lastLoginAt !== null;
});

/**
 * Profile completion percentage.
 */
userSchema.virtual('profileCompletion').get(function () {
  const fields = [
    this.name,
    this.email,
    this.avatar?.url,
    this.givenName,
    this.familyName,
    this.locale,
  ];

  const completed = fields.filter(Boolean).length;

  return Math.round((completed / fields.length) * 100);
});
/* -------------------------------------------------------------------------- */
/*                               Model Export                                 */
/* -------------------------------------------------------------------------- */

export const User = model<IUser, IUserModel>('User', userSchema);
