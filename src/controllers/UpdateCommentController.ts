import { Request, Response } from "express";
import { UpdateCommentService } from "../services/UpdateCommentService";

export class UpdateCommentController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { content } = req.body;

        const service = new UpdateCommentService();

        const result = await service.execute({ id, content });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(200).json(result);
    }
}
