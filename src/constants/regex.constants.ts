/**
 * =============================================================================
 * File: regex.constants.ts
 * Description: Common reusable regular expressions.
 * =============================================================================
 */

export const REGEX = Object.freeze({
  /**
   * Alphabetic characters only
   */
  ALPHA: /^[A-Za-z]+$/,

  /**
   * Alphabetic characters with spaces
   */
  ALPHA_SPACE: /^[A-Za-z\s]+$/,

  /**
   * Letters, numbers and spaces
   */
  ALPHANUMERIC: /^[A-Za-z0-9\s]+$/,

  /**
   * Letters, numbers, underscore
   */
  ALPHANUMERIC_UNDERSCORE: /^[A-Za-z0-9_]+$/,

  /**
   * Letters, numbers, dash and underscore
   */
  ALPHANUMERIC_DASH: /^[A-Za-z0-9_-]+$/,

  /**
   * Username
   *
   * 3-30 characters
   * Starts with a letter
   * Allows letters, numbers, _ .
   */
  USERNAME: /^[A-Za-z][A-Za-z0-9_.]{2,29}$/,

  /**
   * Slug
   *
   * hello-world
   */
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,

  /**
   * Email
   */
  EMAIL: /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/,

  /**
   * Password
   *
   * At least:
   * - one lowercase
   * - one uppercase
   * - one digit
   * - one special character
   * - minimum 8 characters
   */
  STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&()[\]{}^+=_.:,;<>~`|\\/-]).{8,}$/,

  /**
   * Phone Number (E.164)
   */
  PHONE_E164: /^\+?[1-9]\d{1,14}$/,

  /**
   * Indian Mobile Number
   */
  INDIAN_MOBILE: /^[6-9]\d{9}$/,

  /**
   * URL
   */
  URL: /^https?:\/\/(([A-Za-z0-9-]+\.)+[A-Za-z]{2,}|localhost)(:\d{1,5})?(\/.*)?$/,

  /**
   * Domain
   */
  DOMAIN: /^(?!-)(?:[A-Za-z0-9-]{1,63}\.)+[A-Za-z]{2,63}$/,

  /**
   * IPv4
   */
  IPV4: /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,

  /**
   * IPv6
   */
  IPV6: /^(([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:)|::1)$/,

  /**
   * UUID v4
   */
  UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,

  /**
   * Mongo ObjectId
   */
  OBJECT_ID: /^[a-f\d]{24}$/i,

  /**
   * Hex Color
   */
  HEX_COLOR: /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/,

  /**
   * RGB
   */
  RGB: /^rgb\(\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*\)$/,

  /**
   * RGBA
   */
  RGBA: /^rgba\(\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*,\s*(25[0-5]|2[0-4]\d|1\d\d|\d?\d)\s*,\s*(0|0?\.\d+|1(\.0+)?)\s*\)$/,

  /**
   * File Extension
   */
  FILE_EXTENSION: /\.[A-Za-z0-9]+$/,

  /**
   * Image Extension
   */
  IMAGE_EXTENSION: /\.(jpg|jpeg|png|gif|webp|svg)$/i,

  /**
   * PDF Extension
   */
  PDF_EXTENSION: /\.pdf$/i,

  /**
   * Numeric
   */
  NUMERIC: /^\d+$/,

  /**
   * Integer
   */
  INTEGER: /^-?\d+$/,

  /**
   * Positive Integer
   */
  POSITIVE_INTEGER: /^[1-9]\d*$/,

  /**
   * Decimal Number
   */
  DECIMAL: /^-?\d+(\.\d+)?$/,

  /**
   * Percentage
   */
  PERCENTAGE: /^(100|[1-9]?\d)$/,

  /**
   * Year
   */
  YEAR: /^(19|20)\d{2}$/,

  /**
   * Time (24 hour)
   */
  TIME_24: /^([01]\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/,

  /**
   * Date
   */
  DATE_YYYY_MM_DD: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,

  /**
   * HTML Tags
   */
  HTML_TAG: /<[^>]*>/g,

  /**
   * Multiple Spaces
   */
  MULTIPLE_SPACES: /\s{2,}/g,

  /**
   * Leading & Trailing Spaces
   */
  LEADING_TRAILING_SPACES: /^\s+|\s+$/g,

  /**
   * New Lines
   */
  NEW_LINES: /\r?\n/g,

  /**
   * Tabs
   */
  TABS: /\t/g,

  /**
   * Emoji
   */
  EMOJI: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{26FF}]/gu,

  /**
   * Whitespace
   */
  WHITESPACE: /\s+/,

  /**
   * Comma Separator
   */
  COMMA: /\s*,\s*/,

  /**
   * Semicolon Separator
   */
  SEMICOLON: /\s*;\s*/,

  /**
   * Pipe Separator
   */
  PIPE: /\s*\|\s*/,
} as const);

/* -------------------------------------------------------------------------- */
/* Individual Exports                                                         */
/* -------------------------------------------------------------------------- */

export const EMAIL_REGEX = REGEX.EMAIL;
export const PASSWORD_REGEX = REGEX.STRONG_PASSWORD;
export const USERNAME_REGEX = REGEX.USERNAME;
export const PHONE_REGEX = REGEX.PHONE_E164;
export const INDIAN_MOBILE_REGEX = REGEX.INDIAN_MOBILE;
export const URL_REGEX = REGEX.URL;
export const DOMAIN_REGEX = REGEX.DOMAIN;
export const OBJECT_ID_REGEX = REGEX.OBJECT_ID;
export const UUID_V4_REGEX = REGEX.UUID_V4;
export const SLUG_REGEX = REGEX.SLUG;
export const HEX_COLOR_REGEX = REGEX.HEX_COLOR;
export const IMAGE_EXTENSION_REGEX = REGEX.IMAGE_EXTENSION;
export const PDF_EXTENSION_REGEX = REGEX.PDF_EXTENSION;
export const NUMERIC_REGEX = REGEX.NUMERIC;
export const INTEGER_REGEX = REGEX.INTEGER;
export const DECIMAL_REGEX = REGEX.DECIMAL;
export const YEAR_REGEX = REGEX.YEAR;
export const DATE_REGEX = REGEX.DATE_YYYY_MM_DD;
export const TIME_REGEX = REGEX.TIME_24;
