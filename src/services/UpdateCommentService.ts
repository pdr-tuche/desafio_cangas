import { commentRepository } from "../repositories/CommentRepository";

type CommentUpdateRequest = {
    id: string;
    content: string;
};

export class UpdateCommentService {
    async execute({ id, content }: CommentUpdateRequest) {
        const comment = await commentRepository.findOne({
            where: { id: Number(id) },
        });

        if (!comment) {
            return new Error("comment not found");
        }

        if (content) {
            comment.content = content;
            comment.updated_at = new Date();
        } else {
            comment.content = comment.content;
        }

        await commentRepository.save(comment);

        return comment;
    }
}
