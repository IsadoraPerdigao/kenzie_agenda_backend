import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserRepo } from "../../interfaces/users.interfaces";

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: userId,
  });

  await userRepository.remove(user!);
};

export { deleteUserService };
