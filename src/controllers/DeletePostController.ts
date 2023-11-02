import { Request, Response } from "express";
import { DeletePostService } from "../services/DeletePostService";

export class DeletePostController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeletePostService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(204).end();
    }
}
