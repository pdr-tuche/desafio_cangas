import { Request, Response } from "express";
import { CreatePostService } from "../services/CreatePostService";

export class CreatePostController {
    async handle(req: Request, res: Response) {
        const { title, content, user_id } = req.body;

        const createPostService = new CreatePostService();

        const result = await createPostService.execute({
            title,
            content,
            user_id,
        });

        if (result instanceof Error) {
            return res.status(400).json({ error: result.message });
        }

        return res.status(201).json(result);
    }
}
