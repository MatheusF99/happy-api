import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1612921153989 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
        name: 'users',
        columns:[
          {
            //coluna ID
            name: 'id',
            type:'interger',
            unsigned: true, //essa coluna nao pode ser negativa
            isPrimary: true, //essa coluna é uma PK
            isGenerated: true, //essa coluna vai ser gerada automaticamente
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar'
          },
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
