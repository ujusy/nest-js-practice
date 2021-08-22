import {MigrationInterface, QueryRunner} from "typeorm";

export class generate1629616655585 implements MigrationInterface {
    name = 'generate1629616655585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ujusy\`.\`user\` ADD \`role\` enum ('CLIENT', 'ADMIN') NOT NULL DEFAULT 'CLIENT'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ujusy\`.\`user\` DROP COLUMN \`role\``);
    }

}
