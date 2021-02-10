import {Router} from 'express'
import CreateUser from './controllers/CreateUsers'


const routes = Router()

routes.post('/users', CreateUser.create)

export default routes