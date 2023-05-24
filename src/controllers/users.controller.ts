import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.servie";
import { getUserService } from "../services/users/getUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { returnUserSchema } from "../schemas/users.schema";

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const newUser = await createUserService(request.body);

  return response.status(201).json(newUser);
};

const getUserController = async (request: Request, response: Response): Promise<Response> => {
  const user = await getUserService(request.params.id);

  return response.json(user);
};

const updateUserController = async (request: Request, response: Response): Promise<Response> => {
  const updatedUser = await updateUserService(request.body, request.params.id);
  const newUpdatedUser = returnUserSchema.parse(updatedUser);

  return response.json(newUpdatedUser);
};

export { createUserController, getUserController, updateUserController };
