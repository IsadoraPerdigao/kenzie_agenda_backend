import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordColumnToUser1684873603705 implements MigrationInterface {
    name = 'AddPasswordColumnToUser1684873603705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
