import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { contactRepo } from "../../interfaces/contacts.interfaces";

const deleteContactService = async (contactId: string) => {
  const contactRepository: contactRepo = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOneBy({
    id: contactId,
  });

  await contactRepository.remove(contact!);
};

export { deleteContactService };
