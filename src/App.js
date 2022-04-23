import React from "react";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import styled from "styled-components";

function App() {
  return (
    <Background>
      <Header>#todo</Header>
      <Nav >
        <p>Hola</p>
        <p>Hola</p>
        <p>Hola</p>
      </Nav>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 50%;
  margin: auto;
`
