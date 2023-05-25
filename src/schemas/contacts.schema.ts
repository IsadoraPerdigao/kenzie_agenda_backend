import { z } from "zod";

const createContactSchema = z.object({
  fullName: z.string().max(60),
  email: z.string().email().max(27),
  phone: z.string().max(15),
});

const returnContactSchema = createContactSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
  })

const manyContactsSchema = returnContactSchema.array();

export { createContactSchema, returnContactSchema, manyContactsSchema };
