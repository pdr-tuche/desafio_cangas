import { PostgresDataSource } from "../database/app-data-source";
import { Post } from "../entities/Post";

export const postRepository = PostgresDataSource.getRepository(Post);
