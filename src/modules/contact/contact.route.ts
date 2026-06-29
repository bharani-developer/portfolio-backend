// src/modules/contact/contact.route.ts

import { Router } from "express";

import { ROLE } from "../../constants/index.js";
import { auth, validateRequest } from "../../middlewares/index.js";

import { ContactController } from "./contact.controller.js";
import { ContactValidation } from "./contact.validation.js";

const router = Router();

/**
 * Public Routes
 */

router.post(
  "/",
  validateRequest(ContactValidation.createContactValidationSchema),
  ContactController.createContact,
);

/**
 * Admin Routes
 */

router.get("/stats", auth(ROLE.ADMIN), ContactController.getContactStats);

router.get("/active", auth(ROLE.ADMIN), ContactController.getActiveContacts);

router.get("/unread", auth(ROLE.ADMIN), ContactController.getUnreadContacts);

router.get("/read", auth(ROLE.ADMIN), ContactController.getReadContacts);

router.get("/replied", auth(ROLE.ADMIN), ContactController.getRepliedContacts);

router.get(
  "/status/:status",
  auth(ROLE.ADMIN),
  ContactController.getContactsByStatus,
);

router.get(
  "/priority/:priority",
  auth(ROLE.ADMIN),
  ContactController.getContactsByPriority,
);

router.patch("/:id/read", auth(ROLE.ADMIN), ContactController.markAsRead);

router.patch("/:id/replied", auth(ROLE.ADMIN), ContactController.markAsReplied);

router.get("/", auth(ROLE.ADMIN), ContactController.getContacts);

router.get("/:id", auth(ROLE.ADMIN), ContactController.getContactById);

router.patch(
  "/:id",
  auth(ROLE.ADMIN),
  validateRequest(ContactValidation.updateContactValidationSchema),
  ContactController.updateContact,
);

router.delete("/:id", auth(ROLE.ADMIN), ContactController.deleteContact);

export const ContactRoutes = router;
