import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698965663053 implements MigrationInterface {
    name = 'Default1698965663053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "numberOfComments" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "numberOfComments"`);
    }

}
