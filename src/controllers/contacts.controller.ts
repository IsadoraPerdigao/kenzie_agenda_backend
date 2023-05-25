import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { getAllContactsService } from "../services/contacts/getAllContacts.service";

const createContactController = async (request: Request, response: Response): Promise<Response> => {
  const userId = response.locals.userId;
  const newContact = await createContactService(request.body, userId);

  return response.status(201).json(newContact);
};

const getAllContactsController = async (request: Request, response: Response): Promise<Response> => {
  const userId = response.locals.userId;
  const contactsList = await getAllContactsService(userId);

  return response.json(contactsList);
};

export { createContactController, getAllContactsController };
