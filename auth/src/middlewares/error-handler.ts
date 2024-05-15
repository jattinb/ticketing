import { Request, Response, NextFunction } from "express";
import { RequestValidationError } from "../errors/request-validation-errors";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof RequestValidationError) {
        return res.status(err.statusCode).send(err.serializeErrors());
    }
    return res.status(400).send({
        message: err.message
    });
};