import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header-container">
      <h1>Welcome to "My Friends" page</h1>
      <Link className="home-button" to="/">
        <div>Home</div>
      </Link>
    </div>
  );
}

export default Header;