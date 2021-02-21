import express, { Router } from 'express'
import path from 'path'
import multer from 'multer'

import authMiddleware from './middleware/authMiddleware'

import uploadConfig from './config/upload'
import AuthController from './controllers/AuthController'
import CreateUser from './controllers/CreateUsers'
import ListUsers from './controllers/ListUsers'
import ShowUsers from './controllers/ShowUsers'

const routes = Router()

const upload = multer(uploadConfig)

//rota de criação
routes.post('/users', upload.array('images'), CreateUser.create)

//rota de login
routes.post('/user/login', AuthController.authenticate)

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
//rotas autenticadas
routes.use(authMiddleware)
routes.get('/users', ListUsers.index)
routes.get('/users/:id', ShowUsers.show)

export default routes