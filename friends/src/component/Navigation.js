import React from 'react';
import { Link  } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to='/'> FriendsList </Link>
            <Link to='/form'> New Friends </Link>
        </div>  
    );
};

export default Navigation;