import React from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Nav className="appNav">
        <Link to="/" className="addNavLinks">
          Home
        </Link>

        <Link to="/add" className="addNavLinks">
          Add a Friend
        </Link>
      </Nav>
    </div>
  );
};

export default Navigation;
