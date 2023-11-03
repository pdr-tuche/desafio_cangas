import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";

type UserRequest = {
    name: string;
    email: string;
    password: string;
};

export class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (await userRepository.findOne({ where: { email } })) {
            return new Error("User already exists");
        }

        const passwordHash = await bcrypt.hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: passwordHash,
        });

        await userRepository.save(user);

        const { password: _, ...userWithoutPasswordProp } = user;

        return userWithoutPasswordProp;
    }
}
