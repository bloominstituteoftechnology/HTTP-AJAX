import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavbarToggler, Collapse } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            collapse: false,
        }
    }
    render() {
        return (
            <Navbar light color="deep-orange lighten-1" expand="lg" fixed="top" scrolling>
                <NavbarBrand href="#">
                    <NavLink to="/">Friends</NavLink>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/friends">Friends List</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }
    
}

export default Navigation;