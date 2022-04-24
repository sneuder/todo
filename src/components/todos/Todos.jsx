import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { ContainerTodo, Input, Label, Delete } from "./Components";

import { updateTodos } from "../../redux/actions";
import { completeTodo, getTodos, removeAllTodos } from "../../utils/utils";

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

      {pathname === "/completed" && todos?.length !== 0 && (
        <Delete onClick={() => dispatch(updateTodos(removeAllTodos(todos)))}>
          Delete
        </Delete>
      )}
    </div>
  );
};

export default Todos;
