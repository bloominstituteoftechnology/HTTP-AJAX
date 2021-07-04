import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <section className="Navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends List</NavLink>
            <NavLink to="/add-friend-form">Add Friend</NavLink>
        </section>
    )
}

export default Navigation;