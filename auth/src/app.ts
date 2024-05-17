import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { NotFoundError } from './errors/not-found-error';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true)    // To trust ingress nginx
app.use(json())
app.use(
    cookieSession({
        signed: false,  // No Encryption
        secure: process.env.NODE_ENV !== 'test'   // Only over HTTPS
    })
)

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.get('*', async () => {
    return new NotFoundError()
})

export { app }