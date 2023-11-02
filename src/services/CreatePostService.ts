import { postRepository } from "../repositories/PostRepository";
import { userRepository } from "../repositories/UserRepository";

type PostRequest = {
    title: string;
    content: string;
    user_id: string;
};

export class CreatePostService {
    async execute({ title, content, user_id }: PostRequest) {
        if (
            !(await userRepository.findOne({ where: { id: Number(user_id) } }))
        ) {
            return new Error("User not found");
        }

        const post = postRepository.create({
            title,
            content,
            user_id: Number(user_id),
        });
        await postRepository.save(post);

        return post;
    }
}
