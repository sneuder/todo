import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import {ContainerTodo, Input, Label} from "./Components";

import { updateTodos } from "../../redux/actions";
import { completeTodo, getTodos } from "../../utils/utils";


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



export default Todos;
