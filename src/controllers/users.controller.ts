import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.servie";
import { getUserService } from "../services/users/getUser.service";

const createUserController = async (request: Request, response: Response) => {
  const newUser = await createUserService(request.body);

  return response.status(201).json(newUser);
};

const getUserController = async (request: Request, response: Response): Promise<Response> => {
  const user = await getUserService(request.params.id); 

  return response.json(user);
};

export { createUserController, getUserController };
