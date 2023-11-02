import { parse } from "path";
import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";

export class DeleteUserService {
    async execute(id: string) {
        const userRepository = PostgresDataSource.getRepository(User);

        if (!(await userRepository.findOne({ where: { id: Number(id) } }))) {
            return new Error("User not found");
        }

        await userRepository.delete(id);
    }
}
