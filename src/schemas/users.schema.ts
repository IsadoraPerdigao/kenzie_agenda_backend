import { z } from "zod";

const createUserSchema = z.object({
  fullName: z.string().max(60),
  email: z.string().email().max(27),
  password: z.string().max(120),
  phone: z.string().max(15),
});

const returnUserSchema = createUserSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
  })
  .omit({ password: true });

export { createUserSchema, returnUserSchema };
