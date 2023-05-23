import "reflect-metadata";
import express, { Application } from "express";
import { userRoutes } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";

export const app: Application = express();
app.use(express.json());

app.use("/users", userRoutes);

app.use(handleAppErrorMiddleware);
