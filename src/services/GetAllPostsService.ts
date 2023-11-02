import { postRepository } from "../repositories/PostRepository";

export class GetAllPostsService {
    async execute() {
        const posts = await postRepository.find({ relations: ["user"] });

        return posts;
    }
}
