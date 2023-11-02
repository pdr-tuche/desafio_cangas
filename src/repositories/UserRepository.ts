import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";

export const userRepository = PostgresDataSource.getRepository(User);
