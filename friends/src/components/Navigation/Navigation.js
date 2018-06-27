import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div>
                <Link to='/edit'>Edit</Link>
            </div>
        </div>
    );
}

export default Navigation;