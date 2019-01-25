import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const MenuDiv = styled.div`
  width: 650px;
  height: 50px;
  background-color: #222629;
  border: 1px solid #6B6E70;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Menu = props => {
  return (
    <MenuDiv>
      <Link to='/post'>New</Link>
      <Link to='/update'>Update</Link>
    </MenuDiv>
  );
};

export default Menu;
