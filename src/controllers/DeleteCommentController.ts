import { Request, Response } from "express";
import { DeleteCommentService } from "../services/DeleteCommentService";
import { commentRepository } from "../repositories/CommentRepository";
import { postRepository } from "../repositories/PostRepository";
import { GetAllPostsService } from "../services/GetAllPostsService";
import { UpdatePostService } from "../services/UpdatePostService";

export class DeleteCommentController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteCommentService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        // aqui tem que atualizar a quantidade de comentarios dos POSTS

        return res.status(204).end();
    }
}
