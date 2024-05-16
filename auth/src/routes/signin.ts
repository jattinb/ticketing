import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import { User } from '../models/user'
import { Password } from '../services/password'
import { validateRequest } from '../middlewares/validate-request'


const router = express.Router()

router.post('api/users/signin',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').trim().notEmpty().withMessage('You must supply a password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {

        const { email, password } = req.body
        const fetchedUser = await User.findOne({ email })
        if (!fetchedUser) {
            throw new Error("Email not found")
        }
        if (! await Password.compare(fetchedUser.password, password)) {
            throw new Error("Passwords dont match")
        }

        res.send({
            'Hi': 'There'
        })
    })

export { router as signinRouter };