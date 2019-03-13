import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #efefef;

  > a {
    text-decoration: none;
    color: #838383;
    padding: 1rem;
    transition: all 0.3s; 

      &:hover {
        text-decoration: underline;
  }
}
`;

const Navigation = props => {
  return (
    <Nav>
      <NavLink exact to="/friends">
        Home
      </NavLink>
      <NavLink to="/friend-form">Form</NavLink>
    </Nav>
  );
};

export default Navigation;
