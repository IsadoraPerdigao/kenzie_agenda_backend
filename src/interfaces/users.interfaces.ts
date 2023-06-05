import { DeepPartial, Repository } from "typeorm";
import { z } from "zod";
import { User } from "../entities/user.entity";
import { createUserSchema, returnUserSchema } from "../schemas/users.schema";

type UserRepo = Repository<User>;
type userRequest = z.infer<typeof createUserSchema>;
type userResponse = z.infer<typeof returnUserSchema>;
type userUpdate = DeepPartial<userRequest>;

export { userRequest, userResponse, UserRepo, userUpdate };
