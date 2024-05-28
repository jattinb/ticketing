import { OrderCancelledEvent, Publisher, Subjects } from "@ticketingjb/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
