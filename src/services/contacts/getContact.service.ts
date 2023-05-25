import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { returnContactSchema } from "../../schemas/contacts.schema";

const getContactService = async (contactId: string) => {
  const contactsRepository = AppDataSource.getRepository(Contact);
  const contact = await contactsRepository.findOneBy({
    id: contactId,
  });

  return returnContactSchema.parse(contact);
};

export { getContactService };