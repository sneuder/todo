import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import styled from "styled-components";

import Addbar from "./components/addbar/Addbar";
import Todos from "./components/Todos";

function App() {
  return (
    <Background>
      <Header>#todo</Header>
      <Nav>
        <Sections to='/'>All</Sections>
        <Sections to='/active'>Active</Sections>
        <Sections to='/completed'>Completed</Sections>
      </Nav>
      <Addbar />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/active" element={<Todos />} />
        <Route path="/completed" element={<Todos />} />
      </Routes>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 50%;
  max-width: 500px;
  margin: auto;
`;

const Sections = styled(Link)``;
