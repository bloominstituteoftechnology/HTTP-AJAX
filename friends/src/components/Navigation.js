import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <NavItem>
          <Link to="/">List</Link>
        </NavItem>
        <NavItem>
          <Link to="/add">Add Friend</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
