import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const MenuDiv = styled.div`
  width: 650px;
  height: 50px;
  background-color: #222629;
  border: 1px solid #6B6E70;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Selection = styled.div`
  text-decoration: none;
  font-size: 20px;
  color: #FFF;
`;

const Menu = props => {
  return (
    <MenuDiv>
      <NavLink activeStyle={{backgroundColor: '#86C232'}} to='/post'><Selection>New</Selection></NavLink>
      <NavLink activeStyle={{backgroundColor: '#86C232'}} to='/update'><Selection>Update</Selection></NavLink>
    </MenuDiv>
  );
};

export default Menu;
