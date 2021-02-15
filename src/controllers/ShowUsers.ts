import { Request, Response } from 'express'
import Users from '../models/Users'
import { getRepository } from 'typeorm'

export default {
    async show(req: Request, res:Response){

        const {
            id
        } = req.params

        const userRepository = getRepository(Users)

        const user = await userRepository.findOneOrFail(id, {
          relations: ['images']
        })

        return res.json(user)
    }
}