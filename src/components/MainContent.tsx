import React from "react";
import styled from "styled-components";
import TicketList from "./TicketList";

const MenuWrapper = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all;
  text-transform: uppercase;
  font-size: 12px;
  background: white;
  color: #4a4a4a;
  &:hover {
    cursor: pointer;
  }

  &:nth-child(1) {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:nth-child(2) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const HeaderSortWrapper = styled.div`
  height: 50px;
  display: flex;
  border: 1px solid #dfe5ec;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const MainContentWrapper = styled.div`
  width: 500px;
  margin-left: 20px;
`;

const MainContent: React.FC = () => {
  return (
    <MainContentWrapper>
      <HeaderSortWrapper>
        <MenuWrapper>
          <span>самый дешевый</span>
        </MenuWrapper>
        <MenuWrapper>
          <span>самый быстрый</span>
        </MenuWrapper>
      </HeaderSortWrapper>

      <TicketList />
    </MainContentWrapper>
  );
};

export default MainContent;
