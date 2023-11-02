import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698936237653 implements MigrationInterface {
    name = 'Default1698936237653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" ADD "user_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "user_id"`);
    }

}
