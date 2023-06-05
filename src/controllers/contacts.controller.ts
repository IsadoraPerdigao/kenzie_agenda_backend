import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { getAllContactsService } from "../services/contacts/getAllContacts.service";
import { getContactService } from "../services/contacts/getContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { contactReturn } from "../interfaces/contacts.interfaces";

const createContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.userId;
  const newContact = await createContactService(request.body, userId);

  return response.status(201).json(newContact);
};

const getAllContactsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId = response.locals.userId;
  const name = request.query.name as string;
  const contactsList = await getAllContactsService(userId, name);


  return response.json(contactsList);
};

const getContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId = request.params.id;
  const contact = await getContactService(contactId);

  return response.json(contact);
};

const updateContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const contactId = request.params.id;
  const updatedContact = await updateContactService(request.body, contactId);

  return response.json(updatedContact);
};

const deleteContactController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  await deleteContactService(request.params.id);

  return response.status(204).send();
};

export {
  createContactController,
  getAllContactsController,
  getContactController,
  updateContactController,
  deleteContactController,
};
