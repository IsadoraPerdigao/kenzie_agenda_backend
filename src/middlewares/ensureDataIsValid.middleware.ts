import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const ensureDataIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    const validData = schema.parse(request.body);

    request.body = validData;

    return next();
  };

export { ensureDataIsValidMiddleware };
