import { Request, Response } from "express";
import { GetAllCommentsService } from "../services/GetAllCommentsService";

export class GetAllCommentsController {
    async handle(req: Request, res: Response) {
        const getAllCommentsService = new GetAllCommentsService();

        const comments = await getAllCommentsService.execute();

        return res.json(comments);
    }
}
