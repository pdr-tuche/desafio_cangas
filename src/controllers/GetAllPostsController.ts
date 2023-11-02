import { Request, Response } from "express";
import { GetAllPostsService } from "../services/GetAllPostsService";

export class GetAllPostsController {
    async handle(req: Request, res: Response) {
        const getAllPostsService = new GetAllPostsService();

        const posts = await getAllPostsService.execute();

        return res.json(posts);
    }
}
