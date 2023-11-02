import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";

export class GetAllUsersService {
    async execute(): Promise<User[] | Error> {
        const userRepository = PostgresDataSource.getRepository(User);

        const users = await userRepository.find();

        return users;
    }
}
