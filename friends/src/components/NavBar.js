import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink to="/">Friends List</NavLink>
        <NavLink to="/add-friend">Add A Friend</NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
