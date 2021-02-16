import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUsers1613215015989 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          //coluna ID
          name: 'id',
          type: 'integer',
          unsigned: true, //essa coluna nao pode ser negativa
          isPrimary: true, //essa coluna é uma PK
          isGenerated: true, //essa coluna vai ser gerada automaticamente
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'password',
          type: 'varchar'
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users')
  }

}
