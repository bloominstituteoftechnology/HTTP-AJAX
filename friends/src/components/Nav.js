import React from 'react';

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/friends">
                <button>Friends</button>
            </Link>
            <Link to="/add">
                <button>Add Friend</button>
            </Link>
        </div>
    )
}

export default Nav;