import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1613064621703 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns:[
                {
                    name: 'id',
                    type:'integer',
                    unsigned: true, //essa coluna nao pode ser negativa
                    isPrimary: true, //essa coluna é uma PK
                    isGenerated: true, //essa coluna vai ser gerada automaticamente
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                //aqui vai receber o id do usuario
                {
                    name: 'user_id',
                    type: 'integer',
                }
            ],
            foreignKeys:[
                {
                    name: 'imageUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
