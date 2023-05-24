import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().min(10).max(27),
  password: z.string().min(6).max(120),
});

export { loginSchema };
