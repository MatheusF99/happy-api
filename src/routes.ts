import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import ShowUsers from './controllers/ShowUsers'

const upload = multer(uploadConfig)

const routes = Router()

routes.post('/users', CreateUser.create)
routes.get('/users', ListUsers.index)
routes.get('/users/:id', upload.array('images'),ShowUsers.show)

export default routes