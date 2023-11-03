import { Request, Response } from "express";
import { DeleteCommentService } from "../services/DeleteCommentService";
import { postRepository } from "../repositories/PostRepository";
import { GetCommentByIdService } from "../services/GetCommentByIdService";
import { GetPostByIdService } from "../services/GetPostByIdService";

export class DeleteCommentController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const serviceDelete = new DeleteCommentService();
        const serviceGetById = new GetCommentByIdService();

        const comment = await serviceGetById.execute(id);
        if (comment instanceof Error) {
            return res.status(404).json({ error: comment.message });
        }

        const postId = comment.post_id;
        const deletedComment = await serviceDelete.execute(id);
        if (deletedComment instanceof Error) {
            return res.status(404).json({ error: deletedComment.message });
        }

        // Atualiza o número de comentários do post
        const serviceGetPostById = new GetPostByIdService();
        const post = await serviceGetPostById.execute(postId.toString());
        if (post instanceof Error) {
            return res.status(404).json({ error: post.message });
        }
        post.numberOfComments = post.numberOfComments - 1;
        await postRepository.save(post);

        return res.status(204).end(); // exclusao do comentario com sucesso
    }
}
