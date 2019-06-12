import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/friends">Friends List</Link>
      </nav>
    </div>
  );
};

export default NavBar;
