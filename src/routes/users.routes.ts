import { Router } from "express";
import {
  createUserController,
  getUserController,
  updateUserController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  createUserController
);

userRoutes.get("/:id", getUserController);

userRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(updateUserSchema),
  updateUserController
);

export { userRoutes };
