import { postRepository } from "../repositories/PostRepository";

export class DeletePostService {
    async execute(id: string) {
        if (!(await postRepository.findOne({ where: { id: Number(id) } }))) {
            return new Error("Post not found");
        }

        await postRepository.delete(id);
    }
}
