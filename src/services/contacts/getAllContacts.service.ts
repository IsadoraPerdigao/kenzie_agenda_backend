import { FindManyOptions, ILike } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { contactRepo } from "../../interfaces/contacts.interfaces";
import { manyContactsSchema } from "../../schemas/contacts.schema";

const getAllContactsService = async (userId: string, name?: string) => {
  const contactsRepository: contactRepo = AppDataSource.getRepository(Contact);
  const query = {
    where: {
      user: {
        id: userId,
      },
    },
    order: {
      fullName: "ASC",
    },
  };

  if(name && query.where) {
    //@ts-ignore
    query.where.fullName = ILike(`%${name}%`)
  }

  const contacts = await contactsRepository.find(query as FindManyOptions<Contact>);

  return manyContactsSchema.parse(contacts);
};

export { getAllContactsService };
