import React, { useEffect } from "react";
import { Route, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import Addbar from "./components/addbar/Addbar";
import Todos from "./components/Todos";

import { updateTodos } from "./redux/actions";
import { getTodos } from "./utils/utils";

import styled from "styled-components";

function App() {
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTodos(getTodos()));
  }, []);

  return (
    <Background>
      <Header>#todo</Header>
      <Nav>
        <Sections
          $active={({ isActive }) => isActive}
          to="/"
          onClick={() => dispatch(updateTodos(getTodos("/")))}
        >
          All
        </Sections>
        <Sections
          $active={({ isActive }) => isActive}
          to="/active"
          onClick={() => dispatch(updateTodos(getTodos("/active")))}
        >
          Active
        </Sections>
        <Sections
          $active={({ isActive }) => isActive}
          to="/completed"
          onClick={() => dispatch(updateTodos(getTodos("/completed")))}
        >
          Completed
        </Sections>
      </Nav>
      <Addbar />
      <Route exact path="/" component={Todos} />
      <Route exact path="/active" component={Todos} />
      <Route exact path="/completed" component={Todos} />
    </Background>
  );
}

export default App;

const Background = styled.div`
  width: 50%;
  max-width: 500px;
  margin: auto;
`;

const Sections = styled(NavLink)`
  height: 100%;
  padding: 0rem 1rem;
  text-decoration: none;
  font-weight: 500;
  color: #333333;

  display: flex;
  justify-content: center;
  align-items: center;
`;
