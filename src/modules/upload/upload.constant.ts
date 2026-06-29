// src\modules\upload\upload.constant.ts

export const UPLOAD_MESSAGE = {
  FILE_UPLOADED: "File uploaded successfully",

  FILE_DELETED: "File deleted successfully",

  FILE_REQUIRED: "File is required",

  FILE_NOT_FOUND: "File not found",

  INVALID_FILE_TYPE: "Invalid file type",

  FILE_SIZE_EXCEEDED: "File size limit exceeded",
} as const;

export const ALLOWED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
] as const;

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
