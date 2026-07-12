// src/modules/auth/auth.type.ts

/* -------------------------------------------------------------------------- */
/*                         Authentication Request Types                       */
/* -------------------------------------------------------------------------- */

/**
 * Email/password login payload.
 */
export interface ILoginUser {
  /**
   * User email address.
   */
  readonly email: string;

  /**
   * User password.
   */
  readonly password: string;
}

/**
 * Google login request payload.
 */
export interface IGoogleLogin {
  /**
   * Google ID token.
   */
  readonly token: string;
}

/**
 * Change password payload.
 */
export interface IChangePassword {
  /**
   * Current password.
   */
  readonly oldPassword: string;

  /**
   * New password.
   */
  readonly newPassword: string;
}

/* -------------------------------------------------------------------------- */
/*                        Authentication Response Types                       */
/* -------------------------------------------------------------------------- */

/**
 * Authentication response.
 */
export interface ILoginResponse {
  /**
   * JWT access token.
   */
  readonly accessToken: string;

  /**
   * JWT refresh token.
   */
  readonly refreshToken: string;
}

/**
 * Refresh token response.
 */
export interface IRefreshTokenResponse {
  /**
   * Newly generated access token.
   */
  readonly accessToken: string;
}

/* -------------------------------------------------------------------------- */
/*                            Google Authentication                           */
/* -------------------------------------------------------------------------- */

/**
 * Google ID token payload used internally by the application.
 *
 * This interface intentionally does not extend
 * google-auth-library's TokenPayload to keep the
 * service layer independent of external libraries.
 */
export interface IGooglePayload {
  /**
   * Google user identifier.
   */
  readonly sub: string;

  /**
   * Email address.
   */
  readonly email: string;

  /**
   * Email verification status.
   */
  readonly email_verified?: boolean;

  /**
   * Full name.
   */
  readonly name?: string;

  /**
   * Given name.
   */
  readonly given_name?: string;

  /**
   * Family name.
   */
  readonly family_name?: string;

  /**
   * Profile picture URL.
   */
  readonly picture?: string;

  /**
   * Locale.
   *
   * Examples:
   * - en
   * - en-US
   * - ta-IN
   */
  readonly locale?: string;

  /**
   * Google Workspace hosted domain.
   */
  readonly hd?: string;

  /**
   * Token issuer.
   */
  readonly iss?: string;

  /**
   * Authorized party.
   */
  readonly azp?: string;

  /**
   * Audience.
   */
  readonly aud?: string;

  /**
   * Issued-at timestamp (seconds since Unix epoch).
   */
  readonly iat?: number;

  /**
   * Expiration timestamp (seconds since Unix epoch).
   */
  readonly exp?: number;

  /**
   * JWT ID.
   */
  readonly jti?: string;

  /**
   * Nonce.
   */
  readonly nonce?: string;
}
