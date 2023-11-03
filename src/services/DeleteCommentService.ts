import { commentRepository } from "../repositories/CommentRepository";

export class DeleteCommentService {
    async execute(id: string) {
        if (!(await commentRepository.findOne({ where: { id: Number(id) } }))) {
            return new Error("Comment not found");
        }

        await commentRepository.delete(id);
    }
}
