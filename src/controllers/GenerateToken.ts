import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

function GenerateCreateToken(params: String) {
  return jwt.sign({ params }, process.env.ACCESS_TOKEN_SECRET)
}

export default GenerateCreateToken