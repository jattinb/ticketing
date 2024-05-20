import { app } from '../app'
import request from 'supertest'
import jwt from 'jsonwebtoken'


export const signin = () => {
    const payload = {
        id: '1lk24j123e',
        email: 'test@test.com'
    }

    const token = jwt.sign(payload, process.env.JWT_KEY!)
    const session = { jwt: token}
    const sessionJSON = JSON.stringify(session)
    const base64 = Buffer.from(sessionJSON).toString('base64')

    return [`session=${base64}`]

}