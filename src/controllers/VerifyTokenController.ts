import { Request, Response } from "express";
import { VerifyTokenService } from "../services/VerifyTokenService";

export class VerifyTokenController {
    async handle(request: Request, response: Response) {
        const { authorization } = request.headers;
        if (!authorization) {
            return response.status(401).json({ error: "Unauthorized" });
        }
        const token = authorization.split(" ")[1];

        const service = new VerifyTokenService();
        const result = await service.execute(token);
        if (result instanceof Error) {
            return response.status(401).json({ error: result.message });
        }
        return response.status(200).json(result);
    }
}
