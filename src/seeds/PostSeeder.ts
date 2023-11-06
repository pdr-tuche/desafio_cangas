import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Post } from "../entities/Post";

export class PostSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        const postRepository = dataSource.getRepository(Post);

        const posts = [
            {
                title: "Sei que apresentação é opcional",
                content:
                    "Olá eu sou o pedro e estou fazendo uma apresentação sobre mim mesmo, eu gosto de programar, e é isso",
                user_id: 1,
                numberOfComments: 1,
            },
            {
                title: null,
                content: "No cap bro",
                user_id: 2,
                numberOfComments: 2,
            },
            {
                title: "Mapa fome",
                content: "eu sou o criador do mapa fome",
                user_id: 3,
                numberOfComments: 1,
            },
        ];

        for (const post of posts) {
            const newPost = postRepository.create(post);
            await postRepository.save(newPost);
        }
    }
}
