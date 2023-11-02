import { userRepository } from "../repositories/UserRepository";

type UserUpdateRequest = {
    id: string;
    name: string;
    email: string;
};

export class UpdateUserService {
    async execute({ id, name, email }: UserUpdateRequest) {
        const user = await userRepository.findOne({
            where: { id: Number(id) },
        });

        if (!user) {
            return new Error("User not found");
        }

        user.name = name ? name : user.name;
        user.email = email ? email : user.email;

        await userRepository.save(user);

        return user;
    }
}
