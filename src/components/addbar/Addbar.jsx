import React, { useEffect } from "react";

import { addTodos } from "../../utils/utils";

const Addbar = () => {
  let todo = {
    name: "",
    done: false
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      todo.name = e.target[0].value;
      const length = JSON.parse(localStorage.getItem("todos-todoapp"))?.length + 1;
      todo.id = length || 1
      addTodos(todo);
    }}>
      <input type="text" placeholder="Add Todo" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Addbar;
