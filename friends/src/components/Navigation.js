import React from 'react';
import {NavLink} from 'react-router-dom';

 const Navigation = () => {
    return (
        <div className = 'Navigation'>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/friends'>Friend List</NavLink>
            <NavLink to = '/add-friend'>Add Friend</NavLink>
        </div>
    )
}

 export default Navigation;