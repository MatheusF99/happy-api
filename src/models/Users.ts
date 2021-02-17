import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import Image from './Image'
import bcrypt from 'bcryptjs'

@Entity('users')
export default class User {
  //colocar os campos da tabela
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }

  @OneToMany(() => Image, image => image.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  images: Image[]
}