import { Message } from "node-nats-streaming";
import { Listener, Subjects, TicketUpdatedEvent } from "@ticketingjb/common";
import { queueGroupName } from "./queue-group-name";
import { Ticket } from "../../models/ticket";

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent["data"], msg: Message) {
    const { id, title, price } = data;
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error("Ticket Not Found");
    }
    ticket.set({
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
