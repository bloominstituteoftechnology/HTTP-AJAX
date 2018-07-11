import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="Navigation">
            <Link className="Navigation__Link" to='/'> Friends List </Link>
            <Link className="Navigation__Link" to='/form'> Make Friend </Link> 
        </div>  
    );
};

export default Navigation;