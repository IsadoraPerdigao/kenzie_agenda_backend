import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors"
import { userRoutes } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { loginRoutes } from "./routes/login.routes";
import { contactRoutes } from "./routes/contacts.routes";

export const app: Application = express();

app.use(cors())
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes)

app.use(handleAppErrorMiddleware);
