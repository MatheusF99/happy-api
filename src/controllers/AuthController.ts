import dotenv from 'dotenv'
import { Request, Response } from 'express'
import { Generated, getRepository, Repository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/Users';

dotenv.config()

class AuthController {
  async authenticate(req: Request, res: Response) {

    const userRepository = getRepository(User)

    //vai pera os dados enviado pelo body
    const {
      email,
      password
    } = req.body


    //procura pelo email do usuario pra ver se existe
    const user = await userRepository.findOne({ where: { email } })


    if (!user) {
      res.sendStatus(400).send({ error: 'email nao encontrado' })
    }

    //vai comparar a senha que foi enviada com a senha que esta salva
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(400).send('Senha incorreta')
    }

    //so para nao aparecer no return
    delete user.password

    //cria o token
    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET)

    // retorna as informacoes do usuario com o token
    return res.json({
      user,
      token,
    })
  }
}

export default new AuthController()