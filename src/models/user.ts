import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export default class Usuarios{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    email: string
}