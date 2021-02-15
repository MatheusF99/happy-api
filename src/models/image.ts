import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('images')
export default class Image{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @Column()
    user_id: number
}