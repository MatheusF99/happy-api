import dotenv from 'dotenv'
import { Request, response, Response } from 'express'
import { Generated, getRepository, Repository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/Users';

dotenv.config()

class AuthController {
  async authenticate(req: Request, res: Response) {

    const userRepository = getRepository(User)

    //vai pera os dados enviado pelo body
    const email = req.body.email
    const password = req.body.password


    //procura pelo email do usuario pra ver se existe
    const user = await userRepository.findOne({ where: { email } })

    //validação
    if (!user) {

      console.log('email no found');
      return res.json({
        auth: false,
        message: "email not found"
      }).status(401)


    } else {

      //vai comparar a senha que foi enviada com a senha que esta salva
      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword) {
        console.log('incorrect password');
        return res.status(400).json({
          auth: false,
          message: "incorect password"
        }).status(401)

      } else {

        //cria o token, com o id e o secret, pode por um tempo limit para o token
        const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET)

        //so para nao aparecer no return
        delete user.password
        delete user.id

        // retorna as informacoes do usuario com o tokeN
        return res.json({
          auth: true,
          user,
          token,
        })
      }
    }
  }
}

export default new AuthController()