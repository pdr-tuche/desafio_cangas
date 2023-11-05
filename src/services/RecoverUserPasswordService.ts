import { userRepository } from "../repositories/UserRepository";
import { EmailService } from "./EmailService";

export class RecoverUserPasswordService {
    async recoverPassword({ email }) {
        const user = await userRepository.findOne({
            where: { email: email },
        });

        if (!user) {
            return new Error("User not found");
        }

        await EmailService.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password recovery",
            text: `${process.env.BASE_URL}/users/${user.id}/confirmedRecover`,
        })
            .then((message) => {
                console.log(message);
            })
            .catch((err) => {
                console.log(err);
            });

        return { message: "ok" };
    }
}
