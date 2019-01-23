import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;`;


const Navigation = (props) => {
  return (
    <NavigationContainer>
      <NavLink exact className="link" to="/"> Home </NavLink>
      <NavLink className="link" to="/post"> Post </NavLink>
    </NavigationContainer>
  )
}

export default Navigation;
