import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUniqueConstraintEmailContact1685810467046 implements MigrationInterface {
    name = 'ChangeUniqueConstraintEmailContact1685810467046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

}
