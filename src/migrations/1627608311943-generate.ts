import {MigrationInterface, QueryRunner} from "typeorm";

export class generate1627608311943 implements MigrationInterface {
    name = 'generate1627608311943'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `ujusy`.`user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `ujusy`.`user`");
    }

}
