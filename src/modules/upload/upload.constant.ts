// src/modules/upload/upload.constant.ts

/**
 * Upload module constants.
 *
 * Structure:
 * 1. Messages
 * 2. Default values
 * 3. Status
 * 4. Categories
 * 5. Priorities
 * 6. Types
 * 7. Searchable fields
 * 8. Filterable fields
 * 9. Sort fields
 * 10. Select fields
 * 11. Upload Folders
 * 12. Validation
 * 13. Backward Compatibility
 */

/* -------------------------------------------------------------------------- */
/*                                  Messages                                  */
/* -------------------------------------------------------------------------- */

export const UPLOAD_MESSAGE = {
  FILE_UPLOADED: 'File uploaded successfully',

  FILE_DELETED: 'File deleted successfully',

  FILE_REQUIRED: 'File is required',

  FILE_NOT_FOUND: 'File not found',

  INVALID_FILE_TYPE: 'Invalid file type',

  INVALID_FOLDER: 'Invalid upload folder',

  FILE_SIZE_EXCEEDED: 'File size limit exceeded',
} as const;

/* -------------------------------------------------------------------------- */
/*                              Default Values                                */
/* -------------------------------------------------------------------------- */

export const UPLOAD_DEFAULT = {
  MAX_FILES: 1,

  ROOT_FOLDER: 'portfolio',
} as const;

/* -------------------------------------------------------------------------- */
/*                                   Status                                   */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Categories                                 */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                  Priorities                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export const UPLOAD_TYPE = {
  IMAGE: 'image',
} as const;

export const UPLOAD_TYPES = Object.values(UPLOAD_TYPE);

/* -------------------------------------------------------------------------- */
/*                              Searchable Fields                             */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                              Filterable Fields                             */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                 Sort Fields                                */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                                Select Fields                               */
/* -------------------------------------------------------------------------- */

// Not applicable for this module.

/* -------------------------------------------------------------------------- */
/*                               Upload Folders                               */
/* -------------------------------------------------------------------------- */

export const UPLOAD_FOLDER = {
  HERO: 'hero',

  ABOUT: 'about',

  SKILLS: 'skills',

  SERVICES: 'services',

  PROJECTS: 'projects',

  BLOGS: 'blogs',

  EXPERIENCE: 'experience',

  EDUCATION: 'education',

  CERTIFICATIONS: 'certifications',

  TESTIMONIALS: 'testimonials',

  SETTINGS: 'settings',

  CONTACT: 'contact',

  TEMP: 'temp',
} as const;

/**
 * Allowed upload folders.
 */
export const UPLOAD_FOLDERS = Object.values(UPLOAD_FOLDER);

/**
 * Upload folder type.
 */
export type TUploadFolder = (typeof UPLOAD_FOLDER)[keyof typeof UPLOAD_FOLDER];

/**
 * Builds the Cloudinary folder path.
 *
 * Example:
 * buildUploadFolder('projects')
 * => portfolio/projects
 */
export const buildUploadFolder = (folder: TUploadFolder): string =>
  `${UPLOAD_DEFAULT.ROOT_FOLDER}/${folder}`;

/* -------------------------------------------------------------------------- */
/*                                Validation                                  */
/* -------------------------------------------------------------------------- */

export const UPLOAD_VALIDATION = {
  FILE: {
    MAX_SIZE: 5 * 1024 * 1024,

    ALLOWED_MIME_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'] as const,
  },

  IMAGE: {
    URL_MAX_LENGTH: 500,

    PUBLIC_ID_MAX_LENGTH: 255,
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                          Backward Compatibility                            */
/* -------------------------------------------------------------------------- */

/**
 * @deprecated Use UPLOAD_VALIDATION.FILE.ALLOWED_MIME_TYPES
 */
export const ALLOWED_IMAGE_MIME_TYPES = UPLOAD_VALIDATION.FILE.ALLOWED_MIME_TYPES;

/**
 * @deprecated Use UPLOAD_VALIDATION.FILE.MAX_SIZE
 */
export const MAX_FILE_SIZE = UPLOAD_VALIDATION.FILE.MAX_SIZE;
