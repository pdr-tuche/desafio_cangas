import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Comment } from "../entities/Comment";

export class CommentSeeder implements Seeder {
    async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<void> {
        const commentRepository = dataSource.getRepository(Comment);

        const comments = [
            {
                content: "Prazer em conhece-lo, Pedro",
                post_id: 1,
                user_id: 3,
            },
            {
                content: "No cap bro",
                post_id: 3,
                user_id: 2,
            },
            {
                content: "esqueça tudo",
                post_id: 2,
                user_id: 1,
            },
            {
                content: "É o GUIGAS !!!",
                post_id: 2,
                user_id: 1,
            },
        ];

        for (const comment of comments) {
            const newComment = commentRepository.create(comment);
            await commentRepository.save(newComment);
        }
    }
}
