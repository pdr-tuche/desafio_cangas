import { postRepository } from "../repositories/PostRepository";

type PostUpdateRequest = {
    id: string;
    title: string;
    content: string;
};

export class UpdatePostService {
    async execute({ id, title, content }: PostUpdateRequest) {
        const post = await postRepository.findOne({
            where: { id: Number(id) },
        });

        if (!post) {
            return new Error("Post not found");
        }

        post.title = title ? title : post.title;
        post.content = content ? content : post.content;

        await postRepository.save(post);

        return post;
    }
}
