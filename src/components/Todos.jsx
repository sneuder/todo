import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getTodos, completeTodo } from "../utils/utils";

import styled from "styled-components";

const Todos = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos-todoapp")) || []);
  const pathname = useLocation().pathname;

  useEffect(() => {
    if (pathname === "/") {
      setTodos([...getTodos("all")]);
    }

    if (pathname === "/active") {
      setTodos([...getTodos("active")]);
    }

    if (pathname === "/completed") {
      setTodos([...getTodos("completed")]);
    }
  }, [pathname, todos]);

  return (
    <div>
      {todos?.map((todo) => {
        const { name, id, done } = todo;
        return (
          <ContainerTodo key={id}>
            <Input type="checkbox" placeholder="Add Todo" checked={done} onChange={() => completeTodo(todo)}/>
            <Label>{name}</Label>
          </ContainerTodo>
        );
      })}
    </div>
  );
};

const ContainerTodo = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #828282;
  border-radius: 0.2rem;
  cursor: pointer;

  &:checked {
    background-color: #828282;
  }
`;

const Label = styled.label`
  margin-left: 0.5rem;
`;

export default Todos;
