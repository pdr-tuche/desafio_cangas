import { commentRepository } from "../repositories/CommentRepository";

export class GetCommentByIdService {
    async execute(id: string) {
        const comment = await commentRepository.findOne({
            where: { id: Number(id) },
        });
        if (!comment) {
            return new Error("comment not found");
        }

        return comment;
    }
}
