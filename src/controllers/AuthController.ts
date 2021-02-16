import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/Users';


export default {
  async authenticate(req: Request, res: Response) {

    const userRepository = getRepository(User)

    const {
      name,
      email,
      password
    } = req.body

    const user = await userRepository.findOne({ where: { email } })

    if (!user) {
      res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    delete user.password

    return res.json({
      user,
      token,
    })
  }
}