import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError";
import { UserRepo } from "../interfaces/users.interfaces";

const ensureIdIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  console.log("procurando user");

  try {
    const userRepository: UserRepo = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({
      id: request.params.id,
    });

    if (!user) {
      throw new AppError("User not found", 404);
    }
  } catch {
    throw new AppError("User not found", 404)
  }
  
  return next();
};

export { ensureIdIsValidMiddleware };
