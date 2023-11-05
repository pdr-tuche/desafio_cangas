import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";
import { EmailService } from "./EmailService";

export class RecoverUserPasswordConfirmedService {
    async confirmedRecover({ id, newPassword, reNewPassword }) {
        if (!newPassword || !reNewPassword) {
            return new Error("Password is required");
        }

        if (newPassword !== reNewPassword) {
            return new Error("Passwords do not match");
        }
        const user = await userRepository.findOne({ where: { id } });
        if (!user) {
            return new Error("User not found");
        }

        const passwordHash = await bcrypt.hash(newPassword, 8);
        const updatedUser = await userRepository.update(
            { id },
            { password: passwordHash }
        );

        await EmailService.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: "Password updated",
            text: "Your password has been updated successfully",
        })
            .then((message) => {
                console.log(message);
            })
            .catch((err) => {
                console.log(err);
            });

        return updatedUser;
    }
}
