import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@ticketingjb/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
