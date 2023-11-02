import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    user_id: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: "user_id" })
    user: User;
}
