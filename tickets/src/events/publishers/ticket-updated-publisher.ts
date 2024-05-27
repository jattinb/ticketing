import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketingjb/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
