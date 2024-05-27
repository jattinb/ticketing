import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import { NotFoundError, errorHandler, currentUser } from "@ticketingjb/common";
import cookieSession from "cookie-session";

import { newOrderRouter } from "./routes/new";
import { showOrderRouter } from "./routes/show";
import { indexOrderRouter } from "./routes";
import { deleteOrderRouter } from "./routes/delete";

const app = express();
app.set("trust proxy", true); // To trust ingress nginx
app.use(json());
app.use(
  cookieSession({
    signed: false, // No Encryption
    secure: process.env.NODE_ENV !== "test", // Only over HTTPS
  })
);
app.use(currentUser);

app.use(newOrderRouter);
app.use(showOrderRouter);
app.use(indexOrderRouter);
app.use(deleteOrderRouter);

app.get("*", async () => {
  return new NotFoundError();
});

app.use(errorHandler);

export { app };
