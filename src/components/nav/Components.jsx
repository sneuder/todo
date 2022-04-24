import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Background = styled.nav`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #bdbdbd;
  height: 2rem;
`;

export const Sections = styled(NavLink)`
  height: 100%;
  padding: 0rem 1rem;
  text-decoration: none;
  font-weight: 500;
  color: #333333;

  display: flex;
  justify-content: center;
  align-items: center;
`;
