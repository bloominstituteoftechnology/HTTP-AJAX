import React from 'react';
import { Link } from 'react-router-dom';

import "./Navigation.css";

const Navigation = () => {
    return (
        <div className="Navigation">
            <Link className="Navigation__Link" to='/'> FriendsList </Link>
            <Link className="Navigation__Link" to='/form'> New Friends </Link> 
        </div>  
    );
};

export default Navigation;