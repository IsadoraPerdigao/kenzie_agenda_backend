import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";
import {
  createContactSchema,
  returnContactSchema,
} from "../schemas/contacts.schema";
import { z } from "zod";

type contactRepo = Repository<Contact>;
type contactRequest = z.infer<typeof createContactSchema>;
type contactReturn = z.infer<typeof returnContactSchema>;

export { contactRepo, contactRequest, contactReturn };
