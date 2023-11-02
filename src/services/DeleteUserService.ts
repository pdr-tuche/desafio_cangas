import { userRepository } from "../repositories/UserRepository";

export class DeleteUserService {
    async execute(id: string) {
        if (!(await userRepository.findOne({ where: { id: Number(id) } }))) {
            return new Error("User not found");
        }

        await userRepository.delete(id);
    }
}
