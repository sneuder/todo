import React from "react";
import { useDispatch } from "react-redux";

import { Form, InputText, InputSubmit } from "./Components";

import { addTodos, getTodos } from "../../utils/utils";
import { updateTodos } from "../../redux/actions";
import { useLocation } from "react-router-dom";

const Addbar = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  let todo = {
    name: "",
    done: false
  }

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      if(e.target[0].value == "") return; 
      todo.name = e.target[0].value;
      const length = JSON.parse(localStorage.getItem("todos-todoapp"))?.length + 1;
      todo.id = length || 1
      addTodos(todo);
      dispatch(updateTodos(getTodos(pathname)));
      e.target[0].value = "";
    }}>
      <InputText type="text" placeholder="Add Todo" />
      <InputSubmit type="submit" value="Add" />
    </Form>
  );
};

export default Addbar;
