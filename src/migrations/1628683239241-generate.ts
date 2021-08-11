import {MigrationInterface, QueryRunner} from "typeorm";

export class generate1628683239241 implements MigrationInterface {
    name = 'generate1628683239241'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ujusy\`.\`user\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`ujusy\`.\`user\` DROP COLUMN \`password\``);
    }

}
