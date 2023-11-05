import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";

export class GetUserByIdController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const getUserById = new GetUserByIdService();

        const result = await getUserById.execute(id);

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.json(result);
    }
}
