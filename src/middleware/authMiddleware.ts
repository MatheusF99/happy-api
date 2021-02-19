import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface tokenProps {
  id: number,
  iat: number,
  exp: number
}

dotenv.config()

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

    const { id } = data as tokenProps

    req.userId = id

    return next()

  } catch {
    return res.sendStatus(401)
  }

}