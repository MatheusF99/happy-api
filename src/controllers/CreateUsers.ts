import { Request, Response } from 'express'
import Users from '../models/Users'
import { getRepository } from 'typeorm'

export default {
	async create(req: Request, res:Response){
		const {
			name,
			phone,
			email
		} = req.body

    console.log(name);

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
	}
}