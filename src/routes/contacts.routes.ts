import { Router } from "express";
import { createContactController, getAllContactsController } from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewarw";

const contactRoutes = Router()

contactRoutes.post("", ensureAuthMiddleware, createContactController)
contactRoutes.get("", ensureAuthMiddleware, getAllContactsController)

export { contactRoutes }