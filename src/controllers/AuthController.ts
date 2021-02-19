import dotenv from 'dotenv'
import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/Users';

dotenv.config()




class AuthController {
  async authenticate(req: Request, res: Response) {

    const userRepository = getRepository(User)

    const {
      email,
      password
    } = req.body



    const user = await userRepository.findOne({ where: { email } })


    if (!user) {
      res.sendStatus(400).send('email nao encontrado')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(400).send('Senha incorreta')
    }

    delete user.password

    const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })

    return res.json({
      user,
      token,
    })
  }
}

export default new AuthController()