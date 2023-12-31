import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsers";

export class GetAllUsersController {
    async handle(req: Request, res: Response) {
        const service = new GetAllUsersService();

        const users = await service.execute();

        return res.json(users);
    }
}
