import React from "react";
import { ITicket } from "./TicketList";
import styled from "styled-components";

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TicketHeaderPrice = styled.h2`
  color: #2196f3;
`;

const TicketHeaderLogo = styled.img`
  max-with: 110px;
  max-height: 40px;
`;

const TicketInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const TicketInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const TicketInfoTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  color: #a0b0b9;
`;
const TicketInfoDesc = styled.span`
  font-size: 14px;
  color: #4a4a4a;
  font-style: normal;
  font-weight: 600;
`;

const TicketListWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px 45px 20px 20px;
  margin-bottom: 20px;
`;

interface IProps {
  ticketData: ITicket[];
}

const Ticket: React.FC<IProps> = ({ ticketData }) => {
  return (
    <>
      {ticketData &&
        ticketData.map((ticket: ITicket) => {
          return (
            <TicketListWrapper key={ticket.id}>
              <TicketHeader>
                <TicketHeaderPrice>{ticket.price} Р</TicketHeaderPrice>
                <TicketHeaderLogo src={ticket.logo} />
              </TicketHeader>
              <TicketInfoWrapper>
                <TicketInfoBlock>
                  <TicketInfoTitle>
                    {ticket.transfer.from} - {ticket.transfer.to}
                  </TicketInfoTitle>
                  <TicketInfoDesc>{ticket.transfer.time}</TicketInfoDesc>
                </TicketInfoBlock>
                <TicketInfoBlock>
                  <TicketInfoTitle>В ПУТИ</TicketInfoTitle>
                  <TicketInfoDesc>{ticket.long}</TicketInfoDesc>
                </TicketInfoBlock>
                <TicketInfoBlock>
                  <TicketInfoTitle>{ticket.change.how}</TicketInfoTitle>
                  <TicketInfoDesc>{ticket.change.where}</TicketInfoDesc>
                </TicketInfoBlock>
              </TicketInfoWrapper>
            </TicketListWrapper>
          );
        })}
    </>
  );
};

export default Ticket;
