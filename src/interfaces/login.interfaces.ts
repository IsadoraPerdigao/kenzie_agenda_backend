import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

type Login = z.infer<typeof loginSchema>;

export { Login };
