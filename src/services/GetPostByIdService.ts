import { postRepository } from "../repositories/PostRepository";

export class GetPostByIdService {
    async execute(id: string) {
        const post = await postRepository.findOne({
            where: { id: Number(id) },
            relations: ["comments"],
        });
        if (!post) {
            return new Error("post not found");
        }

        return post;
    }
}
