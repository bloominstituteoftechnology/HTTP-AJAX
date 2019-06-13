import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/friends">Friends List</NavLink>
        <NavLink to="/add-friend">Add A Friend</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
