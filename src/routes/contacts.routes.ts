import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewarw";
import { ensureContactIdIsValidMiddleware } from "../middlewares/ensureContactIdIsValid.middleware";

const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.get("", ensureAuthMiddleware, getAllContactsController);

contactRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureContactIdIsValidMiddleware,
  getContactController
);
contactRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureContactIdIsValidMiddleware,
  updateContactController
);

contactRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureContactIdIsValidMiddleware,
  deleteContactController
);

export { contactRoutes };
