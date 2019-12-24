import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../styles';

const PrimaryHeader = styled.header`
  background-color: #00bcd4;
  color: #fafafa;
  padding: 3rem 0;
  padding-bottom: 2.5rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;

  &:hover {
    border-bottom: 3px solid #fafafa;
  }

  &.active {
    border-bottom: 3px solid #b2ebf2;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const Navbar = () => (
  <PrimaryHeader>
    <Container>
      <Nav>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/friends">Friends</StyledNavLink>
        <StyledNavLink to="/add">Add Friend</StyledNavLink>
      </Nav>
    </Container>
  </PrimaryHeader>
);

export default Navbar;
