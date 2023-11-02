import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";
import { userRepository } from "../repositories/UserRepository";

export class GetAllUsersService {
    async execute(): Promise<User[] | Error> {
        const users = await userRepository.find({
            relations: ["posts"],
        });

        return users;
    }
}
