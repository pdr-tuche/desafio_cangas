import { Request, Response } from "express";
import { LoginService } from "../services/LoginService";

export class LoginController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const service = new LoginService();
        const login = await service.execute({ email, password });

        if (login instanceof Error) {
            return response.status(400).json({ error: login.message });
        }

        return response.json(login);
    }
}
