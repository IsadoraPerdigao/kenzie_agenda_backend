import { Repository } from "typeorm";
import { z } from "zod";
import { User } from "../entities/user.entity";
import { createUserSchema, returnUserSchema } from "../schemas/users.schema";

type userRequest = z.infer<typeof createUserSchema>;
type userResponse = z.infer<typeof returnUserSchema>;
type UserRepo = Repository<User>;

export { userRequest, userResponse, UserRepo };
