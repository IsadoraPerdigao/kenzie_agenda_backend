import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { contactRepo } from "../../interfaces/contacts.interfaces";
import { manyContactsSchema } from "../../schemas/contacts.schema";

const getAllContactsService = async (userId: string) => {
  const contactsRepository: contactRepo = AppDataSource.getRepository(Contact);
  const contacts = await contactsRepository.find({
    where: {
      user: {
        id: userId,
      },
    },
    order: {
      fullName: "ASC",
    },
  });

  return manyContactsSchema.parse(contacts);
};

export { getAllContactsService };
