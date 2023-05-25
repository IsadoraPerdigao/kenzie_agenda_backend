import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { contactRequest } from "../../interfaces/contacts.interfaces";
import { returnContactSchema } from "../../schemas/contacts.schema";

const createContactService = async (
  contactData: contactRequest,
  userId: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const contact: Contact = contactRepository.create({
    ...contactData,
    user,
  });

  await contactRepository.save(contact);

  return returnContactSchema.parse(contact);
};

export { createContactService };
