import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Users from './Users'
@Entity('images')
export default class Images{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    path: string

    @ManyToOne( () => Users, user => user.images )
    @JoinColumn({name: 'user_id'})
    user: Users 
}