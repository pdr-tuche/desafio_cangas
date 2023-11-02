import { Request, Response } from "express";
import { CreateCommentService } from "../services/CreateCommentService";

export class CreateCommentController {
    async handle(req: Request, res: Response) {
        const { content, post_id, user_id } = req.body;

        const createCommentService = new CreateCommentService();

        const result = await createCommentService.execute({
            content,
            post_id,
            user_id,
        });

        if (result instanceof Error) {
            return res.status(400).json({ error: result.message });
        }

        return res.status(201).json(result);
    }
}
