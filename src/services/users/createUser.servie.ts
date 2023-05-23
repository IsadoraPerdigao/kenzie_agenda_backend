import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserRepo, userRequest } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schema";

const createUserService = async (userData: userRequest) => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const user = userRepository.create(userData);

  await userRepository.save(user);

  const newUser = returnUserSchema.parse(user);

  return newUser;
};

export default createUserService;
