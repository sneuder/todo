import React from "react";
import { Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";

import Nav from "./components/nav/Nav";
import Addbar from "./components/addbar/Addbar";
import Todos from "./components/Todos";


import styled from "styled-components";

function App() {

  return (
    <Background>
      <Header>#todo</Header>

      <Nav />

      <Switch>
        <Route exact path="/">
          <Addbar />
          <Todos />
        </Route>
        <Route exact path="/active">
          <Addbar />
          <Todos />
        </Route>
        <Route exact path="/completed" component={Todos} />
      </Switch>
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 50%;
  max-width: 500px;
  margin: auto;
`;


