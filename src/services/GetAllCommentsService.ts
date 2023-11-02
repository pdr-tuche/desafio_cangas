import { commentRepository } from "../repositories/CommentRepository";

export class GetAllCommentsService {
    async execute() {
        const comments = await commentRepository.find();

        return comments;
    }
}
