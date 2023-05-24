import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";
import { ensureIdIsValidMiddleware } from "../middlewares/ensureIdIsValid.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);

userRoutes.get("/:id", ensureIdIsValidMiddleware, getUserController);

userRoutes.patch(
  "/:id",
  ensureIdIsValidMiddleware,
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);

userRoutes.delete("/:id", ensureIdIsValidMiddleware, deleteUserController);

export { userRoutes };
