import { commentRepository } from "../repositories/CommentRepository";
import { postRepository } from "../repositories/PostRepository";
import { userRepository } from "../repositories/UserRepository";

type CommentRequest = {
    content: string;
    post_id: string;
    user_id: string;
};

export class CreateCommentService {
    async execute({ content, post_id, user_id }: CommentRequest) {
        const user = await userRepository.findOne({
            where: { id: Number(user_id) },
        });
        const post = await postRepository.findOne({
            where: { id: Number(post_id) },
        });
        if (!user) {
            return new Error("User not found");
        } else if (!post) {
            return new Error("Post not found");
        }

        const comment = commentRepository.create({
            content,
            post_id: Number(post_id),
            user_id: Number(user_id),
        });
        await commentRepository.save(comment);

        const numberOfComments = await commentRepository.countCommentsByPostId(
            post.id
        );
        post.numberOfComments = numberOfComments;
        await postRepository.save(post);

        return comment;
    }
}
