// src\modules\upload\upload.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/role.constant.js";

import { auth, upload } from "../../middlewares/index.js";

import { UploadController } from "./upload.controller.js";

const router = Router();

router.post(
  "/image",
  auth(ROLE.ADMIN),
  upload.single("file"),
  UploadController.uploadImage,
);

router.delete("/image", auth(ROLE.ADMIN), UploadController.deleteImage);

export const UploadRoutes = router;
