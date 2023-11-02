import { PostgresDataSource } from "../database/app-data-source";
import { Post } from "../entities/Post";

export class GetAllPostsService {
    async execute() {
        const postsRepository = PostgresDataSource.getRepository(Post);

        const posts = await postsRepository.find({ relations: ["user"] });

        return posts;
    }
}
