import { PostgresDataSource } from "../database/app-data-source";
import { Post } from "../entities/Post";
import { User } from "../entities/User";

type PostRequest = {
    title: string;
    content: string;
    user_id: string;
};

export class CreatePostService {
    async execute({ title, content, user_id }: PostRequest) {
        const postsRepository = PostgresDataSource.getRepository(Post);
        const usersRepository = PostgresDataSource.getRepository(User);

        if (
            !(await usersRepository.findOne({ where: { id: Number(user_id) } }))
        ) {
            return new Error("User not found");
        }

        const post = postsRepository.create({
            title,
            content,
            user_id: Number(user_id),
        });
        await postsRepository.save(post);

        return post;
    }
}
