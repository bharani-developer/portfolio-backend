// src/modules/auth/auth.routes.ts

import { Router } from 'express';

import { ROLE } from '../../constants/role.constants.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { AuthController } from './auth.controller.js';
import { AuthValidation } from './auth.validation.js';

const router = Router();

/**
 * Public Routes
 */

/**
 * Email / Password Login
 */
router.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthController.login);

/**
 * Google Login
 */
router.post(
  '/google',
  validateRequest(AuthValidation.googleLoginValidationSchema),
  AuthController.googleLogin,
);

/**
 * Refresh Access Token
 */
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenValidationSchema),
  AuthController.refreshToken,
);

/**
 * Protected Routes
 */

/**
 * Current User Profile
 */
router.get('/profile', auth(ROLE.ADMIN, ROLE.VIEWER), AuthController.getProfile);

/**
 * Change Password
 */
router.post(
  '/change-password',
  auth(ROLE.ADMIN, ROLE.VIEWER),
  validateRequest(AuthValidation.changePasswordValidationSchema),
  AuthController.changePassword,
);

/**
 * Logout
 */
router.post('/logout', auth(ROLE.ADMIN, ROLE.VIEWER), AuthController.logout);

export const AuthRoutes = router;
