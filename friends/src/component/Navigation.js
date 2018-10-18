import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <header className="mainNav">
      <nav>
        <NavLink to="/">
          <i className="fas fa-home fa-3x fa-fw homeIcon" />
        </NavLink>
        <NavLink to="/" className="navTitle">
          <h1>Friends Contact Information</h1>
        </NavLink>
        <NavLink
          to="/form"
          className="navLink"
          onClick={props.changeEditingNav}>
          Add Friend
          <i className="fas fa-plus fa-sm  fa-fw" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
