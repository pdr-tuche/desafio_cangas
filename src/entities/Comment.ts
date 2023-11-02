import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";

@Entity("comments")
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @Column()
    post_id: number;

    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: "post_id" })
    post: number;

    @Column()
    user_id: number;
}
