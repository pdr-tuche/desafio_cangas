import { userRepository } from "../repositories/UserRepository";

export class GetUserByIdService {
    async execute(id: string) {
        const user = await userRepository.findOne({
            where: { id: Number(id) },
            relations: ["posts"],
        });
        if (!user) {
            return new Error("user not found");
        }

        return user;
    }
}
