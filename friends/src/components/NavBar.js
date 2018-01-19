import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink to="/" className="NavBar__item">
          Home
        </NavLink>

        <NavLink to="/friends" className="NavBar__item">
          View friends
        </NavLink>

        <NavLink to="/add-friend" className="NavBar__item">
          Add friends
        </NavLink>
      </div>
    );
  }
}
