import { PostgresDataSource } from "../database/app-data-source";
import { User } from "../entities/User";

type UserRequest = {
    name: string;
    email: string;
    password: string;
};

export class CreateUserService {
    async execute({
        name,
        email,
        password,
    }: UserRequest): Promise<User | Error> {
        const userRepository = PostgresDataSource.getRepository(User);

        if (await userRepository.findOne({ where: { email } })) {
            return new Error("User already exists");
        }

        const lastId = await userRepository.query("SELECT MAX(id) FROM users;");
        console.log(lastId);
        const lastIdValue = lastId[0].max;

        const user = userRepository.create({
            id: lastIdValue + 1,
            name,
            email,
            password,
        });

        await userRepository.save(user);

        return user;
    }
}