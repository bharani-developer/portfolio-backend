// src\middlewares\multer.middleware.ts

import fs from 'fs';
import path from 'path';

import multer from 'multer';
import httpStatus from 'http-status';
import { AppError } from '../shared/utils/index.js';

const uploadDirectory = path.join(process.cwd(), 'uploads');

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, {
    recursive: true,
  });
}

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, uploadDirectory);
  },

  filename: (_req, file, callback) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;

    const extension = path.extname(file.originalname);

    callback(null, `${uniqueSuffix}${extension}`);
  },
});

const fileFilter: multer.Options['fileFilter'] = (_req, file, callback) => {
  const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    callback(
      new AppError(httpStatus.BAD_REQUEST, 'Only JPG, JPEG, PNG and WEBP images are allowed'),
    );

    return;
  }

  callback(null, true);
};

export const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
