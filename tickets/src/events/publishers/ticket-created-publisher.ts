import { Publisher, Subjects, TicketCreatedEvent } from "@ticketingjb/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
