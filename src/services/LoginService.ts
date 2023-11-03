import { userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type LoginResponse = {
    user: {
        id: number;
        name: string;
        email: string;
    };
    token: string;
};

export class LoginService {
    async execute({ email, password }): Promise<LoginResponse | Error> {
        const user = await userRepository.findOneBy({ email });
        if (!user) {
            return new Error("Email or password incorrect");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return new Error("Email or password incorrect");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "2h",
        });

        const { password: _, ...userWithoutPassword } = user;

        return {
            user: userWithoutPassword,
            token,
        };
    }
}
