import {Router} from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'

import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import ShowUsers from './controllers/ShowUsers'



const routes = Router()

const upload = multer(uploadConfig)

routes.post('/users', upload.array('images'), CreateUser.create)
routes.get('/users', ListUsers.index)
routes.get('/users/:id',ShowUsers.show)

export default routes