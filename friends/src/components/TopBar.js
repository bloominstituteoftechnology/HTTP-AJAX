import React from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
return (
<div className="navBar">
<Link to="/">home</Link>
<Link to="/add_friend/">+ add friend</Link>
</div>
);
}

export default TopBar;