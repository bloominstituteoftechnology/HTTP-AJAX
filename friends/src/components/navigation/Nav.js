import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavWrapper>
      <StyledNavLink exact to="/" activeClassName="activeNavButton">
        Home
      </StyledNavLink>
      <StyledNavLink to="/friends" activeClassName="activeNavButton">
        Friends
      </StyledNavLink>
      <StyledNavLink to="/addfriend" activeClassName="activeNavButton">
        Add Friend
      </StyledNavLink>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  width: 10%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;
