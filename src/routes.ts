import {Router} from 'express'
import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import ShowUsers from './controllers/ShowUsers'
import Users from './models/Users'


const routes = Router()

routes.post('/users', CreateUser.create)
routes.get('/users', ListUsers.index)
routes.get('/users/:id', ShowUsers.show)

export default routes