import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.servie";
import { getUserService } from "../services/users/getUser.service";
import { updateUserService } from "../services/users/updateUser.service";
import { returnUserSchema } from "../schemas/users.schema";
import { deleteUserService } from "../services/users/deleteUser.service";

const createUserController = async (request: Request, response: Response): Promise<Response> => {
  const newUser = await createUserService(request.body);

  return response.status(201).json(newUser);
};

const getUserController = async (request: Request, response: Response): Promise<Response> => {
  const user = await getUserService(request.params.id);

  return response.json(user);
};

const getMeController = async (request: Request, response: Response): Promise<Response> => {
  const user = await getUserService(response.locals.userId);
  
  return response.json(user);
};


const updateUserController = async (request: Request, response: Response): Promise<Response> => {
  const updatedUser = await updateUserService(request.body, request.params.id);
  const newUpdatedUser = returnUserSchema.parse(updatedUser);

  return response.json(newUpdatedUser);
};

const deleteUserController = async (request: Request, response: Response): Promise<Response> => {
  await deleteUserService(request.params.id);

  return response.status(204).send();
};

export { createUserController, getUserController, updateUserController, deleteUserController, getMeController };
