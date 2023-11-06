import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager, runSeeder } from "typeorm-extension";
import { UserSeeder } from "./UserSeeder";
import { PostSeeder } from "./PostSeeder";
import { CommentSeeder } from "./CommentSeeder";

export class MainSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factory: SeederFactoryManager
    ): Promise<void> {
        await runSeeder(dataSource, UserSeeder);
        await runSeeder(dataSource, PostSeeder);
        await runSeeder(dataSource, CommentSeeder);
    }
}
