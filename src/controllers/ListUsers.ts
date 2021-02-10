import { Request, Response } from 'express'
import Users from '../models/Users'
import { getRepository } from 'typeorm'

export default {
    async index(req: Request, res:Response){
        const userRepository = getRepository(Users)

        const users = await userRepository.find()

        return res.json(users)
    }
}