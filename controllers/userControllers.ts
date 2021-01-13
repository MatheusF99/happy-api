import { Request ,Response } from 'express'
import EmailServices from '../services/EmailServices'

const users = [
    { name: 'matheus', email: 'email@email.com' },
]

export default {
    async index(req:Request, res:Response) {
        return res.json(users)
    },
    async create(req:Request, res:Response) {
        const emailService = new EmailServices();

        emailService.sendEmail({
            to: {
                name: 'matheus',
                email: 'email@email.com'
            },
            message: {
                subject: 'bem-vindo',
                body:'seja bem vindo ao sistema'
            }
        })
        return res.send('enviado com sucesso')
    },
}