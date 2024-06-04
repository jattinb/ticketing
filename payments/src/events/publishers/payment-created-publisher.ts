import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketingjb/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
