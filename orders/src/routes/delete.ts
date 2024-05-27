import express, { Request, Response } from "express";
import { Order } from "../models/order";

const router = express.Router();

router.delete("/api/orders/:orderId", async (req: Request, res: Response) => {
  res.send({});
});

export { router as deleteOrderRouter };