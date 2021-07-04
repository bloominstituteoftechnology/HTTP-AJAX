import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = props => {
    return (
        <div className="nav-container">
            <NavLink exact to="/" className="nav-link" activeClassName="nav-active">Friend List</NavLink>
            <NavLink to="/addfriend" className="nav-link" activeClassName="nav-active">Add a Friend</NavLink>
        </div>
    );
}

export default Navigation;