import React from "react";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="mainNav">
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/friendform">Add Friend</Link>
      </Nav>
    </div>
  );
};

export default Navigation;
