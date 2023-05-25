import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
  contactRepo,
  contactUpdate,
} from "../../interfaces/contacts.interfaces";
import { returnUpdatedContactSchema } from "../../schemas/contacts.schema";

const updateContactService = async (
  contactData: contactUpdate,
  contactId: string
) => {
  const contactRepository: contactRepo = AppDataSource.getRepository(Contact);
  const existingContact = await contactRepository.findOneBy({
    id: contactId,
  });
  const newContact = contactRepository.create({
    ...existingContact,
    ...contactData,
  });

  await contactRepository.save(newContact);

  const updatedUser = returnUpdatedContactSchema.parse(newContact);

  return updatedUser;
};

export { updateContactService };
