/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { Router } from 'express';

import { ROLE } from '../../constants/index.js';

import { auth, validateRequest } from '../../middlewares/index.js';

import { ContactController } from './contact.controller.js';
import { ContactValidation } from './contact.validation.js';

/* -------------------------------------------------------------------------- */
/*                                   Router                                   */
/* -------------------------------------------------------------------------- */

const router = Router();

/* -------------------------------------------------------------------------- */
/*                              Custom Public                                 */
/* -------------------------------------------------------------------------- */

// No custom public routes.

/* -------------------------------------------------------------------------- */
/*                            Collection Routes                               */
/* -------------------------------------------------------------------------- */

/**
 * GET    /
 * POST   /
 *
 * POST is public (portfolio contact form).
 * GET is restricted to administrators.
 */
router
  .route('/')
  .get(auth(ROLE.ADMIN), ContactController.getContacts)
  .post(
    validateRequest(ContactValidation.createContactValidationSchema),
    ContactController.createContact,
  );

/* -------------------------------------------------------------------------- */
/*                           Single Resource                                  */
/* -------------------------------------------------------------------------- */

/**
 * GET    /:id
 * PATCH  /:id
 * DELETE /:id
 */
router
  .route('/:id')
  .get(auth(ROLE.ADMIN), ContactController.getContactById)
  .patch(
    auth(ROLE.ADMIN),
    validateRequest(ContactValidation.updateContactValidationSchema),
    ContactController.updateContact,
  )
  .delete(auth(ROLE.ADMIN), ContactController.deleteContact);

/* -------------------------------------------------------------------------- */
/*                             Custom Protected                               */
/* -------------------------------------------------------------------------- */

/**
 * GET /contact/stats
 */
router.get('/stats', auth(ROLE.ADMIN), ContactController.getContactStats);

/**
 * GET /contact/active
 */
router.get('/active', auth(ROLE.ADMIN), ContactController.getActiveContacts);

/**
 * GET /contact/unread
 */
router.get('/unread', auth(ROLE.ADMIN), ContactController.getUnreadContacts);

/**
 * GET /contact/read
 */
router.get('/read', auth(ROLE.ADMIN), ContactController.getReadContacts);

/**
 * GET /contact/replied
 */
router.get('/replied', auth(ROLE.ADMIN), ContactController.getRepliedContacts);

/**
 * GET /contact/status/:status
 */
router.get('/status/:status', auth(ROLE.ADMIN), ContactController.getContactsByStatus);

/**
 * GET /contact/priority/:priority
 */
router.get('/priority/:priority', auth(ROLE.ADMIN), ContactController.getContactsByPriority);

/**
 * PATCH /contact/:id/read
 */
router.patch('/:id/read', auth(ROLE.ADMIN), ContactController.markAsRead);

/**
 * PATCH /contact/:id/replied
 */
router.patch('/:id/replied', auth(ROLE.ADMIN), ContactController.markAsReplied);

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const ContactRoutes = router;
