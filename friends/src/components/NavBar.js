import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

const NavBar = ({ searchTerm, handleSearch }) => {
  return (
    <Menu pointing>
      <NavLink className="item" exact to='/'>
        Home
      </NavLink>
      <NavLink className="item" to='/add'>
        Add Friend
      </NavLink>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input
            name='searchTerm'
            onChange={handleSearch} icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;