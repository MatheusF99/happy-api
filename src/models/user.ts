import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('usuarios')
export default class Usuarios{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    email: string
}