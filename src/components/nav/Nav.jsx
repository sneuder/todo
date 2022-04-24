import React from "react";

import { Background } from "./Components";
import { Sections } from "./Components";

const Nav = () => {
  return (
    <Background>
      <Sections $active={({ isActive }) => isActive} to="/">
        All
      </Sections>
      <Sections $active={({ isActive }) => isActive} to="/active">
        Active
      </Sections>
      <Sections $active={({ isActive }) => isActive} to="/completed">
        Completed
      </Sections>
    </Background>
  );
};

export default Nav;
