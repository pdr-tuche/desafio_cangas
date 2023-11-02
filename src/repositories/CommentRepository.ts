import { PostgresDataSource } from "../database/app-data-source";
import { Comment } from "../entities/Comment";

export const commentRepository = PostgresDataSource.getRepository(
    Comment
).extend({
    countCommentsByPostId: async (postId: number) => {
        return await PostgresDataSource.getRepository(Comment)
            .createQueryBuilder()
            .where("post_id = :postId", { postId }) // :postId evita SQL injection https://typeorm.io/select-query-builder#using-parameters-to-escape-data
            .getCount();
    },
});
