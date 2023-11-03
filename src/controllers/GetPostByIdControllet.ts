import { Request, Response } from "express";
import { GetPostByIdService } from "../services/GetPostByIdService";

export class GetPostByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const getPostById = new GetPostByIdService();

        const result = await getPostById.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.json(result);
    }
}
