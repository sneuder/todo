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
      addTodos(todo);
    }}>
      <input type="text" placeholder="Add Todo" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Addbar;
