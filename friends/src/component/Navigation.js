import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink to="/form" className="navLink">
          Add Friend
          <i class="fas fa-plus fa-sm  fa-fw" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
