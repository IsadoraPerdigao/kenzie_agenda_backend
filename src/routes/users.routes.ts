import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getMeController,
  getUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureIdIsValidMiddleware } from "../middlewares/ensureIdIsValid.middleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middlewarw";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);

userRoutes.get("/me", ensureAuthMiddleware, getMeController)

userRoutes.get("/:id", ensureAuthMiddleware, ensureIdIsValidMiddleware, getUserController);

userRoutes.patch(
  "/:id",
  ensureIdIsValidMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);

userRoutes.delete("/:id", ensureIdIsValidMiddleware, deleteUserController);

export { userRoutes };
