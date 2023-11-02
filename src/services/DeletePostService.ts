import { PostgresDataSource } from "../database/app-data-source";
import { Post } from "../entities/Post";

export class DeletePostService {
    async execute(id: string) {
        const postsRepository = PostgresDataSource.getRepository(Post);

        if (!(await postsRepository.findOne({ where: { id: Number(id) } }))) {
            return new Error("Post not found");
        }

        await postsRepository.delete(id);
    }
}
