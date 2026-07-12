// src/modules/upload/upload.type.ts

import type { TUploadFolder } from './upload.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Enum-derived Types                            */
/* -------------------------------------------------------------------------- */

/**
 * Supported upload folder.
 */
export type { TUploadFolder } from './upload.constant.js';

/* -------------------------------------------------------------------------- */
/*                              Nested Interfaces                             */
/* -------------------------------------------------------------------------- */

// No nested interfaces for this module.

/* -------------------------------------------------------------------------- */
/*                               Main Interface                               */
/* -------------------------------------------------------------------------- */

/**
 * Upload response returned after a successful upload.
 */
export interface IUploadResponse {
  /**
   * Publicly accessible Cloudinary URL.
   */
  url: string;

  /**
   * Cloudinary public identifier.
   */
  publicId: string;
}

/**
 * Upload options.
 */
export interface IUploadOptions {
  /**
   * Destination upload folder.
   */
  folder: TUploadFolder;

  /**
   * Cloudinary resource type.
   *
   * Defaults to "image".
   */
  resourceType?: 'image' | 'video' | 'raw';
}

/* -------------------------------------------------------------------------- */
/*                               Document Type                                */
/* -------------------------------------------------------------------------- */

// Not applicable.
// Upload module does not persist MongoDB documents.

/* -------------------------------------------------------------------------- */
/*                               Create Payload                               */
/* -------------------------------------------------------------------------- */

// Not applicable.
// Uploads use multipart/form-data.

/* -------------------------------------------------------------------------- */
/*                               Update Payload                               */
/* -------------------------------------------------------------------------- */

// Not applicable.
// Uploaded assets are immutable.

/* -------------------------------------------------------------------------- */
/*                               Model Interface                              */
/* -------------------------------------------------------------------------- */

// Not applicable.
// Upload module does not use a Mongoose model.
