import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteUserService();

        const result = await service.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(204).end();
    }
}
