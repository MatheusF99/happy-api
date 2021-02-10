import {Router} from 'express'
import Users from './models/Users'
import { getRepository } from 'typeorm'


const routes = Router()

routes.post('/users', async (req, res)=>{

    const {
        name,
        phone,
        email
    } = req.body

    const userRepository = getRepository(Users)

    const user = userRepository.create({
        name,
        phone,
        email
    })

    await userRepository.save(user)

    console.log(req.query)
    return(
        res.json({message:'hello world'})
    )   
})

export default routes