import { PostgresDataSource } from "../database/app-data-source";
import { Comment } from "../entities/Comment";

export const commentRepository = PostgresDataSource.getRepository(Comment);
