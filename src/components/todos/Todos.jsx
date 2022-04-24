import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Background, ContainerTodo, Input, Label, Delete, IconDelete } from "./Components";

import { updateTodos } from "../../redux/actions";
import {
  completeTodo,
  getTodos,
  removeAllTodos,
  removeTodo,
} from "../../utils/utils";

import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Todos = () => {
  const todos = useSelector((state) => state.shownTodos);
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTodos(getTodos(pathname)));
  }, [pathname]);

  return (
    <Background>
      {todos?.map((todo) => {
        const { name, id, done } = todo;
        return (
          <ContainerTodo key={id}>
            <Input
              type="checkbox"
              icon={Delete}
              checked={done}
              onChange={() => {
                completeTodo(todo);
                dispatch(updateTodos(getTodos(pathname)));
              }}
            />
            <Label done={done}>{name}</Label>
            <IconDelete
              icon={faTrashCan}
              onClick={() => dispatch(updateTodos(removeTodo(todo, todos)))}
            />
          </ContainerTodo>
        );
      })}

      {pathname === "/completed" && todos?.length !== 0 && (
        <Delete onClick={() => dispatch(updateTodos(removeAllTodos(todos)))}>
          Delete all
        </Delete>
      )}
    </Background>
  );
};

export default Todos;
