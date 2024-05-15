import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.get('*', async () => {
    return new NotFoundError()
})

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth')
        console.log('Connected to auth DB')
    } catch (err) {
        console.error(err)
    }
    app.listen(3000, () => {
        console.log('Listening on port 3000!')
    })
}

start();