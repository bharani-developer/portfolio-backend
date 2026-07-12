// src\constants\message.constant.ts

export const MESSAGE = {
  // Common CRUD
  CREATED: 'Created successfully',
  UPDATED: 'Updated successfully',
  DELETED: 'Deleted successfully',
  RETRIEVED: 'Data retrieved successfully',

  // Request
  VALIDATION_ERROR: 'Validation error',
  BAD_REQUEST: 'Bad request',

  // Authentication & Authorization
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden access',

  // Resources
  NOT_FOUND: 'Resource not found',

  // Upload
  FILE_UPLOADED: 'File uploaded successfully',

  // Server
  INTERNAL_SERVER_ERROR: 'Internal server error',
  SOMETHING_WENT_WRONG: 'Something went wrong',
} as const;
