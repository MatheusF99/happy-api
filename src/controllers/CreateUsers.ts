import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Users from '../models/Users';

export default {
	async create(req: Request, res:Response){
		const {
			name,
			phone,
			email
		} = req.body

    console.log(req.body);

    try {
      const userRepository = getRepository(Users)
      

      const user = userRepository.create({
        name,
        phone,
        email
      })

      await userRepository.save(user)

      return(
        res.status(201).json(user)
      )  
    } catch (error) {
      console.log(error)
    }
		
	}
}