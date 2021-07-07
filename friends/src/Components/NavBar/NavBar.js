import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return ( 
        <header className="navigation-wrapper">
            <NavLink to="/" activeClassName="">Home</NavLink>
            <NavLink to="/friends" activeClassName="">Friends</NavLink>
        </header>
     );
}
 
export default NavBar;