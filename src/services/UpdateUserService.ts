import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";

type UserUpdateRequest = {
    id: string;
    name: string;
    email: string;
};

export class UpdateUserService {
    async execute({ id, name, email }: UserUpdateRequest) {
        const usersRepository = PostgresDataSource.getRepository(User);

        const user = await usersRepository.findOne({
            where: { id: Number(id) },
        });

        if (!user) {
            return new Error("User not found");
        }

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;

        await usersRepository.save(user);

        return user;
    }
}
