import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePost1698885054570 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "posts",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                    },
                    { name: "title", type: "varchar" },
                    { name: "content", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "user_id", type: "int" },
                ],
                foreignKeys: [
                    {
                        name: "fk_post_user",
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("post");
    }
}
