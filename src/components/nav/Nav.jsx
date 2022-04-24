import React from "react";

import { Background } from "./Components";
import { Sections } from "./Components";

const Nav = () => {
  return (
    <Background>
      <Sections exact to="/" activeStyle={{fontWeight: "bold"}}>
        All
      </Sections>

      <Sections exact to="/active" activeStyle={{fontWeight: "bold"}}>
        Active
      </Sections>

      <Sections exact to="/completed" activeStyle={{fontWeight: "bold"}}>
        Completed
      </Sections>
    </Background>
  );
};

export default Nav;
