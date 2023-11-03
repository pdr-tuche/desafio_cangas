import { Request, Response } from "express";
import { GetCommentByIdService } from "../services/GetCommentByIdService";

export class GetCommentByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const getCommentById = new GetCommentByIdService();

        const result = await getCommentById.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.json(result);
    }
}
