import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './image'

@Entity('users')
export default class User{
    //colocar os campos da tabela
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    phone: number

    @Column()
    email: string

    @OneToMany(()=> Image, image => image.user, {
      cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'user_id'})
    images: Image[]
}