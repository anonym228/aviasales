import React from "react";
import Ticket from "./Ticket";

export interface ITicket {
  id: number;
  price: number;
  logo: string;
  transfer: {
    from: string;
    to: string;
    time: string;
  };
  long: string;
  change: {
    how: string;
    where: string;
  };
}

const TicketList: React.FC = () => {
  const ticketData: Array<ITicket> = [
    {
      id: 1,
      price: 13000,
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg",
      transfer: {
        from: "MOV",
        to: "HKT",
        time: "10:45 - 08:00"
      },
      long: "21 hour",
      change: {
        how: "3 пересадки",
        where: "HKG, JNB"
      }
    },
    {
      id: 2,
      price: 14000,
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg",
      transfer: {
        from: "MOV",
        to: "HKT",
        time: "10:45 - 08:00"
      },
      long: "21 hour",
      change: {
        how: "3 пересадки",
        where: "HKG, JNB"
      }
    },
    {
      id: 3,
      price: 16000,
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/S7_new_logo.svg",
      transfer: {
        from: "MOV",
        to: "HKT",
        time: "10:45 - 08:00"
      },
      long: "21 hour",
      change: {
        how: "3 пересадки",
        where: "HKG, JNB"
      }
    }
  ];

  return (
    <>
      <Ticket ticketData={ticketData} />
    </>
  );
};

export default TicketList;
