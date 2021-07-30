import {MigrationInterface, QueryRunner} from "typeorm";

export class generate1627631370639 implements MigrationInterface {
    name = 'generate1627631370639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ujusy`.`user` ADD `email` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `ujusy`.`user` DROP COLUMN `email`");
    }

}
