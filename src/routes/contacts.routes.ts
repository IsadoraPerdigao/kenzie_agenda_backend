import { Router } from "express";
import { createContactController } from "../controllers/contacts.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewarw";

const contactRoutes = Router()

contactRoutes.post("", ensureAuthMiddleware, createContactController)

export { contactRoutes }