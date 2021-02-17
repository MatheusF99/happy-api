import { Request, Response } from 'express'
import { getRepository, Repository } from 'typeorm'
import User from '../models/Users';

export default {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password
    } = req.body

    const requestImage = req.files as Express.Multer.File[]
    const images = requestImage.map(image => {
      return { path: image.filename }
    })

    try {

      const userRepository = getRepository(User)

      const userExists = await userRepository.findOne({ where: { email } })

      if (userExists) {
        res.sendStatus(409)
      }

      const user = userRepository.create({
        name,
        email,
        password,
        images
      })

      await userRepository.save(user)

      return (
        res.status(201).json({ "User create": "201" })
      )
    } catch (error) {
      console.log(error)
    }

  }
}