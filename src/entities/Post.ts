import {
    Entity,
    Column,
    CreateDateColumn,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("posts")
export class Post {
    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    user_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;
}
