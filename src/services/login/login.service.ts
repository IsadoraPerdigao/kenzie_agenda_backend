import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppDataSource } from "../../data-source";
import { UserRepo } from "../../interfaces/users.interfaces";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { Login } from "../../interfaces/login.interfaces";

const loginService = async (loginData: Login): Promise<string> => {
  const userRepository: UserRepo = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return token;
};

export { loginService };
