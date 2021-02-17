import { Router } from 'express'
import multer from 'multer'

import authMiddleware from './middleware/authMiddleware'

import uploadConfig from './config/upload'
import AuthController from './controllers/AuthController'
import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import ShowUsers from './controllers/ShowUsers'



const routes = Router()

const upload = multer(uploadConfig)

routes.post('/users', upload.array('images'), CreateUser.create)
routes.post('/auth', AuthController.authenticate)
routes.get('/users', ListUsers.index)
routes.get('/users/:id', authMiddleware, ShowUsers.show)

export default routes