// src\middlewares\index.ts

export { default as auth } from "./auth.middleware.js";

export { default as globalErrorHandler } from "./globalErrorHandler.js";

export { upload } from "./multer.middleware.js";

export { default as notFound } from "./notFound.js";

export { default as validateRequest } from "./validateRequest.js";
