import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface tokenProps {
  id: number,
  iat: number,
  exp: number
}

if (process.env.ACCESS_TOKEN_SECRET) {
  dotenv.config({
    path: `${__dirname}/.env.${process.env.ACCESS_TOKEN_SECRET}`
  })
} else {
  dotenv.config()
}


export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  console.log(authorization);


  if (!authorization) {
    return res.sendStatus(401).send({ error: 'No token provided' })
  }

  //token vai receber o authorizatino e tira o Bearer e o espaco depois dele
  const token = authorization.replace('Bearer', '').trim()

  console.log(token);


  try {

    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const { id } = data as tokenProps

    req.userId = id

    return next()

  } catch {

    return res.sendStatus(401)

  }

}