import { Request, Response } from 'express'
import Users from '../models/Users'
import { getRepository } from 'typeorm'
import userView from '../views/users_view'

export default {
  async index(req: Request, res:Response){
    const userRepository = getRepository(Users)

    const users = await userRepository.find({
      relations:['images']
    })

    return res.json(userView.renderMany(users))
  }
}