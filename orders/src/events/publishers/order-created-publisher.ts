import { OrderCreatedEvent, Publisher, Subjects } from "@ticketingjb/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
