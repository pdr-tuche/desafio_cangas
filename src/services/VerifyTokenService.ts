import { userRepository } from "../repositories/UserRepository";
import jwt from "jsonwebtoken";

type JwtPayload = {
    id: number;
};

export class VerifyTokenService {
    async execute(token: string) {
        const { id } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
        const user = await userRepository.findOneBy({ id });
        if (!user) {
            return new Error("Unauthorized");
        }

        const { password: _, ...loggedUser } = user;
        return loggedUser;
    }
}
