import { DataSource, FindOneOptions } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../entities/User";
import bcrypt from "bcrypt";

export class UserSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        const userRepository = dataSource.getRepository(User);

        const users = [
            {
                name: "Pedro",
                email: "contato.nevespedro@gmail.com",
                password: await bcrypt.hash("pedro", 8),
            },
            {
                name: "Guigas",
                email: "guigas@example.com",
                password: await bcrypt.hash("EOGuigas", 8),
            },
            {
                name: "Rafael",
                email: "rafael@example.com",
                password: await bcrypt.hash("EOLeao", 8),
            },
        ];

        for (const user of users) {
            const userExists = await userRepository.findOneBy({
                email: user.email,
            });
            if (!userExists) {
                const newUser = userRepository.create(user);
                await userRepository.save(newUser);
            }
        }
    }
}
