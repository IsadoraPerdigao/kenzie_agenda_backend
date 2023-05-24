import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { userUpdate, UserRepo } from "../../interfaces/users.interfaces";
import { returnUpdatedUserSchema } from "../../schemas/users.schema";

const updateUserService = async (userData: userUpdate, userId: string) => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const existingUser = await userRepository.findOneBy({
    id: userId,
  });
  const newUser = userRepository.create({
    ...existingUser,
    ...userData,
  });

  await userRepository.save(newUser);

  const updatedUser = returnUpdatedUserSchema.parse(newUser);

  return updatedUser;
};

export { updateUserService };
