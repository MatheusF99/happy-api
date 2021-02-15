import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import users from '../models/Users';

export default {
	async create(req: Request, res:Response){
		const {
			name,
			phone,
			email
		} = req.body

    
    
    console.log(req.body);

    /*const requestImage = req.files as Express.Multer.File[]
    const images = requestImage.map(image => {
      return {path: image.filename}
    })

    console.log(images);*/

    try {

      const userRepository = getRepository(users)
      
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