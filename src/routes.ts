import {Router} from 'express'
import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import Users from './models/Users'


const routes = Router()

routes.post('/users', CreateUser.create)
routes.get('/users', ListUsers.index)

export default routes