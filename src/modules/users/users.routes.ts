/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { UsersController } from './users.controller.js';
import { UsersValidation } from './users.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

router
  .route('/')
  .get(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.usersQueryValidationSchema),
    UsersController.getUsers,
  )
  .post(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.createUserValidationSchema),
    UsersController.createUser,
  );

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

// No public routes.

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

router
  .route('/:id')
  .get(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.userParamsValidationSchema),
    UsersController.getUserById,
  )
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.updateUserValidationSchema),
    UsersController.updateUser,
  )
  .delete(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.userParamsValidationSchema),
    UsersController.deleteUser,
  );

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

router.patch(
  '/:id/restore',
  auth(ROLE.ADMIN),
  validateRequest(UsersValidation.userParamsValidationSchema),
  UsersController.restoreUser,
);

router.patch(
  '/:id/activate',
  auth(ROLE.ADMIN),
  validateRequest(UsersValidation.userParamsValidationSchema),
  UsersController.activateUser,
);

router.patch(
  '/:id/deactivate',
  auth(ROLE.ADMIN),
  validateRequest(UsersValidation.userParamsValidationSchema),
  UsersController.deactivateUser,
);

router.patch(
  '/:id/role',
  auth(ROLE.ADMIN),
  validateRequest(UsersValidation.userParamsValidationSchema),
  UsersController.changeUserRole,
);

router
  .route('/:id/avatar')
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.userParamsValidationSchema),
    UsersController.updateAvatar,
  )
  .delete(
    auth(ROLE.ADMIN),
    validateRequest(UsersValidation.userParamsValidationSchema),
    UsersController.removeAvatar,
  );

router.patch(
  '/:id/reset-password',
  auth(ROLE.ADMIN),
  validateRequest(UsersValidation.userParamsValidationSchema),
  UsersController.resetPassword,
);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const UsersRoutes = router;
