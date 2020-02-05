import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Filter from "./components/Filter";
import MainContent from "./components/MainContent";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F3F7FA;
    width:960px;
    margin:0 auto;
    font-family: 'Open Sans', Arial, Tahoma;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Header = styled.div`
  text-align: center;
  margin: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo src="https://cdn.worldvectorlogo.com/logos/aviasales-4.svg" />
      </Header>
      <Content>
        <Filter />
        <MainContent />
      </Content>
    </>
  );
};

export default App;
