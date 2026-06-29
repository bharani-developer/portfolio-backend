// src\modules\upload\upload.validation.ts

import { z } from "zod";

const uploadImageValidationSchema = z.object({
  body: z.object({}).optional(),
});

export const UploadValidation = {
  uploadImageValidationSchema,
};
