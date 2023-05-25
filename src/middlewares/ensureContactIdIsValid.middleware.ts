import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../interfaces/contacts.interfaces";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entity";
import { AppError } from "../errors/AppError";

const ensureContactIdIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const contactRepository: contactRepo = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({
      id: request.params.id,
    });

    if (!contact) {
      throw new AppError("Contact not found", 404);
    }
  } catch {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export { ensureContactIdIsValidMiddleware };