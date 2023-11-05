import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";
import { UpdateUserPasswordService } from "../services/UpdateUserPasswordService";
import { RecoverUserPasswordService } from "../services/RecoverUserPasswordService";
import { RecoverUserPasswordConfirmedService } from "../services/RecoverUserPasswordConfirmedService";

export class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email } = req.body;

        const service = new UpdateUserService();

        const result = await service.execute({ id, name, email });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(200).json(result);
    }

    async updatePassword(req: Request, res: Response) {
        const { id } = req.params;
        const { currentPassword, newPassword, reNewPassword } = req.body;

        const service = new UpdateUserPasswordService();

        const result = await service.updatePassword({
            id,
            currentPassword,
            newPassword,
            reNewPassword,
        });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res
            .status(200)
            .json({ message: "Password updated", user: result });
    }

    async recoverPassword(req: Request, res: Response) {
        const { email } = req.body;

        const service = new RecoverUserPasswordService();

        const result = await service.recoverPassword({ email });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(200).json(result.message);
    }

    async confirmedRecover(req: Request, res: Response) {
        const { id } = req.params;
        const { newPassword, reNewPassword } = req.body;

        const service = new RecoverUserPasswordConfirmedService();

        const result = await service.confirmedRecover({
            id,
            newPassword,
            reNewPassword,
        });

        if (result instanceof Error) {
            return res.status(404).json({ error: result.message });
        }

        return res.status(200).json({ message: "Password updated" });
    }
}
