import { Request, Response } from "express";
import { UpdatePostService } from "../services/UpdatePostService";

export class UpdatePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { title, content } = req.body;

        const service = new UpdatePostService();

        const result = await service.execute({ id, title, content });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(200).json(result);
    }
}
