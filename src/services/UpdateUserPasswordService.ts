import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";

type UserPasswordUpdateRequest = {
    id: string;
    currentPassword: string;
    newPassword: string;
    reNewPassword: string;
};

export class UpdateUserPasswordService {
    async updatePassword({
        id,
        currentPassword,
        newPassword,
        reNewPassword,
    }: UserPasswordUpdateRequest) {
        const user = await userRepository.findOne({
            where: { id: Number(id) },
        });

        if (!currentPassword || !newPassword || !reNewPassword) {
            return new Error("All fields are required");
        }

        if (!user) {
            return new Error("User not found");
        }

        if (newPassword !== reNewPassword) {
            return new Error("New password does not match");
        }

        const passwordMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!passwordMatch) {
            return new Error("Current password does not match");
        }

        user.password = await bcrypt.hash(newPassword, 8);
        await userRepository.update({ id: Number(id) }, user);
        const { password: _, ...userWithoutPasswordProp } = user;

        return userWithoutPasswordProp;
    }
}
