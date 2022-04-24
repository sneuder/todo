import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateTodos } from "../redux/actions";
import { completeTodo, getTodos } from "../utils/utils";

import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Todos = () => {
  const todos = useSelector((state) => state.shownTodos);
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTodos(getTodos(pathname)));
  }, [pathname]);

  return (
    <div>
      {todos?.map((todo) => {
        const { name, id, done } = todo;
        return (
          <ContainerTodo key={id}>
            <Input
              type="checkbox"
              placeholder="Add Todo"
              checked={done}
              onChange={() => {
                completeTodo(todo);
                dispatch(updateTodos(getTodos(pathname)));
              }}
            />
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
  padding: 0.5rem 0;
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
