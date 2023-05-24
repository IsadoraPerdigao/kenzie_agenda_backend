import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserRepo } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

const getUserService = async (userId: string) => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: userId,
  });
  const parsedUser = returnUserSchema.parse(user);

  return parsedUser;
};

export { getUserService };
