import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Nav className = 'Nav'>
                <NavItem>
                    <NavLink to='/'> FriendsList </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/form'> New Friends </NavLink>
                </NavItem>
            </Nav>
        </div>  
    );
};

export default Navigation;