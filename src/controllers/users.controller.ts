import { Request, Response } from "express";
import createUserService from "../services/users/createUser.servie";

const createUserController = async (request: Request, response: Response) => {
  const newUser = await createUserService(request.body);

  return response.status(201).json(newUser);
};

export { createUserController };
