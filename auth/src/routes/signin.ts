import express, { Request, Response } from 'express'
import { body } from 'express-validator'
import jwt from 'jsonwebtoken'
import { User } from '../models/user'
import { Password } from '../services/password'
import { validateRequest } from '../middlewares/validate-request'
import { BadRequestError } from '../errors/bad-request-error'


const router = express.Router()

router.post('/api/users/signin',
    [
        body('email').isEmail().withMessage('Email must be valid'),
        body('password').trim().notEmpty().withMessage('You must supply a password')
    ],
    validateRequest,
    async (req: Request, res: Response) => {

        const { email, password } = req.body
        const fetchedUser = await User.findOne({ email })
        if (!fetchedUser) {
            throw new BadRequestError("Email not found")
        }
        if (! await Password.compare(fetchedUser.password, password)) {
            throw new BadRequestError("Passwords dont match")
        }

        // Generate JWT
        const userJwt = jwt.sign(
            {
                id: fetchedUser.id,
                email: fetchedUser.email
            },
            process.env.JWT_KEY!
        )

        // Store on Session object
        req.session = {
            jwt: userJwt
        }
        res.status(200).send(fetchedUser);
    })

export { router as signinRouter };