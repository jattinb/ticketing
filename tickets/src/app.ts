import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { NotFoundError, errorHandler, currentUser } from '@ticketingjb/common';
import cookieSession from 'cookie-session';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes';
import { updateTicketRouter } from './routes/update';

const app = express();
app.set('trust proxy', true)    // To trust ingress nginx
app.use(json())
app.use(
    cookieSession({
        signed: false,  // No Encryption
        secure: process.env.NODE_ENV !== 'test'   // Only over HTTPS
    })
)
app.use(currentUser)

app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.get('*', async () => {
    return new NotFoundError()
})

app.use(errorHandler);

export { app }